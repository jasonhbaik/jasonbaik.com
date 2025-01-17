document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const currentlyOpen = document.querySelector('.card.open');
        if (currentlyOpen) {
          currentlyOpen.classList.remove('open');
        }
  
        card.classList.add('open');
      });
    });
  });
