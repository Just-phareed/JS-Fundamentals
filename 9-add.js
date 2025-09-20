#!/usr/bin/node

// Define the add function
function add(a, b) {
    console.log(a + b);
}

// convert arguments to numbers and call add
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

add(a, b);