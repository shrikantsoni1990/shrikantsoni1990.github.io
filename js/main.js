(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Count-up for hero stats
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = +el.dataset.count, n = 0;
    var step = setInterval(function () {
      n++; el.textContent = n;
      if (n >= target) clearInterval(step);
    }, 1400 / target);
  });

  // Reveal sections on scroll
  var items = document.querySelectorAll('.block h2, .domains article, .entry, .chips, .contact p, .links');
  items.forEach(function (el) { el.classList.add('reveal'); });
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { io.observe(el); });
})();
