const crushPics = require('./index')
const type = 'week'
const test = require('./test.json')

// create config
crushPics.configure({api_token: test.token, baseUrl: test.url})

// dashboard.get
crushPics.dashboard
  .get({report_type: type})
    .then(res => console.log('app get res:', res ,'\n'))
    .catch(err => console.log('app get err:', err))

// invoices.list
crushPics.invoices
  .list()
    .then(res => console.log('app list res:', res ,'\n'))
    .catch(err => console.log('app list err:', err))

// original_images.create (img file)
crushPics.original_images
  .create({
    file: './img/minions-3.jpg'})
    .then(res => console.log('app compress file res:', res ,'\n'))
    .catch(err => console.log('app compress file err:', err))

// original_images.create (img link)
crushPics.original_images
  .create({
    image_url: 'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'})
    .then(res => console.log('app compress file res:', res ,'\n'))
    .catch(err => console.log('app compress file err:', err))

// original_images.compress (img file)
crushPics.original_images
  .compress({
    file: './img/minions-3.jpg',
    compression_level: 75,
    compression_type: "lossless",
  })
  .then(res => console.log('app compress file res:', res ,'\n'))
  .catch(err => console.log('app compress file err:', err))

// original_images.compress img link
crushPics.original_images
  .compress({
    image_url: 'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    compression_type: 'lossy',
    compression_level: 65
    })
    .then(res => console.log('app original_images.compress res:', res ,'\n'))
    .catch(err => console.log('app original_images.compress err:', err))
    
// original_images.get:id 
crushPics.original_images
  .get(6237)
    .then(res => console.log('app original_images.list res:', res ,'\n'))
    .catch(err => console.log('app original_images.list err:', err))

// original_images.list 
crushPics.original_images
  .list()
    .then(res => console.log('app original_images.list res:', res ,'\n'))
    .catch(err => console.log('app original_images.list err:', err))

// callback_urls.list
crushPics.original_images
  .list()
    .then(res => console.log('app callback_urls.list res:', res ,'\n'))
    .catch(err => console.log('app callback_urls.list err:', err))

// // callback_urls.create
// crushPics.callback_urls
//   .create({ "url": "https://test.com/webhook5" })
//     .then(res => console.log('app callback_urls.create res:', res ,'\n'))
//     .catch(err => console.log('app callback_urls.create err:', err))

// // callback_urls.delete
// crushPics.callback_urls
//   .delete(49)
//     .then(res => console.log('app callback_urls.delete res:', res ,'\n'))
//     .catch(err => console.log('app callback_urls.delete err:', err))

    
// account.get
crushPics.account
  .get()
    .then(res => console.log('app account get res:', res ,'\n'))
    .catch(err => console.log('app account get err:', err))

// account.update
crushPics.account
  .update({compression_level_jpg: 70})
    .then(res => console.log('app account update res:', res ,'\n'))
    .catch(err => console.log('app account update err:', err))

// // exports.create
// crushPics.export
//   .create()
//     .then(res => console.log('app export.create res:', res ,'\n'))
//     .catch(err => console.log('app export.create err:', err))

// exports.get
crushPics.export
  .get()
    .then(res => console.log('app export.get res:', res ,'\n'))
    .catch(err => console.log('app export.get err:', err))



