function add() {
    console.log(add(a,b));
}

function subtract() {
    console.log(subtract(a,b));
}

function multiply() {
    console.log(multiply(a,b));
}

function divide() {
    console.log(divide(a,b));
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}
function makeInt(n) {
    return parseInt(n);
}

function makeInt(n) {
    return parseInt(n, 10);
}
makeInt('10')

function preserveDecimal(n) {
    return parseFloat('2.222');
}
preserveDecimal('2.222');

function preserveDecimal(sldkjflksjf) {
    return parseFloat('sldkjflksjf');
}
isNaN(preserveDecimal('sldkjflksjf'));
