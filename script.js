document.addEventListener('DOMContentLoaded', () => {
  // 1. Efeito de Flash de Câmera Fotográfica (Estilo Repórter Thiago Fritz)
  const btnFlash = document.getElementById('btn-flash');
  const cameraFlash = document.getElementById('camera-flash');

  if (btnFlash && cameraFlash) {
    btnFlash.addEventListener('click', () => {
      cameraFlash.classList.add('active');
      setTimeout(() => {
        cameraFlash.classList.remove('active');
      }, 80);
    });
  }

  // 2. Botão "Lente de Investigação" (Revela notas secretas de Thiago e Elizabeth)
  const toggleLente = document.getElementById('toggle-lente');
  let lenteAtiva = false;

  if (toggleLente) {
    toggleLente.addEventListener('click', () => {
      lenteAtiva = !lenteAtiva;
      document.body.classList.toggle('investigador-ativo', lenteAtiva);
      toggleLente.classList.toggle('active', lenteAtiva);
      toggleLente.textContent = lenteAtiva
        ? '🔍 Ocultar Anotações'
        : '🔍 Lente de Investigação';
    });
  }

  // 3. Animação suave ao rolar a página (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

  // 4. Mini-jogo de RPG: Rolar d20 para o Futuro
  const rollBtn = document.getElementById('roll-d20');
  const diceNumber = document.querySelector('.dice-number');
  const diceMessage = document.querySelector('.dice-message');

  const mensagensDestino = {
    critico: 'Sucesso Extremo! Sua reportagem ganha destaque nacional e a campanha de RPG entra para a história!',
    alto: 'Ótimo resultado! Aprovação na UNICENTRO e pautas brilhantes no jornalismo.',
    medio: 'Passo firme! Cada dia de estudo e cada sessão com os amigos constroem seu futuro.',
    baixo: 'Reviravolta na trama! Nada que uma boa investigação e o apoio da família não resolvam.'
  };

  if (rollBtn && diceNumber && diceMessage) {
    rollBtn.addEventListener('click', () => {
      // Pequena animação de giro nos números
      let giros = 0;
      const intervalo = setInterval(() => {
        diceNumber.textContent = Math.floor(Math.random() * 20) + 1;
        giros++;

        if (giros >= 10) {
          clearInterval(intervalo);
          const resultadoFinal = Math.floor(Math.random() * 20) + 1;
          diceNumber.textContent = `d20: ${resultadoFinal}`;

          if (resultadoFinal === 20) {
            diceMessage.textContent = mensagensDestino.critico;
          } else if (resultadoFinal >= 14) {
            diceMessage.textContent = mensagensDestino.alto;
          } else if (resultadoFinal >= 7) {
            diceMessage.textContent = mensagensDestino.medio;
          } else {
            diceMessage.textContent = mensagensDestino.baixo;
          }
        }
      }, 45);
    });
  }
});