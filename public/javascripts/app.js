var url = "/";
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  var submit = document.querySelector('#submit');
  var option1 = 50;
  var option2 = 50;
 
  var q = "";
  var ans1 = "";
  var ans2 = "";
  var vote1 = document.querySelector('#vote1');
  var vote2 = document.querySelector('#vote2');

  primus.on('data', function received(data) {
    var question = document.querySelector('#question');
    question.innerHTML = data.question;
    vote1.innerHTML = data.answer1;
    vote2.innerHTML = data.answer2;
    vote1.style.height = data.option1*2 + "px";
    vote2.style.height = data.option2*2 + "px";
    q = data.question;
    ans1 = data.answer1;
    ans2 = data.answer2;
    console.log('option 1: ' + option1 + ' option 2: ' + option2);
  });


  // klikken op submit -> naar server sturen
  if(submit != null){
submit.addEventListener("click", function(e){
    q = document.querySelector('#question').value;
    ans1 = document.querySelector('#answer1').value;
    ans2 = document.querySelector('#answer2').value;
    option1 = 50;
    option2 = 50;
    primus.write({ 
      question: q,
      answer1: ans1,
      answer2: ans2,
      option1: option1,
      option2: option2
    });

    e.preventDefault();
  });
  }

  if(vote1 != null){
  vote1.addEventListener("click", function(e){
    option1++;
    option2--;
    primus.write({ 
      question: q,
      answer1: ans1,
      answer2: ans2,
      option1: option1,
      option2: option2
    });
  });
  }

  if(vote2 != null){
    vote2.addEventListener("click", function(e){
      option1--;
      option2++;
      primus.write({ 
        question: q,
        answer1: ans1,
        answer2: ans2,
        option1: option1,
        option2: option2
      });
    });
    }