const router = require('express').Router(); 

const {Counter} = require('../models');  

router.get('/', async (req, res, next) => {
    try {
        const currentCounter = await Counter.findById(1);
        res.send(currentCounter);
    } catch (error) {
        next();         
    }        
})