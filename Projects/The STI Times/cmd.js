let triggerPoint = $(".headNav").offset().top + $(".headNav").height();
let dateNow = new Date();
let monthNow = dateNow.getMonth() + 1;

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= triggerPoint) {
      $(".headNav").addClass("fixed-header");
      $(".collapsible").addClass("fixed-header toc-fixed");
      console.log($(window).scrollTop());
    } else {
      $(".headNav").removeClass("fixed-header");
      $(".collapsible").removeClass("fixed-header toc-fixed");
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

  $(document).ready(function () {
    $(".collapsible").collapsible();
  });
});
