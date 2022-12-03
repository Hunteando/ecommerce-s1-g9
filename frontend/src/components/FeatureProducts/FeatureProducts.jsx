import React from 'react'
import wide_img from '../../assets/img/products/wide_img.png'

export const FeatureProducts = () => {
    return (
        <div className="container-fluid mt-5 d-flex flex-column gap-2">
            <div className="row">
                <div className="col-3">
                    <h5 className='text-white'>Y los complementos necesarios</h5>
                    <p className='text-white'>Azucareras, Porta Utensilios, Tarros, Untadores, Posa cubiertos, Cucharitas, posa cucharón. Porque los detalles dan ese toque especial.</p>
                    <button className='btn rounded border-0 fw-bold' style={{ backgroundColor: "#E16026", color: "#FDEBD3", width: "15em", height: "2em" }}>Label</button>
                </div>
                <div className="col">
                    <img className='float-end' src={wide_img} alt="Producto" />
                </div>
            </div>
            <div className="row" style={{ backgroundColor: "#E4D6CB", height: "15em" }}>
                <h2 className='text-center mt-5 mb-0' style={{ height: "2em" }}>Nuestros productos destacados</h2>
                <p className='text-center mb-5 fw-bold'>Horneados en horno de barro</p>
            </div>
            <div className="row">
                <div className="col">
                    <img src={wide_img} alt="Producto" />
                </div>
                <div className="col">
                    <h5 className='text-white text-end'>Y los complementos necesarios</h5>
                    <p className='text-white text-end'>Azucareras, Porta Utensilios, Tarros, Untadores, Posa cubiertos, Cucharitas, posa cucharón. Porque los detalles dan ese toque especial.</p>
                    <button className='btn rounded border-0 fw-bold ms-5' style={{ backgroundColor: "#E16026", color: "#FDEBD3", width: "15em", height: "2em" }}>Label</button>
                </div>
            </div>
        </div>
    )
}
