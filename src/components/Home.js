import React from 'react'

function Home() {
  return (
    // <!-- Hero Carousel -->
  <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">

    {/* <!-- Indicators  */}
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>

     {/* Carousel Items  */}
    <div class="carousel-inner">

       {/* Slide 1  */}
      <div class="carousel-item active vh-100" >
        <div class="container h-100 d-flex align-items-center">
          <div class="row">
            <div class="col-md-8 text-white">
              <h5 class="text-uppercase mb-3">Welcome to Yahska Polymers Pvt Ltd</h5>
              <h1 class="display-4 fw-bold mb-4">Construction Chemicals You Trust<br/> Delivering Strength & Quality</h1>
              <div class="mt-4">
                <a href="#" class="btn btn-outline-light btn-lg rounded-0 me-3">Contact Us</a>
                <a href="#" class="btn btn-primary btn-lg rounded-0">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2  */}
      <div class="carousel-item vh-100" >
        <div class="container h-100 d-flex align-items-center">
          <div class="row">
            <div class="col-md-8 text-white">
              <h5 class="text-uppercase mb-3">Welcome to Yahska Polymers Pvt Ltd</h5>
              <h1 class="display-4 fw-bold mb-4">Construction Chemicals You Trust<br/> Delivering Strength & Quality</h1>
              <div class="mt-4">
                <a href="#" class="btn btn-outline-light btn-lg rounded-0 me-3">Contact Us</a>
                <a href="#" class="btn btn-primary btn-lg rounded-0" >Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3  */}
      <div class="carousel-item vh-100" >
        <div class="container h-100 d-flex align-items-center">
          <div class="row">
            <div class="col-md-8 text-white">
              <h5 class="text-uppercase mb-3">Welcome to Yahska Polymers Pvt Ltd</h5>
              <h1 class="display-4 fw-bold mb-4">Construction Chemicals You Trust<br/> Delivering Strength & Quality</h1>
              <div class="mt-4">
                <a href="#" class="btn btn-outline-light btn-lg rounded-0 me-3">Contact Us</a>
                <a href="#" class="btn btn-primary btn-lg rounded-0">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Controls  */}
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>


                       

  )
}

export default Home