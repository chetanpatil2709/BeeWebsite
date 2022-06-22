import React from 'react'

export default function HeadingSec(props) {
    return (
        <div className='container my-5' key={props.index} data-aos='fade-up'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-8 heading_sec text-center'>
                    <h4 className='opacity-50  mt-5'>{props.heading}</h4>
                    <h1 className='mt-2'>{props.fullHeading}</h1>
                    <p className='opacity-75 mt-4'>{props.headContent}</p>
                </div>
            </div>
        </div>
    )
}
