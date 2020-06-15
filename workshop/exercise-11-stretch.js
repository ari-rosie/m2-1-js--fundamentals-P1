// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#


let row = '#_#_#_#_';
let revRow;
let newRow;

for (let i = 0; i < 8; i++) {
    console.log(row);
    newRow = row.split('');
    revRow = newRow.reverse();
    row = revRow.join('');

}