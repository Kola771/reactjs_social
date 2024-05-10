import React, {useState} from 'react';
import ArrayProp from '../Components/ArrayProp';

const Accueil = () => {
    // Définissions les données à passer au composant enfant
    const [users, setUsers] = useState([
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
        }
    ]);

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
