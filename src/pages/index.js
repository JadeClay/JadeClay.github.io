import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/normalize.css"
import "../css/style.css"
import "@fontsource/material-icons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="landing-page">
      <center>
        <h1>Supp, people!</h1>
        <p><i>Welcome to my portfolio. It's still work in progress so, come back later :)</i></p>
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
      </center>
      
    </div>
  </Layout>
)

export default IndexPage
