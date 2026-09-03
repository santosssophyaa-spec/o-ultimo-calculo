const personagem = document.getElementById("personagem");
const porta = document.getElementById("porta");

const caixaPergunta = document.getElementById("caixaPergunta");

const perguntaTexto = document.getElementById("pergunta");

const op0 = document.getElementById("op0");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");

const pontosTexto = document.getElementById("pontos");

let x = 50;
let perguntaAtual = 0;
let pontos = 0;

const perguntas = [

{
pergunta:"Quanto é 7 + 5 × 3 − 4 ?",
opcoes:["18","20","15","10"],
correta:0
},

{
pergunta:"Simplifique 24/36",
opcoes:["1/2","2/3","3/4","4/5"],
correta:1
},

{
pergunta:"3x + 5 = 11",
opcoes:["1","2","3","4"],
correta:1
},

{
pergunta:"O dobro de um número somado a 6 é 20",
opcoes:["5","6","7","8"],
correta:2
}

];

document.addEventListener("keydown", function(e){

if(e.key === "ArrowRight"){
    x += 15;
}

if(e.key === "ArrowLeft"){
    x -= 15;
}

personagem.style.left = x + "px";

if(e.code === "Space"){
    verificarPorta();
}

});

function verificarPorta(){

let jogador = personagem.getBoundingClientRect();
let entrada = porta.getBoundingClientRect();

if(
jogador.right > entrada.left &&
jogador.left < entrada.right
){
abrirPergunta();
}

}

function abrirPergunta(){

if(perguntaAtual >= perguntas.length){

alert("PARABÉNS! VOCÊ VENCEU!");

location.reload();

return;
}

caixaPergunta.classList.remove("oculto");

let p = perguntas[perguntaAtual];

perguntaTexto.innerText = p.pergunta;

op0.innerText = p.opcoes[0];
op1.innerText = p.opcoes[1];
op2.innerText = p.opcoes[2];
op3.innerText = p.opcoes[3];

}

function responder(opcao){

if(opcao === perguntas[perguntaAtual].correta){

pontos += 10;

pontosTexto.innerText = pontos;

alert("Resposta correta!");

perguntaAtual++;

caixaPergunta.classList.add("oculto");

x = 50;

personagem.style.left = x + "px";

}else{

alert("GAME OVER");

location.reload();

}

}