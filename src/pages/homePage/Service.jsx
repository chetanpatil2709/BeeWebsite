import React, { useEffect } from 'react';
import BuildingIcon from '../../images/building.png';
import ArchitectureIcon from '../../images/architecture.png';
import ConstructionIcon from '../../images/construction.png';
import PaintIcon from '../../images/paint-roller.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const service_data = [
    {
        icon: BuildingIcon,
        heading: 'House Renovation',
        content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
        icon: ConstructionIcon,
        heading: 'House Renovation',
        content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
        icon: ArchitectureIcon,
        heading: 'House Renovation',
        content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
        icon: PaintIcon,
        heading: 'House Renovation',
        content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    }
]

export default function Service() {
    useEffect(() => {
        AOS.init({
            duration: 4000
        });
        AOS.refresh();
    }, []);
    return (
        <section className='service_sec'>
            <div className='container my-5'>
                <div className='row'>
                    {
                        service_data.map((service_data, index) => (
                            <div className='col-md-6 col-lg-3' key={index} data-aos='fade-up'>
                                <div className='icon_sec px-3 py-3'>
                                    <div className='row justify-content-center'>
                                        <img src={service_data.icon} className='icon my-4' alt='building' />
                                    </div>
                                    <div className='row icon_content'>
                                        <h4 className='text-center fw-bolder'>{service_data.heading}</h4>
                                        <p className='text-center px-3 opacity-50'>{service_data.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
