const gql = require('../dist/index.cjs.js');

const data1 = {
  schema: 'status',
  input: {
    key: 'goodkey',
  },
  output: {
    code: '',
    message: '',
    data: {
      config: '',
    },
  },
};

console.log(gql(data1));

const data2 = {
  schema: 'status',
  input: {
    securityCaseId: '56',
    operation: 'add',
    businessParam: JSON.stringify({
      appName: 'book',
    })
  },
  output: {
    data: {
      status: '',
      time: '',
      comment: ''
    },
    message: '',
    success: ''
  }
};
console.log(gql(data2))