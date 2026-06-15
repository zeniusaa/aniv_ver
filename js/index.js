// ===== INDEX.JS — Landing page logic =====

// Page-exit transition then navigate to pesan.html
function openSurprise() {
  const btn = document.getElementById('open-btn');
  if (btn) {
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Membuka…';
  }

  document.body.classList.add('exiting');
  setTimeout(function () {
    window.location.href = 'pesan.html';
  }, 800);
}

// Attach after DOM is ready
window.addEventListener('load', function () {
  const btn = document.getElementById('open-btn');
  if (btn) {
    btn.addEventListener('click', openSurprise);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') openSurprise();
    });
  }
});