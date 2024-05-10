import { createStore } from 'redux';

const initialState = {
  users: [] // exemple d'état initial
};

const userReducer = (state = initialState, action) => {
  // Reducer pour gérer les actions liées aux utilisateurs
};

const userStore = createStore(userReducer);

export default userStore;
