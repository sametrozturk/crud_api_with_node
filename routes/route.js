const express = require('express')
const router = express.Router()
const userCont = require('../controller/user_cont');

router.get('/', userCont.findAll);

router.post('/', userCont.create);

router.get('/:id', userCont.findById);

router.put('/:id', userCont.update);

router.delete('/:id', userCont.delete);

module.exports = router