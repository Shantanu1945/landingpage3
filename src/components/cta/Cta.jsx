import React from 'react'
import './Cta.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../assets/images.jpg';
import image2 from '../../assets/img_snowtops.jpg';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};
const Cta = () => {
  return (
    <div className='Slider'>
    <h2>Check out our Clients reviews!</h2>
    <Slider {...settings}>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
          <img src={image1} alt='Image1' />;
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
          <img src={image2} alt='Image1' />;
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
    <div>
    <div className="center">
    <div className="property-card">
      <a href="#/">
        <div className="property-image">
          <div className="property-image-title"> <h5>Card Title</h5> 
          </div>
        </div></a>
      <div className="property-description">
        <h5> Card Title </h5>
        <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      </div>
      <a href="#/">
        <div className="property-social-icons">
        </div>
      </a>
    </div>
  </div>
    </div>
  </Slider>
    </div>
  )
}

export default Cta;
