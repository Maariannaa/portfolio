import React from 'react'
import '../css/custom.css'

function AboutMe(){
  return (
    <div>
      <section id="about_me-header">
        <span className="main-line"></span>
        <div className="about_me-header">
          <h1>About me</h1>
        </div>
      </section>
      <section id="about_me">		
        <div className="photo">
          <img src="image/myPhoto.jpg" alt="myphoto"/>
        </div>
        <div className="date">
          <div className="goal">
            <h3>Goal <br/> Every day do yourself better and don't compare yourself with others</h3>
          </div>
          <div className="mydate">
            <h3>Design <br/> +380990011223 <br/> Uzhhorod </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe