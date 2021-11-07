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
    }
];

// const onSort = (value, key) => { };

// onDelete //

const onDelete = (users, id) => {
  let data = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i]['id'] !== id) {
      data.push(users[i]);
    }
  }
  return data;
};
console.log(onDelete(users, 1));
