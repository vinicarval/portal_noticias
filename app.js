var app = require('express')();

app.get('/', function(req, res){
    res.send("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>");
});

app.get('/moda', function(req, res){
    res.send("<html><body>Notícias de moda</body></html>");
});

app.get('/beleza', function(req, res){
    res.send("<html><body>Notícias de beleza</body></html>");
});

app.listen(3000, function () {
    console.log("Servidor rodando com Express");
});