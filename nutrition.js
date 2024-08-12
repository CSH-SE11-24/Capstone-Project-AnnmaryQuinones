let cards = document.querySelectorAll(".card")
let fats = document.querySelector("#one")
let dairy = document.querySelector("#two")
let veggies = document.querySelector("#three")
  for(let i = 0; i<cards.length; i++){
    cards[i].style.display="none"
  }

  fats.addEventListener("click", function() {
    if (cards[0].style.display=="none"){
    cards[0].style.display="block"
    } else {
      cards[0].style.display="none"
    }
});


dairy.addEventListener("click", function() {
    if (cards[1].style.display=="none"){
    cards[1].style.display="block"
    cards[2].style.display="block"
    } else {
      cards[1].style.display="none"
      cards[2].style.display="none"
    }
});

veggies.addEventListener("click", function() {
    if (cards[3].style.display=="none"){
    cards[3].style.display="block"
    cards[4].style.display="block"
    cards[5].style.display="block"
    } else {
      cards[3].style.display="none"
      cards[4].style.display="none"
      cards[5].style.display="none"
    }
});
