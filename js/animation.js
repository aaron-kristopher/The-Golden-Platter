const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};

const observer = new IntersectionObserver
  (function(
    entries, 
    observer) {

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('show');
      }
    });
  }
, appearOptions);


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach(element => {
  observer.observe(element);
});


