const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const router = Router()

router.use(ensureAuthenticated)

router.get("/", dishesController.index)
router.post("/", dishesController.create)
router.get("/:dishID", dishesController.show)
router.put("/:dishID", dishesController.update)
router.delete("/:dishID", dishesController.delete)

module.exports = router