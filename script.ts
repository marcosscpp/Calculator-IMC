const peso: HTMLInputElement | null = document.getElementById(
  "peso"
) as HTMLInputElement;
const altura: HTMLInputElement | null = document.getElementById(
  "altura"
) as HTMLInputElement;

altura.setAttribute("placeholder", " ");
peso.setAttribute("placeholder", " ");

const toogle: HTMLElement | null = document.querySelector(".toogle");
const toogleBtn: HTMLElement | null | undefined =
  toogle?.firstElementChild as HTMLElement;

toogle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  toogleBtn.classList.toggle("dark-theme");
});

const btn: HTMLElement | null = document.querySelector(
  '[value="Calcular"]'
) as HTMLElement;
const resultado: HTMLElement | null = document.querySelector(
  ".resultado"
) as HTMLElement;

function calcularIMC(massa: number, altura: number): string {
  const resultado = massa / altura ** 2;
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

btn.addEventListener("click", () => {
  const valorAltura: number = parseFloat(altura.value);
  const valorPeso: number = parseFloat(peso.value);
  const imcCalculado: string = calcularIMC(valorPeso, valorAltura);
  resultado.innerHTML = `${imcCalculado} - ${getStatusPeso(imcCalculado)}`;
});
