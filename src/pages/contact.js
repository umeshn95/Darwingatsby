import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/Contact/Contact"

const Contactus = () => (
  <Layout>
    <div>
        <Contact/>
       {/* Add more content and components here */}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact" />

export default Contactus
