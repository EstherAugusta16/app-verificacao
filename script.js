// Gerador dinâmico de partículas de glitter no fundo
document.addEventListener("DOMContentLoaded", () => {
    const glitterBg = document.getElementById("glitterBg");
    const numStars = 50;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        const size = Math.random() * 3 + 1.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        glitterBg.appendChild(star);
    }
});

// Elementos de navegação entre telas
const introScreen = document.getElementById("introScreen");
const formScreen = document.getElementById("formScreen");
const startBtn = document.getElementById("startBtn");

const vagaForm = document.getElementById("vagaForm");
const resultModal = document.getElementById("resultModal");
const modalEmoji = document.getElementById("modalEmoji");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const restartBtn = document.getElementById("restartBtn");

// Transição da tela de apresentação para o formulário
startBtn.addEventListener("click", () => {
    introScreen.classList.remove("active");
    formScreen.classList.add("active");
});

// Validação dos critérios de aprovação
vagaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Critérios: Altura >= 1.70 e Idade >= 18
    const apto = altura >= 1.70 && idade >= 18;

    if (apto) {
        modalEmoji.innerHTML = "😊✨💖";
        modalTitle.textContent = "Parabéns, " + nome + "!";
        modalMessage.textContent = "Você pode prosseguir no processo para a vaga! 🌟";
    } else {
        modalEmoji.innerHTML = "😢💔";
        modalTitle.textContent = "Que pena, " + nome + "...";
        modalMessage.textContent = "Infelizmente você não é apto à vaga.";
    }

    resultModal.classList.remove("hidden");
});

// Reiniciar/Fechar Modal
restartBtn.addEventListener("click", () => {
    resultModal.classList.add("hidden");
    vagaForm.reset();
    formScreen.classList.remove("active");
    introScreen.classList.add("active");
});