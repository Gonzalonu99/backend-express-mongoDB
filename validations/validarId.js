const {Cymbal} = require('../models/cymbal');
const validarId = async (req, res, next)=>{
    try {
        const cymbal = await Cymbal.findById(req.params.id)
        if(cymbal !== null){
            next();
        }else{
            res.json({msg:"El id es inválido"})
        }
    } catch (error) {
        res.json({msg:"El formato del id es inválido"})
    }
    
}
module.exports = {validarId}