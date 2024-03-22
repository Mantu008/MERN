//sencronous code (each line wait previous line to execute).........................
// console.log("one");
// console.log("Two");

//callback.................................................

//asyoncronous code

//  function hello(){
//    console.log("Hello");
//  }
// setTimeout(hello,2000);    //2s=2000ms

//   setTimeout(hello1=()=>{
//       console.log("i am mantu");
//   },3000);

//   console.log("Therr");
//   console.log("Four"); 


  //other example....................

  // function sum(a,b){
  //    console.log(a+b);
  // }

  // function calcilator(a,b,sumCallback){
  //   sumCallback(a,b);
  // }

  // calcilator(2,4,sum);


  
  // print in siquence wise data 1,data 2, data 3,data 4..................

//  function getData(dataId,getNextData){
//     setTimeout(()=>{
//       console.log("data",dataId);
//       if(getNextData){
//          getNextData();
//       }
//     },2000);
//  }

//  //callback Hell (nested callback)
// getData(1,()=>{
//       getData(2,()=>{
//          getData(3,()=>{
//             getData(4);
//          });
//       });
// });


//promices...............................................

// let promice =new Promise((resolve,reject)=>{
//     console.log("i am ampromice");
//     resolve("sucess..");
//     // reject("this is rejected")         
// })


//  function getData(dataId,getNextData){
//      return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("sucess");
//         if(getNextData){
//            getNextData();
//         }
//      },1000);
//     });
//  }
 

//  getData(5,()=>{
//      getData(4,()=>{
//           console.log("over");
//      })
//  });

//  let promice=getData(121);

//  promice.then((res)=>{
//    console.log("promise "+res);
// });

//  promice.catch((err)=>{
//      console.log("promise "+err);
//  });


//promise chaining.....

// function asyancFunc1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("data1");
//           resolve("sucess");
//       },4000);
//    });
// };

// console.log("asyanc function is now running");
// console.log("fatching deta 1");



// function asyancFunc2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("data2");
//           resolve("sucess");
//       },4000);
//    });
// };

// let p1=asyancFunc1();
// p1.then((res)=>{
//    console.log("promise "+res);
//    console.log("facting data 2");
//    let p2=asyancFunc2();
//    p2.then((res)=>{
//       console.log("promise "+res);
//    })
// });

// real asyanc function..

// asyancFunc1().then((res)=>{
//    console.log("facting data 2");
//     return asyancFunc2();
// }).then((res)=>{
//      console.log(res);
// })




//asyanc await...........................................

// async function hello(){
//    console.log("hello");
// }
// hello();

// function api(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           console.log("Wether data.");
//           resolve("sucess");
//        },2000)
//     });
// };

//  async function getWeather(){
//       await api().then((res)=>{  //1st time
//          console.log(res);
//       });

//       await api().then((res)=>{   //2nd time
//          console.log(res);
//       });
//  } 

//  getWeather();
 

//  console.log("i am mantu");


 function getData(dataId){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("data "+dataId);
             resolve("sucess");
         },2000)
    })
 }

// async function getAllData(){
//       console.log("fatching data 1");
//       await getData(1);

//       console.log("fatching data 2");
//       await getData(2);

//       console.log("fatching data 3");
//       await getData(3);

//       console.log("fatching data 4");
//       await getData(4);

//       console.log("fatching data 5");
//       await getData(5);

//       console.log("fatching data 6");
//       await getData(6);

//       console.log("complete all task one by one");
// }

// getAllData();
 

//we can call these async-await function using iffic function it is call autometiccly whenever we define it.................................

(async function(){
   console.log("fatching data 1");
         await getData(1);
   
         console.log("fatching data 2");
         await getData(2);
   
         console.log("fatching data 3");
         await getData(3);
   
         console.log("fatching data 4");
         await getData(4);
   
         console.log("fatching data 5");
         await getData(5);
   
         console.log("fatching data 6");
         await getData(6);
   
         console.log("complete all task one by one");
})();