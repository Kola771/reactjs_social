import React, { useState } from 'react';
import Close from './Icons/Close';

const TodoList = () => {

    // State pour stocker la liste de tâches
    const [todos, setTodos] = useState([]);

    // State pour stocker la valeur de l'input
    const [inputValue, setInputValue] = useState('');

    // Gestion de la saisie dans l'input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Ajout d'une tâche à la liste
    const handleAddTodo = (e) => {
        // Empêche le comportement par défaut du formulaire (rechargement de la page)
        e.preventDefault();
        // Vérifie si l'input n'est pas vide
        if (inputValue.trim() !== '') {
            // Ajoute la nouvelle tâche à la liste et réinitialise l'input
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    // Suppression d'une tâche de la liste
    const handleDeleteTodo = (index) => {
        // Filtre la liste pour exclure la tâche à supprimer
        const updatedTodos = todos.filter((_, i) => i !== index);
        // Met à jour la liste de tâches
        setTodos(updatedTodos);
    };

    return (
        <div className="border-gray-300 border-[1px] px-4 py-2 flex flex-col gap-y-2 w-[98%] mx-auto rounded">
            <h3 className='text-[13px]'>Ma todolist</h3>
            <form className='flex justify-between items-center'>
                {/* Input pour ajouter une nouvelle tâche */}
                <input type="text" value={inputValue} placeholder="Entre votre tâche" className='placeholder:text-[12px] text-[12px] px-1 py-1.5 w-[80%] border-gray-400 border-[1px] rounded focus:outline-none' onChange={handleInputChange} required />
                {/* Bouton pour ajouter une nouvelle tâche */}
                <button onClick={handleAddTodo} className='text-[12px] font-bold bg-blue-800 text-white rounded px-2 py-1.5'>Ajouter</button>
                {/* Liste des tâches */}
            </form>
            <ul className='flex flex-col gap-y-2 px-3 py-2'>
                {/* Utilisez la méthode map avec un return explicite */}
                {todos.map((todo, index) => {
                    return <li key={index} className='text-[12px] flex justify-between items-center'>
                        {todo}
                        {/* Bouton pour supprimer la tâche */}
                        <button onClick={() => handleDeleteTodo(index)}>
                            <Close />
                        </button>
                    </li>;
                })}
            </ul>
        </div>
    )
};

export default TodoList;