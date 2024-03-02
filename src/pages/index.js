import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingpage from "../components/LandingPage/Landingpage"

const IndexPage = () => (
  <Layout>
  //   <div>
  //       <Landingpage/>
  //      {/* Add more content and components here */}
  //   </div>
  // </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
