var url = "/";
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  var option1 = 50;
  var option2 = 50;
  var vote1 = document.querySelector('#vote1');
  var vote2 = document.querySelector('#vote2');

  primus.on('data', function received(data) {
    var question = document.querySelector('#question');
    question.innerHTML = data.question;
    vote1.innerHTML = data.answer1;
    vote2.innerHTML = data.answer2;
    console.log('option 1: ' + option1 + ' option 2: ' + option2);
  });


  // klikken op submit -> naar server sturen
  document.querySelector('#submit').addEventListener("click", function(e){
    var q = document.querySelector('#question');
    var ans1 = document.querySelector('#answer1');
    var ans2 = document.querySelector('#answer2');

    primus.write({ 
      question: q.value,
      answer1: ans1.value,
      answer2: ans2.value
    });

    e.preventDefault();
  });

  document.querySelector('#vote1').addEventListener("click", function(e){
    
  });