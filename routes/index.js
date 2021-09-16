const express = require("express");
const router = express.Router();
const controller = require("../controller");
module.exports = router;

router.post("/create", controller.create);
router.get("/read", controller.read);
router.post("/update", controller.update);
router.post("/edit", controller.edit);
router.post("/delcard", controller.delcard);
router.get("/showcard", controller.showcard);
