// 'use strict'
// Advantage is it give clear error in console. If we don't use then silently give error, but not in console.
/*
let ifRed=false;

const passColor=true;
if(passColor) ifRed=true;
if(ifRed)console.log(`Red color available`);

// Function: a piece of code where we reuse ------------------------------------ 
// FUnction Declaration
function add(){ //Function body
    let a=10, b=12;
    console.log(a+b);
}
add(3) ;//Invoking or Running or Calling a function   

// Juice machine

function juiceMachine(noApples,noOranges)//parameters
{
    console.log(noApples,noOranges);
    const juice =`Juice of ${noApples} Apples ${noOranges} Oranges is ready`;
    return juice;
}
const juice=juiceMachine(2,3); //Actual arguments
console.log(juice);

// Function Declaration Vs Expressions:------------------------------

//1.✨ Named function:
calcBirth(2022,1999);
// Function Declaration
function calcBirth(currentYear,birthYear){
    const presentAge=currentYear-birthYear;
    console.log(presentAge);
}

//2.✨ Anonymous function: no function name
// Function Expressions: produce values 
age(2021,1999);// Giving Error:Uncaught ReferenceError: Cannot access 'age' before initialization
const age= function(currentYear,birthYear){
    const presentAge=currentYear-birthYear;
    console.log(presentAge);
}

// 3.✨Arrow function
const  presentAge=(birthYear,retiarmentAge)=>{
    const presentYear=2022;
    console.log(presentYear-birthYear,retiarmentAge);
}
presentAge(1996,78);

// Function calling other function:-----------------------

const cutPieces=function(fruit){
    return 4*fruit;
}

function juiceMachine(noApples,noOranges)//parameters
{
    const store1=cutPieces(noApples);
    const store2=cutPieces(noOranges);
    const juice =`Juice of ${store1} Apples ${store2} Oranges is ready`;
    return juice;
}
const juice=juiceMachine(2,3); //Actual arguments
console.log(juice);

// Function Reviws:
const calcAge=function(birthYear){
    const presentYear=2022;
    return presentYear-birthYear;
}
const yearOfRetirement=function(birthYear,firstName){
    const age=calcAge(birthYear);
    console.log(`${age} years`);
    const retirement=60-age;
    console.log(`${retirement} years`);

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} already retires in ${retirement} years`);
        return -1;
    }
}
yearOfRetirement(1948,'Kuldeep');

// Introduction of Arrays:
// 1.first way
const friend1='Kuldeep';
const friend2='deep';
const friend3='Kul';
const friend4='rosh';

const friends=['Kul','deep','rosh'];// Literals way
console.log(friends);
// 2.second way:
const years =new Array(199,2929,378);
console.log(years);

console.log(friends[0]);//to access single element;
console.log(friends.length);//to check the array size

friends[2]='Roshan Singh';
console.log(friends);

// friends=['Kuldeep','Singh']//ERROR:Simultaneously we can't change more then one value
const first='Kuldeep';
const Details=[first,2022-1999,'Developer',friends];
console.log(Details);

// Exercise:
const calcAge=function(birthYear){
    return 2022-birthYear;
}
const givenYear=[1990,1999,2003,2017];
const ages=[calcAge(givenYear[0]),calcAge(givenYear[1]),calcAge(givenYear[2]),calcAge(givenYear[3])];
console.log(ages);

// Basic Array operations(METHODS); 
const friends=['Sushma','Alam','John','Kavya'];

//Add Elements at the end
const newLength=friends.push('Kuldeep');//returns length of array
console.log(newLength);
console.log(friends);

// Add elements at beginning 
const newUnshiftLength=friends.unshift('Roshan');//returns length of array
console.log(newUnshiftLength);
console.log(friends);

//Delete the elements from the end
const deleteElement=friends.pop();//returns delete element of an array
console.log(deleteElement);
console.log(friends);
//Delete the elements from the end
const deleteShiftElement=friends.shift();//returns delete element of an array
console.log(deleteShiftElement);
console.log(friends);
// For indexOf we use
console.log(friends.indexOf('John'));
// For checking element existence use includes:
friends.push(23);//Add23 to check 
console.log(friends.includes('John'));
console.log(friends.includes('Johny'));
console.log(friends.includes('23'));//Gives false due to string
console.log(friends.includes(23));//Give true, it's a number

if(friends.includes('Sushma')){
    console.log('She is one of my old friend');
}

// Introduction of Objects:
const kuldeepArray={
    firstName:'Kuldeep',
    lastName:'Singh',
    Address: 'Kattigenhalli',
    Year:2037-1991,
    job:'teacher',
    friends:['Sushma','Vibhu','Roshan']
}

// DOT vs Bracket Notation:getting a properti from a object
//DOT Notation
console.log(kuldeepArray.Year);
console.log(kuldeepArray.Jobs); 
//Bracket Notation
console.log(kuldeepArray['firstName']);
const nameKey='Name';
console.log(kuldeepArray['first' +nameKey]);
console.log(kuldeepArray['last' +nameKey]);

// const inserted= prompt('Enter any occupation');
// console.log(kuldeepArray.inserted);//undefined
// console.log(kuldeepArray[inserted]);//printing kuldeepArray existing properties name

// if(kuldeepArray[inserted]){
//     console.log(kuldeepArray[inserted]);
// }else{
//     console.log('that propertie is not present');
// }

kuldeepArray.hobby='Swimming';
kuldeepArray['email']='kushwaha0753';
console.log(kuldeepArray);
// Challenge:
console.log(`${kuldeepArray.firstName} has ${kuldeepArray.friends.length} friends, and his best friend is called ${kuldeepArray.friends[0]}`);


// Object Methods:
const kuldeep={
    firstName:'Kuldeep',
    lastName:'Singh',
    Address: 'Kattigenhalli',
    birthYear:1999,
    hasDriverLicense:true,
    calcAge: function (birthYear){
         return 2022-birthYear;
    },
    // calcAge:function(){
    //     console.log(this);
    //     return 2022-this.birthYear;
    // },
    calcAge:function(){
        this.age=2022-this.birthYear;
        return this.age;
    },
    job:'teacher',
    friends:['Sushma','Vibhu','Roshan'],
    getSummary: function(){
        console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has a ${this.hasDriverLicense? `Driver's License`:`no Driver's License.`}`);
    }
}
console.log(kuldeep.calcAge());
// console.log(kuldeep['calcAge'](1998));
console.log(kuldeep.age);


// Challenge:"Kuldeep is a 46-year old teacher and he has a driver's license"
kuldeep.getSummary();


// Control structured: if, if-else,for loop:use for repetitive job
   for (let i=1;i<=10;i++){
console.log(`Lifting weights repetition ${i}🥱`);
}

// Looping Arrays, Breaking and Continue
const kuldeep=["Kuldeep Singh","Yelhanka",2022-1999,"Software Developer", true,[22,19,28]];

const type=[];
// for(let i=0;i<kuldeep.length; i++){
   
//  console.log(kuldeep[i]);
//  type.push(typeof kuldeep[i]);
// }
// console.log(type);
console.log("_____continue________");
for(let i=0;i<kuldeep.length; i++){
    if(typeof kuldeep[i] === 'string'){
        continue;
    }
 console.log(kuldeep[i]);
}
console.log("_____Break________");
for(let i=0;i<kuldeep.length; i++){
    if(typeof kuldeep[i] === 'number'){
        break;
    }
 console.log(kuldeep[i]);
}

// ---------------
const years=[1997,1999,2001],ages=[];

for(let i=0;i<years.length;i++){
 ages.push(2022-years[i]);
}
console.log(ages);

 
// Looping Backwards and Loops in Loops
const kuldeep=["Kuldeep Singh","Yelhanka",2022-1999,"Software Developer", true,[22,19,28]];
console.log(kuldeep.length);
for(let i=kuldeep.length-1;i>=0;i--){
    console.log(kuldeep[i]);
}

//Loops in Loops
for(let i=0;i<5;i++){
    console.log(`___Rows__ ${i}☠`);
    for(let j=0;j<5;j++){
        console.log(`I am Working ${j}`);
    }
    
}

// While Loop:when no.of iterartion is unknown;
// for (let i=1;i<=10;i++){
//     console.log(`Lifting weights repetition ${i}🥱`);
//     }
// let i=0;
// while(i<10){
//     console.log(`Lifting weights repetition ${i}🥱`);
//     i++;
// }
// Dice example:
let dice=Math.trunc(Math.random()*6)+1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice===6){
        console.log(`Loop is end`);
    }
}
*/

// x=5;
// console.log(check);
// console.log(x);


// var check =function(){
   
//     var j=8;
// //  console.log(i);
//  console.log(j);
// }
// check();
// // console.log(i);
// console.log(j);
'use strict';
function add(){
  console.log(this);
}
add();



