// Fundamental-1
/*let check = "working";

if(check=== "working"){alert("maza aa gaya");}
console.log("check hiting"); 

let age=28;
console.log(age);
let myName ="kuldeep SIngh kushwaha";
console.log(myName);

** DataTypes are 7 types:
. 
1.number
let num=2023;
console.log(num);
console.log(typeof (num));
console.log(typeof num);
// Above Both are right

2.boolean
num=true;
console.log(num);
console.log(typeof num);

3.string
num="Ksk";
console.log(num);
console.log(typeof num);

 4.null
num=null;
console.log(num);
console.log(typeof num); //giving "object" output, due to legacy issues it's not fixed.

5.undefined
let un;
console.log(un);
console.log(typeof un);

6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
7. BigInt (ES2020): Larger integers than the Number type can hold


// var,let and const

// Var:
var p=23;
console.log(p);
p=34;
console.log(p);
var p=true;
console.log(p);

// Let:
let check=23;
console.log(check);
check=34;
console.log(check);
// let check=true;  Uncaught SyntaxError: Identifier 'check' has already been declared
// console.log(check);

// Const:
const num=45;
console.log(num);
// num=67; Uncaught TypeError: Assignment to constant variable.
// const num="gshs"; Uncaught SyntaxError: Identifier 'num' has already been declared
// console.log(num); 



// Basic operators:
// =================
//Math OPerators
const now=2023;
const kuldeepAge= now-1999;
const roshanAge= now-2001;
console.log(kuldeepAge,roshanAge);

console.log(kuldeepAge*8, ",",roshanAge/20,",", 2**4 ,"Hi! Working")
console.log(`kuldeep singh work on laptop`) // Template Literal
// -------------------
//Assignment Operators:
let x=10+5; //15
x+=5;//20
x++; //21
x--;//20
console.log(x);
// --------------

// Comparison Operators
let kuldeep=21;
let roshan = 21;
console.log(kuldeep > roshan); //check <,>,<=,>=,==,===
console.log(kuldeep >= 21)

// Operator precedence
// ------------------------
*/

/*
// Strings:
const firstName="Kuldeep", job="Software-Engineer", birthYear=1999,year=2023;
const ksk= "Hi! I'm "+firstName+",a "+(year-birthYear)+" years old "+ job+".";
console.log(ksk);
console.log('Sting with \n\
multiple \n\
lines');

// Template Literals(ES6)
const kskNew=`Hi! I'm ${firstName},a ${year-birthYear} years old ${job}!!`;
console.log(kskNew)
console.log(`Sting with 
multiple 
lines`);
*/

/*
//Decision: If-else:controlled structure

// Driving license problem
const presentYear=2023, birthYear=1999, eligible=18;
if((presentYear-birthYear)>eligible){
    console.log(`Allowed for DL😎`); //for emoji press (windows+.)
}
else{
    console.log(`Not allowed for DL, and ${eligible-(presentYear-birthYear)} years is left.😖`)
}*/
// ----------------------------------------------
/*
// Type conversion and 
const year=1999;
console.log(String(1999), year);
console.log(String(198)+ year);
console.log(Number('ksk'));

// Type coercion(automatically convert):dealing with two different type
console.log('I am '+ 23+ 'year old');
console.log('20'+'10'+ 5);
console.log('20'+'3'- 5); //203-5=198
console.log(20+7- "5"); //20+7=27;27-5=22
console.log("20"-"7"- "5"+6+'2');//20-7-5=8;8+6=142
// game
let n='1'+1;
n=n-1;
console.log(n);
*/
//--------------------------------------------------
/*// Truly value
//5 Falsy value: 0,'',undefined,null,NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false
// use of this concept
let money;
if(money){
    console.log(" spend well ")
}else{
    console.log('do not spend')
}
*/
// ---------------------------------
 /*
    //Equal operator ==(loose equality) vs ===(strict equality)
    // Here is type coercion
    const age=18;
    if(age=="18"){
        console.log(`eligible for vote ==(loose equality)`)
    }
    // Here type should also be same
    if(age==="18"){
        console.log('eligible for vote')
    }else{console.log(`eligible for vote ===(strict equality)`)}

    //TODO: Always use strict equality;
   
    // example 1
    const fav=Number(prompt('Enter your fav number'));

    if(fav===9){
        console.log(`Your fav number is here: ${fav}`);
    }
    else if(fav===7){ console.log(`Your fav number is here: ${fav} not 9;`);}
    else{console.log(`Your fav number is not here: 😥`);}5
   
    // Example:2
    const favourite=prompt('Enter your favourite number');
    console.log(typeof favourite);
    if(favourite==='9'){
        console.log(`Your favourite number is here: ${favourite}`);
    }
    else if(favourite==='7'){ console.log(`Your favourite number is here: ${favourite} not 9;`);}
    else{console.log(`Your favourite number is not here: 😥`);}
 */
// ------------------------------
// Logical opertaors:
/*
const hasDrivingLicense=true;//A
const hasGoodVision=false;//B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

const isTired=false;
if(hasDrivingLicense && hasGoodVision || !isTired){
    console.log('Kuldeep should drive');
}else{console.log(`Some one will drive..`)}
*/
// ---------------------------
// Switch Statement:very less use
/*
const din=9;
switch(din){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`None`);
        
}

// If-else ladder
const day=5
if(day==1){ console.log(`Monday`);}
else if(day==2){ console.log(`Tuesday`);}
else if(day==3){ console.log(`Wednesday`);}
else if(day==4){ console.log(`Thursday`);}
else if(day==5){ console.log(`Friday`);}
else if(day==6){ console.log(`Saturday`);}
else if(day==7){ console.log(`Sunday`);}
else { console.log(`None`);}
*/

// Statements and Expression
// Ternary Operator(three part) or Conditional Operator :

const age=23;
// age>=18 ? console.log(`drink🍻`): console.log(`not allowed 😫`);
let check=age>=18 ? `beer🍻`: `water 💧`;
console.log(check);
console.log(`I like to drink ${check}`);
