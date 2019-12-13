let express = require('express');
let router = express.Router();
let promocionesControllerAPI=require('../../controllers/api/promocionesControllerAPI');


router.get("/", promocionesControllerAPI.promociones_list);
router.post("/create", promocionesControllerAPI.promociones_create);
router.delete("/delete", promocionesControllerAPI.promociones_delete);
router.put("/:id/update", promocionesControllerAPI.promociones_update);

module.exports = router;
