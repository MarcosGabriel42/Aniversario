// GERAR ESTRELAS

const starsContainer = document.querySelector(".stars");

for(let i = 0; i < 200; i++){

  const star = document.createElement("div");

  star.classList.add("star");

  const size = Math.random() * 4;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  star.style.animationDuration = `${Math.random() * 3 + 1}s`;

  starsContainer.appendChild(star);
}


// BOTÃO

const botao = document.getElementById("btnFogos");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

  const nome = document.getElementById("nomeInput").value;

  if(nome.trim() === ""){
    alert("Digite seu nome primeiro");
    return;
  }

  // FOGOS

  const container = document.getElementById('fireworks');

  const fireworks = new Fireworks.default(container, {

    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 120,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,

  });

  fireworks.start();

  // FRASES

  const frases = [

    "Parabéns! Você sobreviveu mais um ano",

    "Agora oficialmente mais velho(a) e mais cansado(a)",

    "Que seus boletos venham com desconto",

    "Feliz aniversário! Já pode reclamar das dores nas costas",

    "Mais experiência... menos joelho funcionando",

    "Seu presente foi essa página linda"

  ];

  let fraseAleatoria =
    frases[Math.floor(Math.random() * frases.length)];

  mensagem.innerHTML = `

    <h2>Feliz Aniversário ${nome}!</h2>

    <p>${fraseAleatoria}</p>

  `;

});