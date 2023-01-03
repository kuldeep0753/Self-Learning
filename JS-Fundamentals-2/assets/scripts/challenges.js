/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (a, b, c) => {
  const avg = (a + b + c) / 3;
  console.log(avg);
  return avg;
};

const dolphinsAverage = calcAverage(85, 54 ,41),
  koalasAverage = calcAverage(23, 34 , 27);

function checkWinner(avgDolhins,avgKoalas){
if(avgDolhins>=2*avgKoalas){
    console.log(`Dolphins team win with ${avgDolhins} avg`);
}
else if(2*avgDolhins<= avgKoalas){
    console.log(`Koalas team win with ${avgKoalas} average`);
}
else{
    console.log(`None of them wins`);
}
}
checkWinner( dolphinsAverage,koalasAverage);

// ========================================================================
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

function calcTip(bill){
    if(bill>=50 && bill<=300){
        return bill*0.15;
    }
    else if(bill>300){
        return bill*0.2;
    }else{
        return 0;
    }
}
const bills=[125, 555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]),];
console.log(tips);
const total=[(tips[0]+bills[0]),(tips[1]+bills[1]),(tips[2]+bills[2])];
console.log(total);
*/
