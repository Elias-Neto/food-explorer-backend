require('dotenv/config')
require("express-async-errors")

const cors = require("cors")
const express = require("express")

const uploadConfig = require('./configs/upload')
const AppError = require("./utils/AppError")
const routes = require("./routes")

const app = express()

// Use Cors
app.use(cors())

// Use Body Parser JSON Middleware
app.use(express.json())

// Routes
app.use(routes)

// Files Visualize Route
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

// Use Error Handler
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error!",
  })
})

module.exports = app
