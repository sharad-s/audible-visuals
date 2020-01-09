var express = require('express');
var audioCtrl = express.Router();

audioCtrl.get('/waveform', function(req, res, next) {
  res.render('waveform',{ title: 'Wave'});
});

audioCtrl.get('/square', function(req, res, next) {
  res.render('square',{ title: 'Square'});
});

audioCtrl.get('/line', function(req, res, next) {
  res.render('lines',{ title: 'Line'});
});

audioCtrl.get('/spiral', function(req, res, next) {
  res.render('spiral',{ title: 'SPIRAL'});
});

audioCtrl.get('/sphere', function(req, res, next) {
  res.render('sphere',{ title: 'Sphere'});
});

audioCtrl.get('/', function(req, res, next) {
  res.render('spiral',{ title: 'SPIRAL'});
});

module.exports = audioCtrl;
