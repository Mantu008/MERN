const obj1={
    name:"mantu,"
}


//here it is chenge the obj1,and also obj2 refrence

// let obj2=obj1
// obj2.name="hari"



//here it is not chenge the obj1 refrence only chenge ob2 refrence

let obj2=obj1
obj2={
    name:"hari"
}


console.log(obj2);