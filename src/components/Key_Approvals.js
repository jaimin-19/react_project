import React from 'react'
import img1 from '../image/ENGINEERS INDIA LTD.png'
import img2 from '../image/LEA ASSOCIATE.png'
import img3 from '../image/BMC.png'
import img4 from '../image/7.ITD Cementation.png'
import img5 from '../image/DMRC.png'
import img6 from '../image/JMRC(DMRC).png'

function Key_Approvals() {
  return (
    // <!--..... key arpove...  -->


   <section class="approvals-section">
  <div class="container approvals-content">
    <div class="row align-items-center">
      {/* <!-- Left text --> */}
      <div class="col-md-6">
        <h3 class="approvals-title">Key Approvals <span style={{color:"#7f6ee5"}}>•</span></h3>
        <p class="approvals-subtext">
          Trusted by builders and architects across India, Yahska Polymers has contributed 
          to major residential, commercial, and infrastructure projects.
        </p>
      </div>

      {/* <!-- Logos grid --> */}
      <div class="col-md-6">
        <div class="row g-3">
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img1} alt="EIL"/>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img2} alt="LEA"/>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img3} alt="PWD"/>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img4} alt="NBCC"/>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img5} alt="DMRC"/>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="logo-box">
              <img src={img6} alt="Jaipur Metro"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Key_Approvals