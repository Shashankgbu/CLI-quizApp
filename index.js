const chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log('Welcome to the Quiz!');
var userName = readlineSync.question("What is your name? ");
console.log(chalk.red('Welcome ')+chalk.blue( userName) + chalk.red(" Let's Play DO YOU KNOW Shashank !  "));
console.log('Rules & Instructions: ');
console.log('---------------------')
console.log('1. You will get 2 points on each Right Answer.');
console.log('2. NO Points will be deducted if the Answer is Wrong. ');

var score=0;
// array for high score printing
var highscore= [
  rankone= {
    name: 'Randheer',
    score: 10,
  },
  ranktwo={
    name: 'Aditya',
    score: 8,
  },
  rankthree ={
    name: 'prashant',
    score: 6,
  }
]
function play(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns.touppercase === answer.touppercase){
    console.log('Right!');
    score+=2;
  }
  else {
    console.log('Wrong!');
  }
  console.log('Your current Score is '+ score);
  console.log('                     -----------');
}
//using Functions
/*
play('Where do i Live ? ','Gorakhpur');
play('what I love in Sleeping and Cooking ? ','Sleeping'); */

//using object 
/* 
question1={
  question: "Where do i Live ? ",
  answer: 'Gorakhpur',
  
}
question2 ={
  question: 'what I love in Sleeping and Cooking ?',
  answer: 'Sleeping',
}
play(question1.question,question1.answer);
play(question2.question,question2.answer); 
*/

//using Array and objects
var question =[question1={
  question: "What's my Age ? ",
  answer: '20',
  
},question1={
  question: "Where do i Live ? ",
  answer: 'Gorakhpur',
  
},question2 ={
  question: 'what I love in Sleeping and Cooking ?',
  answer: 'Sleeping',
},
question3 ={
  question: 'What is my dream Company ?',
  answer: 'Amazon',
},
question4 ={
  question: 'What is my favorite Song ?',
  answer: 'Ranjha',
},
question5 ={
  question: 'What is target for next 15 days ?',
  answer: 'Complete mark 15 of neoG.camp',
}
]

//loop
for(var i=0;i<question.length;i++){
  var currentquestion =question[i];
  play(currentquestion.question ,currentquestion.answer);
}
console.log('YaYY! Your Final Score is '+ score);
console.log(chalk.bgYellow('The top three Scorer are :'));
for(var j=0;j<highscore.length;j++){
  var currentrank =highscore[j];
  console.log(chalk.bgYellow('1. '+currentrank.name+' : '+currentrank.score+ " "));
}
console.log('Thanks for Playing DO YOU KNOW Shashank!');

console.log('Send a screenshot if you have beaten the highest score');
