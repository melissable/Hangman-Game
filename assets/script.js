window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var words = ["synchronize", 
        "europe", 
        "chimpanzee", 
        "marinara", 
        "kettle", 
        "christmas", 
        "lobster",
        "arizona",
        "seagull",
        "aviatrix"];
  
  var chosenWord ;        // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var chances ;           // Chances
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showChances = document.getElementById("chances");
    console.log(showChances)

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < chosenWord.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      console.log(chosenWord)
      guess.setAttribute('class', 'guess');
      if (words[i] === "-") {
        guess.innerHTML = "-";
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show chances
   comments = function () {
    showChances.innerHTML = "You have " + chances + " chances left.";
    if (chances < 1) {
      showChances.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter=== guesses.length) {
        showChances.innerHTML = "You Win!";
      }
    }
  }

      // Image
  
   // Hangman
   // for (var i = 0; i <= 12; i++) {
   //   showChances.innerHTML = <<img src="assets/01wrong.png">

   // }

    

  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord.charAt(i) === guess) {
          guesses[i].innerHTML = guess;
          counter++;
        } 
      }
      var j = (words.indexOf(guess));
      if (j === -1) {
        chances -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
  
  // Play
  play = function () {    

    chosenWord = words[Math.floor(Math.random() * words.length)];
    ///chosenWord = words.replace(/\s/g, "-");
    console.log(words);
    buttons();

    guesses = [ ];
    chances = 10;
    counter = 0;
    result();
    comments();
  }

  play();
  

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


