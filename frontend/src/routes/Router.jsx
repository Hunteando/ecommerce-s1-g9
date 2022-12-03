import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Index } from '../pages/index/Index'
import { Processes } from '../pages/processes/Processes'
import { Products } from '../pages/products/Products'
import React from 'react'
import { AboutUs } from '../pages/aboutUs/AboutUs'
import { ProductDetail } from '../pages/productDetail/ProductDetail'
import { ChekOut } from '../pages/checkout/ChekOut'
import { Summary } from '../pages/summary/Summary'
import { Login } from '../components/login/Login'
import { Sesion } from '../pages/sesion/Sesion'

export const Routes = () => {
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='processes' element={<Processes/>}/>
            <Route path='about' element={<AboutUs/>}/>
            <Route path='products/detail' element={<ProductDetail/>}/>
            <Route path='checkout' element={<ChekOut/>}/>
            <Route path='summary' element={<Summary/>}/>
            <Route path='auth' element={<Sesion/>}/>
        </ReactDomRoutes>
    )
}