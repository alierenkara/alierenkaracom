const express = require('express');
const http= require('http');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('*', (req,res)=> {
    console.log('bir istek de bulunuldu...');
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.listen(3000);