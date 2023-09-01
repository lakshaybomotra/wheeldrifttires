export const Footer = () =>{
    return(
        <>
        <footer id="footer" className="footer">
                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>Wheeldrift tires inc.</h3>
                                    <p>
                                        
                                      AREAS COVERED: Brampton, Mississauga, Milton and Bolton and <br />
                                       surrounding areas with pride.
                                        <br />
                                        <br />
                                        <strong>Phone:</strong> +16479647861
                                        <br />
                                       
                                        <br />
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-twitter" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-facebook" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-linkedin" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End footer info column*/}
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/#about">About us</a>
                                    </li>
                                    <li>
                                        <a href="/#contact">Contact us</a>
                                    </li>
                                   
                                   
                                </ul>
                            </div>
                           
                          
                            {/* End footer links column*/}
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            © Copyright{" "}
                            <strong>
                                <span>Wheeldrift tires inc</span>
                            </strong>
                            . All Rights Reserved
                        </div>
                        <div className="credits">
                           
                            Designed by <a href="https://jatinsidana.netlify.app/">Jatin Siadna</a>{" "}
                           
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}