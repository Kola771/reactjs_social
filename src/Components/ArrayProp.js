import React, { useState } from "react";
import Close from './Icons/Close';

const ArrayP = ({ allUsers, recupData }) => {

    const handleDeleteUser = (index) => {
        // Appelle la fonction recupData du parent et envoie les données
        recupData(index);
    };

    return (
        <div>
            <div>
                <table className="relative w-full">
                    <thead className="text-left text-[14px]">
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Produit</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-[13px]">
                        {
                            allUsers.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.produice}</td>
                                    <td>{user.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(index)}>
                                            <Close />
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArrayP;