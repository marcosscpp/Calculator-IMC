import { Stack } from "./modules/stack";


const peso: HTMLInputElement = document.getElementById(
  "peso"
) as HTMLInputElement;
const altura: HTMLInputElement = document.getElementById(
  "altura"
) as HTMLInputElement;
const btn: HTMLElement = document.querySelector(
  '[value="Calcular"]'
) as HTMLElement;
const resultado: HTMLElement = document.querySelector(
  ".resultado"
) as HTMLElement;

altura.setAttribute("placeholder", " ");
peso.setAttribute("placeholder", " ");

const toogle: HTMLElement = document.querySelector(".toogle") as HTMLElement;
const toogleBtn: HTMLElement = toogle?.firstElementChild as HTMLElement;

toogle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  toogleBtn.classList.toggle("dark-theme");
});

function calcularIMC(peso: number, altura: number): string {
  const resultado = peso / altura ** 2;
  if (isNaN(resultado)) {
    return "Ta doidao";
  }
  return resultado.toFixed(2).toString();
}

function getStatusPeso(imc: string): string {
  const numImc = parseFloat(imc);
  if (isNaN(numImc)) {
    return "problematico voce ein";
  }
  if (numImc < 18.5) {
    return "Abaixo do peso";
  } else if (numImc >= 18.5 && numImc < 24.9) {
    return "Peso normal";
  } else if (numImc >= 25 && numImc < 29.9) {
    return "Sobrepeso";
  } else if (numImc >= 30 && numImc < 34.9) {
    return "Obesidade Grau I";
  } else if (numImc >= 35 && numImc < 39.9) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

function defineResultVisual(
  cssVariable: string,
  domElement: HTMLElement,
  statusPeso: string
): undefined {
  const imcClassificacoes: Array<string> = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade Grau I",
    "Obesidade Grau II",
    "Obesidade Grau III",
  ];
  const colorList: Array<string> = [
    "#add8e6",
    "#054f77",
    "#0ff",
    "#ffa500",
    "#FF0000",
    "#9B111E",
  ];

  document.documentElement.style.setProperty(
    cssVariable,
    colorList[imcClassificacoes.indexOf(statusPeso)]
  );

  const imagePath = domElement.setAttribute(
    "src",
    "img/" + statusPeso.toLowerCase().split(" ").join("-") + ".png"
  );
  domElement.classList.add("ativo");
}

const image: HTMLElement = document.querySelector(".imagem") as HTMLElement;

const historico: HTMLElement = document.querySelector(".historico");
const pilhaHistorico: Stack = new Stack(historico);

btn.addEventListener("click", () => {
  const valorAltura: number = parseFloat(altura.value);
  const valorPeso: number = parseFloat(peso.value);
  const imcCalculado: string = calcularIMC(valorPeso, valorAltura);
  const status: string = getStatusPeso(imcCalculado);
  defineResultVisual("--cor-texto", image, status);
  pilhaHistorico.push(imcCalculado);
  resultado.innerHTML = `${imcCalculado} - ${status}`;
});












