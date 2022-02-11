import React from 'react';
import { Implinks } from './Implinks';

export const RightAbout = () => {
  return (
      <>
    <div className="col-md-6 col-12 main_header_right">
        <Implinks/>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../images/3rd image.png" className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../images/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../images/3rd image.png" className="w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div> 
      </>
  );
};
