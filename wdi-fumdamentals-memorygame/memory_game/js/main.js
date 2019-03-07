var cards = [
        {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
        },
        {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
        },
        {
        rank: 'king',
        suit: 'hearts',            
        cardImage: "images/king-of-hearts.png"
        },
        {
        rank: 'king',
        suit: 'hearts',            
        cardImage: "images/king-of-hearts.png" 
        },
        {
        rank: 'king',
        suit: 'diamonds',            
        cardImage: "images/king-of-diamonds.png"             
        }
]

//Create an empty array called cardsInPlay
var  cardsInPlay =[]


function checkForMatch()
{
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!")
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
        alert("Sorry, try again.")
    }
}

function flipCard(cardId)
{

    //Write an if statement that checks to see if the length of the cardsInPlay array is 2.
    var lengthOfCardsInPlay = cardsInPlay.length;

    checkForMatch()
    /*if(lengthOfCardsInPlay ==2)
    {
        if(cardsInPlay[0] === cardsInPlay[1])
        {
                alert("You found a match!");
        }
        else
        {
                alert("Sorry try again");
        }

       
    }*/
    console.log("User flipped " + cards[cardId].rank) 
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
}

flipCard(0)
flipCard(2)
