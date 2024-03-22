// const coding=["java","cpp","c","python","javascript"];

// const values=coding.forEach((itm)=>{
//     // console.log(itm);
//      return itm;
// });

// console.log(values);



// const myNums=[1,2,3,4,5,6,7,8,9,10];

// myNums.forEach((itm)=>{
//     console.log(itm);
// });

//filter function is use to chech given condition and give febrable output..

// let newNums=myNums.filter((num)=>{
//    return num>3;
// });
// console.log(newNums);
 


//it is doing same work like filter but here we use more lone of code then filter..


// const newNums=[];

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }    
// })

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


   let userBook=books.filter((bk)=> bk.genre==='History');

   let userPublicBook=books.filter((bk)=>bk.publish>=1995  && bk.genre==='History');
   
   // we can doing like this.. it is also a good syntex

    // userPublicBook=books.filter((bk)=>{          
    //   return bk.publish>2000;
    // });                              

   console.log(userPublicBook);