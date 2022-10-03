import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import FilmDetail from '../pages/detail-pages/FilmDetail';
import CharacterDetail from '../pages/detail-pages/CharacterDetail';
import PlanetDetail from '../pages/detail-pages/PlanetDetail';
import VehicleDetail from '../pages/detail-pages/VehicleDetail';
import StarshipDetail from '../pages/detail-pages/StarshipDetail';
import SpecieDetail from '../pages/detail-pages/SpecieDetail';

import PrivateRoute from './PrivateRoute';
import { resourcesTypes } from '../data/resourcesTypes';
import ListPage from '../pages/list-pages/ListPage';
import LoginPage from '../pages/login-page/LoginPage';
const Router = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path='/'  element={<LoginPage />} exact />

                <Route path='/people' element={<PrivateRoute><ListPage resourceType={resourcesTypes.people} /></PrivateRoute>} exact />
                <Route path='/people/:id' element={<PrivateRoute><CharacterDetail /></PrivateRoute>} />

                <Route path='/films' element={<PrivateRoute><ListPage resourceType={resourcesTypes.films} /></PrivateRoute>} exact />
                <Route path='/films/:id' element={<PrivateRoute><FilmDetail /></PrivateRoute>} />

                <Route path='/planets' element={<PrivateRoute><ListPage resourceType={resourcesTypes.planets} /></PrivateRoute>} exact />
                <Route path='/planets/:id' element={<PrivateRoute><PlanetDetail /></PrivateRoute>} exact />

                <Route path='/species' element={<PrivateRoute><ListPage resourceType={resourcesTypes.species} /></PrivateRoute>} exact />
                <Route path='/species/:id' element={<PrivateRoute><SpecieDetail /></PrivateRoute>} exact />

                <Route path='/vehicles' element={<PrivateRoute><ListPage resourceType={resourcesTypes.vehicles} /></PrivateRoute>} exact />
                <Route path='/vehicles/:id' element={<PrivateRoute><VehicleDetail /></PrivateRoute>} exact />

                <Route path='/starships' element={<PrivateRoute><ListPage resourceType={resourcesTypes.starships} /></PrivateRoute>} exact />
                <Route path='/starships/:id' element={<PrivateRoute><StarshipDetail /></PrivateRoute>} exact />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;