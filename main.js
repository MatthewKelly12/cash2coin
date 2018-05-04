// quarters
// nickels
// dimes
// pennies
// For each coin type, give yourself as many as you like.

// // I like pennies
// const piggyBank = { pennies: 342 }
// let dollarAmount = 0

let dollarAmount = 0;

const piggyBank = {
    pennies: 678,
    dimes: 763,
    nickels: 465,
    quarters: 224
}

function total () {
   dollarAmount = ((piggyBank.pennies * .01) + (piggyBank.dimes * .1)
     + (piggyBank.nickels * .05) + (piggyBank.quarters * .25)).toFixed(2);

   console.log(dollarAmount);
}

total();

let dollarAmount2 = 0;

const piggyBank2 = {};

piggyBank2.pennies = 150;
piggyBank2.nickels = 50;
piggyBank2.dimes = 100;
piggyBank2.quarters = 30;

function total2  () {
  dollarAmount2 = ((piggyBank2.pennies * .01) + (piggyBank2.dimes * .1)
    + (piggyBank2.nickels * .05) + (piggyBank2.quarters * .25)).toFixed(2);

  console.log(dollarAmount2);
}

total2();

