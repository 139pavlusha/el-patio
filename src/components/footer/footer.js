import React from "react";
import "./footer.scss";
import "../../fonts/font-awesome.min.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <ul className="footer__contact contact">
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

        <ul className="footer__open-time open-time">
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
    </footer>
  );
}

export default Footer;
