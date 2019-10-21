const clientVersion = 'v0.2.1'
const baseUrl = 'https://apistaging.crush.pics/v1'

if (!window.navigator) throw new Error('cannot access to global object window in client side')

const clientConfig = {
  url: baseUrl,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Client-Version': clientVersion,
    'Lang-Version': window.navigator.language,
    'OS-Version': window.navigator.platform
  }
}

module.exports = clientConfig