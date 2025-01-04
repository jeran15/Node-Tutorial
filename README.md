# Define - Declare - Initialize
Declare :	Creating a variable but not giving it a value.----- let x;
Initialize : Assigning a value to a variable (can happen during or after declaration).----- x = 10; or let y = 5;
Define:	Declaring and initializing a variable simultaneously.---- let z = 20;

# Major ES6 features
1. let and const for Block-Scoped Variables
    let - allows you to declare variables that can be reassigned but is restricted to the block in which it is declared.
    const - allows you to declare variables that cannot be reassigned but is restricted to the block in which it is declared.
2.  Arrow Functions
    Arrow functions provide a concise way to write functions and automatically bind the this keyword to the surrounding context, which is different from traditional function expressions.
    eg : 
    //Traditional
    function sum(a, b) {
    return a + b;

    //Arrow function 
    const add = (a,b) => a + b ;

    // Example without arrow function
        function Timer() {
        this.seconds = 0;
        setInterval(function() {
            this.seconds++; // `this` refers to the global object here (or `undefined` in strict mode)
            console.log(this.seconds); // Output: NaN
        }, 1000);
        }
        new Timer();

    // Example with arrow function
        function Timer() {
        this.seconds = 0;
        setInterval(() => {
            this.seconds++; // `this` refers to the Timer instance here
            console.log(this.seconds); // Output: 1, 2, 3, ...
        }, 1000);
        }
        new Timer();

}

3. Template Literals

    Template literals allow embedding expressions inside strings and provide a more readable and flexible way to work with strings compared to concatenation.

        const name = 'John';
        const age = 25;
        const message = `Hello, my name is ${name} and I am ${age} years old.`;

        console.log(message); // Output: Hello, my name is John and I am 25 years old.

4. Default Parameters

    default parameters allow you to set fallback values for function arguments. If an argument is not provided or is undefined when the function is called, the default value is used.

    eg : 
        function greet(name = "Guest") {
            console.log(`Hello, ${name}!`);
        }

        greet("Alice"); // Output: Hello, Alice!
        greet();        // Output: Hello, Guest!
    eg : 
        function calculateTotal(price, tax = 0.1, discount = 0.05) {
            return price + price * tax - price * discount;
        }

        console.log(calculateTotal(100));              // Output: 105 (tax = 0.1, discount = 0.05)
        console.log(calculateTotal(100, 0.2));         // Output: 110 (tax = 0.2, discount = 0.05)
        console.log(calculateTotal(100, 0.2, 0.1));    // Output: 108 (tax = 0.2, discount = 0.1)

5. Destructuring
 
 Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

eg : 
const arr = [1, 2, 3];
const [a, b] = arr;

console.log(a); // Output: 1
console.log(b); // Output: 2

// Skipping elements
const [, second] = arr;
console.log(second); // Output: 2

6.  Spread and Rest Operators
Spread (...): Expands the elements of an array or object.

    eg :
        const arr1 = [1, 2];
        const arr2 = [...arr1, 3, 4];

        console.log(arr2); // Output: [1, 2, 3, 4]

Rest (...): Collects all remaining elements into an array.

eg : 
        function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
        }

        console.log(sum(1, 2, 3, 4)); // Output: 10

7. Modules

ES6 introduced modules, which allow us to split code into different files and import/export only what is needed.

// file: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// file: app.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

Export: You can export variables, functions, or entire objects from a module.
Import: You can import specific members from a module or the whole module.

8. Promises

