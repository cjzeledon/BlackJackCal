/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand){

  let totalAmount = 0;

  for (let i = 0; i < hand.length; i++){
    // let num = hand.map(Number);
    // totalAmount = totalAmount + num[i];

    findK = hand.indexOf("K");
    findK = 10;
    // hand[2] = 10;
  }
    // console.log(totalAmount);
    // console.log(hand[2]);
    console.log(findK);
}


// handValue( [ "2", "2", "8" ] ) === 12;
// handValue( [ "2", "2", "2" ] ) === 6;
// handValue( [ "5", "5", "5" ] ) === 15;
handValue( [ "2", "2", "K" ] ) === 14;
// handValue( [ "2", "Q" ] ) === 12;
// handValue( [ "7", "J" ] ) === 17;
// handValue( [ "7", "A" ] ) === 18;
// handValue( [ "8", "J", "A" ] ) === 19;
// handValue( [ "8", "A", "J" ] ) === 19;
// handValue( [ "8", "7", "A", "A" ] ) === 17;
// handValue( [ "K", "A" ] ) === 21;


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
