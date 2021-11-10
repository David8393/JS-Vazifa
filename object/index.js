users = [
  {
    id: 1,
    year: 2010,
    name: 'Eshmat',
    status: 'student',
    key: 'test',
  },
  {
    id: 2,
    year: 2011,
    name: 'Toshmat',
    status: 'student',
    key: 'test',
  },
  {
    id: 3,
    year: 2012,
    name: 'Eshmatning akasi',
    status: 'student',
    key: 'test',
  },
];

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

// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// areEqual( data, data2 )  => true
// areEqual( data, data3 )  => false



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

// checkSame( data, data2 )  => true
// checkSame( data2, data3 )  => false