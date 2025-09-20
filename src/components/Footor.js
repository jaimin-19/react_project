import React from 'react'
import img from '../image/Yahskha Polymers_Logo & Symbol (3) (1) 1.png'

function Footor() {
  return (
    // <!-- Footer Section -->
<footer class="footer">

  {/* <!-- Top Contact Info --> */}

  <div class="footer-top container">
    <div class="row text-start">
      {/* <!-- Call Us --> */}
      <div class="col-md-3 col-6 mb-3">
        <div class="footer-item">
          <i class="fa-solid fa-phone icon"></i>
          <div>
            <h6>Call Us:</h6>
            <p>(+91) 88909 13222</p>
          </div>
        </div>
      </div>
      {/* <!-- Mail Us --> */}
      <div class="col-md-3 col-6 mb-3">
        <div class="footer-item">
          <i class="fa-solid fa-envelope-open-text icon"></i>
          <div>
            <h6>Mail Us:</h6>
            <p>admin@yahskapolymers.com</p>
          </div>
        </div>
      </div>
      {/* <!-- Address 1 --> */}
      <div class="col-md-3 col-6 mb-3">
        <div class="footer-item">
          <i class="fa-solid fa-location-dot icon"></i>
          <div>
            <h6>Address:</h6>
            <p>Unit 1 : Changodar<br/>
              S. No 407, Khata No 1217, Bh Sarvodaya Hotel,<br/>
              Moraiya, Changodar, Ahmedabad – 382213
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Address 2 --> */}
      <div class="col-md-3 col-6 mb-3">
        <div class="footer-item">
          <i class="fa-solid fa-location-dot icon"></i>
          <div>
            <h6>Address:</h6>
            <p>Unit 2 : Vatva<br/>
              C1/272, Phase II, Nr Tiger Surgical,<br/>
              GIDC Vatva, Ahmedabad – 382445
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Middle Section --> */}
  <div class="footer-middle container">
    <div class="row">
      {/* <!-- About Us --> */}
      <div class="col-md-3 footer-about">
        <h5 class="footer-title">About Us</h5>
          <img src={img} style={{width: "80%"}} class="mb-3" alt='I'/>
        <p>Yahska Polymers Pvt Ltd is a leading construction chemicals manufacturer based in Ahmedabad, proudly serving the Indian construction industry with innovative and reliable solutions for over two decades.</p>
        <div class="footer-social">
          <a href="/"><i class="fab fa-twitter"></i></a>
          <a href="/"><i class="fab fa-facebook-f"></i></a>
          <a href="/"><i class="fab fa-linkedin-in"></i></a>
          <a href="/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* <!-- Quick Links --> */}
      <div class="col-md-3">
        <h5 class="footer-title">Quick Links</h5>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/pro">Projects</a>
        <a href="/">Products</a>
        <a href="/">Media coverage</a>
        <a href="/">Contact Us</a>
      </div>

      {/* <!-- Our Products --> */}
      <div class="col-md-3">
        <h5 class="footer-title">Our Products</h5>
        <a href="#">Admixtures</a>
        <a href="#">Accelerators</a>
        <a href="#">Misc Admixtures</a>
        <a href="#">Integral Waterproofing</a>
        <a href="#">Curing Compound</a>
        <a href="#">Grouts</a>
        <a href="#">Floor Hardeners</a>
        <a href="#">Micro Silica</a>
        <a href="#">Structural Bonding</a>
        <a href="#">See All Products</a>
      </div>

      {/* <!-- Our Project --> */}
      <div class="col-md-3">
        <h5 class="footer-title">Our Project</h5>
        <a href="#">High Speed Rail</a>
        <a href="#">Metro & Rail</a>
        <a href="#">Roads & Highways</a>
        <a href="#">Buildings & Factories</a>
        <a href="#">Other Projects</a>
        <a href="#">See All Projects</a>
      </div>
    </div>
  </div>

  {/* <!-- Bottom Section --> */}
  <div class="footer-bottom">
    © 2024 Yahska Polymers Private Limited. All Rights Reserved.
  </div>

</footer>

  )
}

export default Footor