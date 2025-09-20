import React from 'react'
import img2 from '../image/Rectangle 80.png'
import img3 from '../image/Rectangle 81.png'


function About() {
  return (
    <section class="About-section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 pt-4">
                <h4>About Us <span> </span></h4>
                <h5 class="text-primary mb-4">Welcome to Yahska Polymers Pvt Ltd</h5>
                    <p>
                        Yahska Polymers Pvt Ltd is a leading construction chemicals manufacturer based in Ahmedabad, proudly serving the Indian construction industry with innovative and reliable solutions for over two decades. As one of the leading names in the field, our mission is simple to build stronger, safer, and more sustainable structures through chemistry that performs.
                    </p>
                    <p>
                        Founded with a vision to revolutionize the way India builds, we offer a comprehensive portfolio of high-quality construction chemicals including:
                    </p>
                    <ul>
                        <li>Waterproofing systems</li>
                        <li>Sealants & bonding agents</li>
                        <li>Repair & rehabilitation products</li>
                        <li>Industrial flooring solutions</li>
                    </ul>
                    <a href="javascript:void(0)" class="btn btn-primary">Know More</a>
            </div>
            <div class="col-md-6">
                <div class="img-container">
                    <div class="img1">
                        <img  style={{position: "absolute", 
                        width: "55%", 
                        height: "60%",
                        right: "50px" }}
                        src={img2} alt="imge1"/>
                    </div>
                    <div class="img2">
                        <img style={{position: "absolute", 
                        width: "55%", 
                        height: "60%",
                        top: "200px" }}
                        src={img3} alt='imge3'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default About