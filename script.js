$(function(){
    $(`.menu_btn`).click(function () {
        $('.menu_btn, .menu_wrapper, .mask').toggleClass('open');
    });
    })

 $(function(){
      $(`.top-btn`).click(function () {
          $('.top-contant').toggleClass('open');
      });
      })

      $(function(){
        $(`.top-c-btn`).click(function () {
            $('.top-contant').toggleClass('close');
        });
        })

$(function() {
  $(window).scroll(function() {
    $(".warks_img").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 180) {
        $(this).addClass("contantsIn");
      }
    });
  });
});




