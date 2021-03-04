const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const router= Router();
const {check} = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');


router.use(validarJWT);


//TODAS TIENEN QUE PASAR POR LA VALIDACION DEL JWT
//obtenerEventos
router.get('/', getEventos);

//crear un nuevo evento
router.post(
    '/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizazción es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

//actualziar efvento
router.put('/:id', actualizarEvento)

//borrar evemto
router.delete('/:id', eliminarEvento)

module.exports = router;
