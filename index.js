const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'js')
    .get('index.html', (req, res) => res.render('/home'))
    .get('map.html', (req, res) => res.render('/route'))


    .listen(PORT, () => console.log(`Listening on ${PORT}`))