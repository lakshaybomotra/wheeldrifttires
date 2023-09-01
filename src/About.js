export const About = () => {
    return(
        <>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                style={{ backgroundImage: "url(assets/img/tyers/abouttyer.jpg)" }}
              />
              <div className="col-lg-7">
                <h2>Wheeldrift tires inc.</h2>
                <div className="our-story">
                  <h4>Est 2019</h4>
                  <h3>About Us</h3>
                  <p>
                  At [Wheeldrift tires inc.], we are more than just a tire business – we are your partners in road safety and performance. With a deep-rooted passion for tires, we have been serving the Brampton, Mississauga, Milton, and surrounding areas with pride.


                  </p>
                  <p>
                  Our journey began with a commitment to provide top-notch winter tires, ensuring that our customers navigate even the harshest winter conditions with confidence. As seasons changed, so did our offerings, expanding to all-season tires that strike the perfect balance between performance and adaptability, regardless of the weather.
                  </p>
                  <ul>
                  Our Tire Specializations:


                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>All-Season Tires</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>Winter Tires</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>Fleet Services</span>
                    </li>
                  </ul>
                  <p>
                  Contact us at [+16479647861]  to place an order or learn more. Drive with confidence with [Wheeldrift tires inc].
                  </p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Stats Counter Section ======= */}
        
        {/* End Stats Counter Section */}
        {/* ======= Alt Services Section ======= */}
        <section id="alt-services" className="alt-services">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div
                            className="col-lg-6 img-bg"
                            style={{ backgroundImage: "url(assets/img/tyer_about.jpg)" }}
                            data-aos="zoom-in"
                            data-aos-delay={100}

                        />

                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h3> Welcome to our comprehensive automotive care services! </h3>
                            <p>
                                From ensuring your safety on the road with mobile tire repairs and
                                efficient tire changes, to giving your vehicle the royal treatment
                                with our top-notch auto detailing, we're your one-stop solution
                                for all things automotive. Need new tires? We've got you covered
                                there too, with a wide range of high-quality options to choose from.
                            </p>
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <i className="bi bi-patch-check flex-shrink-0" />
                                <div>
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Warranty approved
                                        </a>
                                    </h4>
                                    <p>
                                        Rest easy knowing that our services are backed by warranty approval,
                                        ensuring your peace of mind and the longevity of our solutions.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <i className="bi bi-patch-check flex-shrink-0" />
                                <div>
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Licensed and insured
                                        </a>
                                    </h4>
                                    <p>
                                        Trust in our professionalism and expertise as we are fully licensed and insured,
                                        prioritizing your safety and the security of your vehicle.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <i className="bi bi-patch-check flex-shrink-0" />
                                <div>
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Service that comes to you
                                        </a>
                                    </h4>
                                    <p>
                                        Experience ultimate convenience with our mobile services,
                                        bringing expert automotive care directly to your location, saving you time and hassle.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <i className="bi bi-patch-check flex-shrink-0" />
                                <div>
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Easy online booking
                                        </a>
                                    </h4>
                                    <p>
                                        Book your services effortlessly through our user-friendly online platform,
                                        putting control at your fingertips for a seamless and efficient experience.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                        </div>
                    </div>
                </div>
            </section>
      </>
      
    )
}