const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Entrada = require('./servico/entrada');
const Saida = require('./servico/saida');
const Acao = require('./servico/acao');
const Competencia = require('./servico/competencia');
const Residencia = require('./servico/residencia');
const Usuario = require('./servico/usuario');
const cors = require('cors');
const Multiplicador = require('./servico/multiplicador');
const Referencia = require('./servico/referencia');
require('dotenv').config()

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE'
}));
app.use(
    express.urlencoded({
        extended: true,
    })

),

    app.use(express.json())

app.put('/:entidade', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        case "saida": jsonRetorno = await Saida.put(req.body); break;
        case "acao": jsonRetorno = await Acao.put(req.body); break;
        case "entrada": jsonRetorno = await Entrada.put(req.body); break;
        //case "competencia" : jsonRetorno = await Competencia.put(req.body); break;
        case "referencia": jsonRetorno = await Referencia.put(req.body); break;
        case "multiplicador": jsonRetorno = await Multiplicador.put(req.body); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.get('/residencia', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    jsonRetorno = await Residencia.get();
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.get('/:entidade/:codigo', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        case "saida": jsonRetorno = await Saida.get(req.params.codigo); break;
        case "entrada": jsonRetorno = await Entrada.get(req.params.codigo); break;
        //case "competencia" : jsonRetorno = await Competencia.get(req.params.codigo); break;
        case "residencia": jsonRetorno = await Residencia.get(req.params.codigo); break;
        case "usuario": jsonRetorno = await Usuario.get(req.params.codigo); break;
        case "acao": jsonRetorno = await Acao.get(req.params.codigo); break;
        case "referencia": jsonRetorno = await Referencia.get(req.params.codigo); break;
        case "multiplicador": jsonRetorno = await Multiplicador.get(req.params.codigo); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.get('/:entidade/:codigo/:residencia', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        case "saida": jsonRetorno = await Saida.get("", req.params.residencia); break;
        case "entrada": jsonRetorno = await Entrada.get("", req.params.residencia); break;
        case "competencia": jsonRetorno = await Competencia.get(req.params.residencia); break;
        case "acao": jsonRetorno = await Acao.get("", req.params.residencia); break;
        case "referencia": jsonRetorno = await Referencia.get("", req.params.residencia); break;
        case "multiplicador": jsonRetorno = await Multiplicador.get("", req.params.residencia); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.get('/paguei/:codigo/:mes/:ano', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    jsonRetorno = await Saida.paguei(req.params.codigo, req.params.mes,req.params.ano);
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})
app.get('/confirmei/:codigo/:mes/:ano', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    jsonRetorno = await Saida.confirmei(req.params.codigo, req.params.mes,req.params.ano);
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})
app.get('/:entidade/:codigo/:residencia/:recorrente/:entidade2', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        //case "competencia" : jsonRetorno = await Competencia.get(req.params.codigo,"",req.params.entidade2); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})


app.delete('/:entidade/:codigo', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        case "saida": jsonRetorno = await Saida.delete(req.params.codigo); break;
        case "entrada": jsonRetorno = await Entrada.delete(req.params.codigo); break;
        //case "competencia" : jsonRetorno = await Competencia.delete(req.params.codigo); break;
        case "residencia": jsonRetorno = await Residencia.delete(req.params.codigo); break;
        case "acao": jsonRetorno = await Acao.delete(req.params.codigo); break;
        case "referencia": jsonRetorno = await Referencia.delete(req.params.codigo); break;
        case "multiplicador": jsonRetorno = await Multiplicador.delete(req.params.codigo); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.post('/:entidade', async (req, res) => {
    var jsonRetorno = { status: 500, json: {} };
    switch (req.params.entidade) {
        case "saida": jsonRetorno = await Saida.post(req.body); break;
        case "entrada": jsonRetorno = await Entrada.post(req.body); break;
        //case "competencia" : jsonRetorno = await Competencia.post(req.body); break;
        case "residencia": jsonRetorno = await Residencia.post(req.body); break;
        case "usuario": jsonRetorno = await Usuario.post(req.body); break;
        case "acao": jsonRetorno = await Acao.post(req.body); break;
        case "referencia": jsonRetorno = await Referencia.post(req.body); break;
        case "multiplicador": jsonRetorno = await Multiplicador.post(req.body); break;
    }
    res.status(jsonRetorno.status).json(jsonRetorno.json)
})

app.get('/', (req, res) => {
    res.json({ teste: "Olá Mundo!" })
})

mongoose.connect('mongodb+srv://lucas:123@cluster0.dziy0r6.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log("conectado!!!!!!!!!!: " + process.env.PORT)
        });

    })
    .catch((err) => {
        console.log(err)
    });
