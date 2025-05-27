const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sameerudemy92:4KS98qL482sOUBq0@cluster0.r711gxb.mongodb.net', {
        useNewUrlParser: true,  
    })
}


module.exports = connectDB;