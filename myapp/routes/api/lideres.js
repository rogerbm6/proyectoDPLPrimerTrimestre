let express = require('express');
let router = express.Router();
let lideresControllerAPI=require('../../controllers/api/lideresControllerAPI');


router.get("/", lideresControllerAPI.lideres_list);
router.post("/create", lideresControllerAPI.lideres_create);
router.delete("/delete", lideresControllerAPI.lideres_delete);
router.put("/:id/update", lideresControllerAPI.lideres_update);

module.exports = router;
