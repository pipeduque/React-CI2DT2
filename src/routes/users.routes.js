const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {

    const users = await User.find();
    res.json(users);
});

router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user); 
});

router.post('/', async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        cellphone, 
        password} 
        = req.body;
    const user = new User({
        firstName, 
        lastName, 
        email, 
        cellphone, 
        password
    });
    console.log(user);
    await user.save();
    res.json({status: 'User Saved'});
});

router.put('/:id', async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        cellphone, 
        password} 
        = req.body;
    const newUser = {
        firstName, 
        lastName, 
        email, 
        cellphone, 
        password
    };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
});

module.exports = router;