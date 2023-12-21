// Terminal pe jab npm run start krega to index.js file chalegi
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/codeforces', (req, res) => {
    res.send('Ruk jaa chhote, mai aa rha hu!')
})

app.get('/login' , (req, res) => {
    res.send('<h1>Login at Chai aur Code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

