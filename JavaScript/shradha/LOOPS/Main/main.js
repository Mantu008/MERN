
  {
     // print all element to the given array

    let studentName=["mantu","hari","ashish","sahil","anupam"];

   for(let el of studentName){
    console.log(el);
   }

  }


  {
     // print mantu into 5 time

    for(let i=1;i<=5;i++){
      console.log(`mantu->${i}`);
    }
  }

  

 {
  // calculate sum of 1 to 100

  let sum=0;
  for(let i=1;i<=100;i++){
       sum+=i; 
  }

  console.log(`sum of 1 to 100 is:=${sum}`);
 }

 {
    // while loop:- it is same as for loop

    let i=1;
    console.log("while loop");
    while(i<=5){
      console.log(i);
      i++;
    }
 }

 {
  // do-while loop :- that loop is runs at last one tiime wether condition true or false else it is same as for and while accept one perporties

  let i=1;
  console.log("do-while loop");
   do{
     console.log(i);
     i++;
   }while(i<=5);
}


{
  //for-of loop

  console.log("for-of loop....");

  let Name="mantu";
  for(let val of Name){
     console.log(val);
  }
}

{
  //for-in loop

  console.log("for-in loop....");

  let student={
     name:"mantu",
     age:19,
     cgpa:8.55,
     city:"Rajkot",
  };
  for(let val in student){
     console.log(val);
  }

  // if we have key value then we get value through this key value

  for(let val in student){
    console.log("key",val, " Value=",student[val]);
 }
}