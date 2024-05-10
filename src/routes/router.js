import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Profil from '../Pages/Profil';
import MyTodoList from '../Pages/TodoListPage';
import CounterPage from '../Pages/CounterPage';
import TimerPage from '../Pages/TimerPage';
import Notifications from '../Pages/Notifications';
import Home from '../Components/Icons/Home.js';
import List from '../Components/Icons/List.js';
import Compteur from '../Components/Icons/Compteur.js';
import Timer from '../Components/Icons/Timer.js';


const AppRouter = () => {
    return (
        <div>
            <nav className='sticky top-0 border-gray-300 border-b-[1px] flex flex-col gap-y-1 pb-1.5 shadow-xl'>
                <h1 className='text-[13px] font-bold text-blue-800'>
                    Mes débuts reactjs
                </h1>
                <ul className='flex items-center justify-between'>
                    <li>
                        <Link to="/">
                            <Home />
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-todo-list">
                            <List />
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-counter">
                            <Compteur />
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-timer">
                            <Timer />
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
                <Route path="/my-timer" element={<TimerPage />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </div>
    );
}

export default AppRouter;