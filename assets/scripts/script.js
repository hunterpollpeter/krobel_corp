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

  var options = {
    useEasing: true
  };
  var pigletCount = 10.4;
  var moneyCount = 484;
  var duration = 3;
  var pigletAnim = new CountUp('piglets', 0, pigletCount, 1, duration, {
    useEasing: true,
    suffix: 'm'
  });
  pigletAnim.start(function() {
  	pigletAnim.update(pigletCount);
  });

  var moneyAnim = new CountUp('money', 0, moneyCount, 0, duration, {
    useEasing: true,
    prefix: '$',
    suffix: 'm'
  });
  moneyAnim.start(function() {
  	moneyAnim.update(moneyCount);
  });
});
