const express = require('express');
const app = express();

//Import products into our app.
const productRoute = require('./routes/Products.js')
const userRoute = require('./routes/User.js')

const PORT = process.env.PORT || 3700;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Landing page for the app.
app.get('/', (req, res) =>{
    res.status(200).send('successful request')
})

//Create a product route
app.use('/products', productRoute);

// User route
app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})
