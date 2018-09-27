$(function() {
  $('body').scrollspy({target: ".navbar", offset: 116});

  $(".nav-item a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){
      window.location.hash = hash;
    });
  }
});

  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  nT = $('#navbar-trigger')[0];
  hT = nT.offsetTop + nT.offsetHeight - 20;

  var navbarShown = false;
  $(window).scroll(function() {
    var wS = $(this).scrollTop();
    if ((wS > hT && !navbarShown) || (wS < hT && navbarShown)) {
      navbarShown = !navbarShown;
      $('.navbar').toggleClass('navbar-hidden');
      $('#navbar').collapse('hide');
    }
  });
});
