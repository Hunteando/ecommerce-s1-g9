import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img1 from '../../assets/img/products/img1.jpg'
import { FeatureProducts } from '../../components/FeatureProducts/FeatureProducts'
import { ScrollComponent } from '../../components/ScrollComponent/ScrollComponent'


export const Index = () => {
    return (
        <div className='container-fluid mt-2 ms-0 bg-dark border-top p-0'>
            <div className='row' style={{ width: "100%" }}>
                <div className='col-9 border-end pt-5 px-0'>
                    <div className="row w-100 m-0">
                        <div className="col-8">
                            <h2 className='fs-1' style={{ color: "#FDEBD3" }}>CERAMICA HECHA A MANO</h2>
                            <p className='my-4' style={{ color: "#FDEBD3" }}>Obra 254-9</p>
                            <p style={{ color: "#FDEBD3" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nisi voluptatum vel est iste distinctio a quos omnis repudiandae iusto accusamus, reiciendis natus fugit illo cum excepturi sapiente et magnam. Quasi eum non atque exercitationem deleniti, a officia harum tempora esse. Quod quibusdam quia ut in pariatur distinctio omnis corporis, laudantium vel quam magni atque, architecto natus voluptatibus. Minus maiores corporis id unde ipsam eum, alias pariatur quasi vero et illo incidunt magnam recusandae accusamus voluptates hic quibusdam molestias vel dolores libero a nemo neque praesentium necessitatibus! Quam, laborum quod quaerat, alias dolorum eos incidunt, et aliquam ipsam libero laudantium?</p>
                            <div className='col d-flex justify-content-evenly mt-5'>
                                <div className="container">
                                    <h5 style={{ color: "#E16026" }}>CRAS VITAE ORNARE.</h5>
                                    <p className='w-50' style={{ color: "#FDEBD3" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nobis?</p>
                                </div>
                                <button className='btn rounded border-0 fw-bold' style={{ backgroundColor: "#E16026", color: "#FDEBD3", width: "25em", height: "2.5em" }}>ver mas</button>
                            </div>
                        </div>
                        <div className="col p-0">
                                <img className='img-fluid' src={img1} alt="Producto" style={{ height: "90%" }} />
                        </div>
                    </div>
                </div>
                <div className="col" style={{ overflow: "hidden", maxHeight: "540px" }}>
                    <ScrollComponent/>
                </div>
            </div>
            <div className="row border-top border-2 pt-5 mx-0" style={{ width: "100%", borderColor: "#FDEBD3" }}>
                <div className="col mx-2">
                    <div className="row">
                        <div className="col border-end border-2 px-0 text-center d-flex align-items-center"><FontAwesomeIcon className='text-white fs-2' icon={faPenToSquare} /></div>
                        <div className="col-10" style={{ color: "#FDEBD3" }}>
                            <h5>CAMBIO Y DEVOLUCIÓN</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, velit.</p>
                        </div>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row">
                        <div className="col border-end border-2 px-0 text-center d-flex align-items-center"><FontAwesomeIcon className='text-white fs-2' icon={faPenToSquare} /></div>
                        <div className="col-10" style={{ color: "#FDEBD3" }}>
                            <h5>CALIDAD ASEGURADA</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, doloremque.</p>
                        </div>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row">
                        <div className="col border-end border-2 px-0 text-center d-flex align-items-center"><FontAwesomeIcon className='text-white fs-2' icon={faPenToSquare} /></div>
                        <div className="col-10" style={{ color: "#FDEBD3" }}>
                            <h5>PAGOS SEGUROS</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, perspiciatis?</p>
                        </div>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row">
                        <div className="col border-end border-2 px-0 text-center d-flex align-items-center"><FontAwesomeIcon className='text-white fs-2' icon={faPenToSquare} /></div>
                        <div className="col-10" style={{ color: "#FDEBD3" }}>
                            <h5>ENVIOS A TODO EL PAIS</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureProducts/>
        </div>
    )
}
