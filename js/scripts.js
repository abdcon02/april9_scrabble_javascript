var getScore = function(word) {
  var alphabet = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
                  'd': 2, 'g': 2,
                  'b': 3, 'c': 3, 'm': 3, 'p': 3,
                  'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
                  'k': 5,
                  'j': 8, 'x': 8,
                  'q': 10, 'z': 10};

  //take the word and strip out everything but letters then split it into an array
  var word_array = word.toLowerCase().replace(/[^a-z]/g, "").split("");
  var count = 0;

  word_array.forEach(function(letter) {
    count += alphabet[letter];
  });

  return count;
}

$(document).ready(function() {

  $("form#score").submit(function(event) {

    var word = $("#word").val();

    var score = getScore(word);

    $("#points").text(score);
    $("#return").show();

    event.preventDefault();
  });

});
