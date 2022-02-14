const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");

});


app.listen(3000, () => console.log("servidor rodando"));