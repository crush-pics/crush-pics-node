const crushPics = require('./index')
const type = 'week'
const test = require('./test.json')

// create config
crushPics.configure({api_token: test.token, baseUrl: test.url})

// get report
crushPics.dashboard
  .get({report_type: type})
    .then(res => console.log('app get res:', res ,'\n'))
    .catch(err => console.log('app get err:', err))

// get invoices
crushPics.invoices
  .list()
    .then(res => console.log('app list res:', res ,'\n'))
    .catch(err => console.log('app list err:', err))

// compress img file
crushPics.original_images
.compress({file: './img/minions-3.jpg'})
.then(res => console.log('app compress file res:', res ,'\n'))
.catch(err => console.log('app compress file err:', err))

// compress img link
crushPics.original_images
  .compress(
    {image_url: 'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'})
    .then(res => console.log('app compress link res:', res ,'\n'))
    .catch(err => console.log('app compress link err:', err))
