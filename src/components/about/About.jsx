import React from 'react'
import './About.css';
import aboutImg from '../../assets/about1.png';
import aboutImg2 from '../../assets/about2.png';
import { data } from '../../config/data';

const About = () => {
  return (
    <section className="about" id="about">
      <div className='basicinfo'>
        <div className='imgbox'>
          <img className="aboutimg" src={aboutImg} alt="about" />
        </div>
        <div className="info">
          <h2>
            <img src={aboutImg2} alt="about" /> About Me
          </h2>
          <span>Chandan Kushwaha</span>
          <div className='aboutskill'>
            Full Stack Developer
          </div>
          <p>
            India, New Delhi
          </p>
          <p>
            Age: 22
          </p>
          <p className='desc'>{data.about.bio}</p>
          <div className='homebtn'>
            <a target='_blank' rel='noreferrer' href={data.resumeLink} className='btn iconbtn' > Download CV <i className="ri-folder-download-line"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About