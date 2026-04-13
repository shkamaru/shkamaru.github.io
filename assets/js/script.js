// Scroll-triggered reveal for note rows
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.note-row').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.08) + 's';
    io.observe(el);
  });
})();
