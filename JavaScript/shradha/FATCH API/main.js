let URl="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#factPara");
const btn=document.querySelector("#btn");

const getFacts=async()=>{
  console.log("getting data...");
  let response=await fetch(URl);
  //response statue 200 mins all is ok   
  console.log(response.status);   
  let data=await response.json();
  factPara.innerText=data[2].text;
};

btn.addEventListener("click",getFacts);

