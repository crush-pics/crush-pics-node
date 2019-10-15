const axios = require('axios')
const config = require('./config/axiosConfig')
const routes = require('./routes/routes')
const formData = require('./utils/formData') 
const crushPics = {}

crushPics.config = {...config}

crushPics.configure = (token) => {
  if (!token) throw new Error('token is required')
  crushPics.config.headers.Authorization = `Bearer ${token}`
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
      let updatedConfig = {...config}
      updatedConfig.method = apiCall.method
      updatedConfig.url = updatedConfig.url + apiCall.path
      updatedConfig.data = param ? JSON.stringify(param) : {}
      
      if (apiCall.method === 'POST') {
        const form = formData('./temp/minions-3.jpg') 
        updatedConfig.data = form          
        updatedConfig.headers['Content-Type'] = form.formHeaders
      }

      return axios(updatedConfig)
        .then(res => res.data)
        .catch(err => err)
    }   
  })
})


module.exports = crushPics