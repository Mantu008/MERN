import { createStore } from 'redux';

const INITIAL_VALUE = {
  counter: 0,
  privacy:false
};

const counterReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };

    case "DECREMENT":
      return {
        counter: state.counter - 1
      };

    case "ADD":
      return {
        counter:state.counter+action.payload.num
    };

    case "SUBTRACT":
      return {
      counter:state.counter-action.payload.num
    };

    case "PRIVACY_TOGGLE":
      return {
       ...state,
       privacy:!state.privacy
    };


    default:
      return state;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
