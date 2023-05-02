let dino = document.querySelector("#dino");
let cacto = document.querySelector("#cacto");
let passaro = document.querySelector("#passáro");
let pontuacao = 0;

let button = document.querySelector('button')

button.addEventListener('click', function trocaPersonagem(){
  dino.classList.toggle('goku');
  document.body.classList.toggle('goku')
});

document.addEventListener("keydown", (e) =>{
  if (e.key == "t"){
    dino.classList.toggle('goku');
  document.body.classList.toggle('goku')
  }
})


function verificaColisao() {
  let dinoPosicao = dino.getBoundingClientRect();
  let cactoPosicao = cacto.getBoundingClientRect();
  let passaroPosicao = passaro.getBoundingClientRect();

  if (
    dinoPosicao.left < cactoPosicao.left + cactoPosicao.width &&
    dinoPosicao.left + dinoPosicao.width > cactoPosicao.left &&
    dinoPosicao.top < cactoPosicao.top + cactoPosicao.height &&
    dinoPosicao.top + dinoPosicao.height > cactoPosicao.top
  ) {
    alert("Game Over");
  }

  if (
    dinoPosicao.left < passaroPosicao.left + passaroPosicao.width &&
    dinoPosicao.left + dinoPosicao.width > passaroPosicao.left &&
    dinoPosicao.top < passaroPosicao.top + passaroPosicao.height &&
    dinoPosicao.top + dinoPosicao.height > passaroPosicao.top
  ) {
    alert("Game Over");
  }
}

document.addEventListener("keydown", (e) => {
  if (
    e.key == " " ||
    (e.key == "ArrowUp" && dino.classList.contains("dinoDown") === false)
  ) {
    dino.classList.add("dinoSobe");
    setTimeout(() => {
      dino.classList.remove("dinoSobe");
      dino.classList.add("dinoDesce");
      setTimeout(() => {
        dino.classList.remove("dinoDesce");
      }, 300);
    }, 350);
    
  } else if (
    e.key == "ArrowDown" &&
    dino.classList.contains("dinoSobe") === false
  ) {
    dino.classList.add("dinoDown");
    document.addEventListener("keyup", () => {
      dino.classList.remove("dinoDown");
    });
  }
});

setInterval(() => {
  pontuacao++;
  verificaColisao();
}, 100);
