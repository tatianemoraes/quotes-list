const frases = [
  {
    frase: '"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis"',
    autor: '– José de Alencar',
  },

  {
    frase: '"Se você quer ser bem-sucedido precisa de dedicação total, buscar seu último limite e dar o melhor de si mesmo"',
    autor: '– Ayrton Senna',
  },

  {
    frase: '“Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir. O que você mais quer pode ser conquistado”',
    autor: '– Mary Kay Ash',
  },

  {
    frase: '“Dificuldades preparam pessoas comuns para destinos extraordinários”',
    autor: '– C.S. Lewis ',
  },

  {
    frase: '“Nenhum homem será um grande líder se quiser fazer tudo sozinho ou se quiser levar todo o crédito por fazer isso”',
    autor: '– Andrew Carnegie',
  },
]

let btn = document.querySelector('.btn-trocar');

btn.addEventListener('click', () => {
  let posicaoAleatoria = Math.floor(Math.random() * 5);

  document.querySelector('.frase').textContent = frases[posicaoAleatoria].frase;
  document.querySelector('.autor').textContent = frases[posicaoAleatoria].autor;

  posicaoAleatoria = -1;

})
