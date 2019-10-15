const os = require('os')
const crushPics = require('./crushpicsConfig')
const url = 'https://api.crush.pics/v1'

const config = {
  url: url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': `Crushpics-NodeJs-Client ${crushPics.clientVersion}`,
    'Lang-Version': process.version,
    'OS-Version': `${os.platform()} ${os.arch()} ${os.release()}`
  }
}

module.exports = config