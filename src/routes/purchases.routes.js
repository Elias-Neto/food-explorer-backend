const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const PurchasesController = require("../controllers/PurchasesController")
const purchasesController = new PurchasesController()

const router = Router()

router.use(ensureAuthenticated)

router.post("/", purchasesController.create)

module.exports = router