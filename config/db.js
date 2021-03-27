const mongoose = require('mongoose');




const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://suhail:passstackadeck@cluster0.uv0id.mongodb.net/stackatech?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected to ' + conn.connection.host)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB