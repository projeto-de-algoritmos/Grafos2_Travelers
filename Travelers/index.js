const express = require('express');
const app = express();
const Graph = require('./graph/graph.js');
const data = require('./data/routes.json');
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");

});


app.listen(3000, () => console.log("servidor rodando"));


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


// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('Belo Horizonte', 'São Luis').concat(['Belo Horizonte']).reverse());