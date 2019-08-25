import React from 'react'
import '../css/custom.css'

function MyWorks(){
  return(
    <section id="portfolio">
    <span className="main-line"></span>
      <div className="portfolio-list">
        <div className="portfolio-header">
          <h1>PORTFOLIO</h1>
        </div>
        <span className="main-line"></span>
        <ul className="list">
          <li><a className="footer-btn" href="/home"><h4>Sites</h4></a></li>
          <li><a className="footer-btn" href="/home"><h4>Logo</h4></a></li>
          <li><a className="footer-btn" href="/home"><h4>Flayer</h4></a></li>
          <li><a className="footer-btn" href="/home"><h4>And other...</h4></a></li>
        </ul>
      </div>
      <div className="portfolio-works">
        <div className="portfolio-box">
          <img src="image/portfolio/1.jpg" alt="w"/>
          <a href="/home">Look this work</a>
        </div>
        <div className="portfolio-box">
          <img src="image/portfolio/2.jpg" alt="w1"/>
          <a href="/home">Look this work</a>
        </div>
        <div className="portfolio-box">
          <img src="image/portfolio/3.jpg" alt="w2"/>
          <a href="/home">Look this work</a>
        </div>
          <div className="portfolio-box">
          <img src="image/portfolio/4.jpg" alt="w3"/>
          <a href="/home">Look this work</a>
        </div>
      </div>
    </section>
  )
}

export default MyWorks