import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Member1 from '../images/team-mem-1.webp';
import Member2 from '../images/team-mem-2.webp';
import Member3 from '../images/team-mem-3.webp';
import Member4 from '../images/team-mem-4.webp';

const slideImages = [
    {
        img: Member1,
        name: 'Daren Wilson',
        profession: 'Manager'
    },
    {
        img: Member2,
        name: 'Ken Bosh',
        profession: 'HEAD ENGINEER'
    },
    {
        img: Member3,
        name: 'Daren Wilson',
        profession: 'Manager'
    },
    {
        img: Member4,
        name: 'Daren Wilson',
        profession: 'HEAD ENGINEER'
    }
]

export default function Testimonial() {
    return (
        <div className='container'>
            <div className='row px-5'>
                <div className='px-5'>
                    <h4 className='opacity-50  mt-5'>Testimonials</h4>
                    <h1 className='mt-2'>Satisfied Customer</h1>
                    <p className='opacity-75'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
                <div className='testimonial px-5'>
                    <Slide autoplay indicators={true} duration={4000} transitionDuration={500}>
                        {slideImages.map((slideImages, index) => (
                            <div className='mt-3' key={index}>
                                <p className='quote_icon'><FaQuoteLeft /></p>
                                <div className='my-5 ps-4'>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <h4>{slideImages.name}</h4>
                                    <p className='clr-yellow'>{slideImages.profession}</p>
                                </div>
                                <img src={slideImages.img} alt='img' className='mt-4' />
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </div>
    )
}
