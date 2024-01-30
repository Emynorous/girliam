function reverse(input) {
    return input.split('').reverse().join('');
  }
  var text = prompt("Zadejte textový řetězec:");
  var reversedText = reverse(text);
  console.log("Původní text:", text);
  console.log("Reverzní text:", reversedText);
  