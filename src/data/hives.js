// / ==============================|| Mock ||==============================

const defaultCategories = [
  'Horário 1',
  'Horário 2',
  'Horário 3',
  'Horário 4',
  'Horário 5',
  'Horário 6',
  'Horário 7'
];

const hives = {
  hive1: {
    id: '1',
    series: {
      name: `Apiário 1`,
      data: [25, 30, 31, 32, 33, 29, 26]
    },
    categories: defaultCategories
  },

  hive2: {
    id: '2',
    series: {
      name: `Apiário 2`,
      data: [25, 35, 10, 11, 23, 29, 20]
    },
    categories: defaultCategories
  },
  hive3: {
    id: '3',
    series: {
      name: `Apiário 3`,
      data: [10, 35, 15, 11, 33, 5, 40]
    },
    categories: defaultCategories
  },
  hive4: {
    id: '3',
    series: {
      name: `Apiário 3`,
      data: [0, 1, 1, 0, 0, 0, 1]
    },
    categories: defaultCategories
  }
};

export default hives;
