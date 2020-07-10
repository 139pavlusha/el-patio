import React from 'react';
import './footer.scss';


function Footer() {
  return (
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer__content">
          <ul class="footer__contact">
            <h5 class="contact__title">Contact us</h5>
            <li class="contact__item">5240 Randolph Rd.</li>
            <li class="contact__item">Rockville,</li>
            <li class="contact__item">MD 20852</li>
            <li class="contact__item"><i class="fa fa-address-book" aria-hidden="true"></i></li>
            <li class="contact__item">1 301-231-9225</li>
            <li class="contact__item">elpatiointernational@gmail.com</li>
          </ul>

          <ul class="open-time">
            <h5 class="open-time__title">We are open</h5>
            <li class="open-time__item">
              <p class="open-time__days">Monday - Thursday</p>
              <p class="open-time__hours">9am - 9pm</p>
            </li>
            <li class="open-time__item">
              <p class="open-time__days">Friday - Saturday</p>
              <p class="open-time__hours">9am - 10pm</p>
            </li>
            <li class="open-time__item">
              <p class="open-time__days">Sunday</p>
              <p class="open-time__hours">9am - 8pm</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
