//ativar link no header
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");

  const resposta = document.getElementById(controls); //coloquei getelemetbyid ai nem preciso colocar o #pergunta1 e assim por diante, pois eu já falei que tem que pegar o atributo aria-controls e ele ja captou isso, pois isso vou colocar so controls

  resposta.classList.toggle("ativa"); //a toggle ela ativa caso não tenha e remove caso tenha, funcina como um botao de click que ao apertar ele abre e caso aperte dnv ele fecha

  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expended", ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);
