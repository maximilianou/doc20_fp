import { ADD_PRODUCT } from '../consts/action-types';
const initialState = {
    products: [
          { id: 100, name: "Banana", calories: 270},
          { id: 102, name: "Chocolate", calories: 300},
          { id: 103, name: "Lemon", calories: 200},
          { id: 105, name: "Vanilla", calories: 250}
        ],
    cart: []
};
const rootReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case ADD_PRODUCT:
        return { ...state, products: [ ...state.products, action.payload ] };
      default:
        return state;
  }
};
export default rootReducer;
