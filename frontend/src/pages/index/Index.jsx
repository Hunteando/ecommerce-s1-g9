import React from 'react'
import img1 from '../../assets/img/products/img1.png'
import img2 from '../../assets/img/products/img2.PNG'
import img3 from '../../assets/img/products/img3.PNG'
import img4 from '../../assets/img/products/img4.PNG'


export const Index = () => {
    return (
        <div className='container-fluid mt-5 bg-dark'>
            <div className='row row-cols-2'>
                <div className='col ms-5'>
                    <h2 className='fs-1' style={{color: "#FDEBD3"}}>Titulo</h2>
                    <p className='my-4' style={{color: "#FDEBD3"}}>SUBTITULO 1</p>
                    <p style={{color: "#FDEBD3"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nisi voluptatum vel est iste distinctio a quos omnis repudiandae iusto accusamus, reiciendis natus fugit illo cum excepturi sapiente et magnam. Quasi eum non atque exercitationem deleniti, a officia harum tempora esse. Quod quibusdam quia ut in pariatur distinctio omnis corporis, laudantium vel quam magni atque, architecto natus voluptatibus. Minus maiores corporis id unde ipsam eum, alias pariatur quasi vero et illo incidunt magnam recusandae accusamus voluptates hic quibusdam molestias vel dolores libero a nemo neque praesentium necessitatibus! Quam, laborum quod quaerat, alias dolorum eos incidunt, et aliquam ipsam libero laudantium?</p>
                    <div className='col d-flex justify-content-evenly mt-5'>
                        <button className='btn btn-warning btn-lg col-4 rounded-0 border-0' style={{ backgroundColor: "#E16026", color: "#FDEBD3" }}>BOTON</button>
                        <button className='btn btn-outline-light col-4 rounded-0' >BOTON</button>
                    </div>
                </div>
                <div className='col col-5 row gy-2 d-flex justify-content-center'>
                    <img src={img1} alt="imagen" className='col' />
                    <div className='row mt-4 d-flex justify-content-between px-0'>
                        <img src={img2} alt="imagen" className='col-4' />
                        <img src={img3} alt="imagen" className='col-4' />
                        <img src={img4} alt="imagen" className='col-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
