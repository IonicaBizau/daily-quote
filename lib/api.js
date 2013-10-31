var parser = require('rssparser');
module.exports["/api/getQuote/"] = function (req, res) {
    var options = {};
    parser.parseURL('http://www.quotesdaddy.com/feed', options, function(err, out){
        res.end(JSON.stringify(out.items, null, 4));
    });
}
