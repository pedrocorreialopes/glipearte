/* =========================================================
   Glipearte Pegue e Monte - Chatbot Simulado
   Atendimento automático com respostas pré-definidas
   ========================================================= */

(function() {
  'use strict';

  const chatToggle = document.querySelector('.chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.querySelector('.chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');

  if (!chatToggle || !chatWindow) return;

  function toggleChat(show) {
    chatWindow.classList.toggle('active', show);
    chatWindow.setAttribute('aria-hidden', !show);
    chatToggle.setAttribute('aria-expanded', show);
    if (show) chatInput.focus();
  }

  chatToggle.addEventListener('click', () => {
    const isOpen = chatWindow.classList.contains('active');
    toggleChat(!isOpen);
  });

  if (chatClose) {
    chatClose.addEventListener('click', () => toggleChat(false));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatWindow.classList.contains('active')) {
      toggleChat(false);
      chatToggle.focus();
    }
  });

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = 'chat-message ' + sender;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getBotResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes('valor') || lower.includes('preço') || lower.includes('custo') || lower.includes('quanto')) {
      return 'O valor depende do kit e da quantidade de itens. Posso enviar um orçamento. Qual o tema e a data da sua festa?';
    }
    if (lower.includes('agendar') || lower.includes('reservar') || lower.includes('data') || lower.includes('disponibilidade')) {
      return 'Você pode agendar pelo site ou pelo WhatsApp. Qual data você pretende realizar a festa?';
    }
    if (lower.includes('tema') || lower.includes('kit') || lower.includes('infantil') || lower.includes('decoração')) {
      return 'Temos kits para festas infantis, chás de bebê, chá de panela, aniversários adultos, casamentos e mesversários. Qual ocasião?';
    }
    if (lower.includes('entrega') || lower.includes('retirada') || lower.includes('devolver') || lower.includes('devolução')) {
      return 'Você pode retirar na loja em Fortaleza ou solicitar entrega. O prazo de locação é de 3 dias por padrão.';
    }
    if (lower.includes('olá') || lower.includes('oi') || lower.includes('bom dia') || lower.includes('boa tarde') || lower.includes('boa noite')) {
      return 'Olá! Seja bem-vindo à Glipearte. Como posso ajudar na sua festa?';
    }
    return 'Entendi! Para melhor atendê-lo, posso encaminhar para um atendente ou você pode acessar a página de Agendamento. Posso ajudar com algo mais?';
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      chatInput.value = '';

      setTimeout(() => {
        addMessage(getBotResponse(text), 'bot');
      }, 600);
    });
  }
})();
