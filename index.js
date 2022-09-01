// Code your solutions in this file
const newCards = []

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    newCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
 
}
return newCards
}
//countDown
function countDown(int){
    while (int > -1){
        console.log(int--)
    }
}
countDown()

