import React, { useRef, useEffect } from "react";
import "./Contact.scss";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Connect from "../connect/Connect";
import Talk from "../talk/Talk";

function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const con1 = useRef();

  useEffect(() => {
    const to = gsap.timeline({
      scrollTrigger: {
        trigger: con1.current,
      },
    });

    to.from(
      con1.current,
      {
        duration: 0.6,
        scaleX: 0.1,
        transformOrigin: "left",
        delay: 0.3,
        repeat: 0,
        opacity: 0,
      },

      []
    )
      .from(
        ".card-wrapper",

        {
          duration: 0.3,
          y: 200,
          delay: 0.7,
          repeat: 0,
          opacity: 0,
          stagger: 0.2,
        },

        []
      )
      .from(
        ".contact-form",
        {
          duration: 0.3,
          y: 200,
          delay: 1,
          repeat: 0,
          opacity: 0,
        },

        []
      );
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="section-title column align-items-center">
            <h5 className="sub-title ">Contact</h5>
            <h3 className="main-title-dark">Get In Touch</h3>
            <ul className="line row align-items-center" ref={con1}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row contact-info">
          <Connect></Connect>
        </div>

        <div className="project">
          <Talk></Talk>
        </div>
      </div>
    </section>
  );
}

export default Contact;
