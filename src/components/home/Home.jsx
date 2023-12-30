import React from 'react';
import homech from '../../assets/home-right.png';
import { data } from '../../config/data.js';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <article className="homeinfo">
                <h1>
                    Hi i am <span>Chandan</span>
                </h1>
                <p>
                    <span aria-hidden={true}> {"<>"} </span>
                    {data.role}
                    <span aria-hidden={true}> {"</>"} </span>
                </p>
                <div className="homebtn">
                    <a className="btn" href="#about">
                        Explore More
                    </a>
                    <a
                        className="btn iconbtn"
                        target="_blank"
                        rel="noreferrer"
                        href={data.resumeLink}
                    >
                        Download CV <i className="ri-folder-download-line"></i>
                    </a>
                </div>
            </article>
            <img className="homeimg" src={homech} alt="home" />

            {/* SOCIAL */}
            <div class="social-icons">
                <a href="https://twitter.com/chandanck22"><i class="ri-twitter-x-fill"></i></a>
                <a href="http://github.com/chandanck22"><i class="ri-github-fill"></i></a>
                <a href="https://leetcode.com/chandanck22/"><i class="ri-code-box-fill"></i></a>
            </div>
            {/* SCROLL BAR */}
            <div class="scroll-btn">
                <a href="#about">Scroll Down<i class="ri-arrow-down-double-line"></i></a>
            </div>

        </section>
    )
}

export default Home