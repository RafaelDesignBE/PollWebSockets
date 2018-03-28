var url = "/";
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });


  primus.on('data', function received(data) {
    var title = document.querySelector('#title');
    title.innerHTML = data.answer1;
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