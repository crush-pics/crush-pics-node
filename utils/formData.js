const FormData = require('form-data')
const fs = require('fs')

const formData = (file) => {
  const form = new FormData()
  form.append( 'file', fs.createReadStream(file))
  form.formHeaders = form.getHeaders()['content-type']
  return form
}

module.exports = formData