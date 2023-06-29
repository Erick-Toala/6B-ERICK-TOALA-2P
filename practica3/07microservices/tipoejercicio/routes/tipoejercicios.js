const { Router } = require('express');
const { check } =  require('express-validator')

const {
    createTipoEjercicio,
    getTipoEjercicio,
    getTipoEjercicios,
    updateTipoEjercicio,
    deleteTipoEjercicio
} = require('../controllers').TipoEjercicio;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getTipoEjercicios );

router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getTipoEjercicio );

 router.post('/',[
    check('tipo', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createTipoEjercicio);

 router.put('/:id', updateTipoEjercicio);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteTipoEjercicio);



module.exports = router;