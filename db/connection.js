const mongoose = require("mongoose");

const URI = "mongodb+srv://dbuser:dbuser@paginated-api.pkkml.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () =>{
    await mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("DB CONNECTED");
}

module.exports = connectDB;