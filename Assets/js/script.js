// Questions/ Answers

let questions = [
    {
    numb: 1,
    question: "On what platform did the original Kingdom Hearts game come out on?",
    answer: "PlayStation",
    options: [
      "GameBoy",
      "PlayStation",
      "Super Nintendo",
      "Nintendo 64"
    ]
  },
    {
    numb: 2,
    question: "What video game company made Kingdom Hearts?",
    answer: "Square Enix",
    options: [
      "Sega",
      "Bandai/Namco",
      "Konami",
      "Square Enix"
    ]
  },
    {
    numb: 3,
    question: "Who is Sora's nobody?",
    answer: "Roxas",
    options: [
      "Roxas",
      "Riku",
      "Kairi",
      "Xehanort"
    ]
  },
    {
    numb: 4,
    question: "What does Riku want to name the boat in the first game?",
    answer: "High Wind",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "High Wind",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "In what world does Sora meet Donald and Goofy the first time?",
    answer: "Traverse Town",
    options: [
      "Twilight Town",
      "Hollow Bastion",
      "Castle Oblivion",
      "Land of Departures"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
    numb: 6,
    question: "Who is 'the king?'",
    answer: "Mickey",
    options: [
      "Mickey",
      "Sora",
      "Xemnas",
      "Pete"
    ]
  },

  {
    numb: 7,
    question: "What is Hollow Bastion's original name?",
    answer: "Radian Garden",
    options: [
      "Pride Lands",
      "Deep Jungle",
      "Disney Springs",
      "Magic Kingdom"
    ]
  },

  {
    numb: 8,
    question: "Who turns into a heartless in the first game?",
    answer: "Sora",
    options: [
      "Riku",
      "Kairi",
      "Sora",
      "Goofy"
    ]
  },

  {
    numb: 9,
    question: "On what platform did the second game, Chain of Memories, come out?",
    answer: "Game Boy",
    options: [
      "Nintendo DS",
      "Play Station",
      "Game Boy",
      "Sega Dreamcast"
    ]
  },

  {
    numb: 10,
    question: "Who is the main villain in Kingdom Hearts?",
    answer: "Xehanort",
    options: [
      "Xigbar",
      "Xemnas",
      "Axel",
      "Xehanort"
    ]
  },
];





var timer; 
var timeLeft = 3; // seconds


// When the timer runs, replace timer and information with game over 
function gameOver() {
    $('#GameOver').show();
    $('#play-again').show();
    $('#countdown').hide();
    $('.info_box').hide();
    $('#youlost').show();

}

function youWin() {

}


function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    $('#timer').html(timeLeft);
  else {
      gameOver();

        // Play again button reloads page
    document.querySelector('#play-again').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

    ;
  }
}

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);
  
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();
  
  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
   $('#start').hide()


}










