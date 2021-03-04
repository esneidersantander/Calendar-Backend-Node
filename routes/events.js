const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const router= Router();
const {validarJWT} = require('../middlewares/validar-jwt');


router.use(validarJWT);


//TODAS TIENEN QUE PASAR POR LA VALIDACION DEL JWT
//obtenerEventos
router.get('/', getEventos);

//crear un nuevo evento
router.post('/',  crearEvento);

//actualziar efvento
router.put('/:id', actualizarEvento)

//borrar evemto
router.delete('/:id', eliminarEvento)

module.exports = router;
