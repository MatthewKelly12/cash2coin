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
