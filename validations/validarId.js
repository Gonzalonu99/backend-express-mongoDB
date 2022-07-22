const {Cymbal} = require('../models/cymbal');
const validarId = async (req, res, next)=>{
    const cymbal = await Cymbal.findById(req.params.id)
    if(cymbal !== null){
        next();
    }else{
        res.json({msg:"el id es inválido"})
    }
}
module.exports = {validarId}