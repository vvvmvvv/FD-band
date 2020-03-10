import React from 'react';
import './About.scss';
import Gallery from '../Gallery/Gallery'

const About = () => {
    return (
        <React.Fragment>
            <h1>Page about us</h1>
            <Gallery/>
            {/* <section className="two-cols-section">
                <div className="first-col-wrapper scrollPage">
                    <div className="wrap-title">
                        <h6>INTRODUCTION</h6>
                        <h2>Our Deli</h2>
                    </div>

                    <p>
                        Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla
                        vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam.

                        Praesent laoreet malesuada ex, sed blandit sem dictum id. Donec vul-putate ultricies nibh, quis dapibus
                        ex cursus sit amet. Duis non ex pel-lentesque, sollicitudin justo a, porttitor magna. Duis lorem velit,
                        sodales eget posuere in, commodo dictum felis. Aenean leo neque, pharetra vitae dui et, pretium
                        venenatis metus.
                    </p>

                    <div className="contact-text-img"></div>
                </div>

                <div className="second-col-wrapper"></div>
            </section> */}
        </React.Fragment>
    );
}

export default About;