import $ from 'jQuery';

const mySwiper = new Swiper ('.swiper-container.kpop_list', {
  slidesPerView: 7,
  spaceBetween: 10,
  loop: true,
  initialSlide: 3,
  watchOverflow: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const mySwiper2 = new Swiper ('.swiper-container.hot_prodwrap', {
  slidesPerView: 4,
  spaceBetween: 20,
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$('.global_cat_m').on('mouseover', function() {
  const a = $(this).parent('li').data('cat');
  $('.sub_cate').hide();
  $(this).next('.sub_cate').show();
});

$('.cat_list').on('mouseleave', function() {
  $('.sub_cate').hide();
});

$('button.search').on('click', function() {
  alert('Button Clicked');
});

$('.cat_area_menu li').on('mouseover', function() {
  $('.cat_area_menu li').removeClass('active');
  $(this).addClass('active');
});

