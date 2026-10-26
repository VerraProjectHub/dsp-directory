(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var targets = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });

  function update() {
    var current = 0;
    targets.forEach(function (el, i) {
      if (el && el.getBoundingClientRect().top <= 80) { current = i; }
    });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
    var active = links[current];
    var toc = document.querySelector('.toc');
    if (active && toc) {
      var r = active.getBoundingClientRect();
      var t = toc.getBoundingClientRect();
      if (r.top < t.top || r.bottom > t.bottom) { active.scrollIntoView({ block: 'nearest' }); }
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
