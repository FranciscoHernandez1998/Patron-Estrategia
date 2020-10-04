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

module.exports = {
    Contexto,
    crearEstrategia
};