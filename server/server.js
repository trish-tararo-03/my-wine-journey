const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const questions = require('./routes/questions')
const answers = require('./routes/answers')

server.use('/api/v1/questions', questions)
server.use('/api/v1/answers', answers)
server.use('/v1/*', (req, res) => res.sendStatus(404))

//for any react routes, send to the index.html and the client handle the routing
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
