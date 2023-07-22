const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const router = Router()

router.use(ensureAuthenticated)

router.get("/", dishesController.index)
router.post("/", dishesController.create)
router.get("/:dishID", dishesController.show)

module.exports = router