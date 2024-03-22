let a=10;
let b=0;


// this code give inconsistancy if we have large amount of data like this

// console.log("start");

// setTimeout(()=>{
//     b=20;
// },2000);

// console.log(a+b)

// console.log("end")



// so avoiding this we can doing like this

console.log("start");

const weatingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 20;
    resolve("b is set sucessfully so the adddition of a and b is:-");
  }, 2000);
});

weatingData.then((data)=>{
  console.log(data)
  console.log(a+b)
})

console.log("end")
