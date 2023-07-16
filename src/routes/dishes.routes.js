const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const router = Router()

router.use(ensureAuthenticated)

router.post("/", dishesController.create)

module.exports = router