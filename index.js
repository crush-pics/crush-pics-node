const axios = require('axios')
let config = {}
const routes = require('./config/routes')
const formData = require('./utils/formData')
const validateIdParam = require('./utils/validateIdParam')
const pick = require('./utils/pick')
const crushPics = {}

if (typeof window === 'undefined') {
  config = require('./config/serverConfig')
} else {
  config = require('./config/clientConfig')
}

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
      // post file from server
      if (
        typeof window === 'undefined' &&
        apiCall.method === 'POST' && 
        (apiCall.path === '/original_images' || apiCall.path === '/compress') && 
        param.file) {
        const form = formData(param)
        updatedConfig.data = form
        updatedConfig.headers['Content-Type'] = form.formHeaders
      }
      // // post file from client
      else if (
        typeof window !== 'undefined' &&
        apiCall.method === 'POST' && 
        (apiCall.path === '/original_images' || apiCall.path === '/compress') && 
        param.file) {
        const formData = new FormData()
        formData.append('file', param.file, param.file.name)
        formData.append('origin', 'api')
        updatedConfig.data = formData
      } 
      else if (param) {
        updatedConfig.headers['Content-Type'] = 'application/json'
        updatedConfig.data = {...param}
      }
      
      if (apiCall.path.includes(":id") && validateIdParam(param)) {
        updatedConfig.url = updatedConfig.url.replace(":id", param)
        delete updatedConfig.data
      }

      // // test
      // axios.interceptors.request.use(req => {
      //   console.log('start request', req, 'request END \n')
      //   return req
      // })
      // // test END
      
      return axios(updatedConfig)
        .then(res => pick(res, ['status', 'data']))
        .catch(err => err)
    }
  })
})

module.exports = crushPics
