const crushPics = require('./index')
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImlyaV9zaGthX3NAbWFpbC5ydSIsImVtYWlsIjpudWxsLCJwbGFuIjoiZnJlZSIsInRva2VuX2NyZWF0ZWRfYXQiOjE1NzA2MzY3MDAsInF1b3RhIjp7InRvdGFsX2J5dGVzIjoyNTAwMDAwMCwidXNlZF9ieXRlcyI6MH19.umq2aIFraWY973RxFixCXq6HLo3ReHa_77-6l7Xgn9E'
const type = 'week'

// create config
crushPics.configure(token)

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

