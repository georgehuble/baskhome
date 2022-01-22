$(function(){
  $("#id_number").mask("+7(999)999-99-99");
});
let width = $(window).width();
if(width > 639){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-64px";
    }
    prevScrollpos = currentScrollPos;
    let scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    const wishAnimation = document.querySelector('.wish__animation')
    if(totalHeight >= scrollHeight)
    {
      wishAnimation.classList.add('wish__animation_show')
    }
  }
  // Init ScrollMagic
  let ctrl = new ScrollMagic.Controller({
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
  let wh = window.innerHeight;

  new ScrollMagic.Scene({
    offset: wh*3
  })
}else{
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('wish__animation_show');
      }
    });
  }

  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.wish__animation');

  for (let elm of elements) {
    observer.observe(elm);
  }
}

jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
    }
  });
});


const productContainer = document.querySelector('.constructor__container-content')
const size1 = productContainer.querySelector('.category_1')
const size2 = productContainer.querySelector('.category_2')
const size3 = productContainer.querySelector('.category_3')
const item5 = size1.querySelector('.item_5')
const item6 = size1.querySelector('.item_6')
const item7 = size2.querySelector('.item_7')
const item8 = size2.querySelector('.item_8')
const item9 = size2.querySelector('.item_9')
const item10 = size2.querySelector('.item_10')
const item11 = size3.querySelector('.item_11')
const item12 = size3.querySelector('.item_12')
const item14 = size3.querySelector('.item_14')
const item15 = size3.querySelector('.item_15')
const prise1 = productContainer.querySelector('.prise_1')
const prise2 = productContainer.querySelector('.prise_2')
const prise3 = productContainer.querySelector('.prise_3')
item5.addEventListener('click', function () {
  prise1.textContent = item5.value
})
item6.addEventListener('click', function () {
  prise1.textContent = item6.value
})
item7.addEventListener('click', function () {
  prise2.textContent = item7.value
})
item8.addEventListener('click', function () {
  prise2.textContent = item8.value
})
item9.addEventListener('click', function () {
  prise2.textContent = item9.value
})
item10.addEventListener('click', function () {
  prise2.textContent = item10.value
})
item11.addEventListener('click', function () {
  prise3.textContent = item11.value
})
item12.addEventListener('click', function () {
  prise3.textContent = item12.value
})
item14.addEventListener('click', function () {
  prise3.textContent = item14.value
})
item15.addEventListener('click', function () {
  prise3.textContent = item15.value
})








/*document.addEventListener("DOMContentLoaded", () => {
  prise1.textContent = size1[size1.selectedIndex].value
  prise2.textContent = size2[size2.selectedIndex].value
  prise3.textContent = size3[size3.selectedIndex].value
});
size1.addEventListener("click", function () {
  prise1.textContent = size1[size1.selectedIndex].value
});
size2.addEventListener("click", function () {
  prise2.textContent = size2[size2.selectedIndex].value
});
size3.addEventListener("click", function () {
  prise3.textContent = size3[size3.selectedIndex].value
});*/






/*///Выпадающее навигационное меню////

function hover(element) {
  element.setAttribute('src', '/static/shop/images/trash_header-bisque.svg');
}

function unhover(element) {
  element.setAttribute('src', '/static/shop/images/trash_header-white.svg');
}
///Изменение фона корзины при наведение////*/



///Маска номера телефона///

/*

$('.trash__button-minus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('.trash__quantity').find('#id_quantity');
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
  var $input = $this.closest('.trash__quantity').find('#id_quantity');
  var value = parseInt($input.val());

  if (value < 9) {
    value = value + 1;
  } else {
    value = 9;
  }

  $input.val(value);
});*/

