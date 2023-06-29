const { Router } = require('express')
const { check } =  require('express-validator')

const { createEjercicioRealizado,
     getEjercicioRealizado, 
     getEjercicioRealizados,
     updateEjercicioRealizado,
     deleteEjercicioRealizado } = require('../controllers').EjercicioRealizado;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getEjercicioRealizados);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getEjercicioRealizado);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createEjercicioRealizado)

router.put('/:id', updateEjercicioRealizado)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteEjercicioRealizado)

module.exports = router;