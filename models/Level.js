const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    Level_number: {
        type: Number
    },
    Level_count: {
        type: Number
    }
})

module.exports = mongoose.model('Level', LevelSchema, 'Levels')