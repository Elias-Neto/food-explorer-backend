const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const OrdersController = require("../controllers/OrdersController")
const ordersController = new OrdersController()

const ordersRouter = Router()

ordersRouter.use(ensureAuthenticated)

ordersRouter.get("/", ordersController.index)
ordersRouter.put("/:orderID", ordersController.update)
ordersRouter.post("/", ordersController.create)

module.exports = ordersRouter