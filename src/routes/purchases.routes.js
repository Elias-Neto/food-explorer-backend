const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const PurchasesController = require("../controllers/PurchasesController")
const purchasesController = new PurchasesController()

const router = Router()

router.use(ensureAuthenticated)

router.get("/", purchasesController.index)
router.post("/", purchasesController.create)
router.put("/:purchaseID", purchasesController.update)

module.exports = router