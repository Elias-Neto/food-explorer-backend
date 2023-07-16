const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const OrdersController = require("../controllers/OrdersController")
const ordersController = new OrdersController()

const ordersRouter = Router()

ordersRouter.use(ensureAuthenticated)

ordersRouter.get("/", ordersController.index)
ordersRouter.post("/", ordersController.create)
ordersRouter.put("/:orderID", ordersController.update)
ordersRouter.delete("/:orderID", ordersController.delete)

module.exports = ordersRouter