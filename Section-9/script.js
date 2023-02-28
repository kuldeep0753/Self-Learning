'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
////////////////////////////////////////
// ---------Object Destructuring------------
/*
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

const {
    name:restroName,
    openingHours:hours,

    categories:tags,
}=restaurant;
console.log(restroName,hours,tags)

const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters)

// mutataing variables
let a=111;
let b=99;
const obj={a:23,b:19,c:3};
({a,b}=obj);//trick to get values in a ,b
console.log(a,b);
*/
///////////////////////////////////////
// Destructuring Objects
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

///////////////////////////////////////
// The Spread Operator (...)
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
/*
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/


///////////////////////////////////////
// Maps: Iteration
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
///////////////////////////////////////
// Maps: Fundamentals
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));*/
///////////////////////////////////////
// Sets
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);
*/

////////////////String-1///////////////////
const airline='TaP Air India Air';
const plane='B4ut';
console.log(plane[2]);//u
console.log(plane.length);//4
console.log('Kuldeep'[2]);//l

//length method
console.log('Kuldeep'.length);//7 
//index method
console.log(airline.indexOf('P'));//2
//last index
console.log(airline.lastIndexOf('r'));//16
//slice method
console.log(airline.slice(4));//Air India Air
console.group(airline.slice(4,7));//Air
console.log(airline.slice(0,airline.indexOf(' ')));//TaP
console.log(airline.slice(-2));//ir

const middleSeat=function(seat){
  const index=seat.slice(-1);
  if(index=='B' || index == 'E'){
    console.log('You got middle seat');
  }
  else{
    console.log('You are lucky😎');
  }
}

middleSeat('11B');
middleSeat('11C');
middleSeat('11E');
///////////////////String-2///////////////
const second='I am Here';
//convert into lower case
console.log(second.toLowerCase());//i am here
// conert into upper case
console.log(second.toUpperCase());// I AM HERE

//Fix capitalization in name
const name1='kulDeep';
//TODO: TAsk is to change into 'Kuldeep';
const toLower = name1.toLowerCase();//kuldeep
const nameFix=toLower[0].toUpperCase()+toLower.slice(1);

console.log(nameFix);//Kuldeep

//Comparing emails
const email='kushwa@gmail.com';
const login='Kushwa@gmail.com \n';

// to get rid off white space then use "TRIM " method;
const normal=login.toLowerCase().trim();
console.log(normal);//kushwa@gmail.com
console.log(email===normal);//true

//replacing
const priceGB='288.89#';
const priceUS=priceGB.replace('#','$').replace('.',',');
console.log(priceUS);//288,89$

const announce='All passengers come on 23 door, with ther luggage on 23 door number,';
console.log(announce.replace('door','gate'));//All passengers come on 23 gate, with ther luggage on 23 door number,

//herre we are using regex globally(g) to replace door to gate
console.log(announce.replace(/door/g,'gate'));//All passengers come on 23 gate, with ther luggage on 23 gate number,

//Boleans
const plan ='A320neo';
//includes
console.log(plan.includes('A32'));//true
console.log(plan.includes('Boeing'));//false
//startsWith
console.log(plan.startsWith('A32'))//true

//split
console.log('a+very+nice+guy+going'.split('+'));//['a', 'very', 'nice', 'guy', 'going']
console.log('Kuldeep singh Kushwaha'.split(' '));

const [firstName,,lastName] ='Kuldeep singh Kushwaha'.split(' ');

console.log(firstName,lastName);
//join method

const newName=['Mr.',firstName,lastName].join(' ');
console.log(newName);//Mr. Kuldeep Kushwaha

//push method

//padding method
console.log('Ksk'.padStart(10,'='));//==========Ksk
console.log('Ksk'.padEnd(10,'='));//Ksk==========

//repeat method
console.log('Bad weather'.repeat(4));

//concat , reverse method