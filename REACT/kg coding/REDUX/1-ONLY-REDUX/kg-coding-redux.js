const redux=require('redux');

//initial value
const INITIAL_VALUE={
   counter:0
}

//reducer function
const reducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type==='INCREMENT'){
      newStore ={counter:store.counter+1};
    }else if(action.type==="DECREMENT"){
        newStore={counter:store.counter-1};
    }else if(action.type==="Addition"){
       newStore={counter:store.counter+action.paylod.number}
    }
    return newStore;
}

//create store
const store=redux.createStore(reducer);

//create suscriber function
const suscriber=()=>{
  const state =store.getState();
   console.log(state);
} 


store.subscribe(suscriber);

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'Addition',paylod:{number:10}});
store.dispatch({type:'DECREMENT'}); 

store.subscribe;