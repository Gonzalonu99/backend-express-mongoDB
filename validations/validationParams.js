const { Cymbal } = require("../models/cymbal")

const validateParams = async (req, res, next)=>{
    const tipo = await Cymbal.find(req.params)
    if(tipo !== null){
        next();
    } else {
        res.status(400).json({msg:'The params you are looking for is not in the database'})
    }
}
module.exports = {validateParams}