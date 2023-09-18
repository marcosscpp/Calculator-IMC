var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
altura.setAttribute("placeholder", " ");
peso.setAttribute("placeholder", " ");
var toogle = document.querySelector(".toogle");
var toogleBtn = toogle === null || toogle === void 0 ? void 0 : toogle.firstElementChild;
toogle === null || toogle === void 0 ? void 0 : toogle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-theme");
    toogleBtn.classList.toggle("dark-theme");
});
var btn = document.querySelector('[value="Calcular"]');
var resultado = document.querySelector(".resultado");
function calcularIMC(massa, altura) {
    var resultado = massa / Math.pow(altura, 2);
    if (isNaN(resultado)) {
        return "Ta doidao";
    }
    return resultado.toFixed(2).toString();
}
function getStatusPeso(imc) {
    var numImc = parseFloat(imc);
    if (isNaN(numImc)) {
        return "problematico voce ein";
    }
    if (numImc < 18.5) {
        return "Abaixo do peso";
    }
    else if (numImc >= 18.5 && numImc < 24.9) {
        return "Peso normal";
    }
    else if (numImc >= 25 && numImc < 29.9) {
        return "Sobrepeso";
    }
    else if (numImc >= 30 && numImc < 34.9) {
        return "Obesidade Grau I";
    }
    else if (numImc >= 35 && numImc < 39.9) {
        return "Obesidade Grau II";
    }
    else {
        return "Obesidade Grau III";
    }
}
btn.addEventListener("click", function () {
    var valorAltura = parseFloat(altura.value);
    var valorPeso = parseFloat(peso.value);
    var imcCalculado = calcularIMC(valorPeso, valorAltura);
    resultado.innerHTML = "".concat(imcCalculado, " - ").concat(getStatusPeso(imcCalculado));
});
