import { createStore } from 'redux';

// Définition de l'état initial
const initialState = {
  users: [] // exemple d'état initial
};

// Définition du reducer pour gérer les actions liées aux utilisateurs
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'ALL_USER':
      return {
        ...state,
        users: [
          {
            name: "ABOUDOU Koladé M.",
            email: "koladeaboudou@gmail.com",
            produice: "Air Force",
            price: "100 €"
          },
          {
            name: "AGNOUN Euloge",
            email: "aeuloge@gmail.com",
            produice: "Air Force",
            price: "100 €"
          },
          {
            name: "GOUNON Silvinoh",
            email: "edhorgounon@gmail.com",
            produice: "Air Force",
            price: "100 €"
          }]
      };
    // Ajoute d'autres cas pour d'autres actions si nécessaire
    default:
      return state;
  }
};

// Création du store avec le reducer
const userStore = createStore(userReducer);

export default userStore;
