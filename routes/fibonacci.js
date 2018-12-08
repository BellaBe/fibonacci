var express = require('express');
var router = express.Router();

const math = require('../math');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.fibonum){
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fibonum: req.query.fibonum,
      fiboval: math.fibonacciLoop(req.query.fibonum)
    })
    }else{
      res.render('fibonacci', {
        title: 'Calculate Fibonaci numbers',
        fiboval: undefined
      });
  }
});

module.exports = router;
