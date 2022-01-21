var readlineSync= require("readline-sync");

var userName = readlineSync.question("May I know your Name? ");

console.log("Hey " + userName + " Welcome to Science quiz! \n")

var score = 0;
var scores = [];


console.log(">> Rules for quiz ")

console.log("Each right Answer = +4 marks \n ")
console.log("Each wrong Answer = -1 marks \n")

console.log(" You should respond in only [a, b, c, d] \n \n Let's go !!! ")

function quiz(question,options,answer){
  console.log("\n" +  question);
  console.log(options);


  var userAnswer = readlineSync.question("Your response : ");
if (userAnswer === answer){
  console.log("you are right!")
  score = score+4;
  console.log("Current Score is : " + score);

}
else {
  console.log("Wrong!")
  score = score-1;
  console.log("Current Score is : " + score);
}
}
let questions = [{
    "question": " Que 1. How many bones are there in human body ?",
    "options": " a) 196\n b) 206\n c) 216 \n d) 226 \n",
    "answer": "b"
  },
   {
    "question": " Que 2. Name a gas which is used in refrigeration and in fire extinguisher ?",
    "options": " a) Nitrogen\n b) Hydrogen\n c) Carbon Dioxyde\n d) Methane\n",
    "answer": "c"
  },
  {
    "question": " Que 3. Which of the following factors affect resistance of a conductor?",
    "options": " a) Length of conductor\n b) Temperature of conductor\n c)  Material of conductor\n d) All of the above \n",
    "answer": "d"
  },
  {
    "question": " Que 4.Why it is not advisable to sleep under a tree at night?\n", 
    "options": " a) Release of less oxygen\n b)Release of more oxygen \n c) Release of carbon dioxide\n d) Release of carbon monoxide\n",
    "answer": "c"
  },
  {
    "question": " Que 5. Name a gas which is used in making chloroform?",
    "options": " a) Methane\n b) Propane\n c) Butane\n d) Acetelyne \n",
    "answer": "a"
  }
]

function playQuiz() {

  for (var i=0; i<questions.length; i++){

    obj = questions[i];

    quiz(obj.question, obj.options, obj.answer);

    console.log(".........................");
  }

  console.log(" Your final Score is :  ", score);  
  scores.push(score);
  console.log(" Hope you enjoyed it, Thanks for playing, Share your score and \n feedback please ..! It means a lot to me..! ")
}

playQuiz();

function maxScore(scores) {
var maximum = scores[0];
for (var i = 0; i<scores.length; i++) {

  if(maximum<scores[i]) {
    maximum = scores[i];
  }
}
return maximum;
}


