
// Math pow

// function pow(a, b) {
//     return a ** b; 
//  }

// console.log(pow(5, 3));

// Math sqrt

// function sqrt(a) {
//     return a ** 0.5;
// }

// console.log(sqrt(36));

// Math cbrt

// function cbrt(a) {
//    return (a ** (1/3));
// }

//  console.log(cbrt(8));

// Math abs

// function abs(a) {
//     return (a  ** 2) ** 0.5;
// }

// console.log(abs(-20));

// Math round

// function round(a) {
//    return (a).toFixed(0);
// }

// console.log(round(10.1))

// Math floor

// function floor(a) {
//     return parseInt(a);
// }

// console.log(floor(20.9))

// Math ceil

// function ceil(a) {
//     return (a + 0.5).toFixed(0);
// }

// console.log(ceil(4.02));

// New task

// 0 ~ 100 => toq, juft, 
// for (let i = 1; i <= 100; i = i + 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
// }
// 10 ~ 0
// for (let i = 10; i >= 0; i --) {
//     console.log(i)
// }
// title = "webBrain Academy" x 5
// let A = 5;
// let B = "Webbrain academy ";
// let Str = '';

// for (let i = 0; i < A; i++) {
//     Str = Str + B
// }
// console.log(Str);
// a, b
// a

// var txt = "welcome webbrain ";
// var rep = txt.repeat(5);
// count = 0;

// for (var i = 0; i < rep.length; i++) {
//     if (rep.charAt(i) === 'a') {
//         count++
//     }
// }

// console.log(count);

// b

// var txt = 'welcome webbrain ';
// var rep = txt.repeat(5);
// count = 0;

// for (var i = 0; i < rep.length; i++) {
//   if (rep.charAt(i) === 'b') {
//     count++;
//   }
// }

// console.log(count);

//remove white space

// let A = 5;
// let B = "Webbrain academy";
// let Str = '';

// for (let i = 0; i < A; i++) {
//    Str += B.trim();
// }


// console.log(Str);

// a = 0;
// b = 0;
// for (let i = 0; i < title.length; i++)  {
//     (title[i] === 'a' || title[i] === 'A') && a++;
//     (title[i] === 'b' || title[i] === 'B') && b++;
    
// }
// console.log(a, ' = A');
// console.log(b, ' = B');

// var title = 'WebBrainAcademy'.repeat(5);

// str = '';
// for (let i = 0; i < title.length; i++) {
//     title[i] === title[i].toUpperCase()
//         ? (str = str + `${title[i]}`);
//     : (str = str + title[i]);
    
// }

// console.log(str.trim());

// a = '123'

// console.log (a.split ('').reverse().join('') + a)

// str = '';
// for (let i = a.length - 1; i >= 0; i--) {
//     str = str + a[i];

// }

// console.log(str);

// matndagi # ni orniga qavs qoyish;
// let text = "Salom#Prep#uz"
// var count = 1;
// for (let i = 0; i < text.length; i++) {
    // if (count % 2 == 1) {
        // if (text[i] === '#') {
        //     text.replace(text[i], '(');
        //     count++
        // }
    // }
    // else {
    //     if (text[i] === '#') {
    //         text.replace(text[i], ')');
    //         count++;
    //     }
    // }
// }
// console.log(text); 

// tub sonni topish

// for (let i = 2; i <= 200; i++)
// {
//     var count = 0;
//     for (let j = 2; j <= parseInt(Math.sqrt(i)); j++){
//         i % j === 0 && count++;
//     }
//     count ===0 && console.log(i,"tub son");
// }

