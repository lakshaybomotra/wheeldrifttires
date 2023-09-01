import { About } from "./About"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { Product } from "./Product"

export const Home = () => {
    return (
        <>


            <Navbar />


            {/* ======= Hero Section ======= */}
            <section id="hero" className="hero">
                <div className="info d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 data-aos="fade-down">
                                    Welcome to <span>Wheeldrift tires inc.</span>
                                </h2>
                                <p data-aos="fade-up">
                                    Elevate your driving experience with our specialized tire business. From winter's chill to all-season versatility, we offer premium winter tires, all-season options, and dedicated fleet services. Your journey's safety and performance are our priority.






                                </p>
                                <a
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="#contact"
                                    className="btn-get-started"
                                >
                                    Contact now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="hero-carousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval={5000}
                >
                    <div
                        className="carousel-item active"
                        style={{
                            backgroundImage: "url(assets/img/hero-carousel/tyer6.jpg)"
                        }}
                    ></div>
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: "url(assets/img/hero-carousel/tyer3.jpg)"
                        }}
                    />
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: "url(assets/img/hero-carousel/tyer4.jpg)"
                        }}
                    />
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: "url(assets/img/hero-carousel/tyer5.jpg)"
                        }}
                    />
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: "url(assets/img/hero-carousel/tyer1.jpg)"
                        }}
                    />
                    <a
                        className="carousel-control-prev"
                        href="#hero-carousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bi bi-chevron-left"
                            aria-hidden="true"
                        />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#hero-carousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bi bi-chevron-right"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </section>
            <About/>
            <Product/>
            <br/>
            <br/>

            <section id="features" className="features section-bg">
                <h3 className="pricing"> Pricing</h3>

                <div className="container" data-aos="fade-up">
                    <ul className="nav nav-tabs row  g-2 d-flex">
                        <li className="nav-item col-3">
                            <a
                                className="nav-link active show"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-1"
                            >
                                <h4>Bronze</h4>
                            </a>
                        </li>
                        {/* End tab nav item */}
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                <h4>Silver</h4>
                            </a>
                            {/* End tab nav item */}
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                <h4>Gold</h4>
                            </a>
                        </li>
                        {/* End tab nav item */}
                        {   /*   <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                <h4>Gold</h4>
                            </a>
                        </li>
                        */}
                        {/* End tab nav item */}
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <div className="row">
                                <div
                                    className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <h3>$120</h3>
                                    <p className="fst-italic">
                                        Includes tire sizes 13 to 17 inches (4 tires)
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check2-all" />Seasonal tire change at your home or office.

                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" /> Safety inspection of tires, rims, and lug nuts

                                        </li>
                                 
                                        <li>
                                            <i className="bi bi-check2-all" />Wheel balancing


                                        </li>
                                    </ul>
                                    <p className="fst-italic">
                                        For more details and order call now 
                                    </p>
                                    <a
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="#get-started"
                                    className="btn-get-started"
                                >
                                   +16479647861
                                </a>
                                </div>
                                <div
                                    className="col-lg-6 order-1 order-lg-2 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <img
                                        src="assets/img/tyerpricing.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* End tab content item */}
                        <div className="tab-pane" id="tab-2">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>$140</h3>
                                    <p className="fst-italic">
                                    Includes tire sizes 18 to 20 inches (4 tires)
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check2-all" /> Seasonal tire change at your home or office
                                           
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" /> Safety inspection of tires, rims, and lug nuts
                                            
                                        </li>
                                       
                                        <li>
                                            <i className="bi bi-check2-all" /> Wheel balancing
                                            
                                        </li>
                                    </ul>
                                    <p className="fst-italic">
                                        For more details and order call now 
                                    </p>
                                    <a
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="#get-started"
                                    className="btn-get-started"
                                >
                                  +16479647861
                                </a>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img
                                        src="assets/img/tyerpricing.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* End tab content item */}
                        <div className="tab-pane" id="tab-3">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>$160</h3>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check2-all" />Includes any run flat, low profile or truck tires (4 tires)
                                          
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" />Seasonal tire change at your home or office
                                            
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" />Safety inspection of tires, rims, and lug nuts
                                            
                                        </li>

                                       

                                        <li>
                                            <i className="bi bi-check2-all" />Wheel balancing
                                            
                                        </li>
                                    </ul>
                                    
                                    <p className="fst-italic">
                                        For more details and order call now 
                                    </p>
                                    <a
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="#get-started"
                                    className="btn-get-started"
                                >
                                 +16479647861
                                </a>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img
                                        src="assets/img/tyerpricing.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* End tab content item */}
                        {/*    <div className="tab-pane" id="tab-4">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>Omnis fugiat ea explicabo sunt</h3>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bi bi-check2-all" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" /> Duis aute irure dolor in
                                            reprehenderit in voluptate velit.
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-all" /> Ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate trideta storacalaperda mastiro
                                            dolore eu fugiat nulla pariatur.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img
                                        src="assets/img/features-4.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                         */}
                        {/* End tab content item */}

                    </div>
                </div>
            </section>
            {/* End Features Section */}
            {/* ======= Our Projects Section ======= */}
            <section id="projects" className="projects">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Gallery</h2>
                     
                    </div>
                    <div
                        className="portfolio-isotope"
                        data-portfolio-filter="*"
                        data-portfolio-layout="masonry"
                        data-portfolio-sort="original-order"
                    >
                       
                        {/* End Projects Filters */}
                        <div
                            className="row gy-4 portfolio-container"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                <div className="portfolio-content h-100">
                                    <img
                                        src="assets/img/tyers/tyers-winter.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 1</h4>
                                       
                                        <a
                                            href="assets/img/tyers/tyers-winter.jpg"
                                            title="Remodeling 1"
                                            data-gallery="portfolio-gallery-remodeling"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 2</h4>
                                        
                                        <a
                                            href="assets/img/tyers/gallery1.jpg"
                                            title="Construction 1"
                                            data-gallery="portfolio-gallery-construction"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 3</h4>
                                       
                                        <a
                                            href="assets/img/tyers/gallery4.jpg"
                                            title="Repairs 1"
                                            data-gallery="portfolio-gallery-repairs"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 4 </h4>
                                        
                                        <a
                                            href="assets/img/tyers/gallery3.jpg"
                                            title="Repairs 1"
                                            data-gallery="portfolio-gallery-book"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery6.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 5</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a
                                            href="assets/img/tyers/gallery6.jpg"
                                            title="Remodeling 2"
                                            data-gallery="portfolio-gallery-remodeling"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                      
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery7.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 6</h4>
                                       
                                        <a
                                            href="assets/img/tyers/gallery7.jpg"
                                            title="Construction 2"
                                            data-gallery="portfolio-gallery-construction"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 7</h4>
                                       
                                        <a
                                            href="assets/img/tyers/gallery2.jpg"
                                            title="Repairs 2"
                                            data-gallery="portfolio-gallery-repairs"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                            <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                                <div className="portfolio-content h-100">
                                <img
                                        src="assets/img/tyers/gallery5.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Picture 8</h4>
                                       
                                        <a
                                            href="assets/img/tyers/gallery5.jpg"
                                            title="Repairs 2"
                                            data-gallery="portfolio-gallery-book"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Item */}
                          
                            {/* End Projects Item */}
                        </div>
                        {/* End Projects Container */}
                    </div>
                </div>
            </section>

           
            <Contact/>

<Footer/>
            









        </>
    )
}