import React, { useEffect } from 'react'
import Member1 from '../../images/team-mem-1.webp';
import Member2 from '../../images/team-mem-2.webp';
import Member3 from '../../images/team-mem-3.webp';
import Member4 from '../../images/team-mem-4.webp';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineGooglePlus, AiFillFacebook } from 'react-icons/ai';
// import 'animate.css';
import AOS from 'aos';

const memberData = [
    {
        img: Member1,
        name: 'Daren Wilson',
        profession: 'HEAD ENGINEER'
    },
    {
        img: Member2,
        name: 'Daren Wilson',
        profession: 'HEAD ENGINEER'
    },
    {
        img: Member3,
        name: 'Daren Wilson',
        profession: 'HEAD ENGINEER'
    },
    {
        img: Member4,
        name: 'Daren Wilson',
        profession: 'HEAD ENGINEER'
    }
]

export default function Team() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);
    return (
        <section className='team'>
            <div className='container my-5'>
                <div className='row mt-5'>
                    {
                        memberData.map((memberData, index) => (
                            <div className='col-sm-6 col-md-6 col-lg-3' key={index}>
                                <div className='staff text-center' data-aos={"fade-up"}>
                                    <div className='img m-auto' style={{ backgroundImage: `url(${memberData.img})` }}>
                                        <div className='mem_social_icon'>
                                            <a href="#/" className='my-auto'><AiOutlineTwitter /></a>
                                            <a href="#/" className='my-auto'><AiFillInstagram /></a>
                                            <a href="#/" className='my-auto'><AiOutlineGooglePlus /></a>
                                            <a href="#/" className='my-auto'><AiFillFacebook /></a>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <h5 className=''>{memberData.name}</h5>
                                        <h6 className='clr-yellow'>{memberData.profession}</h6>
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
