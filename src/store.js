import { createStore } from 'redux';

// Définir les actions
const NOTIFICATIONS_UPDATE = 'NOTIFICATIONS_UPDATE';

// Définir les reducers
const initialState = {
  notifications: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_UPDATE:
      return {
        ...state,
        notifications: action.payload
      };
    default:
      return state;
  }
};

// Créer le store Redux
const store = createStore(reducer);

export default store;
