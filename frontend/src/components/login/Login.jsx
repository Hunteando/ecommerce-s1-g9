import React from 'react'

export const Login = () => {
    return (
        <div className='container mx-auto w-50' style={{ marginTop: "7em"}}>
            <h4 className='text-white'>Inicia sesión</h4>
            <p className='text-white'>¿Tenes problemas para conectarte? <a href="#" style={{ color: "#E16026" }}>Recuperar contraseña</a></p>
            <form action="">
                <div className='mt-4'>
                    <label for="email" className="form-label text-white">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="name@ejemplo.com"></input>
                </div>
                <div className='mt-4'>
                    <label for="password" className="form-label text-white">Correo electrónico</label>
                    <input type="password" className="form-control" id="password" placeholder="name@ejemplo.com"></input>
                </div>
                <button type="submit" className='mt-5 w-50 border-0 fw-bold rounded' style={{ backgroundColor: "#E16026"}}>Iniciar sesión</button>
            </form>
        </div>
    )
}
