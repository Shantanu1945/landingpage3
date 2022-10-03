import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='container-fluid footer text-center py-2'>
       <div className='container'>
          <div className='row py-3'>
             <div className='col-md-3 col-sm-12 link-container'>
               <ul>
                   <li><a href='#/'>Fake text1</a></li>
                   <li><a href='#/'>Fake text2</a></li>
                   <li><a href='#/'>Fake text3</a></li>
                   <li><a href='#/'>Fake text4</a></li>
                
               </ul>
             
             </div>
             <div className='col-md-3 col-sm-12 link-container'>
             <ul>
                 <li><a href='#/'>Fake text1</a></li>
                 <li><a href='#/'>Fake text2</a></li>
                 <li><a href='#/'>Fake text3</a></li>
                 <li><a href='#/'>Fake text4</a></li>
              
             </ul>
           
           </div>
           <div className='col-md-3 col-sm-12 link-container'>
           <ul>
               <li><a href='#/'>Fake text1</a></li>
               <li><a href='#/'>Fake text2</a></li>
               <li><a href='#/'>Fake text3</a></li>
               <li><a href='#/'>Fake text4</a></li>
            
           </ul>
         
          </div>
          <div className='col-md-3 col-sm-12 link-container'>
          <ul>
              <li><a href='#/'>Fake text1</a></li>
              <li><a href='#/'>Fake text2</a></li>
              <li><a href='#/'>Fake text3</a></li>
              <li><a href='#/'>Fake text4</a></li>
           
          </ul>


        
         </div>

          </div>
          <button type="button" class="btn1 btn-warning" style = {{margin :'2rem'}}>CONTACT US</button>
       </div>
       <span style={{color: '#ffffff' }}>{`1000 Coding | All Rights are Reserved ©${new Date().getFullYear()}`}</span>
    
    
    </footer>
  )
}

export default Footer;
