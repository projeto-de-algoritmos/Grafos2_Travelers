var fs = require('fs');
module.exports = class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
  
        this.jsonData = JSON.parse(fs.readFileSync("./data/routes.json"));
    }

    addVertex(x) {
        this.vertices.push(x);
        this.adjacent[x] = [];
    }

    addEdge(x, y) {
        this.adjacent[x].push(y);
        this.adjacent[y].push(x);
        this.edges++;
    }

    addNode(data) {
        data.forEach((element) => {
            this.addVertex(element);
        });
    }

    generateGraph(data, type) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < this.jsonData.length; j++) {
                if (this.jsonData[j][type] === data[i]) {
                    this.addEdge(this.jsonData[j].Name, data[i])
                }
            }
        }

    }

    dijkastra() {

    }

}