const express = require('express');
const http = require('http');
const router = express.Router();
const math = require('../math');

router.get('/', (req, res, next)=>{
  if(req.query.fibonum){
    const httpreq = http.request({
      host: 'localhost',
      port: 3002,
      path: '/fibonacci/' + Math.floor(req.query.fibonum),
      method: 'GET'
    });
    httpreq.on('response', response =>{
      response.on('data', chunk =>{
        const data = JSON.parse(chunk);
        res.render('fibonacci', {
          title: 'Calculate Fibonacci numbers',
          fibonum: req.query.fibonum,
          fiboval: data.result
        })
      });
      response.on('error', err =>{next(err)});
    })
    httpreq.on('error', err => {next(err)});
    httpreq.end()
  }else{
    res.render('fibonacci', {
      title: 'Calculate Fibonaci numbers',
      fiboval: undefined
    })
  }
});
module.exports = router;