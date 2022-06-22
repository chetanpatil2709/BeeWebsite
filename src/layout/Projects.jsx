import React from 'react'
import img1 from '../images/xwork-1.webp';
import img2 from '../images/xwork-2.webp';
import img3 from '../images/xwork-3.webp';
import img4 from '../images/xwork-4.webp';
import img5 from '../images/xwork-5.webp';
import img6 from '../images/xwork-6.webp';
import img7 from '../images/xwork-7.webp';
import img8 from '../images/xwork-8.webp';

export default function Projects() {
    const project_img = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 }
    ]
    return (
        <section>
            <div className='row'>
                {
                    project_img.map((project_img, index) => (
                        <div className='col-md-6 col-lg-3' data-aos='fade-up' key={index}>
                            <div className='project'>
                                <img src={project_img.img} alt='img' />
                                <div className='text'>
                                    <p>Commercial</p>
                                    <h3>San Francisco Tower</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
