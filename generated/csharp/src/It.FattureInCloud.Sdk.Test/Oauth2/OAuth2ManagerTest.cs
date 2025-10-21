using Xunit;
using System;
using System.Collections.Generic;
using It.FattureInCloud.Sdk.OauthHelper;

namespace It.FattureInCloud.Sdk.Test.OauthHelper
{
    /// <summary>
    ///  Class for testing Oauth
    /// </summary>
    public class OAuth2ManagerTest : IDisposable
    {
        OAuth2AuthorizationCodeManager authCode = new OAuth2AuthorizationCodeManager("CLIENT_ID", "CLIENT_SECRET", "http://localhost:3000/redirect");
        OAuth2DeviceCodeManager devCode = new OAuth2DeviceCodeManager("salento");

        /// <summary>
        /// Test a OAuth2 Auth Code instance
        /// </summary>
        [Fact]
        public void OAuth2AuthorizationCodeManagerInstanceTest()
        {
            Assert.Equal("CLIENT_ID", authCode.ClientId);
            Assert.Equal("CLIENT_SECRET", authCode.ClientSecret);
            Assert.Equal("http://localhost:3000/redirect", authCode.RedirectUri);
        }

        /// <summary>
        /// Test a OAuth2 Dev Code instance
        /// </summary>
        [Fact]
        public void OAuth2DeviceCodeManagerInstanceTest()
        {
            Assert.Equal("salento", devCode.ClientId);
        }

        /// <summary>
        /// Test a OAuth2AuthorizationCodeParams instance
        /// </summary>
        [Fact]
        public void OAuth2AuthorizationCodeParamsTest()
        {
            var parameters = new OAuth2AuthorizationCodeParams("EXAMPLE_CODE", "EXAMPLE_STATE");
            Assert.Equal("EXAMPLE_CODE", parameters.AuthorizationCode);
            Assert.Equal("EXAMPLE_STATE", parameters.State);
        }

        /// <summary>
        /// Test a OAuth2DeviceCodeResponse instance
        /// </summary>
        [Fact]
        public void OAuth2DeviceCodeResponseTest()
        {
            var scopes = new Dictionary<string, string>();
            scopes.Add("situation", "r");
            scopes.Add("settings", "a");

            var parameters = new OAuth2DeviceCodeResponse("bogota", "cartagena", scopes, "https://fattureincloud.it/connetti", 60, 86400);
            Assert.Equal("bogota", parameters.DeviceCode);
            Assert.Equal("cartagena", parameters.UserCode);
            Assert.Equal(scopes, parameters.Scope);
            Assert.Equal(60, parameters.Interval);
            Assert.Equal(86400, parameters.ExpiresIn);
        }

        /// <summary>
        /// Test a OAuth2TokenResponse instance
        /// </summary>
        [Fact]
        public void OAuth2TokenResponseTest()
        {
            var parameters = new OAuth2TokenResponse("bearer", "EXAMPLE_ACCESS_TOKEN", "EXAMPLE_REFRESH_TOKEN", 86400);
            Assert.Equal("bearer", parameters.TokenType);
            Assert.Equal("EXAMPLE_ACCESS_TOKEN", parameters.AccessToken);
            Assert.Equal("EXAMPLE_REFRESH_TOKEN", parameters.RefreshToken);
            Assert.Equal(86400, parameters.ExpiresIn);
        }

        /// <summary>
        /// Test a GetScopeStr instance
        /// </summary>
        [Fact]
        public void GetScopeStringTest()
        {
            var scopes = new List<Scope> {
                Scope.ENTITY_CLIENTS_READ,
                Scope.ARCHIVE_READ
            };

            var scopesStr = OAuth2AuthorizationCodeManager.GetScopeString(scopes);
            Assert.Equal("entity.clients:r archive:r", scopesStr);
        }

        /// <summary>
        /// Test a GetAuthorizationUrl instance
        /// </summary>
        [Fact]
        public void GetAuthorizationUrlTest()
        {
            var scopes = new List<Scope> {
                Scope.SETTINGS_ALL,
                Scope.ISSUED_DOCUMENTS_INVOICES_READ
            };

            var url = authCode.GetAuthorizationUrl(scopes, "EXAMPLE_STATE");
            Assert.Equal("https://api-v2.fattureincloud.it/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=http%3a%2f%2flocalhost%3a3000%2fredirect&scope=settings%3aa+issued_documents.invoices%3ar&state=EXAMPLE_STATE", url);
        }

        /// <summary>
        /// Test a GetParamsFromUrl instance
        /// </summary>
        [Fact]
        public void GetParamsFromUrlTest()
        {
            var url = "http://localhost:3000/redirect?state=EXAMPLE_STATE&code=c%2FEXAMPLE_CODE";
            var parameters = authCode.GetParamsFromUrl(url);

            Assert.Equal("c/EXAMPLE_CODE", parameters.AuthorizationCode);
            Assert.Equal("EXAMPLE_STATE", parameters.State);
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

    }

}