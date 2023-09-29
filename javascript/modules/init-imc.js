import { calculadoraImc } from "./calculadora-imc.js";
import { Stack } from "./stack.js";
export function initCalculator() {
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const resultado = document.querySelector(".resultado");
    const historico = document.querySelector(".historico");
    const calc = new calculadoraImc(peso, altura, resultado);
    const stackHistory = new Stack(historico);
    const btnCalc = document.querySelector('[value="Calcular"]');
    btnCalc.addEventListener("click", () => {
        const result = calc.displayInfo();
        console.log(stackHistory);
        stackHistory.push(result);
    });
    const btnLimpar = document.querySelector("[data-clear]");
    btnLimpar.addEventListener("click", () => {
        stackHistory.clear();
    });
    const btnHistorico = document.querySelector("[data-history]");
    const btnFechar = document.querySelector("[data-close]");
    function displayHistory() {
        const history = document.querySelector(".historico-wrapper");
        history === null || history === void 0 ? void 0 : history.classList.toggle("active");
    }
    btnHistorico.addEventListener("click", displayHistory);
    btnFechar.addEventListener("click", displayHistory);
}
