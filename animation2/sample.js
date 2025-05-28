$(window).scroll(function() {
  $('.fade-in').each(function() {
    var pos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    if (scroll > pos - wHeight + wHeight/100){
      $(this).addClass('inview');
    }
  });
});