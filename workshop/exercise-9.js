// Q9
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...

let fizz;
let buzz;
let print;

for (let i = 1; i <= 100; i++) {
    fizz = i % 3 == 0;
    buzz = i % 5 == 0;

    if (fizz && buzz)
        print = 'FizzBuzz';
    else if (fizz)
        print = 'Fizz';
    else if (buzz)
        print = 'Buzz';
    else
        print = i;
    
    console.log(print);
}