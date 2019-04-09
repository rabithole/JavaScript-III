/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'Global binding' When in the global scope, this points to the global object, the DOM window.

* 2. 'Implicit binding' This refers to the object calling the function. The object preceeding the function call or dot. 

* 3. 'New binding' This refers to the new object being created based on the constructor function.

* 4. 'Explicit binding' This, using .call, .apply etc..., is pointing to a specific object for this to be referencing. 
*
* write out a code example of each explanation above
*/



// Principle 1
// code example for Window Binding
console.log(this); // or
function niceCar(carModel){
	console.log(this);
	return carModel;
}
console.log(niceCar('Ferrari'));


// // Principle 2
// // code example for Implicit Binding
const car = {
	whoa: 'We are going really fast',
	goFast: function(carType){
		console.log(`Whoa, ${this.whoa}!`);
	}
}

car.goFast('Lambo');


// Principle 3
// code example for New Binding
////////////// Top level inheritance.
function Car(make, model, year, fun){
	this.make = make,
	this.model = model,
	this.year = year,
	this.fun = fun
};
/////////////// Object based off of Car object. 
function Truck(make, model, year, haul){
	this.make = make,
	this.model = model,
	this.year = year
}
//////////// Method added to the Truck object
Truck.prototype.haul = function(weight, speed){
	console.log(`This ${this.make} can haul a ${weight} load, very ${speed}.`)
}
///////////// Method added to the Car object. 
Car.prototype.goFast = function(carType){
		console.log(`Whoa, this ${this.make} is amazingly fast!`);
		console.log(this);
}
//////////// Method added to the Car object. 
Car.prototype.goSlow = function(carType){
		console.log(`Whoa, this ${this.make} is amazingly slow!`);
		console.log(this);
}

///////// Instance of a car. 
const IS350 = new Car('Lexus', 'IS350', 2011, true);
// IS350.goFast('IS350');

///////// Instance of a car. 
const STI = new Car('Subaru', 'STI', 2014, false);
// STI.goSlow('STI');

///////// Instance of a truck. 
const bigTruck = new Truck('Chevy', 'Duramax', 2015, 'Heavy');
bigTruck.haul('heavy');


// Principle 4
// code example for Explicit Binding
IS350.goFast.call(STI);
bigTruck.haul.call(IS350, 'heavy');
bigTruck.haul.apply(STI, ['light', 'slowly']);