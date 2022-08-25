$(document).ready(function(){
    $("#sprout-search-data").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#sprout-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


