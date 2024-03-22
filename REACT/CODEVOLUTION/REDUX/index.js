const redux = require('redux');
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()


const buyCake = () => {
  return {
    type: 'BUY_CAKE',
    info: "first redux action"
  };
}

const buyIcecream = () => {
  return {
    type: 'BUY_ICECREAM',
    info: "second redux action"
  };
}

//initial state for cake

const initiaCakelState = {
  numOfCakes: 10
}

//initial state for icecream

const initialIcecreamState = {
  noOfIcecream:20
}

//reducer function  for Cake...

const cakeReducer = (state = initiaCakelState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
}

// reducre function for Icecream

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case 'BUY_ICECREAM':
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - 1
      };

    default:
      return state;
  }
}

//create store...
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
});

const store = redux.createStore(
  rootReducer,
  applyMiddleware(logger)
  );
console.log('Initial state', store.getState());
 
const unsubscribe = store.subscribe(()=>{});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())

unsubscribe();
