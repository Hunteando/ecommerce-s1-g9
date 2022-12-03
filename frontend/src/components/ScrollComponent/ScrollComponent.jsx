import React from 'react'
import img1 from '../../assets/img/products/img1.png'

export const ScrollComponent = () => {
    return (
        <div className='container' style={{ width: "95%"}}>
            <div className="row">
                <div className="col d-flex flex-column gap-1 align-items-center" style={{ overflow: "scroll", height: "35em" }}>
                    <h4 className='text-white mt-4'>Ceramicas de autor</h4>
                    <p className='text-white mt-3'>Piezas únicas, elaboradas artesanalmente con diferentes técnicas y acabados</p>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                    <img src={img1} alt="producto" className='w-75'/>
                </div>
            </div>
        </div>
    )
}
