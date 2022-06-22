import React from 'react'
import Slider from './Slider';
import AppointmentForm from './AppointmentForm';
import Service from './Service';
import KnowMoreAboutUs from './KnowMoreAboutUs';
import Team from './Team';
import HeadingSec from '../../layout/HeadingSec';
import Projects from '../../layout/Projects';
import GreatService from './GreatService';
import Blog from '../../layout/Blog';
import Footer from '../../layout/Footer';
import { service_data, blog_data, project_data, team_data } from '../../Data';

export default function Home() {
    return (
        <>
            <Slider />
            <AppointmentForm />
            {/* Service  */}
            {
                service_data.map((service_data, index) => (
                    <HeadingSec heading={service_data.heading} fullHeading={service_data.fullHeading} headContent={service_data.headContent} index={index} />
                ))
            }
            <Service />
            <KnowMoreAboutUs />
            {/* Teams  */}
            {
                team_data.map((team_data, index) => (
                    <HeadingSec heading={team_data.heading} fullHeading={team_data.fullHeading} headContent={team_data.headContent} index={index} />
                ))
            }
            <Team />
            {/* Projects  */}
            {
                project_data.map((project_data, index) => (
                    <HeadingSec heading={project_data.heading} fullHeading={project_data.fullHeading} headContent={project_data.headContent} index={index} />
                ))
            }
            <Projects />
            <GreatService />
            {/* Blog  */}
            {
                blog_data.map((blog_data, index) => (
                    <HeadingSec heading={blog_data.heading} fullHeading={blog_data.fullHeading} headContent={blog_data.headContent} index={index} />
                ))
            }
            <Blog />
            <Footer />
        </>
    )
}
