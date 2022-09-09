const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// input
var icSearch = $(".icon-search-js");
var ipSearch = $(".search-input");

icSearch.onclick = function() {
    ipSearch.classList.toggle("open")
    ipSearch.disabled = !ipSearch.disabled 
}



// header menu
const icMenu = $(".header__btn")
const opMenu = $(".header__container--menu")
const ovMenu = $(".header__overlay")


icMenu.onclick = function() {
    opMenu.classList.add("appear")
    ovMenu.classList.add("op")
}

//menu close
const icClose = $(".header__close")

icClose.onclick = function() {
    opMenu.classList.remove("appear")
    ovMenu.classList.remove("op")
}

const bDy = $("body");


ovMenu.onclick = function() {
    opMenu.classList.remove("appear")
    ovMenu.classList.remove("op")
}


//arrow-up top scroll
const scTop = $(".top__scroll")

window.addEventListener("scroll", function() {
  if(this.document.documentElement.scrollTop > 200
    || this.document.body.scrollTop) {
    scTop.classList.add("appear")
  }else{
    scTop.classList.remove("appear")
  }
})

scTop.addEventListener("click", function() {
  var header = $(".header");
  header.scrollIntoView({ behavior: "smooth"});
  
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
})



// scroll header

const scNav = $(".header__navbar")
const scSuv = $(".header__subnav")

window.addEventListener("scroll", myFunction)

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50 || 
    document.body.scrollTop > 50) {
    scNav.classList.add("hide")
    scSuv.classList.add("scroll")
  } else {
    scNav.classList.remove("hide")
    scSuv.classList.remove("scroll")
  }
}


//active navbar
var navbar = $(".header__container-list");
var navJs = navbar.getElementsByTagName("a");

for (var i = 0; i < navJs.length; i++) {
  navJs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("acti");
  current[0].className = current[0].className.replace("acti","");
  this.className += "acti";
  });
}

//active travel

var travelJs = document.getElementsByClassName("search__travel-item");
for (var i = 0; i < travelJs.length; i++) {
  travelJs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// loading page
// $(window).on('load', function(event) {
//   $('body').removeClass('preloading');
//      $('.loader-page').delay(1000).fadeOut('fast');
//   // $('.loader-page').delay(1000).fadeOut('fast');
// });