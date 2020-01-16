// Common
import React from 'react'

// Styles
import './works.scss'

export default function MyWorks(){
  return(
     <div className='main'>
      <div className='container'>
        <div className='card'>
          <div className='face face1'>
            <div className='content'>
              <img src='image/portfolio/frontend.png' alt='frontend' />
              <h3>Frontend</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <p>Front-end web development is the practice of converting data to a graphical interface, 
                 through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.</p>
              <a href='frontend'>Frontend</a>
            </div>
          </div>
        </div> 
        <div className='card'>
          <div className='face face1'>
            <div className='content'>
              <img src='image/portfolio/backend.png' alt='backend'/>
              <h3>Backtend</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <p>Back end refers to the server side of development 
                 where you are primarily focused on how the site works. 
                 Making updates and changes in addition to monitoring functionality of 
                 the site will be your primary responsibility. </p>
              <a href='backend'>Backtend</a>
            </div>
          </div>
        </div> 
        <div className='card'>
          <div className='face face1'>
            <div className='content'>
              <img src='image/portfolio/animation.png' alt='animation'/>
              <h3>Animation</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <p>Animation is the illusion of movement created by showing a series of still pictures in rapid succession. 
                 In the world of computers, graphics software used to create this effect. 
              </p>
              <a href='animation'>Animation</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='face face1'>
            <div className='content'>
              <img src='image/portfolio/drawing.png' alt='drawing'/>
              <h3>Drawing</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <p>Drawing is a form of visual art in which a person uses 
                various drawing instruments to mark paper medium. 
                Digital drawing is the act of using a computer to draw. 
              </p>
              <a href='drawing'>Drawing</a>
            </div>
          </div>
        </div>    
      </div>
     </div>
  )
}
