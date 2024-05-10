import React from 'react';
import Counter from '../Components/Counter';

const CounterPage = () => {
  return (
    <div className='flex flex-col gap-y-2 px-2'>
      <h2 className='text-[14px] font-medium mt-2'>Compteur</h2>
      <Counter />
    </div>
  );
}

export default CounterPage;
