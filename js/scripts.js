//business logic
function Ticket(movie, age, matinee) {
  this.movie = movie;
  this.age = age;
  this.matinee = matinee;
}

Ticket.prototype.senior = function(){
  if (this.age >= 65) {
    return true;
  } else {
    return false;
  }
};

Ticket.prototype.matinee = function(){
}



// Select NAME of movie
// Time of Day
// Age
// Price of movie based on 3

$(document).ready(function() {
$("form").submit(function (event) {
  
  event.preventDefault();
}
}