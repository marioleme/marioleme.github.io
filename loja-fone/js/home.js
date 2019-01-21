/* Exercicios */

let valorInicial = 10;
const $button = window.document.querySelector(".button-store.-second");
const $carrinho = window.document.querySelector(".header-store .action.-last");

$button.addEventListener("click", buttonClick)

function buttonClick() {
    console.log("clicou no botão");

    // $textoCarrinho.innerHTML = "Carrinho (11)";//
    //$textoCarrinho.textContent = "mudar o valor" // este  textContent altera só o texto // 
    $carrinho.textContent = ++valorInicial;
    $carrinho.textContent = `Carrinho (${++valorInicial})`;
}