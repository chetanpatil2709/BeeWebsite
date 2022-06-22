import React from "react";
import Expert from "../../images/businessman.png";
import QualityWork from "../../images/worker.png";
import Support from "../../images/settings.png";
import Testimonial from "../../layout/Testimonial";
const GreatServiceData = [
  {
    icon: Expert,
    heading: "Expert & Professional",
    text: `Separated they live in. A small river named Duden flows`,
  },
  {
    icon: QualityWork,
    heading: "High Quality Work",
    text: `Separated they live in. A small river named Duden flows`,
  },
  {
    icon: Support,
    heading: "24/7 Help Support",
    text: `Separated they live in. A small river named Duden flows`,
  },
];
export default function GreatService() {
  return (
    <section className="great_service my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4" data-aos='fade-up'>
            <div className="row">
              <h4 className="opacity-50  mt-5">Services</h4>
              <h1 className="mt-2">Experience Great Services</h1>
            </div>
            <div className="row">
              {GreatServiceData.map((GreatServiceData, index) => (
                <div className="card" key={index}>
                  <div className="row" style={{ display: "contents" }}>
                    <img src={GreatServiceData.icon} alt="businessman" />
                    <div className="row ps-3">
                      <h5 className="fw-bold">{GreatServiceData.heading}</h5>
                      <p className="opacity-75 pe-5">{GreatServiceData.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12 col-lg-8" data-aos='fade-up' data-aos-delay='500'>
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
  );
}
