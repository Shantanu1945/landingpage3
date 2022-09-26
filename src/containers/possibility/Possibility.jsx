import React from 'react';
import './Possibility.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  { 
    title: 'HealthCare',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Real State',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Education',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
];
const Possibility = () => {
  return (
    <div>
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Industries<br></br></h1>
      <p>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    <div>
    <button className="button"><span>More Industries</span></button>
    </div>
  </div>
    </div>
  )
}

export default Possibility;