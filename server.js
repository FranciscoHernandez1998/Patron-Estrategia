const express = require('express');
const app = express();
const path = require('path');
app.set('view-engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:false}));

const {Contexto, crearEstrategia} = require('./utils.js')

app.get('/',(req,res)=>{
    res.render('index.ejs');
});


app.post('/',(req,res)=>{
    const contexto = new Contexto( crearEstrategia( req.body.elemento) );
    contexto.ejecutarAccion(res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});