{

  function myFunction(){
    console.log("my name is mantu kumar morya");
    console.log("now i am learning js");
}

myFunction();

}

{

  console.log();

  function myFunction(msg){
    console.log("my name is mantu kumar morya "+msg);
    console.log("now i am learning js "+msg);
}

myFunction("gopalganj");

}



{

  //normal function

  console.log();

  console.log("normal function");

  function sum(a,b){
      return a+b;
  } 


   let add=sum(1,2);
   console.log(`addition of two number is:-${add}`);

}


{

  //arrrow function           //mordern javascript 

  console.log();
  console.log("arrrow function");

  //Addition

   const sum=(a,b)=>{
       return a+b;
   };

   let add=sum(4,5);

   console.log(`addition is:-${add}`);

   const mul=(a,b)=>{
    return a*b;
};

let multiplication=mul(4,5);

console.log(`multiplication is:-${multiplication}`);

}


{

  //for each loop

  console.log();
  console.log("for each loop.....");

   let arr=[1,2,3,4,5];

   arr.forEach((x)=>{
        console.log(x);
   }
      
   )

}


{

  //map function

   console.log();
   console.log("map function operation");


   let arr=[1,2,3,4,5,6];

   //print each element of array

   arr.map((x)=>{
      console.log(x);
   })


   //copy each element of array in a new created array

   let newArr=arr.map((x)=>{
       return x;
  })

  console.log(newArr);

}

{

  console.log();
  console.log("filter function operation");

  //find element which is even in the given array
  let arr=[1,2,3,4,5,6];
  let evenArr=arr.filter((x)=>{
    return x%2===0; 
  })
  console.log(evenArr);

  //find element which is grator then 3 in the given array

  let GratorThree=arr.filter((x)=>{
    return x>3; 
  })
  console.log(GratorThree);

}


{

  //reduce methood

  console.log();
  console.log("calculate sum of all element present in this given array");

  let arr=[1,2,30,4,5];

  let TotalSum=arr.reduce((res,curr)=>{
      return res+curr;
  })
  console.log(TotalSum);

  console.log("calculate max among all element present in this given array");


  let maxValue=arr.reduce((pre,curr)=>{
    return Math.max(pre,curr);
})
console.log(maxValue);

}