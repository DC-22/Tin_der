import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors';
//App Config
const app= express()
const port= process.env.PORT || 8001
const connection_url='mongodb+srv://DC-22:L6o1GTbxHbWBxjws@cluster0.gz6gz.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares
app.use(express.json())
app.use(Cors());


//DB config
mongoose.connect(connection_url,{
    
})

//API Endpoint
app.get('/', (req,res) => res.status(200).send("Hello there!!!!"));
app.post('/tinder/card',(req,res) => {
    const dbCard = req.body;


    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});



app.get('/tinder/card',(req,res) =>{
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)

        }else{
            res.status(200).send(data)
        }
    });
});
//Listner
app.listen(port,() => console.log(`Listening on localhost: ${port}`));