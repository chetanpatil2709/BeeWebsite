import React from 'react'

export default function AppointmentForm() {
    return (
        <section className='appointment_form'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className=''>
                            <p className='request_quote_form_btn position-absolute' style={{ marginTop: '-113px' }}>BE PART OF OUR BUSINESS<br />
                                <span className='text-light'>Request A Quote</span></p>
                        </div>
                        <div className='row' data-aos='fade-up'>
                            <form className='mx-auto d-content'>
                                <input type='text' className='' placeholder='First name' />
                                <input type='text' className='' placeholder='Last name' />
                                <select className='ps-n2'>
                                    <option>Select Your Service</option>
                                    <option>Construction</option>
                                    <option>Renovation</option>
                                    <option>Interior Design</option>
                                    <option>Exterior Design</option>
                                    <option>Painting</option>
                                </select>
                                <input type='text' className='' placeholder='Phone' />
                                <input type='text' className='' placeholder='Message' />
                                <button className='butn'>Appoinment</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-8 right ps-5'>
                        <div className='row' data-aos='fade-up'>
                            <h1 className='my-4'>We Are Highly Recommendable<br /> Construction Firm</h1>
                            <p className='opacity-75'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <div className='r-w ps-3'>
                                <button className='btn-primary px-5 border-none py-3'>Read more</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
