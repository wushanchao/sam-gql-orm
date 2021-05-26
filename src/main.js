
export default (...argument) => {
  // 参数个数检测
  if (argument.length === 0) {
    throw 'gql function need arguments';
  }

  const arg = argument[0];

  // 非空字段检测
  const argName = ['schema', 'input', 'output'];
  argName.forEach(key => {
    if (!arg[key]) {
      throw `gql function need field ${key}`;
    }
  });

  const { schema, input, output } = arg;
  const inputTemplate = [];
  const outputTemplate = [];
  const travelsalOutput = output => {
    const keyArr = Object.keys(output);
    for (const key of keyArr) {
      const val = output[key];
      if (typeof (val) === 'string') {
        outputTemplate.push(`${key} `);
      }

      if (typeof (val) === 'object') {
        outputTemplate.push(`${key}{`);
        travelsalOutput(val);
        outputTemplate.push(`}`);
      }
    }
  };

  const getInputTemplate = input => {
    const inputKeyArr = Object.keys(input);
    for (const inputKey of inputKeyArr) {
      inputTemplate.push(`${inputKey}: "${encodeURIComponent(input[inputKey])}"`);
    }
  }

  getInputTemplate(input);
  travelsalOutput(output);
  const inputStr = inputTemplate.join(',');
  const outputStr = outputTemplate.join('');

  const gelTemplate = `{${schema}(${inputStr}){${outputStr}}}`;

  return gelTemplate;
};