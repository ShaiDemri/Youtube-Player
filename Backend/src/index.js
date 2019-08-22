const express = require('express');
const model = require('./model');
const app = express();

let result;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/',async (req,res) => {

    let link = req.param('link');
    result = await model.addVideo(link)
    res.statusCode = 200;
    res.send(`Video ${link} was successfully added!`);
});


app.get('/',async (req,res) => {
    console.log('I got request!!!')
    result = await model.getAllVideos();

    res.statusCode = 200;
console.log(result)
    res.send(result);
});

app.delete('/', async (req,res) => {

    let link = req.param('link');

    await model.deleteVideo(link)

    res.statusCode = 200;

    res.send(`Video ${link} was successfully removed`);
});



app.listen(5000,()=>{ console.log('Server started at port 5000!')});
