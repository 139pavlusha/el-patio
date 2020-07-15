import React from "react";
import Title from "../layout/title/title";
import Form from "./Form/Form";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contacts">
      <Title slogan="Contact us" title="We are happy to know your opinion" />
      <Form />
      <div className="contacts__footer"  >
      <ul className="contacts__left">
        <h5 className="contact__title">Contact us</h5>
        <li className="contact__item">5240 Randolph Rd.</li>
        <li className="contact__item">Rockville,</li>
        <li className="contact__item">MD 20852</li>
        <li className="contact__item contact__item--icon">
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li className="contact__item">1 301-231-9225</li>
        <li className="contact__item">elpatiointernational@gmail.com</li>
      </ul>

      <ul className=" contacts__right">
        <h5 className="open-time__title">We are open</h5>
        <li className="open-time__item">
          <p className="open-time__days">Monday - Thursday</p>
          <p className="open-time__hours">9am - 9pm</p>
        </li>
        <li className="open-time__item">
          <p className="open-time__days">Friday - Saturday</p>
          <p className="open-time__hours">9am - 10pm</p>
        </li>
        <li className="open-time__item">
          <p className="open-time__days">Sunday</p>
          <p className="open-time__hours">9am - 8pm</p>
        </li>
      </ul>
      </div>
      <div className="contacts__formBlock" ></div>
      <div className="contacts__background" ></div>
    </section>
  );
}

export default Contact;
