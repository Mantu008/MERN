
const map=new Map();

map.set("mantu","india");
map.set("ashish","us");

for (const [key,value] of map) {
     console.log(key+"->"+value);
}


const namearr=["mantu","ashish","hari","anish"];

let  print=(item)=>{
     console.log(item);
}

namearr.forEach(print);