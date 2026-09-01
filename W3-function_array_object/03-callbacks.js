// Exercise 3: Callback Functions
// Recap: a callback is a function passed as an argument into another function,
// to be executed later (by that other function).

// TODO 1: Write a function `processUser(name, callback)` that:
//   - builds a greeting string "Processing user: <name>"
//   - calls `callback` with that string as its argument
function processUser(name, callback) {
    // your code here
    console.log("Prosessing user:" + name);
    callback("Finish! ");
    
}


processUser("Alex", function (message) {
  console.log(message); // expect "Processing user: Alex"
});

// TODO 2: Call processUser again, but this time pass an ARROW FUNCTION as the callback
// that logs the message in uppercase.
const another_processUser = (name, callback) => {
    console.log("Processing user:" + name);
    callback("Finish!");
}
another_processUser("Mario", function (message) {
    const result = message.toUpperCase();
    console.log(result);
})


// TODO 3: Write a function `repeatAction(times, callback)` that calls `callback`
// `times` times, passing the current iteration number (starting at 1) each time.
function repeatAction(times, callback) {
    // your code here
    for (let i = 0; i <= times; i++){
        callback(i);
    }
    
}

repeatAction(3, function (i) {
  console.log(`Action #${i}`);
});
// expect:
// Action #1
// Action #2
// Action #3

// TODO 4 (challenge): Write `calculate(a, b, operationCallback)` that returns
// operationCallback(a, b). Call it three times passing different arrow functions
// for add, subtract, and multiply.
function calculate(a, b, operationCallback) {
    return operationCallback(a, b);
}

const add = (a, b) => {
    const result = a + b;
    console.log(result);
}
const substract = (a, b) => {
    const result = a - b;
    console.log(result);
};
const multiply = (a, b) => {
    const result = a * b;
    console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, substract);
calculate(5, 3, multiply);


