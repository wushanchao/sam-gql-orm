# sam-gql-orm
sam-gql-orm是一个把JS对象转换为GraphQL语法的方法库。

# 安装
`npm i sam-gql-orm --save`


# API

属性 | 说明 | 类型 | 默认值 | 是否必填 |
----|-----|------|------|------|
schema | 查询对象名称 | string | '' | true |
input | 查询入参字段 | object | {} | true |
output | 出参字段 | object | {} | true | 


# 使用参考
```javascript
const gql = require('sam-graphql-orm');

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
// {status(key: "goodkey"){code message data{config }}}

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

console.log(gql(data2));
// {status(securityCaseId: "56",operation: "add",businessParam: "%7B%22appName%22%3A%22book%22%7D"){data{status time comment }message success }}

```

# 兼容性
支持es5语法的node或者浏览器都可使用。  


# 待做
- 优化input的二级对象转换