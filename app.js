const express = require('express');
const expHbs = require('express-handlebars');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

const Level = require('./models/Level');


connectDB();

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('give Level_number as param')
})

let dispValue = [];

app.get('/users/game/::id', async (req,res) => {
    
    try {
        data = await Level.findOne({
            Level_number: req.params.id
        })

        let num = data.Level_count

        let random = 0;
        let lastNum = 0;
        for(i = 0; i < num; i++){
    
            random = Math.floor(Math.random()*10)
            
            if(random !== lastNum && random !== random + 1 && random !== 0){
            lastNum = random
                
        dispValue.push(random)
        } else {
            i--
        }
        }
        res.send(dispValue);
        dispValue = []

    } catch (error) {
        console.error(error)
    }
})



app.listen(3000,() => {
    console.log('listening in port 3000');
});