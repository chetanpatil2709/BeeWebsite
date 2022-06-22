import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const ToNavCollapse = () => {
    // let nav = document.getElementById("nav");
    let navCollapse = document.getElementById("navbar_collapse");
    // navCollapse.classList.add("d-block");
    if (navCollapse.className === 'd-none') {
      navCollapse.className += 'd-block';
    } else {
      navCollapse.className = 'd-none';
    }
  };
  return (
    <section>
      <div className="header-top">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3  m-auto text-center">
            <a className="brand_name" href="#/">Bee.</a>
          </div>
          <div className="col-lg-9 col-xl-9 align-items-center">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 m-auto">
                <div className="d-flex  align-items-center">
                  <div className="icon_bg">
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                  <p href="/" className="mt-3 ms-2">
                    youremail@email.com
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 m-auto">
                <div className="d-flex  align-items-center">
                  <div className="icon_bg">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <p href="/" className="mt-3 ms-2">
                    Call Us: + 1235 2355 98
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="d-flex justify-content-center">
                  <button className="request_quote">Request a quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <nav className="navbar navbar-lg justify-content-around">
          <ul className="nav" id="nav">
            <li><a href="#/">Home</a></li>
            <li><a href="#/">About</a></li>
            <li><a href="#/">Service</a></li>
            <li><a href="#/">Contact</a></li>
          </ul>
          <div>
            <p id="hamburger" className="mt-2" onClick={ToNavCollapse}>
              <GiHamburgerMenu />
              <span className="fs-5">MENU</span>
            </p>
          </div>
          <div>
            <input type="serch" className="search_bar" placeholder="search..." />
          </div>
        </nav>

      </div>
      <div id="navbar_collapse" className="d-none">
        <div className="">
          <ul className="nav">
            <li><a href="#/">Home</a></li>
            <li><a href="#/">About</a></li>
            <li><a href="#/">Service</a></li>
            <li><a href="#/">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
