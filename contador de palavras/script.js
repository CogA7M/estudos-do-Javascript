const inputTexto = document.querySelector("#input");
const btnContar = document.querySelector("#btn-contar");
const divContador = document.querySelector("[txt-contador]");

let tipoContagem = false;

function handleBtnContar() {
  tipoContagem = !tipoContagem; // Alternar entre contar palavras e contar caracteres
  const inptVal = inputTexto.value;

  switch (tipoContagem) {
    case false: // Contar caracteres
      const caracteres = inptVal.replace(/\s+/g, "").length; // Remover espaços em branco e contar caracteres
      divContador.innerText = caracteres + " caracteres";
      break;

    case true: // Contar palavras
      const palavras = inptVal.trim().match(/\b\w+\b/g).length; // Considerar vírgulas, pontos, etc., como parte das palavras
      divContador.innerText = palavras + " palavras";
      break;
  }

  // Atualizar o texto do botão de acordo com o tipo de contagem
  btnContar.innerText = tipoContagem ? "Contar Caracteres" : "Contar Palavras";
}

btnContar.addEventListener("click", handleBtnContar);


