import { BUY_CAKE } from "./CakeTypes";

export const buyCake = (Number = 1) => {
  return {
    type: BUY_CAKE,
    paylod: Number,
  };
};
