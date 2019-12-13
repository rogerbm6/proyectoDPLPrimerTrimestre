let express = require('express');
let router = express.Router();
let platosControllerAPI=require('../../controllers/api/platosControllerAPI');


router.get("/", platosControllerAPI.plato_list);
router.post("/create", platosControllerAPI.plato_create);
router.delete("/delete", platosControllerAPI.plato_delete);
router.put("/:id/update", platosControllerAPI.plato_update);
//comentarios
//crear
router.post("/coment", platosControllerAPI.plato_comentario);
//borrar
router.delete("/coment_delete", platosControllerAPI.plato_comentario_borrar);
//actualizar
router.put("/coment_update/:idPlato/:idComment", platosControllerAPI.plato_comentario_actualizar);
module.exports = router;
