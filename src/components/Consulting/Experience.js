import React from 'react'
import './Consulting.css'
const Experience = () => {
  return (
    <div className='container1' id = 'consulting'>                   
    <h1>Business Consulting Services</h1>
    <hr></hr>
     <h4> Let's Talk Technology</h4>
       <div className='row d-flex'>
           <div className= 'col-lg-6 col-md-6 col-sm-12'>
              <div className = 'Consulting'>
                  <div className='my-5'>

                   </div>
                   <div className='container1 wrapper1'>
                     <div className='timeline-block'>
                            <div className='marker'>
                               <div className='timeline-content'>
                                  <h3> Growth and Strategy Planning consulting</h3>
                                  <hr></hr>
                                  <p>Receive trusted guidance from our experts on<br>
                                  </br> how to drive buisness growth and achieve your greatest goals</p>
                                  <button type="button" class="btn btn-info">Click to know More</button>
                               </div>
                            </div>
                        
                     </div>
                   </div>
                   <div className='container1 wrapper1'>
                     <div className='timeline-block'>
                            <div className='marker'>
                               <div className='timeline-content'>
                                  <h3> Staffing and Recruiting consulting</h3>
                                  <hr></hr>
                                  <p>Receive expert counsel on increase your recruitment<br>
                                  </br>marketing efforts and easily connect with the best potential talent</p>
                                  <button type="button" class="btn btn-info">Click to know More</button>
                               </div>
                            </div>
                        
                     </div>
                   </div>
               </div>
           </div> 
  {/* Right Column */}  
           <div className= 'col-lg-6 col-md-6 col-sm-12'>
           <div className = 'Consulting'>
               <div className='my-5'>
  
                </div>
                <div className='container1 wrapper1'>
                  <div className='timeline-block'>
                         <div className='marker'>
                            <div className='timeline-content'>
                               <h3> Sales Consulting</h3>
                               <hr></hr>
                               <p>Empower your salesforce to response quickly, impress potential<br>
                               </br> clients, and follow up personally to increase the amount and quality of sales</p>
                               <button type="button" class="btn btn-info">Click to know More</button>
                            </div>
                         </div>
                     
                  </div>
                </div>
                <div className='container1 wrapper1'>
                  <div className='timeline-block'>
                         <div className='marker'>
                            <div className='timeline-content'>
                               <h3> Operating Consulting</h3>
                               <hr></hr>
                               <p>Streamline your operations and greater efficiency , <br></br>
                               prductivity,quality and customer service for your business</p>
                               <button type="button" class="btn btn-info">Click to know More</button>
                            </div>
                         </div>
                     
                  </div>
                </div>
            </div>
        </div>  
       </div>

       <button type="button" class="btn1 btn-primary">Click to See All Services</button>  
    
      
    </div>
  )
}

export default Experience
