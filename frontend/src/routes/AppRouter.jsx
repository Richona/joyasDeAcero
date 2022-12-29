import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { Root } from '../pages/Root';

/* HOME */
import {Home} from '../pages/Home';

/* PRODUCTS */
import Catalogue from '../pages/products/Catalogue';

/* USERS */
import Login from '../pages/users/Login';
import Register from '../pages/users/Register';

/* SECONDARY PAGES */
import Attentionschedule from '../pages/secondaryPages/AttentionSchedule';
import WhereToFindUs from '../pages/secondaryPages/WhereToFindUs';
import HowToBuy from '../pages/secondaryPages/HowToBuy';
import Contact from '../pages/secondaryPages/Contact';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
          {/* HOME */}
          <Route path='/' exact={true} element={<Home/>}/>

          {/* PRODUCTS */}
          <Route path='/productos/catalogo/:categoria' exact={true} element={<Catalogue/>}/>

          {/* USERS */}
          <Route path='/usuarios/ingresar' exact={true} element={<Login/>}/>
          <Route path='/usuarios/registrarse' exact={true} element={<Register/>}/>

           {/* SECONDARY PAGES */}
          <Route path='/horarios-de-atencion' exact={true} element={<Attentionschedule/>}/>
          <Route path='/locales' exact={true} element={<WhereToFindUs/>}/>
          <Route path='/como-comprar' exact={true} element={<HowToBuy/>}/>
          <Route path='/contacto' exact={true} element={<Contact/>}/>

        </Route>
    )
)

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
