
{
    //crfeating string

    let str1="mantu";
    let str2='Hari';
    let str3=`ashish`;     // this is string literals
    console.log(`${str1} ${str2} ${str3}`);   
    console.log(`${str1.length} ${str2.length} ${str3.length}`);
    console.log(`${str1[0]} ${str2[1]} ${str3[2]}`);

}

{

  let obj={
     item:"pen",
     price:101,
  };

  console.log("templet literals");

  console.log(`the cost of ${obj.item} is ${obj.price} Rupees`);      //string  interpolation
}

{
  let str="mantu\nkumar"
  console.log(str);
  console.log(str.length);
  
  str="mantu\tkumar"
  console.log(str);
  console.log(str.length);
  
} 



{

  let str=" mantu ";
  let s1=str.toUpperCase();
  let s2=str.toLowerCase();
  let s3=str.trim();
  let s4=str.replace("m","n")

     console.log(s1);
     console.log(s2);
     console.log(s3); 
     console.log(s4);
     console.log(str.charAt(3));
     
}