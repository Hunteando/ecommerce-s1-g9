import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProductsComponent } from '../../components/ProductsComponent/ProductsComponent'
import React from 'react'

export const Products = () => {
    return (
        <div className='container-fluid mx-0 p-0 row-2'>
            <div className='container-fluid text-center bg-dark m-0 py-4' style={{borderBottom: "solid 1px #FDEBD3"}}>
                <h3 className='fs-1 py-1' style={{color: "#FDEBD3"}} >Conoce nuestros productos</h3>
                <p className='py-1' style={{color: "#FDEBD3"}}>ARTESANALES HECHOS CON TORNO, ALFARERIA Y CERÁMICA DE DISEÑO DE AUTOR, TODOS NUESTROS PRODUCTOS SON 100% ARTESANALES</p>
            </div>
            <div className='container-fluid row mx-0 p-0 border-end' >
                <div className='filter col-3 bg-dark mt-0 pb-4' style={{borderRight: "solid 1px #FDEBD3"}}>
                    <div className='container mx-auto col-10 mt-5'>
                        <div class="accordion" id="accordionFilter">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"    >
                                        Precio
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className='input-group'>
                                            <input type="text" class="form-control col-1" placeholder="Desde" aria-label="Desde" style={{ backgroundColor: "#FDEBD3" }}/>
                                            <input type="text" class="form-control col-1" placeholder="Hasta" aria-label="Hasta" style={{ backgroundColor: "#FDEBD3" }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Tamaño
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <input type="text" class="form-control col-1 mt-1" placeholder="Ancho" aria-label="Ancho" style={{ backgroundColor: "#FDEBD3" }}/>
                                        <input type="text" class="form-control col-1 mt-1" placeholder="Largo" aria-label="Largo" style={{ backgroundColor: "#FDEBD3" }}/>
                                        <input type="text" class="form-control col-1 mt-1" placeholder="Alto" aria-label="Alto" style={{ backgroundColor: "#FDEBD3" }}/>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Finalidad
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body bg-dark">
                                        <div className='container form-check'>
                                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label fs-4" for="flexCheckDefault" style={{color: "#FDEBD3"}}>
                                                filtro 1
                                            </label>
                                        </div>
                                        <div className='container form-check'>
                                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label fs-4" for="flexCheckDefault" style={{color: "#FDEBD3"}}>
                                                filtro 2
                                            </label>
                                        </div>
                                        <div className='container form-check'>
                                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label fs-4" for="flexCheckDefault" style={{color: "#FDEBD3"}}>
                                                filtro 3
                                            </label>
                                        </div>
                                        <div className='container form-check'>
                                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label fs-4" for="flexCheckDefault" style={{color: "#FDEBD3"}}>
                                                filtro 4
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Peso
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body bg-dark">
                                        <input type="text" class="form-control col-1" placeholder="Peso" aria-label="Peso" style={{ backgroundColor: "#FDEBD3" }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto col-10 mt-4'>

                        <button className='col-8 me-2 border-0 rounded' style={{ backgroundColor: "#E16026", color: "#FDEBD3" }}>APLICAR FILTRO</button>
                        <button className='col-2 rounded bg-dark' style={{ border: "solid 1px #E16026", color: "#FDEBD3" }}><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </div>
                <ProductsComponent/>
            </div>
        </div>
    )
}
