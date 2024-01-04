const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const fs = require("fs");
app.use('/static', express.static('static'))
app.use(express.urlencoded())


// Set the template engine as pug
app.set('view engine', 'pug')
app.engine('pug', require('pug').__express)
// Set the views directory
app.set('views',path.join(__dirname,'views'))
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });
app.get('/', (req, res)=>{

    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{

    const params = {}
    res.status(200).render('contact.pug', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});