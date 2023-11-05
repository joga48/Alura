/*
//funcoes que chamam os audios ao apertarem os botoes
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}
function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}
function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}
function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}
function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}

//Atribuição de botões às funcoes
document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;
document.querySelector('.tecla_puff').onclick = tocaSomPuff;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_psh').onclick = tocaSomPsh;
document.querySelector('.tecla_tic').onclick = tocaSomTic;
document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/

function tocaSons(seletorAudio){
    const element = document.querySelector(seletorAudio);
    if(element != null){

        console.log(element.localName === 'audio');

        element.play();
    } else {
        console.log('Elemento ou seletor invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //template string. ` tambem é usado como maneira de marcar strings, como ' ou "
    const idAudio = `#som_${instrumento}`;

    //Isso abaixo é uma função generica, ela existe apenas nesse contexto da declaração, ela é usada da mesma forma que seria usada uma referencia da função, como tecla.onclick = tocasom, porem sem chamar a função na atualização da pagina.
    tecla.onclick = function () { 
        tocaSons(idAudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
