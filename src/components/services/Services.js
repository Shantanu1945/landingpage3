import React from 'react'
import Counter from '../counter/Counter'
import './Services.css'
import { servicesContent } from './servicesContent'

const Services = () => {
  return (
    <div id ='services' className='container-fluid main-services-wrapper'>
      <div className='container services-wrapper my-5'>
        <h1>Business Technology Services
        </h1>
        <h4>I need Help with ...</h4>
        <button type="button" class="btn btn-primary btn-lg">Information Technology Support and Security</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary btn-lg">Software and Productivity</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary btn-lg">Website and Marketing</button>
        <div className='row'>
    
          {servicesContent.map((item, key) => (
            <div className='col-md-4 col-sm-12' key={key}>
              <div className='service-box'>
                <span className={item.className}></span>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            
            </div>
            
          ))}
        </div>
        <button type="button" class="btn btn-secondary">Click Here to Access All Services</button>
      </div>
      <Counter />
    </div>
  )
}

export default Services;
