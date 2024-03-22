import { BUY_ICECREAM } from "./IcecreamTypes";

const initialIcecreamState = {
  noOfIcecream: 20,
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - 1,
      };

    default:
      return state;
  }
};

export default IcecreamReducer;
