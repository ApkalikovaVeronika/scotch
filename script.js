const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorDot) {
  window.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

    cursorDot.style.left = event.clientX + 'px';
    cursorDot.style.top = event.clientY + 'px';
  });

  document.querySelectorAll('a, .art-card, .artist').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.style.width = '65px';
      cursor.style.height = '65px';
      cursor.style.background = 'rgba(231, 255, 0, .25)';
    });

    element.addEventListener('mouseleave', () => {
      cursor.style.width = '38px';
      cursor.style.height = '38px';
      cursor.style.background = 'transparent';
    });
  });
}

// Появление элементов при прокрутке
const animatedElements = document.querySelectorAll(
  '.about-content, .exhibition-header, .art-card, .manifesto-content, .artist, .visit'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

animatedElements.forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
