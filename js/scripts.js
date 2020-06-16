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

Ticket.prototype.isMatinee = function(){
  if(this.matinee < 12) {
    return true;
  } else {
    return false;
  }
};

Ticket.prototype.isNewMovie = function() {
  if (this.movie <= 3) {
    return true;
  } else {
    return false;
  }
};

Ticket.prototype.price = function() {
  let start = 10;
  
  if (this.isNewMovie() === true) {
    start = start + 5;
  } else {
    start = start - 5;
  }
  
  if (this.senior() === true) {
    start = start - 2;
  }

  if (this.isMatinee() === true) {
    start = start - 2;
  }
  return start;
};

//user
$(document).ready(function() {
$("form").submit(function (event) {
  let movie = $("#movieInput").val(); 
  let age = $("#ageInput").val();
  let time = $("#timeInput").val();
  let finalTicket = new Ticket(movie, age, time);
  let finalPrice = finalTicket.price();
  $(".btn-info").text("Your movie ticket price is $ " + finalTicket.price() + ".00");
  console.log(finalPrice);
  event.preventDefault();
});
});