//load function from another file
const addFile = require('./add.js');
// const addFun=require('./add.js')
// console.log(addFun(4,5));
// console.log("hello from index.js");
// const sum1=addFun(1,2)
// const sum2=addFun(3,8)
// console.log(sum1);
// console.log(sum2);


const add=addFile.add(1,2);
const sub=addFile.sub(3,1);
console.log("Addition of two number is:-",add);
console.log("Subtraction of two number  is:-",sub);