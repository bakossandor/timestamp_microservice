const express = require('express')
const app = express()

app.get('/:param', function(req, res, next){

    var param = req.params.param;
    
    if(!isNaN(param)){
        var natural = new Date(param*1000);
        var unix = param;
        var jsonObject = {
            "unix": unix,
            "natural": natural
        };
        res.send(jsonObject);
    } else if(!isNaN(parseInt((new Date(param).getTime() / 1000).toFixed(0)))){
        var unix = parseInt((new Date(param).getTime() / 1000).toFixed(0));
        var natural = param;
        var jsonObject = {
            "unix": unix,
            "natural": natural
        };
        res.send(jsonObject);
    } else {
        res.send("not a walid request");
    }
    
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))