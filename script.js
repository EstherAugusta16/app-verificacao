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
});