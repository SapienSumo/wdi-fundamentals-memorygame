var cards = [
    "queen",
    "queen",
    "king",
    "king"
]

//Create an empty array called cardsInPlay
var  cardsInPlay =[]

//Create an empty array called cardOne
var cardOne = []

var cardTwo =[]

//Added first item in cards to CardOne using the push function
cardOne.push(cards[0])

//Now add CardOne to the end of cardsInPlay
cardsInPlay.push(cardOne[0]);

//adding item 3 i.e. cards[2] to cardTwo
cardTwo.push(cards[2])

//THEN ADDING cardTwo to the end of cardsInPlay..
cardsInPlay.push(cardTwo[0])

//Write an if statement that checks to see if the length of the cardsInPlay array is 2.
var lengthOfCardsInPlay = cardsInPlay.length;

if(lengthOfCardsInPlay ==2)
{
   if(cardsInPlay[0] === cardsInPlay[1])
   {
        alert("You found a match!");
   }
   else
   {
        alert("Sorry try again");
   }
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
