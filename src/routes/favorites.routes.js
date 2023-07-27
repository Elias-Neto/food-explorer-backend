const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController()

const router = Router()

router.use(ensureAuthenticated)

router.post("/", favoritesController.create)

module.exports = router