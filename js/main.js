"use strict";

 // preload
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded");
  loading();  
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
        document.getElementById('percentage').innerText = `${startWidth}%`;
      }
    }
  });
}

//   back to page
if (document.querySelector(".back_pg-btn") !== null) {
  document
    .querySelector(".back_pg-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.history.back();
    });
}

// open catalog
document.querySelectorAll(".fixed-menu-item.catalog").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll(".fixed-menu-item").forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelector(".fixed-menu-item.catalog").classList.toggle("active");
    document.querySelector('.catalog-nav').classList.toggle("open");
    if (document.querySelector(".menu-item-has-children.active") !== null) {
      document.querySelector(".menu-item-has-children.active").classList.remove("active");
    }
  });
});

// open cart
document.querySelectorAll(".fixed-menu-item.cart").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll(".fixed-menu-item").forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelector(".fixed-menu-item.cart").classList.toggle("active");
    document.querySelector('.cart-page').classList.toggle("open");
    
  });
});

// open order
document.querySelectorAll(".vertical-list-item-info .btn").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    el.parentElement.classList.toggle("active");
    // document.body.classList.add("menu-open");
  });
});

document.querySelectorAll(".order-info .back-block").forEach((el) => {
el.addEventListener("click", (event) => {
  el.closest(".active").classList.remove("active");
  // document.body.classList.remove("menu-open");
});
});

// menu catalog
document.querySelectorAll(".main-menu > ul > .menu-item-has-children > a").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.parentElement.classList.toggle("active");
      document.querySelector('.catalog-nav').scrollTo({top: 0, behavior: "smooth"});
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
if (document.querySelector(".coutndown-block") !== null) {
	let days = document.getElementById("days"),
	  hours = document.getElementById("hours"),
	  minutes = document.getElementById("minutes"),
	  seconds = document.getElementById("seconds");
	const second = 1000,
	  minute = second * 60,
	  hour = minute * 60,
	  day = hour * 24;
	let countDown = new Date("october 29, 2024 00:00:00").getTime(),
	  x = setInterval(function () {
		let now = new Date().getTime(),
		  distance = countDown - now;
		days = Math.floor(distance / day);
		days = days < 10 ? "0" + days : days;
		(document.getElementById("days").innerText = days),
		  (hours = Math.floor((distance % day) / hour));
		hours = hours < 10 ? "0" + hours : hours;
		(document.getElementById("hours").innerText = hours),
		  (minutes = Math.floor((distance % hour) / minute)),
		  (minutes = minutes < 10 ? "0" + minutes : minutes);
		(document.getElementById("minutes").innerText = minutes),
		  (seconds = Math.floor((distance % minute) / second)),
		  (seconds = seconds < 10 ? "0" + seconds : seconds);
		document.getElementById("seconds").innerText = seconds;
		var sec = Math.floor((distance % minute) / second);
	  }, second);
  };

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

  //  product gallery carousel
  $(".product-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: true,
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
    items:1,
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
    $(".header-row").slideUp();
    $(".search-filter").slideDown();
  });

  // sing in email/phone

  $(".sign-in-btn").on("click", function (e) {
    e.preventDefault();
    $(".email-block").toggleClass("open");
    $(".phone-block").toggleClass("open");
  });

});






