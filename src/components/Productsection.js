import React from 'react'
import img1 from '../image/Rectangle 92.png'
import img2 from '../image/Rectangle 97.png'

function Product_section() {
  return (
    // <!-- product section ..    -->

  <section class="products-section">
    <div class="container">
      <h2>Our Products</h2>
      <p class="lead">22+ years of trust, innovation, and quality delivering<br/>construction chemical solutions that last.</p>

      <div class="row g-4">
        {/* <!-- Admixtures --> */}
        <div class="col-md-4">
          <div class="product-card">
            <img src={img1} alt="Admixtures" class="product-img"/>
            <div class="product-body">
              <h5>Admixtures</h5>
              <p>High-performance admixtures designed to improve concrete workability, strength, and durability while reducing water demand.</p>
              <a href="/" class="read-more">Read More →</a>
            </div>
          </div>
        </div>

        {/* <!-- Accelerators --> */}
        <div class="col-md-4">
          <div class="overlay-card" >
            <div class="overlay-content">
              <h5>Accelerators</h5>
              <p>Special additives that speed up the setting and strength gain of concrete, ideal for fast-track construction projects.</p>
              <a href="/">Read More →</a>
            </div>
          </div>
        </div>

        {/* <!-- Misc Admixtures --> */}
        <div class="col-md-4">
          <div class="product-card">
            <img src={img2} alt="Misc Admixtures" class="product-img"/>
            <div class="product-body">
              <h5>Misc Admixtures</h5>
              <p>Specialty admixtures formulated to enhance specific concrete properties and meet unique project requirements.</p>
              <a href="/" class="read-more">Read More →</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Product_section