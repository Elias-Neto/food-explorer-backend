require("express-async-errors")
const express = require("express")

const AppError = require("./utils/AppError")
const routes = require("./routes")

const app = express()

// Use Body Parser JSON Middleware
app.use(express.json())

// Routes
app.use(routes)

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
