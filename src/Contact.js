import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

 export  const Contact = () =>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wg4j37t', 'template_lvnpui6', form.current, 'A6C69JLoTd1CoPmv-')
      .then((result) => {
          console.log(result.text);
          Swal.fire('Message Sent!','','success');
      }, (error) => {
          console.log(error.text);
         
      });
  };
    return(
        <>
        <div className="contact">
        <h3> Contact Us</h3>
        </div>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-map" />
                  <h3>AREAS WE COVERED</h3>
                  <p>Brampton, Mississauga, Milton and Bolton and nearby</p>
                </div>
              </div>
              {/* End Info Item */}
              
              {/* End Info Item */}
              <div className="col-lg-6 col-md-6">
                <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone" />
                  <h3>Call Us</h3>
                  <p>+16479647861</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
            <div className="row gy-4 mt-1">
              
              {/* End Google Maps */}
              <div className="col-lg-12">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  ref={form} onSubmit={sendEmail}
                >
                  <div className="row gy-4">
                    <div className="col-lg-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" value="send" defaultValue="Send Message" >Send Message</button>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </>
      
    )
}