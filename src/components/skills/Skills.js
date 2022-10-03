import React from 'react';
import './Skills.css';

import 'bootstrap/dist/css/bootstrap.min.css';
const Skills = () => {
  return (
    <section className='skills'>
       <div className='container'>
           <h1> We Make Technology Simple</h1>
          
           <div class="card text-center">
           <div class="card-header">
           </div>
           <div class="card-body">
             <h5 class="card-title">Consulting</h5>
             <p class="card-text">It starts with a friendly introduction.<br></br>
              We get to know your business, its processes, and the underlying causes for your needs.</p>
             <a href="#/" class="btn btn-primary">Get Consulting Help</a>
           </div>
           <div class="card-footer text-muted">
             24/7 help in identifying Solutions
           </div>
              </div>   
           <div class="card text-center">
         <div class="card-header">
         </div>
         <div class="card-body">
           <h5 class="card-title">Implementation</h5>
           <p class="card-text">Now it’s time to build a roadmap for your project’s success.<br></br>
            We keep you informed every step of the way, through planning and testing, ensuring your project is ready for its GO LIVE day.</p>
           <a href="#/" class="btn btn-primary">Samples</a>
         </div>
         <div class="card-footer text-muted">
           We Identify Problems, Build a roadmap and give Solutions.
         </div>
             </div>  
           <div class="card text-center">
       <div class="card-header">
       </div>
       <div class="card-body">
         <h5 class="card-title">Support</h5>
         <p class="card-text">We provide training and support for your new solution to ensure you and your people can get the most out of it.</p>
         <a href="#/" class="btn btn-primary">Contact Us</a>
       </div>
       <div class="card-footer text-muted">
         UnLimited Supprot
       </div>
             </div> 
       </div>
    
      
    </section>
  )
}

export default Skills;
