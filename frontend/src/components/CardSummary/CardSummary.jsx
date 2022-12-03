import React from 'react'
import img1 from '../../assets/img/products/img1.png'

export const CardSummary = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-8 border border-start-0 border-secondary py-2">
                    <div className="row">
                        <div className="col"><img src={img1} alt="Producto" className='m-auto' style={{ width: "10em" }} /></div>
                        <div className="col pt-2">
                            <span className='text-muted'>Producto</span>
                            <h6 className='text-white mb-5'>OBRA 245-9</h6>
                            <span class="py-1 px-2 rounded" style={{ backgroundColor: "#FDEBD3" }} >Alto 100cm</span>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-column border border-end-0 border-secondary justify-content-end ps-4 pb-2">
                    <span className='text-muted'>Precio</span>
                    <span className='text-white fw-bold'>$1000</span>
                </div>
            </div>
        </div>
    )
}
