import React from 'react'
import logo from '../image/Yahskha Polymers_Logo & Symbol (3) (1) 1.png'

function Header() {
  return (
    
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="#">
        <img src={logo} alt="Logo" class="me-2"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-dark" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
          <li class="nav-item"><a class="nav-link" href="#">ABOUT US</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">PROJECTS</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="projects.html">Project </a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">PRODUCTS</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Product 1</a></li>
              <li><a class="dropdown-item" href="#">Product 2</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">MEDIA COVERAGE</a></li>
          <li class="nav-item"><a class="nav-link" href="#">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header