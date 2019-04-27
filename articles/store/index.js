import { createStore } from 'redux';
import rootReducer from '../reducers/index';

/*
export function initializeStore (initialState = exampleInitialState) {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools( applyMiddleware() )
    )
  }
*/

const store = createStore( rootReducer );
export default store;
