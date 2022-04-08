//Variáveis de armazenagem de valor ultilizadas ao decorrer do código
var guardaValor;
var sinal;

//Exibe o valor na tela
function botao(num){
    document.calculadora.tela.value += num;
}

//Caso queira apagar tudo escolhido
function reseta(){
    document.calculadora.tela.value = '';  
}

//Inverte os sinais
function modulo(){
    document.calculadora.tela.value = document.calculadora.tela.value * -1;   
}

//Calcula a porcentagem
function porcentagem(){
    document.calculadora.tela.value = document.calculadora.tela.value / 100;
}

//Funções de acordo com cada sinal escolhido
function divisao(){
    guardaValor = document.calculadora.tela.value;
    document.calculadora.tela.value = '';
    sinal = "/";
}
function multiplicacao(){
    guardaValor = document.calculadora.tela.value;
    document.calculadora.tela.value = '';
    sinal = "*";
}
function adcao(){
    guardaValor = document.calculadora.tela.value;
    document.calculadora.tela.value = '';
    sinal = "+";
}
function subtracao(){
    guardaValor = document.calculadora.tela.value;
    document.calculadora.tela.value = '';
    sinal = "-";
}

//Calcula o resultado dependendo de qual sinal foi selecionado
function resultado(){
    if (sinal == "/"){
        document.calculadora.tela.value = guardaValor / document.calculadora.tela.value; 
    }
    if (sinal == "*"){
        document.calculadora.tela.value = guardaValor * document.calculadora.tela.value; 
    }
    if (sinal == "+"){
        document.calculadora.tela.value = (guardaValor*1) + (document.calculadora.tela.value*1); //Converte as Strings para números
    }
    if (sinal == "-"){
        document.calculadora.tela.value = guardaValor - document.calculadora.tela.value;
    }
}




// By: Jonathan - https://github.com/jonathanoliveirarocha 