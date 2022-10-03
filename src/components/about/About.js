import React from 'react';
import Me from '../header/me.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LinkedinIcon,
    PinterestIcon,
    WhatsappIcon,
 
  } from "react-share";

const About = () => {
  return (
<section className='about' id = 'About'>
<div className='container'>
   <h1> About Us</h1>
   <div className='row'>
       <div className='col-lg-6 col-12'>
           <div className='photo-wrapper'>
             <img src={Me} alt='Logo'
             style={{width :'100%'}}
             />
             <div className='photo-overlay'>
                <div className='photo-text social'>
                   <h5 style={{textAlign : 'center', color : '#fff'}}>We make technology simple.</h5>
                   <>
                     <FacebookShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <FacebookIcon className='icon'  size ={32} round ={true}/>
                       
                     </FacebookShareButton>
                     <EmailShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <EmailIcon className='icon'  size ={32} round ={true}/>
                       
                     </EmailShareButton>
                     <InstapaperShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <InstapaperIcon className='icon'  size ={32} round ={true}/>
                       
                     </InstapaperShareButton>
                     <LinkedinShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <LinkedinIcon className='icon'  size ={32} round ={true}/>
                       
                     </LinkedinShareButton>
                     <PinterestShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <PinterestIcon className='icon'  size ={32} round ={true}/>
                       
                     </PinterestShareButton>
                     <WhatsappShareButton className='icon-button'
                     url ={'https://reactjs.org'}
                     quote ={'This is text which you want to show when people share your link'}
                     hashtag ='#FrontEndDeveloper'
                     >

                       <WhatsappIcon className='icon'  size ={32} round ={true}/>
                       
                     </WhatsappShareButton>
                   </>
                </div>
             </div>
           </div>
       </div>
       <div className='col-lg-6 col-12 about-right'>

       <h3> We Are Miles Technologies</h3>
       
       <p>
       A team of tech enthusiasts committed to helping people accomplish more through the<br></br>
        consultative selection, design, implementation, and ongoing maintenance of business technology.
       </p>
       <button type="button" class="btn btn-secondary">Know More About Us</button> 
       <br></br>
       <h3>Our Culture</h3>
       
       <p>
       We are a company made up of caring friends who are as passionate about technology as we are about people.<br></br>
        Our culture is defined by our 12 beliefs that help us make the<br></br>
         right decisions quickly and move as one company towards achieving a common goal.
       </p>
       <button type="button" class="btn btn-secondary">Our Beliefs</button> 
       </div>
   
   </div>

</div>

</section>
  )
}

export default About;
