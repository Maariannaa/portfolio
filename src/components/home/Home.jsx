// Common
import React from 'react'

// Styles
import './home.scss'

// Components
import {ThemeContext} from '../../themes/ThemeContext'

export default function HomePage(){
  return(
    <section className="home">
      <div className="home-header">
        <ThemeContext.Consumer>
          {({theme, toggleTheme}) => (
            <button
              onClick={toggleTheme}
              style={{backgroundColor: '#000'}}
            >
              <h1 className='home-title'>Portfolio</h1>
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </section>
  )
}
