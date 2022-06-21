// var length = document.querySelectorAll(".drum").length;
var length = $(".drum").length;

// for (var i = 0; i < length ; i++) {
  // document.querySelectorAll("button")[i].addEventListener("click", click ) 
  // }


     $("button").click ( function () {
      // var buttonInner = this.innerHTML;
      var buttonInner = $(this).html();
      swi(buttonInner);

     })

// document.addEventListener("keypress", keypress) 

    $(Event).keypress ( function (event) {

      swi(event.key);

    } )


function swi(key) {
  switch (key)
   {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log("none");

  }
}