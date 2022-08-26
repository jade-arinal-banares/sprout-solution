$(document).ready(function(){
    $("#sprout-search-data").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#sprout-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});


