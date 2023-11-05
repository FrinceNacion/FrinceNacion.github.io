let triggerPoint = $(".headNav").offset().top + $(".headNav").height();
let dateNow = new Date();
let monthNow = dateNow.getMonth() + 1;

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= triggerPoint) {
      $(".headNav").addClass("fixed-header");
      console.log($(window).scrollTop());
    } else {
      $(".headNav").removeClass("fixed-header");
    }
  });

  $("#dateNow").html(
    "Date published: " +
      monthNow +
      "/" +
      dateNow.getDate() +
      "/" +
      dateNow.getFullYear()
  );
});
