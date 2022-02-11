import React from 'react';
import { Implinks } from './Implinks';
import { Link } from 'react-router-dom';

export const LeftAbout = () => {
  return (
      <>
            <div class="container-fluid main_header">
                <Implinks/>
        <div class="row">
            <div class="col-md-10 col-12 mx-auto">
                <div class="row">
                    <div class="col-md-6 col-12 main_header_left">
                        <p>Welcome to my Weather App</p>
                        <h1>Get the latest <span class="text-clr">Weather</span> info of your city</h1>
                        <Link to="/weather"><button>Check Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </>
  );
};
