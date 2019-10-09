//@ The for principles of "this";
//@in your own words. explain the four principle for the "this" keyword below.

//# 1. Window Binding(Default Binding) - when using the this keyword without giving it an object it will refer to the whole window and is thereby flooded with to much information to be useful.

//# 2. Implicit Binding - is where it easy to tell what this is referring to simply by looking to the left of the . in the called function.

//# 3. New Binding - looks for the keyword of new in order to invoke this. So in the case of new binding this refers to information around the word new.

//# 4. Explicit Binding - is using one method to call out a function with the focal point being the first argument in the function.

//@ write out a code example of each explanation above


//! Principle 1

//! code example for Window Binding

function infoWB (name, howKnown) {
    greet() 
    return (`Hello, I'm ${this}`)
    };

    console.log (infoWB());

//! Principle 2

//! code example for Implicit Binding

let infoIB = {
    name: 'Gretchen',
    howKnown: 'neighbor',
    greet () {
    return (`Hello, I'm ${this.name}! and I'm your ${this.howKnown}!`)
}};
console.log (infoIB.greet());

//! Principle 3

//! code example for New Binding

function InfoNB (name, howKnown) {
    this.name = name
    this.howKnown = howKnown
};

let myInfo = new InfoNB ("Kara", "self");

console.log (`Hello I'm ${myInfo.name} and I'm your${myInfo.howKnown}!`);


//! Principle 4

//! code example for Explicit Binding

function greet() {
    return (`Hello, I'm ${this.name}! and I'm your ${this.howKnown}!`);
}
let infoEB = {
    name: 'Dale',
    howKnown: 'Husband',
}