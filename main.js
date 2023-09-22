//pega o id canvas no html
let canvas = document.getElementById("canvas");

//pegamos o contexto do desneho, esse é o método que retorna o tipo da animação, usar o parametro "2d" 
//significa que o objeto que será redernizadp será bidimensiona
let contexto = canvas.getContext("2d");

//variavel que vai verificar se estamos desenhando
let desenhando = false;

canvas.addEventListener("mousedown", function (event) {
    //vamos usar o método addevelistener para ouvir nosso mouse, ele irá identificar quando clicarmos
    desenhando = true;
    //desenhando se torna verdade
    contexto.beginPath();
    //a variavel contexto junto com o metodo beginPath() indica que algo novo será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //Nesse metodo, vamos dizer como o contexto irá fucionar, o clientX vai fornecer as coordenadas horizontais  do mouse  e o offsetLesft irá converter
    //esse valor em pixel (px), a mesma coisa acontece com clientY na verticar
})

canvas.addEventListener("mousemove", function (event) {
    //função que indentifica quando movemos o mouse
    if (desenhando) {


        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        //o lineTo vai juntar as coordenadas e identificar a lisinha que estamos traçando enquanto clicamos e movemos o mouse
        contexto.stroke();
        //traça a linha
    }
})

canvas.addEventListener("mouseup", function (event) {
    //essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;
})

const seletorDeCores = document.getElementById("seletorDeCores");

seletorDeCores.addEventListener("input", function () {
    contexto.fillStyle = seletorDeCores.value; // Define a cor de preenchimento para a cor selecionada
    contexto.strokeStyle = seletorDeCores.value; // Define a cor da linha para a cor selecionada
});



let formas = [];

document.getElementById("botaoPreencher").addEventListener("click", function () {
        // Preenche a última forma desenhada com a cor selecionada
        if (formas.length > 0) {
            contexto.fillStyle = corSelecionada;
            contexto.fill();
        }
    });