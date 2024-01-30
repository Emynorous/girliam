function split(input) {
    var words = input.split(' ');
    console.log("Jednotlivá slova:");
    for (var i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  }

  var text = prompt("Zadejte textový řetězec:");
  split(text);
  