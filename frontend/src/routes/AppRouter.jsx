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
import AboutSteelJewelry from '../pages/secondaryPages/AboutSteelJewelry';
import FrequentQuestions from '../pages/secondaryPages/FrequentQuestions';
import BeOurSupplier from '../pages/secondaryPages/BeOurSupplier';
import ExchangePolicies from '../pages/secondaryPages/ExchangePolicies';
import JewelryCare from '../pages/secondaryPages/JewelryCare';
import SizeGuide from '../pages/secondaryPages/SizeGuide';
import BePartOfOurStaff from '../pages/secondaryPages/BePartOfOurStaff';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
          {/* HOME */}
          <Route path='/' exact={true} element={<Home/>}/>

          {/* PRODUCTS */}
          <Route path='/productos/catalogo/:categoria' exact={true} element={<Catalogue/>}/>
          <Route path='/productos/catalogo/:categoria/:subcategoria' exact={true} element={<Catalogue/>}/>
          <Route path='/productos/catalogo/:categoria/:subcategoria/:article' exact={true} element={<Catalogue/>}/>

          {/* USERS */}
          <Route path='/usuarios/ingresar' exact={true} element={<Login/>}/>
          <Route path='/usuarios/registrarse' exact={true} element={<Register/>}/>

           {/* SECONDARY PAGES */}
          <Route path='/horarios-de-atencion' exact={true} element={<Attentionschedule/>}/>
          <Route path='/locales' exact={true} element={<WhereToFindUs/>}/>
          <Route path='/como-comprar' exact={true} element={<HowToBuy/>}/>
          <Route path='/contacto' exact={true} element={<Contact/>}/>
          <Route path='/sobre-joyas-de-acero' exact={true} element={<AboutSteelJewelry/>}/>
          <Route path='/preguntas-frecuentes' exact={true} element={<FrequentQuestions/>}/>
          <Route path='/proveedores' exact={true} element={<BeOurSupplier/>}/>
          <Route path='/politicas-de-cambio' exact={true} element={<ExchangePolicies/>}/>
          <Route path='/cuidado-de-las-joyas' exact={true} element={<JewelryCare/>}/>
          <Route path='/talles' exact={true} element={<SizeGuide/>}/>
          <Route path='/ser-parte-de-nuestro-staff' exact={true} element={<BePartOfOurStaff/>}/>

        </Route>
    )
)

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
