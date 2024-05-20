import mongoose  from "mongoose";

function dbConnection(){
    mongoose.connect('mongodb://localhost:27017/NewDB')
    .then(res => console.log("Database Connected"))
    .catch(err => console.log("Databse it's not connected"))
}

export default dbConnection