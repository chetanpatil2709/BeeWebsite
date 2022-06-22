import React from 'react'
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import img1 from '../images/xwork-3.webp';
import img2 from '../images/xwork-6.webp';
import { GoCalendar } from 'react-icons/go';
import { RiUserFill } from 'react-icons/ri';
const blogData = [
    { img: img1 },
    { img: img2 }
]
export default function Footer() {
    return (
        <section className='footer'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6 col-lg-3'><div className='footer_content'>
                        <div className='fs-4 fw-bold'>Bee.</div>
                        <p className='py-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='social_icon'>
                            <div className='mx-auto d-inline-flex'>
                                <p><AiOutlineTwitter /></p>
                                <p className='mx-5'><AiFillInstagram /></p>
                                <p><AiFillFacebook /></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='footer_content'>
                            <div className='fs-4 fw-bold'>Services</div>
                            <div className='py-5 service_list'>
                                <a href="#/"><HiOutlineArrowNarrowRight />Construction</a>
                                <a href="#/"><HiOutlineArrowNarrowRight />Renovation</a>
                                <a href="#/"><HiOutlineArrowNarrowRight />Painting</a>
                                <a href="#/"><HiOutlineArrowNarrowRight />Interior Design</a>
                                <a href="#/"><HiOutlineArrowNarrowRight />Exterior Design</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <div className='footer_content'>
                            <div className='fs-4 fw-bold'>Recent Blog</div>
                            {
                                blogData.map((blogData, index) => (
                                    <div className='recent_blog mt-5 d-flex' key={index}>
                                        <div >
                                            <img src={blogData.img} alt="blog" />
                                        </div>
                                        <div className='px-4'>
                                            <p>Even the all-powerful Pointing has no control about</p>
                                            <div className='d-flex opacity-50 mt-4' style={{ fontSize: '13px' }}>
                                                <p><GoCalendar />Feb, 19, 2022</p>
                                                <p className='ps-4'> <RiUserFill />  Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-2'>
                        <div className='footer_content'>
                            <div className='fs-4 fw-bold'>Newsletter</div>
                            <div className='py-4 newsletter'>
                                <input type='text' placeholder='Enter Email Address' />
                                <button className='subscribe_btn'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
