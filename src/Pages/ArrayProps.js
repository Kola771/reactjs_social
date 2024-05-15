import React, { useState, useEffect } from 'react';
import ArrayProp from '../Components/ArrayProp';
import userStore from '../store/userStore'; // Importe le userStore

const Accueil = () => {
    // Récupérons tous les utilisateurs
    userStore.dispatch({
        type: 'ALL_USER'
    });
    // Définis une fonction pour obtenir les utilisateurs à partir du userStore
    const getUsersFromStore = () => userStore.getState().users;
    // Utilisation de useState pour stocker les utilisateurs
    const [users, setUsers] = useState(getUsersFromStore());

    // Fonction pour recevoir les données envoyées depuis le composant enfant
    const receiveDataFromChild = (value) => {
        let newUsers = users.filter((_, i) => i !== value);
        setUsers(newUsers);
    };

    return (
        <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Mon tableau avec props</h2>
            <ArrayProp allUsers={users} recupData={receiveDataFromChild} />
        </div>
    );
}

export default Accueil;
