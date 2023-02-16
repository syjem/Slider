
$(document).ready(function() {
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $("#prev").click(function() {
    showSlides(slideIndex -= 1);
  });
  $("#next").click(function() {
    showSlides(slideIndex += 1);
  });

  function showSlides(n) {
    var i;
    var slides = $("#images img");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    slides.hide();
    slides.eq(slideIndex - 1).show();
  }
});