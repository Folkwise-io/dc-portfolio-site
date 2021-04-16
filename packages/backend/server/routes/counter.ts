export {}
const router = require('express').Router(); 

const {Counter} = require('../models');  

router.get('/', async (req, res, next) => {
    try {
        const {counter} = await Counter.findById(1);
        res.send(counter);
    } catch (error) {
        next(error);         
    }        
})

router.post('/', async (req, res, next) => {
    try {
        const data = await Counter.findById(1);
        const counter = await data[0].counter;
        if(req.body.change === 'INCREMENT') await Counter.update(1, {counter: counter + 1})
        if (req.body.change === 'DECREMENT') await Counter.update(1, {counter: counter - 1})

        res.send("UPDATE SUCCESS");
    } catch (error) {
        next(error);         
    }        
})

module.exports = router; 