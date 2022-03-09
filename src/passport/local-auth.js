const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {

    findOrCreateUser = function () {
        // find a user in Mongo with provided username
        User.findOne({ 'email': email }, function (err, user) {
            // In case of any error, return using the done method
            console.log('hola');
            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }
            // already exists
            if (user) {
                console.log('User already exists with username: ' + email);
                return done(null, false, req.flash('message', 'User Already Exists'));
            } else {
                // if there is no user with that email
                // create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.email = email;
                newUser.password = newUser.encryptPassword(password);
                newUser.firstName = req.param('firstName');
                newUser.lastName = req.param('lastName');
                newUser.firstName = req.param('firstName');
                newUser.cellphone = req.param('cellphone');


                // save the user
                newUser.save(function (err) {
                    if (err) {
                        console.log('Error in Saving user: ' + err);
                        throw err;
                    }
                    console.log('User Registration succesful');
                    return done(null, newUser);
                });
            }
        });
    };

    process.nextTick(findOrCreateUser);
}));