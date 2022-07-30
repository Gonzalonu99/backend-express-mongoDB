const { default: axios } = require("axios");
const { validationResult } = require("express-validator");
const { Cymbal } = require("../models/cymbal");
const controller = {
    index (req,res){
        res.render('index', {title: 'Express'});
    },
    vistaCymbals: async(req,res)=>{
        const cymbals = await Cymbal.find()
        res.json({cymbals})
    },
    vistaUnCymbal : async (req,res)=>{
        try {
            const cymbal = await Cymbal.findById(req.params.id)
            res.json({cymbal})
        } catch (error) {
            res.status(400).json({msg:'ID error', error})
        }
    },
    vistaCymbalMarca : async (req,res)=>{
        const marca = req.params.marca;
        Cymbal.find({marca: marca}, function(err, cymbalBD){
            if(err){
                return res.json({msg:'The brand you are looking for is not in our database', err})
            } else {
                return res.json({succes: true, cymbal: cymbalBD});
            }
        })
    },
    vistaCymbalType : async (req,res)=>{
        const tipo = req.params.tipo;
        Cymbal.find({tipo: tipo}, function(err, cymbalBD){
            if(err){
                return res.json({msg:'We could not find that type of cymbal', err})
            } else {
                return res.json({succes: true, cymbal: cymbalBD});
            }
        })
    },
    crearCymbal : async (req,res)=>{
        try {
            const error = validationResult(req)
            if(error.isEmpty()){
                const save = new Cymbal(req.body);
                await save.save()
                res.status(201).json(save)
            } else {res.status(501).json(error)}
        } catch (err) {
            res.status(501).json({msg:'Could not create cymbal', err})
        }
    },
    editarCymbal : async(req,res)=>{
        try {
            const error = validationResult(req)
            if(error.isEmpty()){
                const {id} = req.params
                const update = await Cymbal.findByIdAndUpdate(id,req.body)
                res.status(202).json({body: req.body, update})
            } else {res.status(501).json(error)}
        } catch (err) {
            res.status(501).json({msg:'The cymbal data could not be edited correctly'})
        }
    },
    borrarCymbal : async(req,res)=>{
        try {
            const cymbal = await Cymbal.findByIdAndDelete(req.params.id)
            res.json({msg:'Deleted from database:', cymbal})
        } catch (error) {
            res.status(400).json({msg:'There is a problem to delete:', cymbal})
        }
    },
    
}
const consultaAxios = async(req,res)=>{
    const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=200/",{timeout:1000}).catch((err)=>{
        err.origin = 'Error getting URL';
        throw err;
    });
    res.status(200).json(resultado.data)
}

module.exports = {controller, consultaAxios}