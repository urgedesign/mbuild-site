import React from 'react'
import logo from '../img/logo.png'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">Christchurch Builders</h1>
          <figure className="logo-wrapper">
            <img src={logo} alt="Christchurch Builders Logo" className="logo" />
          </figure>
          <div className="details">
            <h2>Muir Builders</h2>
            <p>Neil Muir</p>
            <p>
              P.&nbsp;<a href="te;:+64277600060">027 760 0060</a>
            </p>
            <p>
              E.&nbsp;<a href="mailto:neil@mbuild.co.nz">neil@mbuild.co.nz</a>
            </p>
          </div>
        </header>
        <div id="curator-feed" />
      </div>
    )
  }
}

export default IndexPage
