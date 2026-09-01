import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const config = {
  serviceId: "service_dx4tft8",
  templateId: "template_3ufd568",
  publicId: "h1bm-h9kvOcKzXc0G",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);

    emailjs
      .sendForm(config.serviceId, config.templateId, e.target, config.publicId)
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title section-title--light">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let's build something great</h2>
          <p>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Reach out directly, we're always happy to talk shop.</p>

            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <div>
                <span>Address</span>
                <strong>{props.data ? props.data.address : "loading"}</strong>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <div>
                <span>Phone</span>
                <strong>{props.data ? props.data.phone : "loading"}</strong>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope-o"></i>
              <div>
                <span>Email</span>
                <strong>{props.data ? props.data.email : "loading"}</strong>
              </div>
            </div>

            <div className="contact-social">
              <a
                target="_blank"
                href={props.data ? props.data.facebook : "/"}
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a message</h2>
            <p>We usually reply within one business day.</p>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="you@company.com"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Tell us about your project"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--lg btn--block"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
