const PizzaShop=require("./pizza-shop")
const DrinkMachine=require("./drink-machine");


const pizzaShop=new PizzaShop();
const drinkMachine=new DrinkMachine();
pizzaShop.on("order",(size,topping)=>{
  console.log(`Order Receved! Backing a ${size} Pizza with ${topping}`);
  drinkMachine.servDrink(size)
})


pizzaShop.order("large","mashrum");
pizzaShop.displayOrderNumber();


pizzaShop.order("small","paner")
