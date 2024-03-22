const IcecreamStore=require("./iceCreamStore")
const ChockletStore=require("./chocalateStore")

const iceCreamStore=new IcecreamStore();
const chocalateStore=new ChockletStore();


iceCreamStore.on("order",(size,price)=>{
  console.log(`You Will take your ${size} IceCream which is ${price} rupees only`);
  chocalateStore.giveChocklet(price);
})

iceCreamStore.order("large",300);
iceCreamStore.showNoOfIceCream();

iceCreamStore.order("small",100);    //buy another icecream
iceCreamStore.showNoOfIceCream();