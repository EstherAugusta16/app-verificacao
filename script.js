document.addEventListener("DOMContentLoaded", () => {
    const glitterBg = document.getElementById("glitterBg");
    
    // Criação de estrelas de fundo
    const numStars = 40;
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

    // Criação da chuva de maletas cor-de-rosa no fundo
    const numBriefcases = 12;
    for (let i = 0; i < numBriefcases; i++) {
        const briefcase = document.createElement("div");
        briefcase.classList.add("falling-briefcase");
        briefcase.innerHTML = '💼';
        
        briefcase.style.left = `${Math.random() * 100}%`;
        briefcase.style.fontSize = `${Math.random() * 1 + 1.2}rem`;
        briefcase.style.animationDuration = `${Math.random() * 4 + 3}s`;
        briefcase.style.animationDelay = `${Math.random() * 5}s`;
        
        glitterBg.appendChild(briefcase);
    }

    // --- CORREÇÃO DA NAVEGAÇÃO E FLUXO DE TELAS ---
    const introScreen = document.getElementById("introScreen");
    const formScreen = document.getElementById("formScreen");
    const startBtn = document.getElementById("startBtn");
    const vagaForm = document.getElementById("vagaForm");
    const resultModal = document.getElementById("resultModal");
    const restartBtn = document.getElementById("restartBtn");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const modalEmoji = document.getElementById("modalEmoji");

    // 1. Ao clicar no botão da tela inicial, esconde a intro e mostra o formulário
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            introScreen.classList.remove("active");
            formScreen.classList.add("active");
        });
    }

    // 2. Ao enviar o formulário, valida os dados e exibe o modal de resultado
    if (vagaForm) {
        vagaForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            const idade = parseInt(document.getElementById("idade").value);

            // Exemplo de regra de elegibilidade
            if (idade >= 18) {
                modalEmoji.textContent = "💖✨";
                modalTitle.textContent = `Parabéns, ${nome}!`;
                modalMessage.textContent = "Você é totalmente elegível para brilhar na nossa liderança!";
            } else {
                modalEmoji.textContent = "💡";
                modalTitle.textContent = `Quase lá, ${nome}!`;
                modalMessage.textContent = "Continue se desenvolvendo para futuras oportunidades!";
            }

            resultModal.classList.remove("hidden");
        });
    }

    // 3. Botão para reiniciar / fechar modal e voltar ao início
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            resultModal.classList.add("hidden");
            formScreen.classList.remove("active");
            introScreen.classList.add("active");
            vagaForm.reset();
        });
    }
});
