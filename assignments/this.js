/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'Global binding' When in the global scope, this points to the global object, the DOM window.

* 2. 'Implicit binding' This refers to the object calling the function. The object preceeding the function call.

* 3. 'New binding' This refers to the new object being created based on the constructor function.

* 4. 'Explicit binding' This refers to another object other than the object to the left of the dot. 
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
niceCar('Ferrari');
// Principle 2

// code example for Implicit Binding


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding