const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://admin:P1ZYwaEQWviu8J7f@crud-operation.xf3usav.mongodb.net/?retryWrites=true&w=majority')

        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (err) {
        console.log("Something is error");
        process.exit(1);
    }
}



module.exports = connectDB