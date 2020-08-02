const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

module.exports = (server) => {
  server.use(helmet())
  server.morgan('dev')
  server.use(express.json())
  server.user(express.urlencoded({ extended: false }))
  server.use(cors())
}
