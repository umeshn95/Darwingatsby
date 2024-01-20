import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Ourteam from "../components/OurTeam/Ourteam"

const OurTeams = () => (
  <Layout>
    <div>
        <Ourteam/>
       {/* Add more content and components here */}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Ourteam" />

export default OurTeams
