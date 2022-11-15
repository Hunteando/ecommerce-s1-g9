import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Index } from '../pages/index/Index'
import { Processes } from '../pages/processes/Processes'
import { Products } from '../pages/products/Products'
import React from 'react'

export const Routes = () => {
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='processes' element={<Processes/>}/>
        </ReactDomRoutes>
    )
}