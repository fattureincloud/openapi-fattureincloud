import yaml
import requests
import base64
import os


base_url = 'https://dash.readme.com/api/v1/'
version_url = '{}/version'.format(base_url)
api_key = 'v8f6zlqQ6wIUxDzULdsHoTZrBXTeLUcK'


def main():
    curr_version = retrieve_version_from_openapi()
    #print('Required version: {}'.format(curr_version))

    if curr_version:
        #print('Retrieving versions...')
        versions_list =  get_versions()
        #print('Done.')

        spec_id = None
        last_version = None

        for elem in versions_list.json():
            v = elem['version']
            if v == curr_version:
                spec_id = elem['_id']
            if not last_version or last_version < v:
                last_version = v
        
        if not spec_id:
            #print('Required version not found. Creating...')
            #print('Last version: {}'.format(last_version))
            res = create_version(curr_version, last_version).json()
            #print(res)
            #print('Created.')
            spec_id = res['_id']

        #print('Spec ID: {}'.format(spec_id))
        print('oas_key={}:{}'.format(api_key, spec_id))
    else:
        raise Exception('Version not found!!!')


def retrieve_version_from_openapi():
    version = None
    with open('./openapi.yaml', 'r') as stream:
        data_loaded = yaml.safe_load(stream)
        version = data_loaded['info']['version']
        version = version.replace('v', '')
    return version


def get_versions():
    api_key_b64 = base64.b64encode(api_key.encode('utf-8')).decode('utf-8')

    headers = {
        'Accept': 'application/json',
        'Authorization': 'Basic {}'.format(api_key_b64)
    }

    response = requests.request('GET', version_url, headers=headers)
    return response


def create_version(version, last_version):
    api_key_b64 = base64.b64encode(api_key.encode('utf-8')).decode('utf-8')

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic {}'.format(api_key_b64)
    }

    payload = {
        'version': version,
        'from': last_version,
        'is_stable': False,
        'is_hidden': True
    }
    #print(payload)

    response = requests.request('POST', version_url, headers=headers, json=payload)
    return response


main()