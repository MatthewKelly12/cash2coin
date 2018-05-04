let dollarAmount = 0;

const piggyBank = {
    pennies: 678,
    dimes: 763,
    nickels: 465,
    quarters: 224
}

total = () => {
   dollarAmount = ((piggyBank.pennies * .01) + (piggyBank.dimes * .1)
     + (piggyBank.nickels * .05) + (piggyBank.quarters * .25)).toFixed(2);

   console.log(dollarAmount);
}

// add2 = (num1, num2) => num1 + num2

// console.log(add2(2,4));

// // fat arrow w/ multiple steps

// add3 = (num1, num2) => {
//     num1 = num1.toString();
//     num2 = num2.toString();
//     return num1 + num2;
// }

total();

let dollarAmount2 = 0;

const piggyBank2 = {};

piggyBank2.pennies = 150;
piggyBank2.nickels = 50;
piggyBank2.dimes = 100;
piggyBank2.quarters = 30;

 total2 = () => {
  dollarAmount2 = ((piggyBank2.pennies * .01) + (piggyBank2.dimes * .1)
    + (piggyBank2.nickels * .05) + (piggyBank2.quarters * .25)).toFixed(2);

  console.log(dollarAmount2);
}

total2();

