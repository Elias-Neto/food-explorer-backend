const { Router } = require("express")

const usersRouter = require("./users.routes")
const ordersRouter = require("./orders.routes")
const dishesRouter = require("./dishes.routes")
const sessionsRouter = require("./sessions.routes")

const router = Router()

router.use("/users", usersRouter)
router.use("/orders", ordersRouter)
router.use("/dishes", dishesRouter)
router.use("/sessions", sessionsRouter)

module.exports = router
