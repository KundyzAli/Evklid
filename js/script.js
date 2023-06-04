document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener ('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener ('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
})

// поисковик

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault()
});

let acc = new Accordion('.faq__list', {
  duration: 700,
  elementClass: 'faq__list-item',
  triggerClass: 'faq-btn-top',
  panelClass: 'faq-btn-bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: false
});

// свайпер-слайдер

const container = document.querySelector(".container")
const swiper = new Swiper('.start__swiper', {

  speed: 300,

  pagination: {
    el: '.start__pagination',
    type: 'bullets',
    clickable: true
  },

});
 
// бургер-меню

document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
});


// табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


})

