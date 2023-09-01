
import React, { useState } from 'react';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <>

            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1>
                            Wheeldrift tires inc<span>.</span>
                        </h1>
                    </a>



                    <nav id="navbar" className="navbar">


                        <ul className='navul'>
                            <li>
                                <a href="/" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>


                            {/*   
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Services</span>{" "}
                                        <i className="bi bi-chevron-down dropdown-indicator" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Tire Change</a>
                                        </li>
                                        
                                        <li>
                                            <a href="#">Tire Repairs</a>
                                        </li>
                                        <li>
                                            <a href="#">Fleet services</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                                */}
                            <li>
                                <a href="#product">Tires</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>

                        </ul>
                        <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#product">Tires</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>


                        <div className="hamburger" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>




                    </nav>



                </div>
            </header>

        </>
    )
}