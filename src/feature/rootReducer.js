import cakeReducer from "./cake/cakeSlice";
import icecreamReducer from "./icecream/icecreamSlice";

const rootReducer = {
  cake: cakeReducer,
  icecream: icecreamReducer
}

export default rootReducer