"use strict";

// preload

loading();
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

function loading() {
  document.querySelectorAll(".bar").forEach(function (current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${endWidth}%`;
        document.getElementById("percentage").innerText = `${startWidth}%`;
      }
    }
  });
}

//   back to page
// if (document.querySelector(".back_pg-btn") !== null) {
//   document.querySelector(".back_pg-btn").addEventListener("click", function (e) {
//       e.preventDefault();
//       window.history.back();
//     });
// }

// When the user scrolls down 250px from the top of the document, show the button
if (document.querySelector(".add-fixed-btn") !== null) {
  let addBtnFixed = document.querySelector(".add-fixed-btn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      addBtnFixed.style.display = "flex";
    } else {
      addBtnFixed.style.display = "none";
    }
  }
}

// open catalog

document.querySelectorAll(".fixed-menu-item.catalog").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if(document.querySelector(".catalog-nav").classList.contains("open")){
      document.querySelector(".fixed-menu-item.catalog").classList.remove("active");
      document.querySelector(".catalog-nav").classList.remove("open");
      document.querySelector("body").classList.remove("lock");
      if (document.querySelector(".menu-item-has-children.active") !== null) {
        document.querySelector(".menu-item-has-children.active").classList.remove("active");
      }
    } else {
      document.querySelectorAll(".fixed-menu-item").forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelectorAll(".cart-page").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelectorAll(".authorization-popup").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelector(".fixed-menu-item.catalog").classList.add("active");
      document.querySelector(".catalog-nav").classList.add("open");
      document.querySelector("body").classList.add("lock");
    }    
  });
});

// open cart

document.querySelectorAll(".fixed-menu-item.cart").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if(document.querySelector(".cart-page").classList.contains("open")){
      document.querySelector(".fixed-menu-item.cart").classList.remove("active");
      document.querySelector(".cart-page").classList.remove("open");
      document.querySelector("body").classList.remove("lock");
     
    } else {
      document.querySelectorAll(".fixed-menu-item").forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelectorAll(".catalog-nav").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelectorAll(".authorization-popup").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelector(".fixed-menu-item.cart").classList.add("active");
      document.querySelector(".cart-page").classList.add("open");
      document.querySelector("body").classList.add("lock");
    }    
  });
});

if (document.querySelector(".empty-cart .btn") !== null) {
  document.querySelector(".empty-cart .btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".fixed-menu-item.cart").classList.remove("active");
    document.querySelector(".cart-page").classList.remove("open");
    document.querySelector("body").classList.remove("lock");
  });
}



// open authorization-popup

document.querySelectorAll(".fixed-menu-item.account").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if(document.querySelector(".authorization-popup").classList.contains("open")){
      document.querySelector(".fixed-menu-item.account").classList.remove("active");
      document.querySelector(".authorization-popup").classList.remove("open");
      document.querySelector("body").classList.remove("lock");
     
    } else {
      document.querySelectorAll(".fixed-menu-item").forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelectorAll(".catalog-nav").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelectorAll(".cart-page").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelector(".fixed-menu-item.account").classList.add("active");
      document.querySelector(".authorization-popup").classList.add("open");
      document.querySelector("body").classList.add("lock");
    }    
  });
});

document.querySelectorAll(".login-popup .btn-big").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if(document.querySelector(".authorization-popup").classList.contains("open")){
      document.querySelector(".fixed-menu-item.account").classList.remove("active");
      document.querySelector(".authorization-popup").classList.remove("open");
      document.querySelector("body").classList.remove("lock");
     
    } else {
      document.querySelectorAll(".fixed-menu-item").forEach((el) => {
        el.classList.remove("active");
      });

      document.querySelector(".login-popup").classList.remove("open");
      document.querySelectorAll(".catalog-nav").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelectorAll(".cart-page").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelector(".fixed-menu-item.account").classList.add("active");
      document.querySelector(".authorization-popup").classList.add("open");
      document.querySelector("body").classList.add("lock");
    }    
  });
});

document.querySelector(".fixed-menu-item.home").addEventListener("click", function (e) {
  document.querySelectorAll(".fixed-menu-item").forEach((el) => {
    el.classList.remove("active");
  });
  
  if (document.querySelector(".cart-page") !== null) {
    document.querySelector(".cart-page").classList.remove("open");
  }

  if (document.querySelector(".catalog-nav") !== null) {
    document.querySelector(".catalog-nav").classList.remove("open");
  }

  if (document.querySelector(".authorization-popup") !== null) {
    document.querySelector(".authorization-popup").classList.remove("open");
  }
  
  document.querySelector("body").classList.remove("lock");
  document.querySelector(".fixed-menu-item.home").classList.add("active");
});

// open order
function addListenerOrderInfo() {
  document.querySelectorAll(".vertical-list-item-info>.btn").forEach((el) => {
    if(!el.classList.contains("order-info-click")) {
      el.classList.add("order-info-click");
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.parentElement.classList.toggle("active");
      document.querySelector(".menu-item.active .mega-menu-item").scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector(".vertical-list-item-info.active .order-info").scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector(".menu-item.active .mega-menu-item").style.overflow ="hidden";
    });
  };
  document.querySelectorAll(".order-info .back_pg-btn").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      el.closest(".vertical-list-item-info").classList.remove("active");
      document.querySelector(".menu-item.active .mega-menu-item").style.overflow ="auto";
    });
  });
  });
}

addListenerOrderInfo();

// login popup
function openLoginPopup(){
       
  if (document.querySelector(".login-popup") !== null) {

    document.body.style.overflow = "hidden";
    document.querySelector(".login-popup").classList.add("open");

    window.addEventListener("click", function (e) {
  
      if (e.target.closest(".login-popup .close-popup") || e.target.closest(".login-popup .blue-btn")) {
        e.preventDefault();
        document.querySelector(".login-popup").classList.remove("open");
        document.body.style.overflow = "auto";
      }
    });
  }
}

// show sms verify 
function showSmsVerify(){
       
  if (document.querySelector(".sign-in__phone-code") !== null) {
    
    document.querySelector(".sign-in__content>form").style.display = "none";
    document.querySelector(".sign-in__phone-code").style.display = "flex";

    window.addEventListener("click", function (e) {
  
      if (!e.target.closest(".sign-in__phone-code")) {
        document.querySelector(".sign-in__content>form").style.display = "block";
        document.querySelector(".sign-in__phone-code").style.display = "none";
      }
    });
  }
  countdownSmsVerify();
}

function countdownSmsVerify() {
  document.getElementById("timer-counter").style.display= "block"
  document.querySelector(".timer-block .repeat-code-btn").style.display= "none"
  var seconds = 59;
  function tick() {
    var counter = document.getElementById("timer-counter");
    seconds--;
    counter.innerHTML =
      "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      document.querySelector(".timer-block .repeat-code-btn").style.display= "block"
      document.getElementById("timer-counter").style.display= "none"
    }
  }
  tick();
}

if (document.querySelector(".timer-block .repeat-code-btn") !== null) {
  document.querySelector(".timer-block .repeat-code-btn").addEventListener("click", function (e) {
    e.preventDefault();
    openChoicePopup()
  });
}

// choice popup
function openChoicePopup(){
       
  if (document.querySelector(".sign-in__choice") !== null) {

    document.body.style.overflow = "hidden";
    document.querySelector(".sign-in__choice").classList.add("open");
  }
}

if (document.querySelector(".sign-in__choice") !== null) {
  document.querySelector(".sign-in__choice-email").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sign-in__choice").classList.remove("open");
    document.querySelector(".sign-in__content>form").style.display = "block";
    document.querySelector(".sign-in__phone-code").style.display = "none";
    document.querySelector(".contacts-input-block.phone-block").classList.remove("open");
    document.querySelector(".contacts-input-block.email-block").classList.add("open");
  });
}

if (document.querySelector(".sign-in__choice") !== null) {
  document.querySelector(".sign-in__choice-phone").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sign-in__choice").classList.remove("open");
    document.querySelector(".sign-in__content>form").style.display = "block";
    document.querySelector(".sign-in__phone-code").style.display = "none";
  });

  document.querySelector(".sign-in__choice-repeat").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sign-in__choice").classList.remove("open");
    showSmsVerify();
  });


  document.querySelector(".sign-in__choice-cancel").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sign-in__choice").classList.remove("open");
    document.querySelector(".authorization-popup").classList.remove("open");
    document.body.style.overflow = "auto";
  });

}

// language popup
function openLanguagePopup(){
       
  if (document.querySelector(".language-popup") !== null) {

    document.body.style.overflow = "hidden";
    document.querySelector(".language-popup").classList.add("open");

    document.querySelector(".language-popup-cancel").addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.overflow = "auto";
      document.querySelector(".language-popup").classList.remove("open");
    });

    document.querySelectorAll(".language-popup-body p a").forEach((el) => {
      el.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        document.querySelector(".language-popup").classList.remove("open");
      });
    });

  }
}

if (document.querySelector(".select-lang") !== null) {
  document.querySelector(".select-lang").addEventListener("click", function (e) {
    e.preventDefault();
    openLanguagePopup();
  });
}


// show email verify 
function showEmailVerify(){
       
  if (document.querySelector(".contacts-input-block.email-block") !== null) {
    
    document.querySelector(".email-block-row.email").style.display = "none";
    document.querySelector(".email-block-row.pass").style.display = "flex";

    window.addEventListener("click", function (e) {
  
      if (!e.target.closest(".email-block-row.pass")) {
        document.querySelector(".email-block-row.email").style.display = "flex";
    document.querySelector(".email-block-row.pass").style.display = "none";
      }
    });
  }
}

// menu catalog
document.querySelectorAll(".main-menu > ul > .menu-item-has-children > a").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.parentElement.classList.toggle("active");
      document.querySelector(".catalog-nav").scrollTo({ top: 0, behavior: "smooth" });
      document.body.classList.add("menu-open");
    });
  });

document.querySelectorAll(".main-menu .btn-back").forEach((el) => {
  el.addEventListener("click", (event) => {
    el.closest(".active").classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

function slideDown(el) {
  el.style.overflow = "hidden";
  el.style.height = "0";
  el.style.display = "block";
  el.style.transition = "height 0.3s";
  el.style.height = el.scrollHeight + "px";
  setTimeout(() => {
    el.style.overflow = null;
    el.style.height = null;
    el.style.transition = null;
    el.style.display = null;
  }, 300);
}

function slideUp(el) {
  el.style.overflow = "hidden";
  el.style.display = "block";
  el.style.height = el.scrollHeight + "px";
  el.style.transition = "height 0.3s";
  setTimeout(() => {
    el.style.height = "0";
  }, 10);
  setTimeout(() => {
    el.style.overflow = null;
    el.style.display = null;
    el.style.height = null;
    el.style.transition = null;
  }, 300);
}

function fadeIn(el, display = "flex") {
  el.style.opacity = 0;
  el.style.display = display;
  el.style.transition = "opacity 0.3s";
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
  setTimeout(() => {
    el.style.transition = null;
    el.style.display = null;
    el.style.opacity = null;
  }, 300);
}

function fadeOut(el, display = "flex") {
  el.style.display = display;
  el.style.opacity = 1;
  el.style.transition = "opacity 0.3s";
  setTimeout(() => {
    el.style.opacity = 0;
  }, 10);
  setTimeout(() => {
    el.style.display = null;
    el.style.opacity = null;
    el.style.transition = null;
  }, 300);
}

// Counter in textarea
if (document.querySelector("#counter") !== null) {
  const messageEle = document.getElementById("message");
  const counterEle = document.getElementById("counter");
  messageEle.addEventListener("input", function (e) {
    const target = e.target;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    counterEle.innerHTML =
      `${currentLength}` + " з " + `${maxLength}` + " символiв";
  });
}

// countDown on banner
if (document.querySelector(".coutndown") !== null) {
  document.querySelectorAll(".coutndown").forEach((countDownElement)=>{
  
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let timeleft = JSON.parse(
    countDownElement.getAttribute("data-timeleft")
    ),
    distance =
      timeleft.days * day +
      timeleft.hours * hour +
      timeleft.minutes * minute +
      timeleft.seconds * second,
    x = setInterval(function () {
      let days,
      hours,
      minutes,
      seconds;
      days = Math.floor(distance / day);
      days = days < 10 ? "0" + days : days;
      (countDownElement.querySelector(".days").innerText = days),
        (hours = Math.floor((distance % day) / hour));
      hours = hours < 10 ? "0" + hours : hours;
      (countDownElement.querySelector(".hours").innerText = hours),
        (minutes = Math.floor((distance % hour) / minute)),
        (minutes = minutes < 10 ? "0" + minutes : minutes);
      (countDownElement.querySelector(".minutes").innerText = minutes),
        (seconds = Math.floor((distance % minute) / second)),
        (seconds = seconds < 10 ? "0" + seconds : seconds);
        countDownElement.querySelector(".seconds").innerText = seconds;
      var sec = Math.floor((distance % minute) / second);
      distance = distance - second;
    }, second);

  })
}

// filters open

if (document.querySelector(".filters-row-item") !== null) {
  
  document.querySelectorAll(".filters-row-item>span").forEach((el) => {
    el.addEventListener("click", (event) => {
      document.querySelectorAll(".filters-row-item").forEach((item) => {
        item.classList.remove("open");
      });

      if (el.parentElement.querySelector(".widget-area")!== null) {
        document.body.style.overflow = "hidden";
      el.closest(".filters-row-item").classList.add("open");
    } 
      
    });
  });

  if (document.querySelector(".filters-heder") !== null){
    document.querySelector(".filters-heder .close").addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.overflow = "auto";
      document.querySelectorAll(".filters-row-item").forEach((item) => {
        item.classList.remove("open");
      });
  });
  }
  
  document.querySelectorAll(".filter__header").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.parentElement.classList.toggle("active");
      document.querySelector(".filters-row-item>.widget-area").scrollTo({ top: 0 });
      el.closest(".filters-row-item>.widget-area").style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll(".filter-heder .close").forEach((el) => {
  el.addEventListener("click", (event) => {
    el.closest(".active").classList.remove("active");
    el.closest(".filters-row-item>.widget-area").style.overflow = "auto";
    document.body.style.overflow = "auto";
  });
  });

}

// checkout page beautic-cupon active
if (document.querySelector(".beautic-cupon") !== null) {
 
  document.getElementById('cupon-toggle').addEventListener('change', function() {
      if (this.checked) {
        document.querySelector(".beautic-cupon").classList.add('beautic-cupon-active');
      } else {
        document.querySelector(".beautic-cupon").classList.remove('beautic-cupon-active');
      }
  });
}

// tab START

function openOption(evt, optionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(optionName).style.display = "block";
  evt.currentTarget.className += " active";
}
// tab END

$(function () {
  //select2
  $('.js-example-basic-single').select2({
    minimumResultsForSearch: Infinity 
  });
  
  // slider banner
  $(".banner-carousel").owlCarousel({
    dots: true,
    nav: true,
    loop: true,
    items: 1,
    margin: 5,
    autoplay: true,
    slideTransition: "linear",
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  $(".akcia-carousel").owlCarousel({
    dots: true,
    nav: true,
    loop: false,
    items: 1,
    margin: 5,
    autoplay: true,
    slideTransition: "linear",
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  //  product gallery carousel
  $(".product-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: false,
    items: 1,
    margin: 5,
  });

  //  posts carousel
  $(".posts-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: true,
    autoWidth: true,
    margin: 8,
  });

  //  cards carousel
  $(".cards-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: true,
    items: 1,
    margin: 5,
  });

  // accordion BEGIN
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
  });

  //review form
  $(".open-review-form").on("click", function (e) {
    e.preventDefault();
    $(".open-review-form").hide();
    $(".add-review").slideToggle();
  });

  $(".add-review-close").on("click", function (e) {
    e.preventDefault();
    $(".open-review-form").show();
    $(".add-review").slideToggle();
  });

  $(".header-search-form input").on("focus", function () {
    $(".header").addClass("search-open");
    $(".header-row").slideUp(250);
    $(".search-filter").slideDown();
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".header").length == 0) {
      $(".header").removeClass("search-open");
      $(".header-row").slideDown(250);
      $(".search-filter").slideUp();
    }
  });

  // sing in email/phone
  $(".sign-in-btn").on("click", function (e) {
    e.preventDefault();
    $(".email-block, .phone-block").toggleClass("open");
  });

  // change account data
  $(".account-data input").on("click", function (e) {
    $(".account-data .btn").removeClass("not-active");
  });
});
