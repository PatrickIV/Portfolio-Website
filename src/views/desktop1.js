import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>Patrick Gatal's Website</title>
      </Helmet>
      <div className="desktop1-desktop1">
        <span className="desktop1-text">
          <span>
            <span>
              Hi, I’m
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Patrick Gatal</span>
          </span>
        </span>
        <img
          alt="Screenshot202306021725321112"
          src="/external/screenshot202306021725321112-b7o-400h.png"
          className="desktop1-screenshot202306021725321"
        />
        <span className="desktop1-text5">
          <span>HIRE ME PLS</span>
        </span>
      </div>
    </div>
  )
}

export default Desktop1
