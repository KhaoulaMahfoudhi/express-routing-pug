const express = require('express');
const app = express();
app.set('views', './views'); 
app.set('view engine', 'pug'); 
app.use(express.static('public'));

app.use(verifTime = (req, res, next) =>{
    const date = new Date();
    const day = date.toDateString().substring(0, 3);
    const hour = date.toTimeString().substring(0, 2);
    let temp = false;
    switch (day) {
     case 'Mon':
     case 'Tue':
     case 'Thu':
     case 'Wed':
     case 'Fri': temp = true
    }
     if (temp === true && hour <= 17 && hour >= 9){
        next();
     }
else res.send("system shutdown ! working hours: Mun - Fri from 9AM - 17PM");   
})
app.get("/", (req,res) =>{
    res.render('home'); 
})
app.get("/contact", (req,res) =>{
    res.render('contact');
})
app.get("/services", (req,res) =>{
    res.render('services');
})
 

//create port
const port = process.env.PORT || 5000;
app.listen(port, (error)=> { 
if( error) console.log(`server failed !`);
else console.log(`Server start on port ${port}`);
});