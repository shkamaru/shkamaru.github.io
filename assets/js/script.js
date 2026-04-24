// Scroll-triggered reveal for notes and project cards
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Notes: stagger per row
  document.querySelectorAll('.note-row').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.07) + 's';
    io.observe(el);
  });

  // Cards: stagger independently (shorter delay — grid reveals faster)
  document.querySelectorAll('.project-card').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.1) + 's';
    io.observe(el);
  });
})();
