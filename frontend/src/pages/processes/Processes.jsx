import React from 'react'
import img1 from '../../assets/img/products/img1.png'
import proceso from '../../assets/video/proceso.mp4'

export const Processes = () => {
    return (
        <div className='container-fluid col text-white m-0 h-100'>
            <div className='border-start-0 border-end-0 row' style={{ border: "solid 2px #FDEBD3" }}>Palabras</div>
            <div className='container-fluid row' >
                <div className='col-4 mt-4 mb-3'>
                    <video className='w-100' loop autoPlay muted>
                        <source src={proceso} />
                    </video>
                </div>
                <div className='col border-start ps-5'>
                    <p className='mt-4'>CARLOS OSVAND</p>
                    <h3>Proceso de quema</h3>
                    <p className='mt-5 fs-6'>Nuestra historia</p>
                    <p className='fw-bold'>DESDE EL POLVO A CERAMICA</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur sint quisquam cumque dolore. Eveniet quo explicabo amet asperiores ea aspernatur quaerat adipisci exercitationem eligendi veritatis nam magni neque, vero iste dignissimos, voluptatibus animi, optio qui odio cum minima. Quidem, dolore velit. Illo in et voluptas laborum cumque, nihil at est, corporis similique velit architecto? Quas beatae harum quasi recusandae sapiente consectetur impedit quam pariatur omnis nulla nisi inventore enim, vero iure eum voluptate, corporis dicta distinctio fugit quibusdam laborum explicabo temporibus. Vel eos laboriosam voluptatum nobis commodi id quae provident cupiditate reprehenderit eligendi facilis accusantium unde, tempore itaque quidem iure iusto corrupti excepturi praesentium voluptatibus corporis dolores magni harum quasi. Fugit ducimus corporis qui inventore dolorem deleniti, eos natus sequi dolorum itaque, labore voluptatum.</p>
                </div>
            </div>
            <div className='container-fluid mt-0 pt-4 border-top'>
                <div className='row justify-content-center'>
                    <div className="col-3">
                        <img className='w-100' src={img1} alt="producto" />
                        <p>Nuestra historia</p>
                    </div>
                    <div className="col-3">
                        <img className='w-100' src={img1} alt="producto" />
                        <p>Nuestra historia</p>
                    </div>
                    <div className="col-3">
                        <img className='w-100' src={img1} alt="producto" />
                        <p>Nuestra historia</p>
                    </div>
                    <div className="col-3">
                        <img className='w-100' src={img1} alt="producto" />
                        <p>Nuestra historia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
