import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';
const Header = () => {
  return (
    <div className = 'gpt3__header section__padding' id='home'>
       <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Business Technology Consulting,Implementation & Support</h1>
          <p>Want to add MORE VALUE to your business with better technology?
          You’ve come to the right place.</p>
          <div className='gpt3__header-content__input'>
            <input type = "text" placeholder= "I know what I need   :"></input>
            <button type='button'>View Our Services</button>
          
          </div>
          <div className='gpt3__header-content__input'>
             <input type = "text" placeholder= "I need help identifying my solution  :"></input>
             <button type='button'>Consulting Help</button>
        
          </div>
          <div className='gpt__header-content__people'>
          <img src={people} alt = "People" /><p>More than 100 clients have worked with Us</p>
          
          </div>
        
  </div> 
  <div className='gpt3__header-image'>
  <img src ={ai} alt ="ai" />
       </div>
        
    </div>
  )
}

export default Header;