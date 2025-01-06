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

    Pending: The initial state. The operation has not yet completed.
    Fulfilled: The operation completed successfully, and the then handler will be called.
    Rejected: The operation failed, and the catch handler will be called.

    eg : 
            function fetchUserData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true;
                    if (success) {
                        resolve({ name: "Alice", age: 25 });
                    } else {
                        reject("Failed to fetch user data.");
                    }
                }, 2000); // Simulates a 2-second delay
            });
        }

        fetchUserData()
            .then((user) => {
                console.log("User Data:", user); // Output: User Data: { name: "Alice", age: 25 }
            })
            .catch((error) => {
                console.error(error);
            });

05/01/2025

# Built - in - module

1. OS(Operating System) - The os module provides utilities to get information about the operating system.
        Retrieve platform, architecture, and CPU information.
        Access system uptime, memory, and network interfaces.
        eg : 
        
        const os = require('os');
        console.log('Platform:', os.platform());
        console.log('Total Memory:', os.totalmem());
        console.log('Free Memory:', os.freemem());
        console.log('CPU Info:', os.cpus());

2. FS(File System) - The fs module provides methods to interact with the file system, allowing operations like reading, writing, and modifying files or directories.
    
    File operations: Read, write, append, rename, delete.
    Directory operations: Create, remove, and read contents.


3. PATH - The path module simplifies working with file and directory paths across platforms.

4. FS-modules(async/sync) :
    1. sync : Operations are executed one after another, in a sequential manner. Each task waits for the previous one to complete before starting.
        A synchronous operation blocks the execution of the program until it finishes. This means the program cannot do anything else while waiting for the task to complete.

        usecase - Good for simple scripts where tasks need to be performed in a specific sequence and performance is not a concern.

    2. async :  Operations are initiated and run in the background. Other parts of the program can continue executing while the operation is being processed.
        
        An asynchronous operation does not block the execution of the program. It uses callbacks, promises, or async/await to handle results.

        Use Case: Ideal for tasks like reading files, making HTTP requests, or accessing databases, where waiting for a task to complete would slow down the program unnecessarily.

        1 Execution - Non-blocking, tasks run independently of others.
        2 Blocking - No, program continues executing other tasks.
        3 Performance - Faster; allows multiple operations simultaneously.
        4 Usecase - Real-time apps, servers, file I/O, database queries.
        5 Error Handling - Requires callbacks, promises, or async/await.
    
5. HTTP module : 
    When we install node we automatically install npm(node package manage).Enabling easy installation and management of libraries, tools, and frameworks.
    NPM usage : 
    1. reuse our own code in other projects
    2. use code witten by other developers
    3. share out own solution for outher developers as well - when it comes npm pacakages there's a good chance that if there is a bug someone else has already faced it and as a result already fixed in a package or there is working solution. 

06/01/2025

# package.json 
    We need to provide information about our project and inside there very important property is dependencies

# Nodemon - dev dependencie
    The nodemon dependency is used in Node.js development to automatically restart the server when changes are detected in your application files. 

                without nodemon - 
                        
                 node app.js 
                 # Start the application
                 # Make changes to `app.js`
                 # Stop the server (Ctrl+C) and restart it:
                  node app.js
                
                with nodemon -

                # nodemon app.js
                # Save changes to `app.js`, and the server restarts automatically.


                1. First Way to install nodemon
                " npm i nodemon -D " [It's referes as a development dependencies] 
                    - Development dependencies (devDependencies) are packages needed only during the  development phase of a project.
                    - They are not required in production, helping to keep the production environment lean.

                2. Second way to install nodemon
                " npm install -g nodemon " - # Global installation 
                " nodemon app.js " - # Start the application
                    - If you need nodemon globally across projects, you might skip -D and install it globally:

# npx 
    npx is a command provided with npm (Node Package Manager) starting from version 5.2.0. It allows you to execute Node.js binaries directly from the command line without globally installing them. This simplifies the use of packages for one-off tasks or development tools.

# package-lock.json
    package-lock.json is an automatically generated file in Node.js projects managed by npm. It ensures consistent installations by locking down the exact versions of dependencies and their sub-dependencies used in the project.

    Common Scenarios Involving package-lock.json

       1. Adding a Dependency:

        When you run npm install <package>, npm updates package-lock.json with the exact version of the new package and its sub-dependencies.

       2. Cloning a Project:

        When you run npm install after cloning a project, npm uses package-lock.json to install the exact same versions of dependencies.

        3. Upgrading Dependencies:

        Running npm update updates both package.json and package-lock.json if newer versions are found within the specified ranges.

# Event Loop
    Important concept to understand : 
     1. Call Stack
     2. Task Queue(Call-back queue)
     3. Micro Task Queue

1.Call Stack : 
    Mechanism to keep track of the currently running and what functions are called by this function.
    [immediate execution function in Stack]
     - Stack (First In Last out) : using to track the function call.
        ![alt text](image-1.png) - stack sample code.
        ![alt text](image-2.png) - Stack Structure above code.

2.Task Queue(Call-back)
    A queue that is waiting  to be run once the call stack is empty.
    It will keep the time consuming functions and when the stack is empty it will push his function in to stack for execution.
     - Queue (First In First Out) : It will take time to execute.
        eg : ![alt text](image-3.png) - code 
             ![alt text](image-4.png) - structure 
        
        Call back function -  Event Handler
                              setTimeout
                              setIntervel

3.Microtask :
    A queue that is waiting to be run after promise returned a value.(Priority is higher than task queue). - It works like task queue but specific for API calls.

     eg: ![Fetching data from external server](image-5.png) - In this case function working on microtask queue if the data fetched after waiting to push the code into stack then the stack execute the function.

        - sample diagram : ![alt text](image-6.png)

EVENT LOOP : 
    - Single threaded infinite loop which is running task based on call stack availability(When the stack empty) and task queue. 
    - Structure : ![alt text](image-7.png)
    - High priority to micro task queue.

    Sample code : ![alt text](image-8.png) - js run the code line by line - in this case the operation waiting for the for loop function execution.(There is no offload)

    Sample code : ![alt text](image-9.png) - In here i provide the call back funciton (setTimeout) for offload so lastly execute the setTimeout funtion. Js execute only immediate code then execute callback.

    Event Loop seinario : ![alt text](image-10.png) - The idea based on time consuming the perfact way to handle that one we use event loop(call-back) that's why above subscribers excample shown.
    

                  
