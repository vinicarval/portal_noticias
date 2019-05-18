var http = require('http');

http.createServer(
    function (req, res) {
        var category = req.url;
        switch (category) {
            case '/tecnologia':
                res.end("<html><body>Notícias de tecnologia</body></html>");
                break;
            case '/moda':
                res.end("<html><body>Notícias de moda</body></html>");
                break;
            case '/beleza':
                res.end("<html><body>Notícias de beleza</body></html>");
                break;
            default:
                res.end("<html><body>Portal de notícias</body></html>");
                break;
        };
    }).listen(3000);