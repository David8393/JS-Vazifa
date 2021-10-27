// Math pow

function pow(a, b) {
    return a ** b;
    
 }

console.log(pow(5, 3));

// Math sqrt

function sqrt(a) {
    return a ** 0.5;
}

console.log(sqrt(36));

// Math cbrt

function cbrt(a) {
   return (a ** (1/3));
}

 console.log(cbrt(8));

// Math abs

function abs(a) {
    return (a  ** 2) ** 0.5;
}
console.log(abs(-20));

// Math round

function round(a) {
   return (a).toFixed(0);
}
console.log(round(10.1))

// Math floor

function floor(a) {
    return parseInt(a);
}
console.log(floor(20.9))

// Math ceil

function ceil(a) {
    return (a + 0.5).toFixed(0);
}
console.log(ceil(4.02));
