function great(name){
     console.log(`Hello ${name}`);
}

function greatMantu(greetFn){
    const name="mantu"
    greetFn(name);
}

greatMantu(great)