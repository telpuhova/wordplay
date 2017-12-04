const reducer = (accumulator, currentValue) => accumulator + currentValue;

$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#input1").val();
    var words = sentence.split(' ');

    // words.forEach(function(word) {
    //   if (word.length >= 3) {
    //     var letters = word.split('');
    //     letters.reverse();
    //     console.log(letters);
    //     word = letters.join('');
    //   }
    // });

    // var newSentence = words.map(function(word) {
    //   if (word.length >= 3) {
    //     var letters = word.split('');
    //     letters.reverse();
    //     word = letters.join('');
    //     return word;
    //   }
    // });

    var newSentence = words.filter(word => word.length > 2).map(function(word) {
        var letters = word.split('');
        letters.reverse();
        word = letters.reduce(reducer);
        return word;
    });

    var newSentence1 = newSentence.join(' ');
    $(".output").text(newSentence1);
  });
});
