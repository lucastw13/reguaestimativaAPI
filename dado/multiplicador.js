const mongoose = require('mongoose')

const multiplicador = mongoose.model('multiplicador',{
    pergunta:String,
    desvio:Number,
    complexidade:Number,
    tipo:String,
    usuario:String,
    data:String,
    hora:String,
    usuarioAlteracao:String,
    dataAlteracao:String,
    horaAlteracao:String,
    residencia:String,
});

module.exports = multiplicador