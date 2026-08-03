/* =========================================================
   Glipearte Pegue e Monte - Authentication Simulation
   Login, cadastro e área do cliente (client-side)
   ========================================================= */

(function() {
  'use strict';

  // Simulação de sessão com localStorage
  const SESSION_KEY = 'glipearte_user';

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch (e) {
      return null;
    }
  }

  function setSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  // Toggle de senha
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
      btn.textContent = isPassword ? '🙈' : '👁';
    });
  });

  // Login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const feedback = loginForm.querySelector('.form-feedback');

      if (!email || !password) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Preencha e-mail e senha.';
          feedback.style.display = 'block';
        }
        return;
      }

      const user = { name: 'Cliente Glipearte', email: email, phone: '(85) 99999-9999' };
      setSession(user);

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Login realizado! Redirecionando...';
        feedback.style.display = 'block';
      }
      setTimeout(() => window.location.href = 'area-cliente.html', 1000);
    });
  }

  // Cadastro
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('register-name').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const phone = document.getElementById('register-phone').value.trim();
      const password = document.getElementById('register-password').value;
      const confirm = document.getElementById('register-password-confirm').value;
      const privacy = document.getElementById('register-privacy').checked;
      const feedback = registerForm.querySelector('.form-feedback');

      let error = '';
      if (!name || !email || !phone || !password) error = 'Preencha todos os campos obrigatórios.';
      else if (password.length < 6) error = 'A senha deve ter pelo menos 6 caracteres.';
      else if (password !== confirm) error = 'As senhas não conferem.';
      else if (!privacy) error = 'Você precisa concordar com a política de privacidade.';

      if (error) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = error;
          feedback.style.display = 'block';
        }
        return;
      }

      setSession({ name: name, email: email, phone: phone });
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Conta criada! Redirecionando...';
        feedback.style.display = 'block';
      }
      setTimeout(() => window.location.href = 'area-cliente.html', 1000);
    });
  }

  // Área do cliente - proteção e dados
  if (window.location.pathname.includes('area-cliente.html')) {
    const user = getSession();
    if (!user) {
      window.location.href = 'login.html';
    } else {
      const nameEl = document.getElementById('account-name');
      const emailEl = document.getElementById('account-email');
      const phoneEl = document.getElementById('account-phone');
      if (nameEl) nameEl.textContent = user.name;
      if (emailEl) emailEl.textContent = user.email;
      if (phoneEl) phoneEl.textContent = user.phone || '(85) 99999-9999';
    }
  }

  // Logout
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      clearSession();
      window.location.href = 'login.html';
    });
  }
})();
