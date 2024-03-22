  //Q1
{
let marks=[85,97,44,37,76,60];

let sum=0;
let length=marks.length;

 for(let val of marks){
   sum+=val;
 }

 let avg=sum/length;

 console.log(`avarage of given markas is:-${avg}`);

}

 //Q2

{
   
  let prices=[250,645,300,900,50]; 

   for(let i=0;i<prices.length;i++){
       prices[i]=prices[i]-prices[i]*10/100;
   }

    console.log(`prices of all element after appling offer is :-[${prices}]`);

}


//Q3

{

      let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

      console.log(companies);

      //a. 

      let remove_first=companies.shift();
      console.log(remove_first);
      console.log(companies);

      //b.
      companies.splice(1,1,"Ola");
      console.log(companies);

      //c.
      companies.push("Amazon")
      console.log(companies);

}
 