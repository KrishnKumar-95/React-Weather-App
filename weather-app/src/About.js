import React from 'react';
import { Footer } from './Footer';
import { Implinks } from './Implinks';
import { LeftAbout } from './LeftAbout';
import { Navbar } from './Navbar';
import { RightAbout } from './RightAbout';

export const About = () => {
  return (
    <div class="container-fluid main_header">
        <Navbar/>
        <Implinks/>
        <div class="row">
            <div class="col-md-10 col-12 mx-auto">
                <div class="row">
                    <RightAbout/>
                    <div class="col-md-6 col-12 main_header_right align-items-center">
                        <figure>
                            <img src="../images/3rd image.png" alt="Krishan Kumar" />
                        </figure>
                    </div>
                    <LeftAbout />     
                    <div class="col-md-6 col-12 main_header_left">
                        <p>Welcome to my Weather App</p>
                        <h1>I am a <span class="text-clr">Web Developer</span> Freelancer</h1>
                        <a href="https://indiandexter.com" target="_krishn"><button>About me</button></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};
