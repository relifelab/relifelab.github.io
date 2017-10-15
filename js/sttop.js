 $(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.sttop').fadeIn();
      } else {
          $('.sttop').fadeOut();
      }
  });
  $('.sttop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
  });
 });