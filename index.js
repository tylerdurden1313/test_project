

$("#foc1").one("click",function(){
  $("#specs1").hide();
  $('.bar2').css('top', '-=24%');
    $('.bar3').css('top', '-=24%');
    $('.bar4').css('top', '-=24%');
    $('.bar5').css('top', '-=24%');
    $('.bar6').css('top', '-=24%');
  $(this).attr("src","Polygon 10.png");
});
$("#win").on("click",function(){
  $(".wind").css("visibility","visible");
  $(".sidebar").css("opacity","0.4");
  $("nav").css("opacity","0.4");
    $(".main").css("opacity","0.4");
});
$("#close").on("click",function(){
  $(".wind").css("visibility","hidden");
  $(".sidebar").css("opacity","1");
  $("nav").css("opacity","1");
    $(".main").css("opacity","1");
});
$("#create").on("click",function(){
  $(".wind").css("visibility","hidden");
  $(".sidebar").css("opacity","1");
  $("nav").css("opacity","1");
    $(".main").css("opacity","1");
});
