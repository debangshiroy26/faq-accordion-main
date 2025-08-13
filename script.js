//Find every element in the page with class "faq-item".
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each FAQ item. In this loop, "clickedFAQ" is the current <div class="faq-item">.
//    We'll attach a click handler to its question button.
faqItems.forEach(clickedFAQ => {
    //Inside THIS faq item, find the button that the user will click.
  const btn = clickedFAQ.querySelector('.faq-question');
  //Also grab the icon <img> inside this faq item so we can swap plus/minus later.
  const icon = clickedFAQ.querySelector('.toggle-icon');

  //When this question button is clicked, run the function below.
  btn.addEventListener('click', () => {
    // Close all other FAQs
    //Loop through ALL faq items again to close the ones that aren’t the one we just clicked.
    faqItems.forEach(currentFAQ => {

      if (currentFAQ !== clickedFAQ) {
        currentFAQ.classList.remove('active');   //…ensure it’s closed by removing the "active" class.
        
        // Reset their icons to plus
        currentFAQ.querySelector('.toggle-icon').src = 'assets/images/icon-plus.svg';
      }
    });

    // Toggle the clicked FAQ
    clickedFAQ.classList.toggle('active');

    // Change icon depending on state
    if (clickedFAQ.classList.contains('active')) {
      icon.src = 'assets/images/icon-minus.svg';
    } else {
      icon.src = 'assets/images/icon-plus.svg';
    }
  });
});

