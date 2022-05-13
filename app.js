
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors'); // it is a medilwere used for alwing comunication between deferecnt <hosts>
var _postsRoute = require('./routes/postes'); // geting all ROUTERS which i created in tha {../routes/postes}

const app = express();
const port = process.env.PORT || 3000;


//  all medilweres
app.use(bodyparser.json()); // It is responsible for parsing the incoming request bodies in a middleware before you handle it
app.use(cors()); // It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

app.use('/posts' , _postsRoute); // all API things done hear

// *************
// Connecting to DATABAASE
mongoose.connect('mongodb+srv://user2:user2_123@cluster0.34ul3.mongodb.net/db1?retryWrites=true&w=majority' , async()=>{
    console.log('connected');
})

app.get('/' , (req , res)=>{
    res.send('we are in hoem')
})

app.listen(port , ()=>{
    console.log('you are listning to port ===>' + port);
})