/* ==========================================================================
   365 CARTAS PARA OS MOMENTOS DA VIDA - INTERACTION & CRO SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. INTERACTIVE 3D CARD FLIPPER DEMO (SEÇÃO 3)
     ------------------------------------------------------------------------ */
  const cardFlipper = document.getElementById('cardFlipper');

  if (cardFlipper) {
    cardFlipper.addEventListener('click', () => {
      cardFlipper.classList.toggle('flipped');
    });
  }



  /* ------------------------------------------------------------------------
     3. FAQ ACCORDION TOGGLE (SEÇÃO 20)
     ------------------------------------------------------------------------ */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        faqItem.classList.add('active');
      }
    });
  });



  /* ------------------------------------------------------------------------
     5. SMOOTH SCROLLING FOR ALL ANCHORS
     ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
