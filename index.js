const axios = require('axios')
const config = require('./config/config')
const routes = require('./config/routes')
const formData = require('./utils/formData')
const crushPics = {}

crushPics.config = {...config}

crushPics.configure = (configuration) => {
  Object.keys(configuration).forEach(property => {
    switch (property) {
      case 'api_token':
        crushPics.config.headers.Authorization = `Bearer ${configuration[property]}`
        break;
      case 'baseUrl':
        crushPics.config.url = configuration[property]
        break;
    default:
      throw new Error('Unknown configuration')
    }
  })

  if (!crushPics.config.headers.Authorization) throw new Error('token is required')
}

Object.keys(routes).forEach(el => {
  crushPics[el] = {}
  routes[el].forEach(key => {
    const apiCall = {
      'methodName': key[0],
      'method': key[1],
      'path': key[2]
    }

    crushPics[el][apiCall.methodName] = (param) => {
      let updatedConfig = {...crushPics.config}
      updatedConfig.method = apiCall.method
      updatedConfig.url = updatedConfig.url + apiCall.path

      if (apiCall.method === 'POST' && 
          apiCall.path === '/compress' && 
          param.file) {
        const form = formData(param.file)
        updatedConfig.data = form
        updatedConfig.headers['Content-Type'] = form.formHeaders
      } else if (param) {
        updatedConfig.data = {...param}
      }

      return axios(updatedConfig)
        .then(res => res.data)
        .catch(err => err)
    }
  })
})

module.exports = crushPics
