import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footers'>
            <h2>Stalk me on</h2>
            <ul class="social">
                <li><a href="https://instagram.com/chandanck22/" target="_blank"><i class="ri-instagram-line"></i></a></li>
                <li><a href="https://twitter.com/chandanck22/" target="_blank"><i class="ri-twitter-x-line"></i></a></li>
                <li><a href="https://www.linkedin.com/in/chandanck22/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://github.com/chandanck22/" target="_blank"><i class="ri-github-fill"></i></a></li>
            </ul>
            <p>Made with <i class="ri-heart-2-fill"></i> by <a href="#">Chandan Kushwaha</a> © 2023</p>
        </footer>
    )
}

export default Footer