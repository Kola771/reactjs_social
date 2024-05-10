import React, { useState } from "react";

const FormComponent = () => {

    // Fonction pour gérer la soummission du formulaire
    const handleSubmit = (event) => {
        // Effectue les actions nécessaires avec les données du formulaire
        event.preventDefault();
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* Liste déroulante */}
                    <select>
                        <option value="">Sélectionner une option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    {/* Datalist */}
                    <input list="datalistOptions" placeholder="Entrez un mot" />
                    <datalist id="datalistOptions">
                        <option value="Option 1" />
                        <option value="Option 2" />
                        <option value="Option 3" />
                    </datalist>

                    {/* Case à cocher */}
                </form>
            </div>
        </div>
    );
};

export default FormComponent;