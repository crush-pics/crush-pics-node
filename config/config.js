const os = require('os')
const clientVersion = 'v0.2.1'
const baseUrl = 'https://api.crush.pics/v1'

const config = {
  url: baseUrl,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': `Crushpics-NodeJs-Client ${clientVersion}`,
    'Lang-Version': process.version,
    'OS-Version': `${os.platform()} ${os.arch()} ${os.release()}`
  }
}

module.exports = config
