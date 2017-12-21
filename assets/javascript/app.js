window.onload = function() {
   //Page timer and countdown set to 30 seconds 
   var limit = 30*1000;
   var count = 30;
   var counter = setInterval(timer, 1000); 
   var timer = timer();
};
function timer() {
    count=count-1;
    if (count <= 0) {
        clearInterval(counter);
        return "Time's Up!";
    }
$('.timer').text("00:30");
}
//Object of all the questions to ask with multiple choice answers
questions: {

}
