const multer = require('multer')
const { Router } = require("express")

const uploadConfig = require('../configs/upload')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const DishesPhotoController = require("../controllers/DishesPhotoController")
const dishesPhotoController = new DishesPhotoController()

const router = Router()

const upload = multer(uploadConfig.MULTER)

router.use(ensureAuthenticated)

router.get("/", dishesController.index)
router.post("/", dishesController.create)
router.get("/:dishID", dishesController.show)
router.put("/:dishID", dishesController.update)
router.delete("/:dishID", dishesController.delete)
router.patch(
  '/:dishID/photo',
  upload.single('photo'),
  dishesPhotoController.update
);

module.exports = router