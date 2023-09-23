var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var btn = document.querySelector('[value="Calcular"]');
var resultado = document.querySelector(".resultado");
altura.setAttribute("placeholder", " ");
peso.setAttribute("placeholder", " ");
var toogle = document.querySelector(".toogle");
var toogleBtn = toogle === null || toogle === void 0 ? void 0 : toogle.firstElementChild;
toogle === null || toogle === void 0 ? void 0 : toogle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-theme");
    toogleBtn.classList.toggle("dark-theme");
});
function calcularIMC(peso, altura) {
    var resultado = peso / Math.pow(altura, 2);
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
function defineResultVisual(cssVariable, domElement, statusPeso) {
    var imcClassificacoes = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade Grau I",
        "Obesidade Grau II",
        "Obesidade Grau III",
    ];
    var colorList = [
        "#add8e6",
        "#054f77",
        "#0ff",
        "#ffa500",
        "#FF0000",
        "#9B111E",
    ];
    document.documentElement.style.setProperty(cssVariable, colorList[imcClassificacoes.indexOf(statusPeso)]);
    var imagePath = domElement.setAttribute("src", "img/" + statusPeso.toLowerCase().split(" ").join("-") + ".png");
    domElement.classList.add("ativo");
}
var image = document.querySelector(".imagem");
btn.addEventListener("click", function () {
    var valorAltura = parseFloat(altura.value);
    var valorPeso = parseFloat(peso.value);
    var imcCalculado = calcularIMC(valorPeso, valorAltura);
    var status = getStatusPeso(imcCalculado);
    defineResultVisual("--cor-texto", image, status);
    resultado.innerHTML = "".concat(imcCalculado, " - ").concat(status);
});
