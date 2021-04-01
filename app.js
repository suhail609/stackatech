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

app.engine('.hbs', expHbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.get('/', (req,res) => {
    res.send('give Level_number as param')
})

let dispValue = [];


app.get('/users/game', (req,res) => {
    res.render('input')
})


app.post('/users/game/', async (req,res) => {
    
    try {
        data = await Level.findOne({
            Level_number: req.body.levelNumber
        })

        let studentID = req.body.studentID;
        console.log('requested student is ' + studentID);

        let num = data.Level_count

        let random = 0;
        let lastNum = 0;
        for(i = 0; i < num; i++){
    
            random = Math.floor(Math.random()*10)
            
            if(random !== lastNum && !(dispValue.includes(random)) && random !== 0){
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