import React ,{useState} from 'react'
import Review from 'react-countup';
import Design from 'react-countup';
import Clients from 'react-countup';
import CoffeeDrinked from 'react-countup';
import LiveSupport from 'react-countup';

const Counter = () => {
    const [review,setReview] =useState(0);
    const[design,setDesign] =useState(0);
    const[clients,setClients]=useState(0);
    const[coffee,setCoffee]=useState(0);
    const[support,setSupport]=useState(0);
    window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY
    if(Math.round(scrollPosition)>=4700){
        setReview(98.7)
        setDesign(1000)
        setClients(51)
        setCoffee(20)
        setSupport(24)
    }

    })
    const counterStyle ={
        color : 'tomato',
        fontWeight: '400',
        fontSize :'2rem'
    }
  return (
    <div className='container p-5'>
     <div className='row justify-content-center'>
     <div className='col-md-3 text-center'>
       <Review 
        style={counterStyle}
        start ={0}
        end ={review}
        duration ={2}/><span style ={{fontSize :'2rem'}}>&#37;</span>
        <h3>Success Rate</h3>
       </div>
       <div className='col-md-3 text-center'>
       <Design 
       style={counterStyle}
       start ={0}
       end ={design}
       duration ={3}/><span style ={{fontSize :'2rem'}}>&#43;</span>
       <h3>Us Based Employees</h3>
      </div>
      <div className='col-md-3 text-center'>
      <span style ={{fontSize :'2rem'}}> &lt;</span><Clients
      style={counterStyle}
      start ={0}
      end ={clients}
      duration ={3}/>
      <h3> Seconds Average response Time</h3>
     </div>
     <div className='col-md-3 text-center'>
     <CoffeeDrinked
     style={counterStyle}
     start ={0}
     end ={coffee}
     duration ={3}/><span style ={{fontSize :'2rem'}}>&#43;</span>
     <h3>Years of Experience</h3>
    </div>
    <div className='col-md-3 text-center'>
    <LiveSupport
    style={counterStyle}
     start ={0}
    end ={support}
    duration ={3}/><span style ={{fontSize :'2rem'}}>&#47;&#x37;</span>
    <h3>Live Support</h3>
   </div>
     </div>
      
    </div>
  )
}

export default Counter;
