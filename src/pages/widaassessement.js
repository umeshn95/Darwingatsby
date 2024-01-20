import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WidaAssessment from "../components/Solutions/WidaAssessment"

const Widaassessment = () => (
  <Layout>
    <div>
        <WidaAssessment/>
       {/* Add more content and components here */}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Wida" />

export default Widaassessment
