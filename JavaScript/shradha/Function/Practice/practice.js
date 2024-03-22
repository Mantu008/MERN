//Q1.

 
  // using normal function

  console.log("first way");

function count(s){
    let ans=0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=="a" || s.charAt(i)=="e" || s.charAt(i)=="i"|| s.charAt(i)=="o" || s.charAt(i)=="u" || s.charAt(i)=="A" || s.charAt(i)=="E" || s.charAt(i)=="I"|| s.charAt(i)=="O" || s.charAt(i)=="U"){
            ans++;
        }
    }

    return ans;
}

  let val=count("mantu");
  console.log(`the number of vowel in given string is:-${val}`);



  // using arrow function

 
  console.log("second way");

 let count1=(str)=>{

  let ans=0;

  for(let i=0;i<str.length;i++){
    if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u" || str.charAt(i)=="A" || str.charAt(i)=="E" || str.charAt(i)=="I" || str.charAt(i)=="O" || str.charAt(i)=="U"){
       ans++;
    }
  }

  return ans;

 }; 

  let val1=count1("Ashish");
  console.log(`the number of vowel in given string is:-${val1}`);




  //Q2.

  console.log("print quare of each element inside array:-");


  console.log("first way");

  let arr=[1,2,3,4,5];
  let calcSquare=(x)=>{
    console.log(x**2);
}

  arr.forEach(calcSquare)


// or

console.log("second way");

arr.forEach((x)=>{
  console.log(x**2);
})



// Q3.

 
console.log();
console.log("filter elements and creat a new array those markes is grator then 90:-");

 let marks=[50,96,91,22,99,86];

 let newMarks=marks.filter((x)=>{
    return x>90;
 })

console.log(newMarks);


//Q4.

 let n=prompt("Enter n");
 let number=[];

  for(let i=1;i<=n;i++){
      number[i-1]=i;
  }

  let tSum=number.reduce((pre,curr)=>{
        return pre+curr;
  })

  console.log(`sum of all element is:-${tSum}`);

  let factrioal=number.reduce((pre,curr)=>{
    return pre*curr;
})

console.log(`factrioal of all element is:-${factrioal}`);