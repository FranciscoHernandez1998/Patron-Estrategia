const express = require('express');
const app = express();
const path = require('path');

app.set('view-engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:false}));

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


//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
class Contexto {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    ejecutarAccion(res) {
        this.estrategia.ejecutarAccionDeEstrategia(res);
    }
}

//---------------------------------------------------------------------------------

function crearEstrategia(elemento){
    var estrategia;

    if(elemento==='aire'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está usando aire control',img:'/images/aire_control.gif'});
            }
        }
    }else if(elemento==='agua'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está usando agua control',img:'/images/agua_control.gif'});
            }
        }
    }else if(elemento==='fuego'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está usando fuego control',img:'/images/fuego_control.gif'});
            }
        }
    }else if(elemento==='tierra'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está usando tierra control',img:'/images/tierra_control.gif'});
            }
        }
    }else if(elemento==='modo_avatar'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está en modo avatar',img:'/images/modo_avatar.gif'});
            }
        }
    }else if(elemento==='preparado'){
        estrategia = {
            ejecutarAccionDeEstrategia: function (res) {
                res.send({info:'Aang está preparado',img:'/images/aang_preparado.gif'});
            }
        }
    }
    return estrategia;
}

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------