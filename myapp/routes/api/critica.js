let express = require('express');
let router = express.Router();
let criticaControllerAPI=require('../../controllers/api/criticaControllerAPI');


router.get("/", criticaControllerAPI.critica_list);
router.post("/create", criticaControllerAPI.critica_create);
router.delete("/delete", criticaControllerAPI.critica_delete);
router.put("/:id/update", criticaControllerAPI.critica_update);

module.exports = router;
