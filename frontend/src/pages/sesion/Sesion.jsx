import React, { useState } from 'react'
import img from '../../assets/img/login/img.jpg'
import { Login } from '../../components/login/Login'
import { Register } from '../../components/Register/Register'

export const Sesion = () => {
    const [isSelect, setIsSelect] = useState("login")

    return (
        <div className="container-fluid mt-5">
            <div className="row mx-auto">
                <div className="col-5">
                    <div className="card rounded-0" style={{height: "80%"}}>
                        <img src={img} alt="Fondo" style={{height: "100%"}}/>
                        <div className="card-img-overlay">
                            <h2 className='text-start' style={{ marginTop: "10em" }}>Titulo</h2>
                            <p className='w-100 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum deserunt inventore quod, id quam atque numquam! Architecto, sint. Porro, hic sapiente non quasi architecto, saepe voluptate sed eos quis minus assumenda vitae repellendus ratione, quisquam maiores! Vero unde pariatur quam ipsa labore magnam rem aut assumenda, dolorum, debitis dignissimos.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="btn-group w-50" role="group" aria-label="Register Login" style={{ marginLeft: "20em"}}>
                            <button type="button" className="btn" style={{ border: "solid 1px #E16026", color: "#E16026" }}
                                onClick={() => setIsSelect("register")
                                }>Registrarse</button>
                            <button type="button" className="btn" style={{ border: "solid 1px #E16026", color: "#E16026" }}
                                onClick={() => { setIsSelect("login") }}>Iniciar Sesión</button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            isSelect === "login"
                            ? <Login/>
                            : <Register/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
