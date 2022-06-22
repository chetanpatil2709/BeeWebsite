import React from 'react'
// import FaLongArrowAltRight from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import img1 from '../images/xwork-3.webp';
import img2 from '../images/xwork-6.webp';
import img3 from '../images/xwork-3.webp';

const blogData = [
    { img: img1 },
    { img: img2 },
    { img: img3 }
]
export default function Blog() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    blogData.map((blogData, index) => (
                        <div className='col-md-4' key={index} data-aos='fade-up'>
                            <div className='blog mx-auto' >
                                <img src={blogData.img} alt='blog' />
                                <div className='text mt-4'>
                                    <p className='fs-4'>Office of the Florida</p>
                                    <p className='opacity-75'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className='mt-4'>
                                    <button className='mb-0'>Read more <HiOutlineArrowNarrowRight /> </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
