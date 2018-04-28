import React from 'react'
import logo from '../img/logo.svg' // Tell Webpack this JS file uses this image

const IndexPage = () => (
  <div>
    <h1 className="title">Christchurch Builders</h1>
    <img src={logo} alt="Christchurch Builders Logo" />
    <h2>Muir Builders</h2>
    <p>Neil Muir</p>
    <p>
      P.&nbsp;<a href="te;:+64277600060">027 760 0060</a>
    </p>
    <p>
      E.&nbsp;<a href="mailto:neil@mbuild.co.nz">neil@mbuild.co.nz</a>
    </p>
  </div>
)

export default IndexPage
