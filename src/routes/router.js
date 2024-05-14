import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Profil from '../Pages/Profil';

import MyTodoList from '../Pages/TodoListPage';
import CounterPage from '../Pages/CounterPage';
import TimerPage from '../Pages/TimerPage';
import DragAndDrop from '../Pages/DragAndDrop';
import ArrayProps from '../Pages/ArrayProps';
import FormPage from '../Pages/FormPage';
import ImagePage from '../Pages/ImagePage';

import Notifications from '../Pages/Notifications';
import Home from '../Components/Icons/Home.js';
import List from '../Components/Icons/List.js';
import Compteur from '../Components/Icons/Compteur.js';
import Timer from '../Components/Icons/Timer.js';
import Drop from '../Components/Icons/Drop.js';
import ArrayP from '../Components/Icons/ArrayProp';


const AppRouter = () => {
    return (
        <div>
            <nav className='bg-white z-50 sticky top-0 border-gray-300 border-b-[1px] flex flex-col gap-y-1 pb-1.5 shadow-xl'>
                <h1 className='text-[13px] font-bold text-blue-800'>
                    Mes débuts reactjs
                </h1>
                <ul className='flex items-center justify-between flex-wrap text-[13px] px-1.5 gap-2'>
                    <li>
                        <Link to="/" className='flex items-center gap-x-2'>
                            <Home /> Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-todo-list" className='flex items-center gap-x-2'>
                            <List /> TodoList
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-counter" className='flex items-center gap-x-2'>
                            <Compteur /> Compteur
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-timer" className='flex items-center gap-x-2'>
                            <Timer /> Chrono
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-drag-and-drop" className='flex items-center gap-x-2'>
                            <Drop /> Drag and drop
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-array-props" className='flex items-center gap-x-2'>
                            <ArrayP /> Tableau avec props
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-form" className='flex items-center gap-x-2'>
                            Formulaire
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-image" className='flex items-center gap-x-2'>
                        Télécharger une image
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/notifications">Notifications</Link>
                    </li> */}
                </ul>
            </nav>

            <Routes>
                <Route path="/" exact element={<Accueil />} />
                {/* <Route path="/profil" element={<Profil />} /> */}
                <Route path="/my-todo-list" element={<MyTodoList />} />
                <Route path="/my-counter" element={<CounterPage />} />
                <Route path="/my-drag-and-drop" element={<DragAndDrop />} />
                <Route path="/my-array-props" element={<ArrayProps />} />
                <Route path="/my-form" element={<FormPage />} />
                <Route path="/my-image" element={<ImagePage />} />
                <Route path="/my-timer" element={<TimerPage />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </div>
    );
}

export default AppRouter;