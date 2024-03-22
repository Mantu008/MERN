
//map..

//map function is use for array and it is spacficly use for doing some operation on the goiven array...

// let mynums=[1,2,3,4,5,6,7,8,9,10];

// let newNums=mynums.map((num)=>num+10);
// console.log(newNums);


//chaining...

// const newNums=mynums
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=> num>=40); 
// console.log(newNums);




//reduce...

//it is use for 

const myNums=[1,2,3,4];

const myTotal=myNums.reduce((acc,currVal)=>{
   console.log(`acc: ${acc} and currval: ${currVal}`);
   return acc+currVal;
},0);

//we can write like this...

// myTotal=myNums.reduce((acc,currVal)=>acc+currVal,0);

console.log(myTotal);



const shopingCart=[
    {
      itemName:'js cource',
      price:2999
    },

    {
      itemName:'java cource',
      price:3999
    },

    {
      itemName:'python cource',
      price:4999 
    },
  ]

  let totalPriceToPAy=shopingCart.reduce((acc,itm)=>(acc+itm.price),0);

  console.log(totalPriceToPAy);

