var isExpanded = false;
var delayTime;
var onLanding=true;
var mq = window.matchMedia( "(max-width: 768px)" );

let height = window.innerHeight;

if (!mq.matches) {
  $(document).on('scroll', function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        $('#brandImg').addClass("reduce-logo");
        $('#navbarNav').addClass("reduce-txt");
        $('.navbar').addClass("reduce-bar");
      } else {
        $('#brandImg').removeClass("reduce-logo");
        $('#navbarNav').removeClass("reduce-txt");
        $('.navbar').removeClass("reduce-bar");
      }
  });
}

$(document).ready(function() {
  setTimeout(function(){
    if($('main').css('opacity') == '0'){
      $('main').css({opacity: 1})
    }
  },300)
});

function showMore(){
  let scrollPos = $(window).scrollTop();

  if (mq.matches) {
    if(!isExpanded) {
      toggleProjects();
      $('html, body').animate({scrollTop: scrollPos+300},0);
    }
    else{
      $('html, body').animate({scrollTop: height},0);
      setTimeout(toggleProjects,300)
    }
    isExpanded=!isExpanded;
  }
  else {
    if(!isExpanded) {
      toggleProjects();
      $('html, body').animate({scrollTop: scrollPos+100},0);
    }
    else{
      $('html, body').animate({scrollTop: height},0);
      setTimeout(toggleProjects,300);
    }
    isExpanded=!isExpanded;
  }

function toggleProjects() {
    $('.pr-thumb:not("#pr-main1, #pr-main2, #pr-main3, #pr-main4, #pr-main5")').toggleClass('show-more');
    $('.pr-more').toggleClass('order-end');
    $('.more, .less').toggleClass('d-none d-inline-block');
    $('.pr-more').toggleClass('col-md-12');
  }
}

  $(document).scrollTop(0);
  $('.pr-more').click(showMore);

  var ease2 = 6;
  jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    setInterval(function(){
      xp += ((mouseX - xp)/ease2);
      yp += ((mouseY - yp)/ease2);

      var chaseSize1 = 20-Math.abs((mouseX - xp)/ease2);
      var chaseSize2 = 8+Math.abs((mouseX - xp)/30)
      $("#cir1").css({left: xp +'px', top: yp +'px'});
      $("#cir1").css({width: chaseSize1 +'px', height: chaseSize1 +'px'});
      $("#cir2").css({width: chaseSize2 +'px', height: chaseSize2 +'px'});
      $("#cir2,#tip3,#tip2,#tip1").css({left: mouseX +'px', top: mouseY +'px'});
    }, 20);
  });

  $("#underlined1,#underlined2,#underlined3").mouseover(function() {
    $('#cir1').addClass('cursor-select');
  });

  $("#underlined1,#underlined2,#underlined3").mouseleave(function() {
    $('#cir1').removeClass('cursor-select');
  });

  $("#underlined3").mouseover(function() {
    $('#tip3').addClass('d-block');
  });

  $("#underlined3").mouseleave(function() {
    $('#tip3').removeClass('d-block');
  });

  $("#underlined2").mouseover(function() {
    $('#tip2').addClass('d-block');
  });

  $("#underlined2").mouseleave(function() {
    $('#tip2').removeClass('d-block');
  });

  $("#underlined1").mouseover(function() {
    $('#tip1').addClass('d-block');
  });

  $("#underlined1").mouseleave(function() {
    $('#tip1').removeClass('d-block');
  });
