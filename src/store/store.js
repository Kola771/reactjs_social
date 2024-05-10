import { createStore, combineReducers } from 'redux';
import userStore from './userStore';

// Combine les différents reducers si nécessaire
const rootReducer = combineReducers({
  users: userStore.reducer,
});

const store = createStore(rootReducer);

export default store;
