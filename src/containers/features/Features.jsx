import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  { 
    title: 'Managed IT services',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'IT support',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Cybersecurity',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Cloud Hosting and Migration',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => {return(
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Services <br></br></h1>
      <p>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    <div>
    <button className="button"><span>See All Services</span></button>
    </div>
  </div>
);
      }

export default Features;