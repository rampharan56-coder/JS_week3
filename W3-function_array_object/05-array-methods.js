// Exercise 5: Array Methods — forEach, filter, map

const scores = [55, 72, 88, 91, 40, 67, 100];

// TODO 1: Use forEach() to log every score, one per line, prefixed with "Score: ".
scores.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})

// TODO 2: Use filter() to create a new array `passingScores` containing only
// scores >= 60. Log the result.
const result = scores.filter((num) => num > 60);
console.log(result);


// TODO 3: Use map() to create a new array `withBonus` where every score has 5 points
// added. Log the result. (original `scores` array should NOT be modified)
const results = scores.map((num) => num = 5);
console.log(results);


// TODO 4: Chain filter() + map() in one line: get all passing scores, then convert
// each one to a letter using this simple rule — >= 90 "A", >= 80 "B", >= 70 "C", else "D".
// Store the result in `letterGrades` and log it.
// Hint: scores.filter(s => s >= 60).map(s => ...)
const chain = scores.filter(s => s >= 60).map(s => (s >= 90) ? "A" : (s >= 80) ? "B" : (s >= 70) ? "C" : "D");
console.log(chain);

// TODO 5 (challenge): Use forEach() to calculate the average of all `scores` and log it
// (you'll need a running total variable declared with `let` before the loop).
let sum = 0;
scores.forEach((item, index, average) => {
    sum += item;
});
console.log(`Average: ${(sum/scores.length).toFixed(2)}`);
