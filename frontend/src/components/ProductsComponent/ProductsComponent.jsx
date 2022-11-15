import { faFilter, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from '../Card/Card'

export const ProductsComponent = () => {
    return (
        <div className='container col'>
            <h3 className='text-left mt-4 fs-1' style={{color: "#FDEBD3"}}>Catálogo</h3>
            <div className='container d-flex justify-content-between mt-5 p-0'>
                <div className='input-group w-25'>
                    <button className='border-0 rounded-start'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input type="text" class="form-control col-1" placeholder="Buscar" aria-label="Buscar" />
                </div>
                <div className='container d-flex align-items-center justify-content-center w-25 p-0 m-0' style={{ gap: "1em", color: "#FDEBD3" }}>
                    <FontAwesomeIcon icon={faFilter} />
                    <select class="form-select w-50 mx-0" aria-label="Default select example" style={{cursor: "pointer"}}>
                        <option selected value="1">Popular</option>
                        <option value="2">Nuevo</option>
                        <option value="3">Precio</option>
                    </select>
                </div>
            </div>
            <div className='tags container-fluid my-4 ps-4'>
                <span className='rounded-pill bg-secondary py-2 px-3'>Peso de 120kg <button className='border-0 bg-secondary'><FontAwesomeIcon icon={faXmark} /></button></span>
            </div>
            <div className='podructs container-fluid d-flex flex-row flex-wrap justify-content-around' style={{ gap: ".5em", padding: "1em" }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
