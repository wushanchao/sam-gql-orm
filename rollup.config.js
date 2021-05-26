import babel from 'rollup-plugin-babel';

export default {
  input :'src/main.js',
  output: {
    file:'dist/index.cjs.js',
    format:'umd',
    name:'samGql'
  },
  plugins:[
    babel({
      exclude:'node_modules/**'
    })
  ]
}