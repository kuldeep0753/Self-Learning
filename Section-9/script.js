'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
}

// ---------Object Destructuring------------
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



// // ---------Array Destructuring------------
// const arr=[2,3,4,5];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// const d=arr[3];
// console.log(a,b,c,d);
// // No need to assign individually value to variables; simply do structuring
// const [w,x,y,z]=arr;
// console.log(w,x,y,z);
// // ///////////////////////////
// // console.log(restaurant.order(1,2));
// const [start,main]=restaurant.order(1,2);//with the help of destructuring
// console.log(start,main);

// //------------ nested destructuring-----------
// const arr1=[1,2,3,[4,5,6]];
// // const [p, ,q,r]=arr1;
// // console.log(p,q,r);
// // default value: to avoid undefined
// const [p, ,q,[r,s],m=1]=arr1;
// console.log(p,q,r,s,m);

//TODO:n array, order matter , but in object order not matter