"use strict";


  // preload home page
  window.setTimeout(function () {
    document.body.classList.add("loaded_hiding");
  }, 1400);
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 1500);

	//   back to page
  if (document.querySelector(".back_pg-btn") !== null) {
	document.querySelector('.back_pg-btn').addEventListener("click", function (e) {
	  e.preventDefault();
	  window.history.back();
	});
  };

  if (document.querySelector("#counter") !== null) {const messageEle = document.getElementById("message");
  const counterEle = document.getElementById("counter");

  messageEle.addEventListener("input", function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute("maxlength");

    // Count the current number of characters
    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}` + " з " + `${maxLength}` + " символiв";
  });}

$(function () {


  // var demoColorArray = ['red','blue','green','yellow','purple','gray'];
	// var colorIndex = Math.floor(Math.random()*demoColorArray.length);
	// setSkin(demoColorArray[colorIndex]);
	

	// /* RANDOM LARGE IMAGES FOR DEMO PURPOSES */	
	// var demoImgArray = ['http://www.hdwallpapers.in/walls/halloween_2013-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_print_tech_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/ama_dablam_himalaya_mountains-wide.jpg', 'http://www.hdwallpapers.in/walls/arrow_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/anna_in_frozen-wide.jpg', 'http://www.hdwallpapers.in/walls/frozen_elsa-wide.jpg', 'http://www.hdwallpapers.in/walls/shraddha_kapoor-wide.jpg', 'http://www.hdwallpapers.in/walls/sahara_force_india_f1_team-HD.jpg', 'http://www.hdwallpapers.in/walls/lake_sunset-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_movie_cloudy_with_a_chance_of_meatballs_2-wide.jpg', 'http://www.hdwallpapers.in/walls/bates_motel_2013_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/krrish_3_movie-wide.jpg', 'http://www.hdwallpapers.in/walls/universe_door-wide.jpg', 'http://www.hdwallpapers.in/walls/night_rider-HD.jpg', 'http://www.hdwallpapers.in/walls/tide_and_waves-wide.jpg', 'http://www.hdwallpapers.in/walls/2014_lamborghini_veneno_roadster-wide.jpg', 'http://www.hdwallpapers.in/walls/peeta_katniss_the_hunger_games_catching_fire-wide.jpg', 'http://www.hdwallpapers.in/walls/captain_america_the_winter_soldier-wide.jpg', 'http://www.hdwallpapers.in/walls/puppeteer_ps3_game-wide.jpg', 'http://www.hdwallpapers.in/walls/lunar_space_galaxy-HD.jpg', 'http://www.hdwallpapers.in/walls/2013_wheelsandmore_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/destiny_2014_game-wide.jpg', 'http://www.hdwallpapers.in/colors_of_nature-wallpapers.html', 'http://www.hdwallpapers.in/walls/sunset_at_laguna_beach-wide.jpg'];
	
	// // Stripes interval
	// var stripesAnim;
	// var calcPercent;
	// let $progress = $('.progress-bar'),
  //     $percent = $('.percentage'),
  //     $stripes = $('.progress-stripes');
  //     // $stripes.text('////////////////////////');
	
	// /* CHANGE LOADER SKIN */
	// $('.skin').click(function(){
	// 	var whichColor = $(this).attr('id');
	// 	setSkin(whichColor);
	// });
	
	// // Call function to load array of images
	// preload(demoImgArray);
	
	// // Call function to animate stripes
	// stripesAnimate(); 
	
	// /* WHEN LOADED */
	// $(window).load(function() {
	// 	loaded = true;
	// 	$progress.animate({
	// 		width: "100%"
	// 	}, 100, function() {
	// 		$('span').text('Loaded!').addClass('loaded');
	// 		$percent.text('100%');
	// 		clearInterval(calcPercent);
	// 		clearInterval(stripesAnim);
	// 	});
	// });
	
	// /*** FUNCTIONS ***/
	
	// /* LOADING */
	// function preload(imgArray) {
	// 	var increment = Math.floor(100 / imgArray.length);
	// 	$(imgArray).each(function() {
	// 		$('<img>').attr("src", this).load(function() {
	// 			$progress.animate({
	// 				width: "+=" + increment + "%"
	// 			}, 100);
	// 		});
	// 	});
	// 	calcPercent = setInterval(function() {
			
	// 		//loop through the items
	// 		$percent.text(Math.floor(($progress.width() / $('.loader').width()) * 100) + '%');
			
	// 	});
	// }
	
	// /* STRIPES ANIMATION */
	// function stripesAnimate() {
	// 	animating();
	// 	stripesAnim = setInterval(animating, 2500);
	// }

	// function animating() {
	// 	$stripes.animate({
	// 		marginLeft: "-=30px"
	// 	}, 2500, "linear").append('/');
	// } 
	
	// function setSkin(skin){
	// 	$('.loader').attr('class', 'loader '+skin);
	// 	$('span').hasClass('loaded') ? $('span').attr('class', 'loaded '+skin) : $('span').attr('class', skin);
	// }








  

  $( ".header-search-form input" ).on( "focus", function() {
    $(".header").addClass("search-open");
    $(".header-row").slideUp();
    $(".search-filter").slideDown();
  } );




  // SLIDERS START

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

 //   product gallery carousel

 $(".product-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: true,
    items: 1,
    margin: 5,
  });

  // accordion BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	// accordion END

	$('.open-review-form').on("click", function(e) {
		e.preventDefault();
		$('.open-review-form').hide();
		$('.add-review').slideToggle();
	});

	$('.add-review-close').on("click", function(e) {
		e.preventDefault();
		$('.open-review-form').show();
		$('.add-review').slideToggle();
	});

});

// countDown
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
}




function slideDown(el) {
	el.style.overflow = 'hidden';
	el.style.height = '0';
	el.style.display = 'block';
	el.style.transition = 'height 0.3s';
	el.style.height = el.scrollHeight + 'px';
	setTimeout(() => {
	  el.style.overflow = null;
	  el.style.height = null;
	  el.style.transition = null;
	  el.style.display = null;
	}, 300);
  }
  
  function slideUp(el) {
	el.style.overflow = 'hidden';
	el.style.display = 'block';
	el.style.height = el.scrollHeight + 'px';
	el.style.transition = 'height 0.3s';
	setTimeout(() => {
	  el.style.height = '0';
	}, 10);
	setTimeout(() => {
	  el.style.overflow = null;
	  el.style.display = null;
	  el.style.height = null;
	  el.style.transition = null;
	}, 300);
  }
  
  function fadeIn(el, display = 'flex') {
	el.style.opacity = 0;
	el.style.display = display;
	el.style.transition = 'opacity 0.3s';
	setTimeout(() => {
	  el.style.opacity = 1;
	}, 10);
	setTimeout(() => {
	  el.style.transition = null;
	  el.style.display = null;
	  el.style.opacity = null;
	}, 300);
  }
  
  function fadeOut(el, display = 'flex') {
	el.style.display = display;
	el.style.opacity = 1;
	el.style.transition = 'opacity 0.3s';
	setTimeout(() => {
	  el.style.opacity = 0;
	}, 10);
	setTimeout(() => {
	  el.style.display = null;
	  el.style.opacity = null;
	  el.style.transition = null;
	}, 300);
  }




document.querySelectorAll('.main-menu > ul > .menu-item-has-children > a').forEach((el) => {
	el.addEventListener('click', (event) => {
		event.preventDefault();
		el.parentElement.classList.toggle('active');
		document.body.classList.add('menu-open');
	});
});
  
document.querySelectorAll('.main-menu .btn-back').forEach((el) => {
	el.addEventListener('click', (event) => {
		el.closest('.active').classList.remove('active');
		document.body.classList.remove('menu-open');
	});
});




