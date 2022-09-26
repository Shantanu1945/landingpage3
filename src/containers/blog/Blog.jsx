import React from 'react';
import './Blog.css';
import Image3 from '../../assets/Request.jpg';
import Image2 from '../../assets/Cusotmer1.jpg';
import Image1 from '../../assets/Response.jpg';

const Blog = () => {
  return (
    <div className='ClassA'>
    <h1>Our Promise</h1>
    <section>
		<div className="container">
			<div className = "card">
				<div className="content">
					<div className ="imgBx">
						<img src={Image3} alt='Image1'/>
					</div>
					<div className ="contentBx">
						<h3>You Request<br/><span>The buck stops here!
        </span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="#/">We can help with and be responsible for ALL of your business technology needs</a>
					</li>
				</ul>
			</div>
			<div className="card">
				<div className="content">
					<div className="imgBx">
						<img src={Image1} alt='Image2'/>
					</div>
					<div className="contentBx">
						<h3>We Respond<br></br><span>24/7 Response
            </span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="#/">Our entire organization is hard-wired to respond within 24-hours, but usually much less!</a>
					</li>
				</ul>
			</div>

      <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src={Image2} alt='Image3'/>
        </div>
        <div className="contentBx">
          <h3>It Gets done<br></br><span>We never fail to deliver</span></h3>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="#/">Our job is not done until you’re satisfied. Complete Focus on Customers success</a>
        </li>
      </ul>
    </div>

      </div>
    </section>
      
   </div>

  );
}

export default Blog;
