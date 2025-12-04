import React, { useState } from "react";
import "../assets/styles/contact.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import contactimage from "../assets/images/webp/contact-image.webp";
import loaction1 from "../assets/images/webp/location-icon-1.webp";
import email1 from "../assets/images/webp/email-icon-1.webp";
import call1 from "../assets/images/webp/call-icon-1.webp";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import Testimonials from "../components/Testimonials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let err = {};

    if (!name.trim()) err.name = "Name is required";

    if (!email.trim()) err.email = "Email is required";
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
      err.email = "Enter a valid email address";

    if (!phone.trim()) err.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(phone))
      err.phone = "Enter valid 10-digit Indian number";

    if (!subject.trim()) err.subject = "Subject is required";

    if (!message.trim()) err.message = "Message is required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // const whatsappNumber = 8779742525;
    const whatsappNumber = 8888174720;
    // const whatsappNumber = 8149750569;
    // const whatsappNumber = 7021222937;

    const text = `
    Contact Form Enquiry:

    Name: ${name}
    Email: ${email}
    Phone: ${phone}

    Subject: ${subject}

    Message:
    ${message}
    `;

    const fullNumber = `91${whatsappNumber}`;
    const url = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${encodeURIComponent(
      text
    )}`;
    // const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    // const text =
    //   "Contact Form Enquiry:%0A" +
    //   "%0AName: " +
    //   name +
    //   "%0AEmail: " +
    //   email +
    //   "%0APhone: " +
    //   phone +
    //   "%0ASubject: " +
    //   subject +
    //   "%0A%0AMessage:%0A" +
    //   message;

    // const fullNumber = `91${whatsappNumber}`;

    // const url = `https://api.whatsapp.com/send?text=${text}&phone=${fullNumber}`;

    // window.open(url, "_blank");

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setErrors({});
  };

  return (
    <>
      <section className="section">
        <Container>
          <div className="mb-4 mb-md-5">
            <ContentHeading heading={"Contact Us"} />
            <ContentTitle>Have questions or need assistance?</ContentTitle>
          </div>
          <Row>
            <Col md={6} className="mb-4 mb-md-0 d-flex">
              <div className="position-relative my-auto">
                <img className="img-fluid" src={contactimage} alt="contact" />
                <div className="position-absolute w-100 px-3 start-0 end-0 bottom-0">
                  <ul className="bg-white p-3 p-md-4 d-flex flex-column gap-3 gap-md-4 rounded-3 ">
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={loaction1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        Shop no.19, Stone flower Building,opp.KMES School,
                        Bhiwandi, Thane, Pin :-421302
                      </p>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={email1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        askandassociates2017@gmail.com
                      </p>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={call1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        +91-7021222937
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className=" border-nickel p-3 p-lg-4 rounded-3 h-100">
                <div className="text-center">
                  <h4>Get in touch</h4>
                  <p className="text-nickel">
                    Connect with us through our contact forum for any inquiries,
                    questions.
                  </p>
                </div>
                <Form className="d-flex flex-column">
                  <Row className="gap-3">
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      {errors.name && (
                        <small className="error ms-2">{errors.name}</small>
                      )}
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="email"
                        placeholder="Your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      {errors.email && (
                        <small className="error ms-2">{errors.email}</small>
                      )}
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="number"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                      {errors.phone && (
                        <small className="error ms-2">{errors.phone}</small>
                      )}
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="text"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                      {errors.subject && (
                        <small className="error ms-2">{errors.subject}</small>
                      )}
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        as="textarea"
                        placeholder="Write Message Here......"
                        rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                      {errors.message && (
                        <small className="error ms-2">{errors.message}</small>
                      )}
                    </Col>
                  </Row>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="from-btn mt-4 ms-auto bg-mint-green text-phthalo-green fw-500 rounded-2 px-4 py-2 nav-btn d-inline-block"
                  >
                    send Message
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="">
            <ContentHeadCapsul>Google Map</ContentHeadCapsul>
            <ContentTitle>Find Us On Google Map</ContentTitle>
          </div>
          <div className="border-nickel rounded-3">
            <iframe
              title="Map"
              className="section-map d-flex w-100  rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7305181841334!2d73.04802697503314!3d19.29408178195588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd5deece825b%3A0xb42af685b6b578e7!2sCrisfood!5e0!3m2!1sen!2sin!4v1763983072952!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
      <Testimonials />
    </>
  );
};

export default Contact;
