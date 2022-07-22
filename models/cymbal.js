const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cymbalSchema = new Schema({
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    medida:{
        type: String,
        required: true
    },
    aleacion:{
        type: String,
    }
})
const Cymbal = mongoose.model('Cymbal', cymbalSchema);
module.exports = {Cymbal}