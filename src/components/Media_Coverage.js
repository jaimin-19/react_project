import React from 'react'
import img from '../image/Rectangle 138.png'


export default function Media_Coverage() {
  return (
    // <!-- ....Media Coverage ... -->

  <section class="media-section container">
  <div class="row justify-content-between align-items-center">
    <div class=" col-md-6">
      <h3 class="media-title">Media Coverage <span style={{color:"#463d7b"}}>•</span></h3>
      <p class="media-subtext">
        Yahska Polymers Pvt. Ltd. has been recognized in top industry publications for our innovations, 
        sustainable solutions, and impact on India's construction sector.
      </p>
    </div>
    <div class="col-md-2">
      <button type="button" href="#" class="btn see-details">See details</button>
    </div>
  </div>

  <div class="row mt-4">
    {/* <!-- Card 1 --> */}
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src={img} alt="News 1"/>
        <div class="card-body">
          <small class="text-muted">Sep 05, 2023</small>
          <h5 class="card-title mt-2">Innovative Solutions in Construction Chemicals by Yahska Polymers</h5>
          <p class="card-meta">by admin | 152 Comments</p>
          <a href="#" class="read-more">READ MORE →</a>
        </div>
      </div>
    </div>
    {/* <!-- Card 2 --> */}
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src={img} alt="News 2"/>
        <div class="card-body">
          <small class="text-muted">Aug 28, 2023</small>
          <h5 class="card-title mt-2">Sustainable Practices Making Waves in Indian Construction</h5>
          <p class="card-meta">by admin | 20230 Comments</p>
          <a href="#" class="read-more">READ MORE →</a>
        </div>
      </div>
    </div>
    {/* <!-- Card 3 --> */}
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src={img} alt="News 3"/>
        <div class="card-body">
          <small class="text-muted">Aug 15, 2023</small>
          <h5 class="card-title mt-2">Yahska Polymers Featured for Innovative Product Line</h5>
          <p class="card-meta">by admin | 20230 Comments</p>
          <a href="#" class="read-more">READ MORE →</a>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}
