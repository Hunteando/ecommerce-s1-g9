import React from 'react'

export const Register = () => {
    return (
        <div className='container mx-auto w-75 mt-0'>
            <h4>Registrarse</h4>
            <p>Es rápido y fácil</p>

            <form action="">
                <div className='mt-4'>
                    <label for="name" className="form-label text-white">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre"></input>
                </div>
                <div className='mt-4'>
                    <label for="lastname" className="form-label text-white">Apellido</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Apellido"></input>
                </div>
                <div className='mt-4'>
                    <label for="password" className="form-label text-white">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña"></input>
                </div>
                <div className='mt-4'>
                    <label for="password" className="form-label text-white">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña"></input>
                </div>
                <p className='text-white mt-4'>¿Ya tenes cuenta? <span style={{color: "#E16026"}}>Ingresa</span> </p>
                <button type="submit" className='mt-5 w-50 border-0 rounded fw-bold' style={{ backgroundColor: "#E16026", height: "2em"}}>Registrarse</button>
            </form>
        </div>
    )
}
