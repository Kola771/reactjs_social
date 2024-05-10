import React, { useState } from 'react';

const Counter = () => {
    
    // Déclaration des variables
    const [number, setNumber] = useState(0);
    const [numberChange, setNumberChange] = useState(0);

    // Fonction pour ajouter à chaque fois la valeur de number
    const functionClick = (value) => {
        setNumberChange(numberChange + value);
    }

    return(
        <div className='flex flex-col gap-y-2'>
            <div className='flex flex-wrap justify-between'>
                <button onClick={() => functionClick(1)} className='px-2 py-1 bg-blue-800 text-white rounded w-[20%] text-[12px] hover:bg-blue-900'>1</button>
                <button onClick={() => functionClick(2)} className='px-2 py-1 bg-blue-800 text-white rounded w-[20%] text-[12px] hover:bg-blue-900'>2</button>
                <button onClick={() => functionClick(-1)} className='px-2 py-1 bg-blue-800 text-white rounded w-[20%] text-[12px] hover:bg-blue-900'>-1</button>
                <button onClick={() => functionClick(-2)} className='px-2 py-1 bg-blue-800 text-white rounded w-[20%] text-[12px] hover:bg-blue-900'>-2</button>
            </div>

            <div className='text-[13px]'>
                <p>Valeur par défaut : <span className='text-amber-500 font-bold'>{number}</span></p>
                <p>Valeur actuelle : <span className='text-amber-500 font-bold'>{numberChange}</span></p>
            </div>
        </div>
    );
}

export default Counter;