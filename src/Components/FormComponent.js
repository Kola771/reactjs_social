import React, { useState } from "react";

const FormComponent = () => {
    // State pour gérer les valeurs des champs du formulaire
    const [formData, setFormData] = useState({
        selectValue: '',
        datalistValue: '',
        checkboxValue: false,
        radioValue: '',
        inputValue: '',
        textareaValue: ''
    });

    // Fonction pour mettre à jour les valeurs du formulaire lorsqu'elles changent
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    };

    // Fonction pour gérer la soummission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        // Effectue les actions nécessaires avec les données du formulaire
        console.log("Données du formulaire soumis : ", formData);
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 text-[14px] px-4 py-5 rounded-lg shadow-lg">
                    {/* Liste déroulante */}
                    <div>
                        <select name="selectValue" value={formData.selectValue} className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none" onChange={handleInputChange}>
                            <option value="">Sélectionner une option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    {/* Datalist */}
                    <div>
                        <input name="datalistValue" value={formData.datalistValue} className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none" list="datalistOptions" placeholder="Entrez un mot" onChange={handleInputChange} />
                        <datalist id="datalistOptions">
                            <option value="Option 1" />
                            <option value="Option 2" />
                            <option value="Option 3" />
                        </datalist>
                    </div>

                    {/* Case à cocher */}
                    <div className="flex items-center gap-x-2"><input type="checkbox" name="checkboxValue" checked={formData.checkboxValue} onChange={handleInputChange} /> <p>Acceptez-vous nos conditions ?</p></div>

                    {/* Input de type radio */}
                    <div className="flex items-center flex-wrap gap-x-3">
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" name="radioValue" checked={formData.radioValue === 'option1'} value="option1" onChange={handleInputChange} /> Option 1
                        </label>
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" name="radioValue" checked={formData.radioValue === 'option2'} value="option2" onChange={handleInputChange} /> Option 2
                        </label>
                        <label className="flex items-center gap-x-2 border-[1px] px-1 py-1.5 rounded shadow">
                            <input type="radio" name="radioValue" checked={formData.radioValue === 'option3'} value="option3" onChange={handleInputChange} /> Option 3
                        </label>
                    </div>

                    {/* Champ d'entrée */}
                    <div>
                        <input type="text" name="inputValue" value={formData.inputValue} className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none" placeholder="Entrez du contenu" onChange={handleInputChange} />
                    </div>

                    {/* Zone de texte */}
                    <div>
                        <textarea name="textareaValue" value={formData.textareaValue} className="w-full border-[1px] rounded px-1 py-1.5 focus:outline-none" placeholder="Ecrivez dans la zone de texte" onChange={handleInputChange}></textarea>
                    </div>

                    {/* Bouton de soumission */}
                    <div className="flex justify-end"><button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-[12px]" type="submit">Soumettre</button></div>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;