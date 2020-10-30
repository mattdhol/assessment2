var express = require('express');
var router = express.Router();
const todos = require('../models/data');
const indexCtrl = require('../controllers/todos');


router.get('/', indexCtrl.index);
router.post('/', indexCtrl.createtodo) 

// router.delete('delete/:id', indexCtrl.deletetodo)






module.exports = router;
