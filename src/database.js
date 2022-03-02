const mongoose = require('mongoose');

const URI = 'mongodb+srv://pipe:BhO5BhIyLsyVYIaZ@cluster0.ha105.mongodb.net/roomie?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));

module.exports = mongoose;