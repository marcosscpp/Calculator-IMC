export class calculadoraImc {
  constructor(pesoDom, alturaDom, resultadoDom) {
    this.pesoDom = pesoDom;
    this.alturaDom = alturaDom;
    this.resultadoDom = resultadoDom;
    this.alturaDom.setAttribute("placeholder", " ");
    this.pesoDom.setAttribute("placeholder", " ");
  }
  calcularIMC(peso, altura) {
    const resultado = peso / altura ** 2;
    if (isNaN(resultado)) return "Insira valores válidos";
    return Number(resultado.toFixed(2));
  }
  getStatusPeso(imc) {
    imc = Number(imc);
    if (isNaN(imc)) {
      return "Erro";
    }
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
      return "Obesidade Grau II";
    } else {
      return "Obesidade Grau III";
    }
  }
  defineVisual(cssVariable, imageDom, statusPeso) {
    const imcClassificacoes = {
        "Erro": "#ff0000",
      "Abaixo do peso": "#add8e6",
      "Peso normal": "#054f77",
      "Sobrepeso": "#eb7d75",
      "Obesidade Grau I": "#ffa500",
      "Obesidade Grau II": "#FF0000",
      "Obesidade Grau III": "#9B111E",
    };
    const corSelecionada = imcClassificacoes[statusPeso];
    document.documentElement.style.setProperty(cssVariable, corSelecionada);
    if (statusPeso !== "Erro") {
      const imagePath = `img/${statusPeso
        .toLowerCase()
        .split(" ")
        .join("-")}.png`;
      imageDom.setAttribute("src", imagePath);
      imageDom.classList.add("ativo");
    }
  }
  displayInfo() {
    const peso = Number(this.pesoDom.value);
    const altura = Number(this.alturaDom.value);
    const imcCalculado = this.calcularIMC(peso, altura);
    const statusPeso = this.getStatusPeso(imcCalculado);
    this.resultadoDom.textContent = `${imcCalculado} - ${statusPeso}`;
    const image = document.querySelector(".imagem");
    this.defineVisual("--cor-texto", image, statusPeso);
    return this.resultadoDom.textContent;
  }
}
