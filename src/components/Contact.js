import React from 'react'
import '../css/custom.css'

function Contact(){
  return(
    <footer>
      <div className="container">
        <div className="footer-info">
          <p className="footer-head">
            by Design
          </p>
        </div>
        <div className="social-links">
          <p className="footer-head">Follow</p>
          <a href="/home">
            <picture>
              <source type="image/svg+xml" srcSet="image/svg/vk.svg"/>
              <img src="image/png/vk1.png" alt="Vkontakte"/>
            </picture>
          </a>
          <a href="/home">
            <picture>
              <source type="image/svg+xml" srcSet="image/svg/facebook.svg"/>
              <img src="image/png/facebook.png" alt="Facebook"/>
            </picture>
          </a>
          <a href="/home">
            <picture>
              <source type="image/svg+xml" srcSet="image/svg/instagram.svg"/>
              <img src="image/png/instagram1.png" alt="Instagram"/>
            </picture>
          </a>
          <a href="/home">
            <picture>
              <source type="image/svg+xml" srcSet="image/svg/twitter.svg"/>
              <img src="image/png/twitter1.png" alt="Twitter"/>
            </picture>
          </a>
        </div>
        <div className="callback">
          <p className="footer-head">Write me</p>
          <a className="footer-btn" href="/home"> <p className="email">design@gmail.com</p> </a>
        </div>
      </div>
    </footer>
  )
}

export default Contact