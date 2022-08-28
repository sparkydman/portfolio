const checkBox = document.querySelector('.toggler');
const navList = document.querySelectorAll('.mobile__links li a');

Array.from(navList).forEach((menu) => {
  menu.addEventListener('click', () => {
    if (checkBox.checked === true) {
      checkBox.checked = false;
    }
  });
});

function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!('IntersectionObserver' in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add('active__animation');
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add('active__animation');
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}

scrollTrigger('.skill__wrapper');
scrollTrigger('.work__card');
scrollTrigger('.full__resume');
scrollTrigger('.email__contact_wrapper');

// scrollTrigger('.loader', {
//   rootMargin: '-200px',
//   cb: function(el){
//     el.innerText = 'Loading...'
//     setTimeout(() => {
//       el.innerText = 'Complete!'
//     }, 1000)
//   }
// })
