import React from 'react';
import './Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" interval={6000}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/nature2.jpg" class="d-block w-100 Carousel_img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/nature14.jpg" class="d-block w-100 Carousel_img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/nature13.jpg" class="d-block w-100 Carousel_img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    
  );
}

export default Carousel;
