const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController()

const router = Router()

router.use(ensureAuthenticated)

router.get("/", favoritesController.index)
router.post("/", favoritesController.create)
router.delete("/:favoriteID", favoritesController.delete)

module.exports = router