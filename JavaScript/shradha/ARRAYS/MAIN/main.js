
let info=["mantu","hari","ashish","sahil","abhinav"];

console.log(info);
console.log("length of array is:-"+info.length);
console.log(info[0]);

info[0]="ravi";   // array value at particular index can chenge  because it is mutable

console.log(info);  



let str="mantu";

console.log(str[3]);  //print index 3 element 
 
str[3]="h";          //chenge index 3 element by "h"

console.log(str[3]);  //again print index 3 element but result is not chenge because it is imutable



//.............................loops..........

 //1.for loop

  console.log("simple for loop.....");

 for(let i=0;i<info.length;i++){
      console.log (info[i]);
 }

 //2. for of loop

 console.log("for of .....");

  for(let el of info){
    console.log(el);
  }


  // Arrays methods

  //1.push

   let marks=[1,2,3,4,5,6];
   let deleted_Item=marks.pop();   //pop() function
   console.log(deleted_Item); 
   marks.push(10,20,30);

   let numbers=[34,54,24,64,78];
   let students=["mantu","hari","ashish","nitiya"];

  console.log(marks);
  console.log(marks.toString());    //toString method


  //concat() method

  let x=marks.concat(numbers,students); //contact two  arrays

  console.log(x);


  // unshift() it is use to add element at first

  marks.unshift(17,22);
  console.log(marks);

  //shift() it is use to delete element from start

  let shiftElement=marks.shift();

  console.log(`removed element from start is=${shiftElement}`);
  console.log(marks);

  // slice()  it is use to return a piece of the array   it is not chenge into the origiopnal array

  console.log(marks.slice(2,5));
  console.log(marks.slice());   // this is use to make to a copy of given array



  // splice()  it is chenge into the origiopnal array  (add,remove,replace)

   let roll=[1,2,3,4,5];
   roll.splice(2,0,6,7,8);     // add element
   console.log(roll);

   roll.splice(2,3);          //delete element
   console.log(roll);

   roll.splice(2,1,33);       //replace element
   console.log(roll);