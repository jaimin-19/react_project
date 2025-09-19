import React from 'react'
import img1 from '../image/2.L&T.png'
import img2 from '../image/3.J-Kumar.png'
import img3 from '../image/6.Sam India.png'
import img4 from '../image/7.ITD Cementation.png'
import img5 from '../image/1.SCC Infra.png'
import img6 from '../image/4..png'
import img7 from '../image/5.Gulermak.png'
import img8 from '../image/25.Shapoorji Pallonji.png'
import img9 from '../image/28.PNC Infratech.png'
import img10 from '../image/27.M S Khurana.png'
import img11 from '../image/26.Gayatri Projects.png'
import img12 from '../image/29.Atlas Infra 1.png'





function Compny_tage() {
  return (
    
    // <!-- compny teg name .. -->


  <section class="trusted-section">
    <div class="container">
      <h2>Trusted Connections</h2>
      <p>Trusted across India, Yahska Polymers supports landmark residential, <br/>
         commercial, and infrastructure projects.</p>

      <div class="row g-3">
        {/* <!-- 12 logos arranged 6 per row --> */}
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img1} alt="L&T Construction"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img2} alt="J Kumar"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img3} alt="Sam India"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img4} alt="IT Cem"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img5} alt="SCC"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img6} alt="RBL"/>
          </div>
        </div>

        {/* <!-- Second row --> */}

        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img7} alt="Gulermak"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img8} alt="Shapoorji Pallonji"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img9} alt="PNC Infratech"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img10} alt="M S Khurana"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img11} alt="Gayatri"/>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="logo-card">
            <img src={img12} alt="Atlas Infrastructure"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Compny_tage