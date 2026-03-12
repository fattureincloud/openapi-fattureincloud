#!/bin/bash

# Script per generare SDK localmente

# Controllo della variabile del linguaggio
if [ -z "$1" ]; then
    echo "Errore: Specificare il linguaggio come primo parametro"
    echo "Uso: $0 <linguaggio>"
    echo "Linguaggi supportati: php, java, go, python, ruby, javascript, typescript"
    exit 1
fi

LANGUAGE=$1

# Validazione linguaggio supportato
case $LANGUAGE in
    php|java|go|python|ruby|javascript|typescript)
        ;;
    *)
        echo "Errore: Linguaggio '$LANGUAGE' non supportato"
        echo "Linguaggi supportati: php, java, go, python, ruby, javascript, typescript"
        exit 1
        ;;
esac

# Creazione cartella generated per il linguaggio specificato
GENERATED_DIR="./generated/$LANGUAGE"
if [ "$LANGUAGE" = "typescript" ]; then
GENERATED_DIR="./generated/typescript-axios"
fi
mkdir -p "$GENERATED_DIR"

# Checkout della repo nella cartella del linguaggio
cd "$GENERATED_DIR" || exit 1

# Clone della repository specifica per linguaggio
if [ "$LANGUAGE" = "php" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-php-sdk/ .
    cd ../..
    mkdir -p ./backup/php/lib/Filter
    mkdir -p ./backup/php/lib/OAuth2
    mv ./generated/php/lib/Filter ./backup/php/lib/
    mv ./generated/php/lib/OAuth2 ./backup/php/lib/
    rm -rf ./generated/php/lib
    rm -rf ./generated/php/docs
    GIT_REPO_ID=fattureincloud-php-sdk
    GIT_USER_ID=fattureincloud
    PACKAGE_NAME="\"FattureInCloud PHP SDK\""
    INVOKER_PACKAGE="FattureInCloud"
    AUTHOR_NAME="Fatture in Cloud API Team"
    URL="\"https://www.fattureincloud.it\""
    COMPOSER_PACKAGE_NAME="\"fattureincloud/fattureincloud-php-sdk\""
    LICENSE="MIT"
    DEVELOPER_ORGANIZATION="\"Fatture in Cloud API Team\""
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$INVOKER_PACKAGE/0.0.0/PHP-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g php -o ./generated/php/ -t ./templates/openapi-generator/php --package-name=${PACKAGE_NAME} --invoker-package=${INVOKER_PACKAGE} --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=composerPackageName=${COMPOSER_PACKAGE_NAME},artifactUrl=${URL},licenseName=${LICENSE},developerOrganization=${DEVELOPER_ORGANIZATION},developerOrganizationUrl=${URL}

    node ./scripts/postprocess-php.js clean './generated/php/lib/' './generated/php/test/'

    mv ./backup/php/lib/Filter ./generated/php/lib/Filter
    mv ./backup/php/lib/OAuth2 ./generated/php/lib/OAuth2

    node ./scripts/generate-scopes.js php

    cd ./generated/php/
    composer install
    ./vendor/bin/php-cs-fixer fix ./  --allow-risky=yes

    cd ../..
    rm -rf ./backup
elif [ "$LANGUAGE" = "go" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-go-sdk/ .
    cd ../..
    mkdir -p ./backup/go/filter
    mkdir -p ./backup/go/oauth2
    mv ./generated/go/filter ./backup/go/
    mv ./generated/go/oauth2 ./backup/go/
    rm -rf ./generated/go/api
    rm -rf ./generated/go/model
    rm -rf ./generated/go/docs
    GIT_REPO_ID="fattureincloud-go-sdk"
    GIT_USER_ID="fattureincloud"
    PACKAGE_NAME="fattureincloud"
    APP_NAME="FattureInCloud"
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$APP_NAME/0.0.0/Go-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g go -o ./generated/go/ -t ./templates/openapi-generator/go --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=packageVersion=${SDK_VERSION},packageName=${PACKAGE_NAME},goImportAlias=${PACKAGE_NAME},hasHttpBearerMethods=true

    node ./scripts/postprocess-go.js

    # Fix SDK structure (come nel workflow GitHub)
    cd ./generated/go
    rm -rf model
    mkdir model
    mv model*.go ./model
    mv utils.go ./model
    cd model
    sed -i 's/package fattureincloud/package model/g' *
    sed -i 's/Statuss/Statuses/g' *
    cd ..
    rm -rf api
    mkdir api
    mv api*.go ./api
    mv client.go ./api
    mv configuration.go ./api
    cd api
    sed -i 's/package fattureincloud/package api/g' *
    cd ..

    # Restore custom files
    cd ../..
    mv ./backup/go/filter ./generated/go/
    mv ./backup/go/oauth2 ./generated/go/

    node ./scripts/generate-scopes.js go

    rm -rf ./backup
elif [ "$LANGUAGE" = "java" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-java-sdk/ .
    cd ../..
    mkdir -p ./backup/java/src/main/java/it/fattureincloud/sdk/
    mv ./generated/java/src/main/java/it/fattureincloud/sdk/filter ./backup/java/src/main/java/it/fattureincloud/sdk/filter

    mkdir -p ./backup/java/src/main/java/it/fattureincloud/sdk/auth/
    mv -v ./generated/java/src/main/java/it/fattureincloud/sdk/auth/* ./backup/java/src/main/java/it/fattureincloud/sdk/auth

    rm -rf ./generated/java/src/main
    rm -rf ./generated/java/docs

    GIT_REPO_ID="fattureincloud-java-sdk"
    GIT_USER_ID="fattureincloud"
    APP_NAME="FattureInCloud" 
    GROUP_ID="it.fattureincloud"
    ARTIFACT_DESCRIPTION="\"Java SDK for the Fatture in Cloud API\""
    DEVELOPER_EMAIL="info@fattureincloud.it"
    DEVELOPER_NAME="\"Fatture In Cloud API Team\""
    DEVELOPER_ORGANIZATION="\"Fatture in Cloud\""
    DEVELOPER_ORGANIZATION_URL="https://www.fattureincloud.it"
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    BASE_PACKAGE="$GROUP_ID.sdk"
    ADDITIONAL_PROPERTIES="artifactId=$GIT_REPO_ID"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,artifactVersion=$SDK_VERSION"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,artifactDescription=$ARTIFACT_DESCRIPTION"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,artifactUrl=https://github.com/$GIT_USER_ID/$GIT_REPO_ID"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,groupId=$GROUP_ID"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,invokerPackage=$BASE_PACKAGE"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,apiPackage=$BASE_PACKAGE.api"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,modelPackage=$BASE_PACKAGE.model"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,scmConnection=scm:git:git@github.com:$GIT_USER_ID/$GIT_REPO_ID.git"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,scmDeveloperConnection=scm:git:git@github.com:$GIT_USER_ID/$GIT_REPO_ID.git"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,scmUrl=https://github.com/$GIT_USER_ID/$GIT_REPO_ID.git"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,licenseName=MIT"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,licenseUrl=https://github.com/$GIT_USER_ID/$GIT_REPO_ID/blob/master/LICENSE"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,developerEmail=$DEVELOPER_EMAIL"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,developerName=$DEVELOPER_NAME"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,developerOrganization=$DEVELOPER_ORGANIZATION"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,developerOrganizationUrl=$DEVELOPER_ORGANIZATION_URL"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,dateLibrary=java8"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,serializableModel=true"
    ADDITIONAL_PROPERTIES="$ADDITIONAL_PROPERTIES,serializationLibrary=jackson"

    USER_AGENT="$APP_NAME/$SDK_VERSION/Java-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g java -o ./generated/java/ -t ./templates/openapi-generator/java --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=$ADDITIONAL_PROPERTIES

    node ./scripts/postprocess-java.js

    # Restore custom files
    mv ./backup/java/src/main/java/it/fattureincloud/sdk/filter ./generated/java/src/main/java/it/fattureincloud/sdk/filter
    mv -v ./backup/java/src/main/java/it/fattureincloud/sdk/auth/* ./generated/java/src/main/java/it/fattureincloud/sdk/auth

    node ./scripts/generate-scopes.js java

    rm -rf ./backup
elif [ "$LANGUAGE" = "python" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-python-sdk/ .
    cd ../..
    mkdir -p ./backup/python/fattureincloud_python_sdk/filter
    mkdir -p ./backup/python/fattureincloud_python_sdk/oauth2
    mv ./generated/python/fattureincloud_python_sdk/filter ./backup/python/fattureincloud_python_sdk/
    mv ./generated/python/fattureincloud_python_sdk/oauth2 ./backup/python/fattureincloud_python_sdk/
    rm -rf ./generated/python/fattureincloud_python_sdk
    rm -rf ./generated/python/docs
    
    GIT_REPO_ID="fattureincloud-python-sdk"
    GIT_USER_ID="fattureincloud"
    PACKAGE_NAME="fattureincloud_python_sdk"
    PACKAGE_URL="https://github.com/fattureincloud/fattureincloud-python-sdk"
    PROJECT_NAME="fattureincloud-python-sdk"
    INFO_NAME="\"Fatture in Cloud API Team\""
    APP_NAME="FattureInCloud"
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$APP_NAME/0.0.0/Python-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g python -o ./generated/python/ -t ./templates/openapi-generator/python --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=packageVersion=${SDK_VERSION},packageName=${PACKAGE_NAME},packageUrl=${PACKAGE_URL},projectName=${PROJECT_NAME},infoName=${INFO_NAME}

    node ./scripts/postprocess-python.js

    # Restore custom files
    mv ./backup/python/fattureincloud_python_sdk/filter ./generated/python/fattureincloud_python_sdk/
    mv ./backup/python/fattureincloud_python_sdk/oauth2 ./generated/python/fattureincloud_python_sdk/

    node ./scripts/generate-scopes.js python

    # Format Python code (se black è installato)
    if command -v black &> /dev/null; then
        black ./generated/python/
    else
        echo "Warning: black non è installato. Installa con: pip install black"
    fi

    rm -rf ./backup
elif [ "$LANGUAGE" = "ruby" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-ruby-sdk/ .
    cd ../..
    mkdir -p ./backup/ruby/lib/fattureincloud_ruby_sdk/filter
    mkdir -p ./backup/ruby/lib/fattureincloud_ruby_sdk/oauth2
    mv ./generated/ruby/lib/fattureincloud_ruby_sdk/filter ./backup/ruby/lib/fattureincloud_ruby_sdk/
    mv ./generated/ruby/lib/fattureincloud_ruby_sdk/oauth2 ./backup/ruby/lib/fattureincloud_ruby_sdk/
    rm -rf ./generated/ruby/lib
    rm -rf ./generated/ruby/docs
    
    GIT_REPO_ID="fattureincloud-ruby-sdk"
    GIT_USER_ID="fattureincloud"
    GEM_AUTHOR="\"Fatture in Cloud API Team\""
    GEM_AUTHOR_EMAIL="info@fattureincloud.it"
    GEM_DESCRIPTION="\"Ruby SDK for the Fatture in Cloud API\""
    GEM_HOMEPAGE="https://github.com/fattureincloud/fattureincloud-ruby-sdk"
    GEM_LICENSE="MIT"
    GEM_NAME="fattureincloud_ruby_sdk"
    MODULE_NAME="FattureInCloud_Ruby_Sdk"
    APP_NAME="FattureInCloud"
    MINIMUM_VERSION="2.4"
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$APP_NAME/0.0.0/Ruby-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g ruby -o ./generated/ruby/ -t ./templates/openapi-generator/ruby --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=gemVersion=${SDK_VERSION},gemAuthor=${GEM_AUTHOR},gemAuthorEmail=${GEM_AUTHOR_EMAIL},gemDescription=${GEM_DESCRIPTION},gemSummary=${GEM_DESCRIPTION},gemHomepage=${GEM_HOMEPAGE},gemLicense=${GEM_LICENSE},gemName=${GEM_NAME},moduleName=${MODULE_NAME},gemRequiredRubyVersion=${MINIMUM_VERSION}

    # Restore custom files
    mv ./backup/ruby/lib/fattureincloud_ruby_sdk/filter ./generated/ruby/lib/fattureincloud_ruby_sdk/
    mv ./backup/ruby/lib/fattureincloud_ruby_sdk/oauth2 ./generated/ruby/lib/fattureincloud_ruby_sdk/

    node ./scripts/generate-scopes.js ruby

    # Lint Ruby code (se rubocop è installato)
    cd ./generated/ruby
    if command -v bundle &> /dev/null; then
        if [ -f "Gemfile" ]; then
            bundle install
            bundle exec rubocop -a
        else
            echo "Warning: Gemfile non trovato"
        fi
    else
        echo "Warning: bundler non è installato. Installa con: gem install bundler"
    fi
    cd ../..

    rm -rf ./backup
elif [ "$LANGUAGE" = "javascript" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-js-sdk/ .
    cd ../..
    mkdir -p ./backup/javascript/src/filter
    mkdir -p ./backup/javascript/src/oauth2
    mv ./generated/javascript/src/filter ./backup/javascript/src/
    mv ./generated/javascript/src/oauth2 ./backup/javascript/src/
    rm -rf ./generated/javascript/src
    rm -rf ./generated/javascript/docs
    
    GIT_REPO_ID="fattureincloud-js-sdk"
    GIT_USER_ID="fattureincloud"
    PACKAGE_NAME="\"FattureInCloud JavaScript SDK\""
    APP_NAME="FattureInCloud"
    PROJECT_NAME="@fattureincloud/fattureincloud-js-sdk"
    MODULE_NAME="fattureInCloudSdk"
    PROJECT_DESCRIPTION="\"JavaScript SDK for the Fatture in Cloud API\""
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$APP_NAME/0.0.0/JavaScript-SDK"

    openapi-generator-cli generate -i ./openapi.yaml -g javascript -o ./generated/javascript/ -t ./templates/openapi-generator/javascript --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT} --additional-properties=projectVersion=$SDK_VERSION,projectName=$PROJECT_NAME,projectDescription=$PROJECT_DESCRIPTION,moduleName=$MODULE_NAME,usePromises=true

    # Restore custom files
    mv ./backup/javascript/src/filter ./generated/javascript/src/
    mv ./backup/javascript/src/oauth2 ./generated/javascript/src/

    node ./scripts/generate-scopes.js javascript

    # Lint JavaScript code (se npm/eslint sono installati)
    cd ./generated/javascript
    if command -v npm &> /dev/null; then
        if [ -f "package.json" ]; then
            npm install
            npx eslint --fix ./ || echo "Warning: ESLint ha riscontrato errori"
        else
            echo "Warning: package.json non trovato"
        fi
    else
        echo "Warning: npm non è installato"
    fi
    cd ../..

    rm -rf ./backup
elif [ "$LANGUAGE" = "typescript" ]; then
    git clone https://github.com/fattureincloud/fattureincloud-ts-sdk/ .
    cd ../..
    mkdir -p ./backup/typescript-axios/src/filter
    mkdir -p ./backup/typescript-axios/src/oauth2
    mv ./generated/typescript-axios/src/filter ./backup/typescript-axios/src/
    mv ./generated/typescript-axios/src/oauth2 ./backup/typescript-axios/src/
    rm -rf ./generated/typescript-axios/src
    rm -rf ./generated/typescript-axios/docs
    rm -rf ./generated/typescript-axios-docs

    mkdir -p ./generated/typescript-axios-docs
    
    GIT_REPO_ID="fattureincloud-ts-sdk"
    GIT_USER_ID="fattureincloud"
    PACKAGE_NAME="@fattureincloud/fattureincloud-ts-sdk"
    APP_NAME="FattureInCloud"
    SDK_VERSION="0.0.0"
    RELEASE_NOTE="\"bumping version to $SDK_VERSION\""

    USER_AGENT="$APP_NAME/0.0.0/TypeScript-SDK"

    # Generate TypeScript SDK
    openapi-generator-cli generate -i ./openapi.yaml -g typescript-axios -o generated/typescript-axios/ -t ./templates/openapi-generator/typescript-axios --additional-properties=npmName=${PACKAGE_NAME},npmVersion=${SDK_VERSION},supportsES6=true,withNodeImports=true,withSeparateModelsAndApi=true,apiPackage=src/api,modelPackage=src/models,withInterfaces=true --git-repo-id=${GIT_REPO_ID} --git-user-id=${GIT_USER_ID} --release-note=${RELEASE_NOTE} --http-user-agent=${USER_AGENT}

    # Generate docs
    openapi-generator-cli generate -i ./openapi.yaml -g javascript -o generated/typescript-axios-docs/ -t ./templates/openapi-generator/typescript-axios-docs

    # Move docs to the right folder
    rm -rf ./generated/typescript-axios/docs
    mv ./generated/typescript-axios-docs/docs ./generated/typescript-axios

    # Restore custom files
    mv ./backup/typescript-axios/src/filter ./generated/typescript-axios/src/
    mv ./backup/typescript-axios/src/oauth2 ./generated/typescript-axios/src/

    node ./scripts/generate-scopes.js typescript-axios

    # Lint TypeScript code (se npm/eslint sono installati)
    cd ./generated/typescript-axios
    if command -v npm &> /dev/null; then
        if [ -f "package.json" ]; then
            npm install
            npx eslint --fix ./ || echo "Warning: ESLint ha riscontrato errori"
        else
            echo "Warning: package.json non trovato"
        fi
    else
        echo "Warning: npm non è installato"
    fi
    cd ../..

    rm -rf ./backup
    rm -rf ./generated/typescript-axios-docs
fi
