import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/normalize.css"
import "../css/style.css"
import "@fontsource/material-icons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      
      <div className="landing-page">
        <span className="landing-text">
          <h1 id="hero-title">Hi, my<br />
             name is <span className="name">Oscar Piña</span>.</h1>
          <p className="it-desc">Telematics + Software = My interests</p>
          <p><i>I'm a <b>passionate IT professional</b> based on Santiago, Dominican Republic.</i></p>
        </span>
      </div>

      <div className="landing-image">
          .
      </div>
    
  </Layout>
)

export default IndexPage
