const express = require('express');
const app = express();
const Graph = require('./graph/graph.js');
const data = require('./data/routes.json');
const bodyParser = require('body-parser');
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");

});

const g = new Graph();
for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    let name
    let objLiteral = {}
    for (let key in obj) {
        name = key.substring(0, key.indexOf(":"));
        objLiteral[key.substring(key.indexOf(':') + 1)] = obj[key];
    }
    g.addVertex(name, objLiteral);
}

app.set('view engine', 'pug')
app.post("/rota", function (req, res) {
    let origem = req.body.origem;
    let destino = req.body.destino;
    let rota = g.shortestPath(origem, destino).concat([origem]).reverse()
    res.render('../views/rota', {

        title: 'Rotas', message: rota
    });

});
app.listen(3000, () => console.log("servidor rodando"));