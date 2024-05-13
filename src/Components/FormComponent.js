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
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 text-[14px]">
                    {/* Liste déroulante */}
                    <div>
                        <select className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none">
                            <option value="">Sélectionner une option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    {/* Datalist */}
                    <div>
                        <input className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none" list="datalistOptions" placeholder="Entrez un mot" />
                        <datalist id="datalistOptions">
                            <option value="Option 1" />
                            <option value="Option 2" />
                            <option value="Option 3" />
                        </datalist>
                    </div>

                    {/* Case à cocher */}
                    <div><input type="checkbox" /> <p>Acceptez-vous nos conditions ?</p></div>

                    {/* Input de type radio */}
                    <div className="flex items-center flex-wrap gap-x-3">
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" value="option1" /> Option 1
                        </label>
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" value="option2" /> Option 2
                        </label>
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" value="option3" /> Option 3
                        </label>
                    </div>

                    {/* Champ d'entrée */}
                    <div>
                        <input type="text" placeholder="Entrez du contenu" />
                    </div>

                    {/* Zone de texte */}
                    <div>
                        <textarea placeholder="Ecrivez dans la zone de texte"></textarea>
                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit">Soumettre</button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;