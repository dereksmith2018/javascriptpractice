$(document).ready(function() {
  $(".clickable").click(function() {
    $(".item-showing").slideToggle();
    $(".item-hidden").slideToggle();
  });
  $(".hiddenclickable").click(function(){
    $("#anotherImage").slideToggle();
  });
  $(".sandcastle").click(function() {
    $("#thirdImage").fadeToggle();
  });
});
