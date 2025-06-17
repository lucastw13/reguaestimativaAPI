const mongoose = require('mongoose')

const referencia = mongoose.model('referencia',{
    artefato:String,
    descricao:String,
    horaReferencia:Number,
    tipo:String,
    usuario:String,
    data:String,
    hora:String,
    usuarioAlteracao:String,
    dataAlteracao:String,
    horaAlteracao:String,
    residencia:String,
});

module.exports = referencia