import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'; // Importe le hook useSelector pour accéder à l'état du store
import userStore from '../store/userStore'; // Importe le store

const WatchComponent = () => {

    const [count, setCount] = useState(0);

    console.log(userStore.getState());
        console.log(
            // Dispatch une action pour ajouter un utilisateur
            userStore.dispatch({
                type: 'ADD_USER',
                payload: {
                    name: 'Nouvel Utilisateur',
                    email: 'nouvelutilisateur@example.com',
                    produit: 'Nouveau Produit',
                    price: '50 €'
                }
            }));
            console.log(userStore.getState());
    // Utilisation de useEffect pour surveiller la variable count
    useEffect(() => {
        console.log("La valeur de count a changé : ", count);
    }, [count]); // Array de dépendances, useEffect s'éxécute à chaque changement de ces dépendances

    // Fonction d'incrémentation
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className="text-[13px] flex flex-col gap-y-2">
                <h3>Valeur de count : {count}</h3>
                <div className="flex justify-start gap-x-4">
                    <button onClick={incrementCount}>Incrémenter</button>
                </div>
            </div>
        </div>
    );
};

export default WatchComponent;
