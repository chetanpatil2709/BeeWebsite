import React from 'react'
import slider1 from '../../images/xbg_1.jpg.pagespeed.ic.fuwE_HQL5R.webp'
import slider2 from '../../images/xbg_2.jpg.pagespeed.ic.XJcvX5vYQA.webp'
export default function Slider() {
    return (
        <section>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt='img' />
                        <div className="carousel-caption d-none d-md-block">
                            <div className='row'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6 float-end' data-aos='fade-up' >
                                    <div className='text-start text-black'>
                                        <h1>We Turn Your </h1>
                                        <h1>Vision Into Reality</h1>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                                        <button className='btn-primary px-4 border-none py-3'>Request a quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt='img' />
                        <div className="carousel-caption d-none d-md-block">
                            <div className='row'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6 float-end' data-aos='fade-up'>
                                    <div className='text-start text-black'>
                                        <h1>Base Construction </h1>
                                        <h1>Build The Future</h1>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                                        <button className='btn-primary px-4 border-none py-3'>Request a quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </section>
    )
}
