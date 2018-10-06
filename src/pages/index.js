import React from 'react'
import logo from '../img/logo.png'

class IndexPage extends React.Component {
  componentWillMount() {
    const script = document.createElement('script')

    script.src =
      'https://cdn.curator.io/published/5b300f7b-494b-4c8d-af08-8eed7064c3f6.js'
    script.async = true

    document.body.appendChild(script)
  }

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
