$(function(){
  $(".footer__number").mask("+7(999)999-99-99");
});

$('.footer__name').on('keypress', function() {
  var that = this;

  setTimeout(function() {
    var res = /[^А-Яа-яA-Za-z ]/g.exec(that.value);
    console.log(res);
    that.value = that.value.replace(res, '');
  }, 0);
});


const checkFooter = document.getElementById('checkFooter')
checkFooter.addEventListener('click', function () {
  fbq('track', 'Lead')
})


const menuContacts = document.querySelector('.menu__contacts')
const menuContactsMobile = document.querySelector('.menu__contacts-mobile')
const contacts = document.getElementById('contact');

menuContacts.addEventListener('click', function () {
  contacts.scrollIntoView(false);
})
menuContactsMobile.addEventListener('click', function () {
  contacts.scrollIntoView();
})


let width = $(window).width();
if(width > 849){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
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


const catalogButtonHeader = document.getElementById('catalogButtonHeader')
catalogButtonHeader.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButtonHeaderMobile = document.getElementById('catalogButtonHeader')
catalogButtonHeaderMobile.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButton1 = document.getElementById('catalogButton1')
catalogButton1.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButton2 = document.getElementById('catalogButton2')
catalogButton2.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButton3 = document.getElementById('catalogButton3')
catalogButton3.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButton4 = document.getElementById('catalogButton4')
catalogButton4.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButton5 = document.getElementById('catalogButton5')
catalogButton5.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})

const catalogButtonAbout = document.getElementById('catalogButtonAbout')
catalogButtonAbout.addEventListener('click', function () {
  fbq('track', 'ViewContent');
})


const graphiteBtn = document.querySelector('.button_1');
const coralBtn = document.querySelector('.button_2');
const greenBtn = document.querySelector('.button_3');
const coffeBtn = document.querySelector('.button_4');
const denimBtn = document.querySelector('.button_5');

if(window.location.toString().indexOf("/list/coffe/")>0) {
  document.addEventListener("DOMContentLoaded", () => {
    coffeBtn.classList.add('active')
  });
}
if(window.location.toString().indexOf("/list/coral/")>0) {
  document.addEventListener("DOMContentLoaded", () => {
    coralBtn.classList.add('active')
  });
}
if(window.location.toString().indexOf("/list/denim/")>0) {
  document.addEventListener("DOMContentLoaded", () => {
    denimBtn.classList.add('active')
  });
}
if(window.location.toString().indexOf("/list/graphite/")>0) {
  document.addEventListener("DOMContentLoaded", () => {
    graphiteBtn.classList.add('active')
  });
}
if(window.location.toString().indexOf("/list/green/")>0) {
  document.addEventListener("DOMContentLoaded", () => {
    greenBtn.classList.add('active')
  });
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
const totalPrise = document.querySelector('.constructor__prise-total')



item5.addEventListener('click', function () {
  prise1.textContent = item5.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item6.addEventListener('click', function () {
  prise1.textContent = item6.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item7.addEventListener('click', function () {
  prise2.textContent = item7.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item8.addEventListener('click', function () {
  prise2.textContent = item8.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item9.addEventListener('click', function () {
  prise2.textContent = item9.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item10.addEventListener('click', function () {
  prise2.textContent = item10.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item11.addEventListener('click', function () {
  prise3.textContent = item11.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item12.addEventListener('click', function () {
  prise3.textContent = item12.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item14.addEventListener('click', function () {
  prise3.textContent = item14.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})
item15.addEventListener('click', function () {
  prise3.textContent = item15.value
  const priseNumber1 = productContainer.querySelector('.prise_1').innerHTML
  const priseNumber2 = productContainer.querySelector('.prise_2').innerHTML
  const priseNumber3 = productContainer.querySelector('.prise_3').innerHTML
  const auction1 = Number.parseInt(priseNumber1);
  const auction2 = Number.parseInt(priseNumber2);
  const auction3 = Number.parseInt(priseNumber3);
  totalPrise.textContent = auction1 + auction2 + auction3
})

const popupImage = document.querySelector('.popup-image')
const popupForm = document.querySelector('.popup-form')
const popupButton = document.querySelector('.popup__button')
const popupFormButton = document.querySelector('.popup__button-form')
const popupCloseButtonImage = popupImage.querySelector('.close-image')
const popupCloseButtonForm = popupForm.querySelector('.close-form')


 handleEscClose = (event) => {
   if (event.key === 'Escape') {
     popupClose(popupImage);
   }
 }


 const popupOpen = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened')
 }

const popupClose = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened')
}

closeByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return
  }
  popupClose(popupImage);
};

popupButton.addEventListener('click', function () {
  document.addEventListener('keydown', handleEscClose)
  popupOpen(popupImage)
})

popupFormButton.addEventListener('click', function () {
  popupOpen(popupForm)
})

popupCloseButtonImage.addEventListener('click', function () {
  document.removeEventListener('keydown', handleEscClose)
  popupClose(popupImage);
})

popupCloseButtonForm.addEventListener('click', function () {
  popupClose(popupForm);
})

popupImage.addEventListener('mousedown', function (event){
  closeByClickOnOverlay(event)
})

$(function(){
  $(".form__number").mask("+7(999)999-99-99");
});

$('.form__name').on('keypress', function() {
  var that = this;

  setTimeout(function() {
    var res = /[^А-Яа-яA-Za-z ]/g.exec(that.value);
    console.log(res);
    that.value = that.value.replace(res, '');
  }, 0);
});

$('.form__city').on('keypress', function() {
  var that = this;

  setTimeout(function() {
    var res = /[^А-Яа-яA-Za-z ]/g.exec(that.value);
    console.log(res);
    that.value = that.value.replace(res, '');
  }, 0);
});


autosize($('textarea'));


const checkElement = document.getElementById('check1')
checkElement.addEventListener('click', function () {
  fbq('track', 'AddToCart')
})


const checkElement2 = document.getElementById('check2')
checkElement2.addEventListener('click', function () {
  fbq('track', 'Purchase')
})