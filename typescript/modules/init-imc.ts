import { calculadoraImc } from "./calculadora-imc.js";
import { Stack } from "./stack.js";

export function initCalculator() {
  const peso: HTMLInputElement = document.getElementById(
    "peso"
  ) as HTMLInputElement;
  const altura: HTMLInputElement = document.getElementById(
    "altura"
  ) as HTMLInputElement;
  const resultado: HTMLElement = document.querySelector(
    ".resultado"
  ) as HTMLElement;
  const historico: HTMLElement = document.querySelector(
    ".historico"
  ) as HTMLElement;

  const calc: calculadoraImc = new calculadoraImc(peso, altura, resultado);
  const stackHistory: Stack = new Stack(historico);

  const btnCalc: HTMLElement = document.querySelector(
    '[value="Calcular"]'
  ) as HTMLElement;

  btnCalc.addEventListener("click", () => {
    const result: string = calc.displayInfo();
    if (result !== "Insira valores válidos - Erro")
    stackHistory.push(result);
  });

  const btnLimpar: HTMLElement = document.querySelector(
    "[data-clear]"
  ) as HTMLElement;

  btnLimpar.addEventListener("click", () => {
    stackHistory.clear();
  });

  const btnHistorico: HTMLElement = document.querySelector(
    "[data-history]"
  ) as HTMLElement;
  const btnFechar: HTMLElement = document.querySelector(
    "[data-close]"
  ) as HTMLElement;
  function displayHistory(): void {
    const history = document.querySelector(".historico-wrapper");
    history?.classList.toggle("active");
  }

  btnHistorico.addEventListener("click", displayHistory);
  btnFechar.addEventListener("click", displayHistory);
  stackHistory.recoveryData();
  
}
