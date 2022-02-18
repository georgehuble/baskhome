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