const express = require('express');
const router= express.Router();
const {vistaCymbals, vistaUnCymbal, vistaCymbalType,crearCymbal, editarCymbal, borrarCymbal} = require('../controllers/controller');
const {check} = require('express-validator');
const {validarId} = require('../validations/validarId');
const {validateType} = require('../validations/validationType');

router.get('/ver', vistaCymbals);
router.get('/ver/:id', validarId, vistaUnCymbal);
router.get('/tipo/:tipo', validateType,vistaCymbalType);
router.post('/crear', [
    check("marca").not().isEmpty().withMessage("The field is empty"),
    check("modelo").not().isEmpty().withMessage("The field is empty"),
    check("tipo").not().isEmpty().withMessage("The field is empty"),
    check("medida").not().isEmpty().withMessage("The field is empty"),
    check("aleacion").not().isEmpty().withMessage("The field is empty")
] ,crearCymbal);
router.put('/editar/:id', validarId, [
    check("marca").not().isEmpty().withMessage("The field is empty"),
    check("modelo").not().isEmpty().withMessage("The field is empty"),
    check("tipo").not().isEmpty().withMessage("The field is empty"),
    check("medida").not().isEmpty().withMessage("The field is empty"),
    check("aleacion").not().isEmpty().withMessage("The field is empty")
] ,editarCymbal);
router.delete('/eliminar/:id', validarId, borrarCymbal);

module.exports = router;