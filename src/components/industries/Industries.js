import React from 'react'
import './Industries.css'
import { content } from './content';
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
  } from 'react-share'
const Industries = () => {
  return (
    <div id = 'industries' className = 'container-fluid'>
    <hr></hr>
    <hr></hr>
    <h1 style={{
        textAlign : 'center',
        fontWeight : '500',
        textTransform : 'uppercase',
        color : '#4ab',
        margin : '4rem 0',
    
    }
    }>Industry Aligned Services</h1>

    <section className='grid row'>
    {content.map((item, key) => (
      <div
        key={key}
        className='col-md-4 col-sm-12 d-flex justify-content-center'
      >
        <figure className='effect'>
          <img src={item.img} alt={item.title} />
          <figcaption>
            <h2>
              {item.title}&nbsp;&nbsp;<span>{item.subtitle}</span>
            </h2>
            <p className='icon-links'>
              <LinkedinShareButton
                className='share-btn'
                url={'https://reactjs.org'}
                quote={
                  'Efficiently manage your investments so that it can grow and thrive!'
                }
                hashtag='#FrontedDeveloper'
              >
                <span className='icon-linkedin'></span>
              </LinkedinShareButton>
              <RedditShareButton
                className='share-btn'
                url={'https://reactjs.org'}
                quote={
                  'This is the text which you want to show when people share your portfolio!'
                }
                hashtag='#FrontedDeveloper'
              >
                <span className='icon-reddit'></span>
              </RedditShareButton>
              <TwitterShareButton
                className='share-btn'
                url={'https://reactjs.org'}
                quote={
                  'This is the text which you want to show when people share your portfolio!'
                }
                hashtag='#FrontedDeveloper'
              >
                <span className='icon-twitter'></span>
              </TwitterShareButton>
              <FacebookShareButton
                className='share-btn'
                url={'https://reactjs.org'}
                quote={
                  'This is the text which you want to show when people share your portfolio!'
                }
                hashtag='#FrontedDeveloper'
              >
                <span className='icon-facebook'></span>
              </FacebookShareButton>
            </p>
            <p
              className='description'
              style={{ float: 'left', padding: '0.5rem 1rem' }}
            >
              <span>
                DEMO:
                <a href='#/' className='demo-links'>
                  {item.demo}
                </a>
                <br />
                GITHUB:
                <a href='#/' className='demo-links'>
                  {item.github}
                </a>
              </span>
            </p>
          </figcaption>
        </figure>
        
      </div>
    ))}
    <a className = 'apex' href ='#/'><button  type="button" class="btn btn-primary">All Industries</button></a>
  
  </section>
  
      
    </div>
  )
}

export default Industries;
