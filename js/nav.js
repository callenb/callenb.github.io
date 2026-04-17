document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.focus();
    }
  });
});
