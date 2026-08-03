/* =========================================================
   Glipearte Pegue e Monte - Form Validation & Handling
   Validação de formulários com feedback visual e acessível
   ========================================================= */

(function() {
  'use strict';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

  function showError(field, message) {
    field.classList.add('error');
    const errorEl = field.parentElement.querySelector('.error-message');
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(field) {
    field.classList.remove('error');
    const errorEl = field.parentElement.querySelector('.error-message');
    if (errorEl) errorEl.textContent = '';
  }

  function validateField(field) {
    const value = field.value.trim();
    clearError(field);

    if (field.required && !value) {
      showError(field, 'Este campo é obrigatório.');
      return false;
    }

    if (field.type === 'email' && value && !emailRegex.test(value)) {
      showError(field, 'Por favor, insira um e-mail válido.');
      return false;
    }

    if (field.type === 'tel' && value && !phoneRegex.test(value)) {
      showError(field, 'Por favor, insira um telefone válido. Ex: (85) 99999-9999');
      return false;
    }

    if (field.type === 'checkbox' && field.required && !field.checked) {
      showError(field, 'Você precisa concordar para continuar.');
      return false;
    }

    return true;
  }

  function handleFormSubmit(form) {
    const feedback = form.querySelector('.form-feedback');
    const submitBtn = form.querySelector('button[type="submit"]');
    let isValid = true;

    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Por favor, corrija os campos destacados.';
        feedback.style.display = 'block';
      }
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return false;
    }

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      feedback.style.display = 'block';
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviado ✓';
    }
    form.reset();

    return true;
  }

  document.querySelectorAll('form').forEach(form => {
    if (form.classList.contains('chat-form')) return;
    if (form.classList.contains('auth-form')) return; // auth.js cuida

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmit(form);
    });

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(field);
      });
    });
  });

  // Máscara simples de telefone
  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 2) value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
      if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10);
      this.value = value;
    });
  });

})();
