const EventEmitter=require("events");

class IcecreamStore extends EventEmitter{

    constructor(){
        super();
        this.noOfIcecream=0;
    }

    order(size,price){
       this.noOfIcecream++;
       this.emit("order",size,price);
    }

    showNoOfIceCream(){
       console.log(`current count of IceCream is:- ${this.noOfIcecream}`)
    }
}

module.exports=IcecreamStore;