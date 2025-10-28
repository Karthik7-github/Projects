const mongoose = require('mongoose');



function connect(){
    mongoose.connect(process.env.DB_CONNECT, { userNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to Database');
    }).then(() => {
        console.log("Connected to DB");
    }).catch(err => console.log(err))
}