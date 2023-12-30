import React from 'react'
import './About.css';
import aboutImg from '../../assets/about1.png';
import aboutImg2 from '../../assets/about2.png';
import Degree from '../../assets/education.png';
import Education from '../../assets/education4.gif';
import { data } from '../../config/data';

const About = () => {
  return (
    <section className="about" id="about">
      {/* ABOUT */}
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

      {/* EDUCATION */}
      <div className="eduinfo">
        <div className="edubox">
          <h2 className="boxheading">
            <img src={Degree} alt="degree" /> Education
          </h2>

          {data.about.education &&
            data.about.education.map((course) => (
              <div className="course" key={course.name}>
                <h2 className="course__name">{course.name}</h2>
                <div className="courseinfo">
                  <div className="bx">
                    {/* <img className="roundbtn" src="" alt="" /> */}
                    <i class="ri-map-pin-line roundbtn"></i>
                    <p>{course.location}</p>
                  </div>
                  <div className="bx">
                    {/* <img className="roundbtn" src="" alt="" /> */}
                    <i class="ri-time-line roundbtn"></i>
                    <p>{course.date}</p>
                  </div>
                </div>
              </div>
            ))}

        </div>
        <div className="imgbx">
          <img src={Education} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About