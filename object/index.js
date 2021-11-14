// users = [
//   {
//     id: 1,
//     year: 2010,
//     name: 'Eshmat',
//     status: 'student',
//     key: 'test',
//   },
//   {
//     id: 2,
//     year: 2011,
//     name: 'Toshmat',
//     status: 'student',
//     key: 'test',
//   },
//   {
//     id: 3,
//     year: 2012,
//     name: 'Eshmatning akasi',
//     status: 'student',
//     key: 'test',
//   },
// ];

// onDelete //

// const onDelete = (users, id) => {
//   let data = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i]['id'] !== id) {
//       data.push(users[i]);
//     }
//   }
//   return data;
// };
// console.log(onDelete(users, 1));

// const onSort = (value, key) => { };

//sortedByName

// const a = users.filter((value) => value.name === 'Eshmat')

// console.log(a);

// sortedByStatus //

// const a = users.filter((value) => value.status === 'student');

// console.log(a);

//new

// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// areEqual( data, data2 )  => true
// areEqual( data, data3 )  => false

// const areEqual = (value1, value2) => {
//   if (Object.values(value1).toString() === Object.values(value2).toString()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// areEqual(data, data2);

// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };

// nestedValueExists(data)  => false
// nestedValueExists(data2)  => true
// nestedValueExists(data3)  => false

// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// const data3 = { c: 3, b: 5 };

//  const checkSame = (num, num1) => {
//     if(Object.values(num).toString() === Object.values(num1).toString() ||
//     Object.keys(num).toString() === Object.keys(num1).toString()
//     ) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSame(data2, data3));

// checkSame( data, data2 )  => true
// checkSame( data2, data3 )  => false

// function sum() {
//   let a = '12';
//   let b = a.split('');
//   let juft = 0;
//   let toq = 0;
//   for (i = 0; i < b.length; i++) {
//     if (i % 2 === 1) {
//       bvc = parseFloat(b[i]);
//       juft = juft + bvc;
//     }
//     if (i % 2 === 0) {
//       bcc = parseFloat(b[i]);
//       toq = toq + bcc;
//     }
 
//   }

//   console.log(juft, 'juft');
//   console.log(toq, 'toq');
// }
// sum();


// const func = (num) => {    
//     var temp = num;
//     var reversed = String(num).split("").reverse().join("");
//     return parseInt(`${temp}${reversed}`);
// }
// console.log(func(123456));
// console.log(func(152));
// console.log(func(123456789));

//  if(x==='id'){
//         let b= [];
//         let c= [];
//       for(i=0;i<user.length;i++){
//          b.push(user[i].id);
//          b.sort();
//       }  
//       for(i=0;i<b.length;i++){
//           for(j=0;j<b.length;j++){
//             if(b[i]===user[j].id){
//          c.push(user[j]);
//             }
//           }    
//       }
//       console.log(c);
//     }
// }
// OnSort('id')