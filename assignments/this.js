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


// Principle 2
// code example for Implicit Binding
const car = {
	whoa: 'We are going really fast',
	goFast: function(carType){
		console.log(`Whoa, ${this.whoa}!`);
	}
}

car.goFast('Lambo')

// Principle 3
// code example for New Binding
function car(make, model, year, fun){
	this.make = make,
	this.model = model,
	this.year = year,
	this.fun = false,
}





// Principle 4

// code example for Explicit Binding