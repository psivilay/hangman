$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var phrase = $("#puzzle-phrase").val();
    var array = phrase.split("");
    var vowels = ["a", "e", "i", "o", "u"]


    for (var p= 0; p < array.length; p += 1) {
      for (var v=0; v < vowels.length; v +=1) {
        if (array[p] === vowels[v]) {
          array.splice(p,1,"-");
        } else {

        }
      }
    }

    $("#user-input").hide();

    $("#output .user-phrase").text(array.join(""));

  });
});
