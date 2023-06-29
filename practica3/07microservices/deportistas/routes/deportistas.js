const { Router } = require('express');
const { check } =  require('express-validator')

const {
    createDeportista,
    getDeportista,
    getDeportistas,
    updateDeportista,
    deleteDeportista
} = require('../controllers').Deportista;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getDeportistas );

router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getDeportista );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createDeportista);

 router.put('/:id', updateDeportista);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteDeportista);



module.exports = router;