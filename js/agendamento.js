/* =========================================================
   Glipearte Pegue e Monte - Booking Calendar & Summary
   Integração com flatpickr e resumo do agendamento
   ========================================================= */

(function() {
  'use strict';

  const dateInput = document.getElementById('booking-date');
  const kitSelect = document.getElementById('booking-kit');
  const guestsInput = document.getElementById('booking-guests');
  const summary = document.getElementById('booking-summary');

  if (!dateInput) return;

  // Inicializa flatpickr se disponível
  if (typeof flatpickr !== 'undefined') {
    flatpickr(dateInput, {
      locale: 'pt',
      dateFormat: 'd/m/Y',
      minDate: 'today',
      disable: [
        function(date) { return date.getDay() === 0; } // domingos fechados
      ]
    });
  }

  function updateSummary() {
    if (!summary) return;
    const date = dateInput.value;
    const kit = kitSelect ? kitSelect.options[kitSelect.selectedIndex].text : '';
    const guests = guestsInput ? guestsInput.value : '';

    let html = '<strong>Resumo do agendamento:</strong><br>';
    if (date) html += '📅 Data: ' + date + '<br>';
    if (kit && kitSelect.value) html += '🎉 Kit: ' + kit + '<br>';
    if (guests) html += '👥 Convidados: ' + guests;

    if (!date && !kitSelect.value && !guests) {
      html = 'Preencha os dados para receber um orçamento personalizado.';
    }
    summary.innerHTML = html;
  }

  [dateInput, kitSelect, guestsInput].forEach(el => {
    if (el) el.addEventListener('change', updateSummary);
  });
  if (guestsInput) guestsInput.addEventListener('input', updateSummary);
})();
