function calcular(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operador = String(document.getElementById("operadores").value);

    switch(operador){
        case "Soma":
            let soma = numero1 + numero2;
            document.getElementById("texto").innerText = "A soma é: "+soma;
            break;
        case "Subtracao":
            let Subtrai = numero1 - numero2;
            document.getElementById("texto").innerText = "A subtração é: "+Subtrai;
            break;
        case "divisao":
            let divide = numero1 / numero2;
            document.getElementById("texto").innerText = "A divisão é: "+divide;
            break;
        case "multiplicacao":
            let mult = numero1 * numero2;
            document.getElementById("texto").innerText = "A multiplicação é: "+mult;
            break;
        case "potencia":
            let poten = Math.pow(numero1, numero2);
            document.getElementById("texto").innerText = "A potencia é: "+poten;
            break;
        case "porcentagem":
            let porcen = (numero1/100) * numero2;
            document.getElementById("texto").innerText = "A porcentagem é: "+porcen;
            break;
        default:
            document.getElementById("texto").innerText = "ERRO Escolha um Operador Logico";
    }
}

