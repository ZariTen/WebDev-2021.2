var botoes = document.getElementsByClassName("button");
var painel = document.getElementById("visor");

document.querySelectorAll(".button").forEach((botao) => {
  botao.addEventListener("click", () => {
    if (painel.innerHTML == "0") {
      if (botao.textContent == ",") {
        return;
      }
      painel.innerHTML = botao.textContent;
    } else {
      if (painel.innerHTML.includes(",") && botao.textContent == ",") {
        return;
      }
      painel.innerHTML += botao.textContent;
    }
  });
});

function equal(operation, firstNumber, secondNumber) {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
  }
}
