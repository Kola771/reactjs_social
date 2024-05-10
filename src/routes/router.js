import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Profil from '../Pages/Profil';
import Notifications from '../Pages/Notifications';

const AppRouter = () => {
    return (
        <div>
            <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/profil">Profil</Link>
              </li>
              <li>
                <Link to="/notifications">Notifications</Link>
              </li>
            </ul>
          </nav>

            <Routes>
                <Route path="/" exact element={<Accueil />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </div>
    );
}

export default AppRouter;