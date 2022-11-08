import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Index } from '../pages/index/Index'

export const Routes = () => {
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
        </ReactDomRoutes>
    )
}