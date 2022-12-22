var number0fDrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i <number0fDrumButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var btn = this.innerHTML;
        makeSound(btn);
         btnAnimation(btn);

    });
}

addEventListener("keydown",function(event) {
  makeSound(event.key);
  btnAnimation(event.key)
});
 function makeSound(key) {
switch (key) {
  case "w":
      var cat = new Audio("sounds/cat.wav");
      cat.play();
      break;
      case "a":
      var dog = new Audio("sounds/dog.wav");
        dog.play();
        break;
        
        case "s":
      var elephant = new Audio("sounds/elephant.mp3");
        elephant.play();
        break;

        case "d":
          var hen = new Audio("sounds/hen.mp3");
            hen.play();
            break;

            case "j":
              var lion = new Audio("sounds/lion.wav");
                lion.play();
                break;

                case "k":
                  var peacock = new Audio("sounds/peacock.mp3");
                    peacock.play();
                    break;

                    case "l":
                      var tiger = new Audio("sounds/tiger.wav");
                        tiger.play();
                        break;


  default: console.log(btn);
      break;
}
 }

 function btnAnimation(currentKey){
   var activeBtn = document.querySelector("."+ currentKey);
   activeBtn.classList.add("pressed");

   setTimeout(function() {
    activeBtn.classList.remove("pressed");

   },100);

 }