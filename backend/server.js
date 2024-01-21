const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/users')
const personRoute = require('./routes/persons')
require('dotenv').config();

//  Created App
const app = express();
const port = process.env.PORT;

//  Cors
app.use(cors({
    origin: 3001
}));

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use(express.json())

//  Database Connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connected..');
    
    app.listen(port , () => {
        console.log(`Port ${port} listening..`)
    })
})
.catch(err => console.log('Error : ', err))

app.use('/api/persons',personRoute)
app.use('/api/user',userRoute)