import React from 'react'
import img1 from '../image/test-tube (1) 1.png'
import img2 from '../image/manufacturing 1.png'
import img3 from '../image/construction 1.png'

function product() {
  return (
    <section class="why-choose">
    <div class="container">
      <h2>Why Choose Yahska Polymers?</h2>
      <p class="lead">22+ years of trust, innovation, and quality delivering<br/>construction chemical solutions that last.</p>
      
      <div class="row g-4">
        <div class="col-md-4">
          <div class="choose-card">
            <div class="choose-icon">
              <img src={img1} alt=""/>
            </div>
            <h5>Expertise & Innovation</h5>
            <p>22+ years of industry experience with strong in-house R&amp;D driving advanced and sustainable solutions.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="choose-card">
            <div class="choose-icon">
              <img src={img2} alt=""/>
            </div>
            <h5>Manufacturing Excellence</h5>
            <p>ISO-certified facilities with modern technology ensuring consistent quality and reliable supply nationwide.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="choose-card">
            <div class="choose-icon">
              <img src={img3} alt=""/>
            </div>
            <h5>Comprehensive Solutions</h5>
            <p>Wide product portfolio including admixtures, waterproofing, sealants, repairs, and industrial flooring for every construction need.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default product