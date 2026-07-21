const traits = document.querySelector('.traits');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

const traitObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return;
    traits.classList.add('in-view');
    traitObserver.disconnect();
  },
  { threshold: 0.35 }
);

traitObserver.observe(traits);
