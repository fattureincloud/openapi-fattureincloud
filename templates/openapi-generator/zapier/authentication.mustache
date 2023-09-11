const UserApi = require("./apis/UserApi");

const testAuth = async (z, bundle) => {
  const userInfo = await UserApi.getUserInfo.operation.perform(z, bundle)
  return userInfo.data;
};
const scopes = [
    "situation:r",
    "entity.clients:a",
    "entity.suppliers:a",
    "products:a",
    "issued_documents.quotes:a",
    "issued_documents.proformas:a",
    "issued_documents.invoices:a",
    "issued_documents.receipts:a",
    "issued_documents.delivery_notes:a",
    "issued_documents.credit_notes:a",
    "issued_documents.orders:a",
    "issued_documents.work_reports:a",
    "issued_documents.supplier_orders:a",
    "issued_documents.self_invoices:a",
    "received_documents:a",
    "receipts:a",
    "calendar:a",
    "archive:a",
    "taxes:a",
    "stock:a",
    "emails:r",
    "cashbook:a",
    "settings:a",
]

module.exports = {
  type: 'oauth2',
  test: testAuth,
  connectionLabel: '- {{name}}',
  oauth2Config: {
    authorizeUrl: {
      url: 'https://api-v2.fattureincloud.it/oauth/authorize',
      params: {
        client_id: '{{process.env.CLIENT_ID}}',
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code',
      },
    },
    getAccessToken: {
      body: {
        code: '{{bundle.inputData.code}}',
        client_id: '{{process.env.CLIENT_ID}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
        grant_type: 'authorization_code',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      method: 'POST',
      url: 'https://api-v2.fattureincloud.it/oauth/token',
    },
    refreshAccessToken: {
      body: {
        refresh_token: '{{bundle.authData.refresh_token}}',
        grant_type: 'refresh_token',
        client_id: '{{process.env.CLIENT_ID}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      method: 'POST',
      url: 'https://api-v2.fattureincloud.it/oauth/token',
    },
    scope: scopes.join(' '),
    autoRefresh: true,
  },
};