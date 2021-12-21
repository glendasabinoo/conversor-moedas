var dolares = document.querySelector('#valor-dolares');
var resposta = document.querySelector('#resposta');
function converter(){
    var ValorFinal = (dolares.value * 5.7215).toFixed(2);
    resposta.textContent = 'R$' + ValorFinal;
}