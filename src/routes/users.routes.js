const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.get('/register', async (req, res) => {

    const users = await User.find();
    res.json(users);
});

router.get('/register/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user); 
});

router.put('/register/:id', async (req, res) => {
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

router.delete('/register/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
});

router.get('/login/', async (req, res) => {

});

router.put('/register/', passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/login',
    passReqToCallback: true
}) );


module.exports = router;