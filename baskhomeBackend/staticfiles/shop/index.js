var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}
///Выпадающее навигационное меню////

function hover(element) {
  element.setAttribute('src', '/static/shop/images/trash_header-bisque.svg');
}

function unhover(element) {
  element.setAttribute('src', '/static/shop/images/trash_header-white.svg');
}
///Изменение фона корзины при наведение////




window.onscroll = function()
{
  let scrollHeight, totalHeight;
  scrollHeight = document.body.scrollHeight;
  totalHeight = window.scrollY + window.innerHeight;
  const wishAnimation = document.querySelector('.wish__animation')
  if(totalHeight >= scrollHeight)
  {
    wishAnimation.classList.add('wish__animation_show')
  }
}
///Анимация если пользователь долистал до конца///



$(function(){
  $("#phone").mask("+7(999)999-99-99");
});
///Маска номера телефона///



// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$(".scene").each(function() {

  new ScrollMagic.Scene({
    triggerElement: this
  })
    .setPin(this)
    .addTo(ctrl);

});

// Get window height
var wh = window.innerHeight;

new ScrollMagic.Scene({
  offset: wh*3
})





$('.trash__button-minus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);

});

$('.trash__button-plus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('input');
  var value = parseInt($input.val());

  if (value < 9) {
    value = value + 1;
  } else {
    value = 9;
  }

  $input.val(value);
});








