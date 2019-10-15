const crushPics = require('./index')
const type = 'week'
const test = require('./test.json')

// create config
crushPics.configure({api_token: test.token, baseUrl: test.url})

// get report
crushPics.dashboard
  .get({report_type: type})
    .then(res => console.log('app get res:', res))
    .catch(err => console.log('app get err:', err))

// get invoices
crushPics.invoices
  .list()
    .then(res => console.log('app list res:', res))
    .catch(err => console.log('app list err:', err))

// compress img
crushPics.original_images
  .compress('./img/minions-3.jpg')
    .then(res => console.log('app compress res:', res))
    .catch(err => console.log('app compress err:', err))
