const express = require('express');
const app = express();
const Graph = require('./graph/graph.js');
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");

});


app.listen(3000, () => console.log("servidor rodando"));


var g = new Graph();

g.addVertex('A', { B: 7, C: 8 });
g.addVertex('B', { A: 7, F: 2 });
g.addVertex('C', { A: 8, F: 6, G: 4 });
g.addVertex('D', { F: 8 });
g.addVertex('E', { H: 1 });
g.addVertex('F', { B: 2, C: 6, D: 8, G: 9, H: 3 });
g.addVertex('G', { C: 4, F: 9 });
g.addVertex('H', { E: 1, F: 3 });

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('A', 'H').concat(['A']).reverse());