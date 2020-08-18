  const startBtn = document.getElementById("startQuiz")
  var questionBtn = document.getElementById("quizQuestions")
  var titleEl = document.querySelector(".card-title");
  var cardTextEl = document.querySelector(".card-text");
  var footerEl = document.querySelector(".card-footer")

  var btn1 = questionBtn.children[0];
  var btn2 = questionBtn.children[1];
  var btn3 = questionBtn.children[2];
  

  startBtn.addEventListener("click", startGame)
  
  function startGame() {
          event.preventDefault();
          score = 0
          startBtn.style.display = "none";
          questionBtn.style.display = "inline-block";
          startTimer();
          generateQuestion();
      
  }
  // Timer Variables
  var timerEl = document.getElementById("timer");
  var secondsLeft = 60;
  var timeInterval;
  var penalty = document.getElementById("penalty");
 
  // Timer component
  function startTimer() {
      console.log("Time has started")
        timeInterval = setInterval(function() {
            console.log(secondsLeft);
            secondsLeft--;
            timerEl.textContent = "Time remaining 0:" + getFormattedSeconds();
            if (secondsLeft === 0) {
                timerEl.textContent = ("Time remaining: 0:00");
                clearInterval(timeInterval);
                stopTimer();
            } else if (questionNum >=5) {
                clearInterval(timeInterval);
            }
    
        }, 1000);
  }

  function getFormattedSeconds() {
      var formattedSeconds;
    
      if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
      } else {
        formattedSeconds = secondsLeft;
      }
    
      return formattedSeconds;
  }

  function stopTimer() {
    if (secondsLeft > 0) {
        console.log(secondsLeft);
        titleEl.textContent = ("You win!")
        titleEl.style = ("font-size: 30px; color: green;") 
    }else {
        secondsLeft = 0
        console.log(secondsLeft)
        titleEl.textContent = ("You lost.")
        titleEl.style = ("font-size: 30px; color: red;")
    }
    score = secondsLeft;
    questionBtn.style = ("display: none;")
    cardTextEl.style = ("display: none;")
    
    //storeLocal();
  }

  const questions = [
        {1: "What is Javascript?",
            a: ["Scripting Language", "A book", "Beets"]},
     
        {2: "What does CSS stand for?",
            a: ["Complex Style Sheet", "Cascading Style Sheet", "Connecticut Style Sheet"]},
    
        {3: "Which HTML tag us used to define an internal style sheet",
            a: ["<body>", "<html>", "<css>"]},
    
        {4: "Which of the following is not a datatype?", 
            a: ["number", "string", "prompt"]},
    
        {5: "In which HTML element is Javascript placed in? ",
            a: ["<head>","<script>","<javascript>"]}
    ]


    let questionNum = 0
    var index = questionNum

  function generateQuestion() {
    penalty.textContent = ("");
        if (questionNum < 5){
            for (var i = 0; i < questions.length; i++){
                footerEl.textContent = "";
                titleEl.textContent = ("Question # " + parseInt(questionNum + 1));
                
                cardTextEl.textContent = (questions[index][index + 1]);
                  
                  btn1.textContent = questions[index].a[0];
                  console.log(questions[index].a[0]);
                  btn2.textContent = questions[index].a[1];
                  console.log(questions[index].a[1]);
                  btn3.textContent = questions[index].a[2];
                  console.log(questions[index].a[2]);
                  
            };
        } else {
            stopTimer();
        }   
    };

    questionBtn.addEventListener("click", function(){

      userChoice = event.target.value;
      console.log(userChoice);
      checkAnswer();
  
  });

  
