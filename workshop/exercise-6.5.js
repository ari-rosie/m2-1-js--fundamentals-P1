// Q6.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.

let state;

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        state = 'even';
    } else {
        state = 'odd';
    }

    console.log(`${i} is ${state}`);
}