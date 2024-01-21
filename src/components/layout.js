/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from 'gatsby'

import Header from "./header"
import "./layout.css"



const Layout = ({ children }) => {
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your API endpoint URL
    const apiUrl = 'https://contactapi-for-darwin.onrender.com/api/newsletter';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission successful:', data);
        // Handle success or any other actions you need here
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Handle errors or display error messages here
      });
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer className="footer_component">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-small">
          <div className="w-layout-grid footer_top-wrapper">
            <div className="footer_left-wrapper">
              <a
                href="/"
                title="Darwin Homepage"
                aria-label="Homepage"
                className="footer_logo-link w-nav-brand"
              >
                <div className="logo-embed w-embed">
                 <strong>Darwin</strong>
                </div>
                <div className="hide">Homepage</div>
              </a>
              <div className="spacer-small" />
              <div className="text-weight-semibold">
                Stay{" "}
                <span className="span-wrapper">
                  Connected
                  <div
                    className="span-element is-scribble"
                    data-w-id="a0824cd3-4843-4ed9-6b33-12197e3f0834"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65044099318ce959af7fd242_scribble-green-item.json"
                    data-loop={0}
                    data-direction={1}
                    data-autoplay={1}
                    data-is-ix2-target={0}
                    data-renderer="svg"
                    data-duration={0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 581 376"
                      width={581}
                      height={376}
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "translate3d(0px, 0px, 0px)",
                        contentVisibility: "visible"
                      }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_122">
                          <rect width={581} height={376} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_126">
                          <g
                            transform="matrix(1,0,0,1,290.5,188)"
                            opacity={1}
                            style={{ display: "block" }}
                          >
                            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity={0}
                                strokeMiterlimit={4}
                                stroke="rgb(255,0,0)"
                                strokeOpacity={1}
                                strokeWidth={12}
                                d="M0 0"
                              />
                            </g>
                          </g>
                        </g>
                        <mask id="__lottie_element_126_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_126" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_122)">
                        <g
                          mask="url(#__lottie_element_126_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,290.5,188)" opacity={1}>
                            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(126,227,78)"
                                fillOpacity={1}
                                d=" M-4.191999912261963,-187.5489959716797 C-26.874000549316406,-185.97999572753906 -56.9900016784668,-179.96299743652344 -56.9900016784668,-177.13699340820312 C-56.9900016784668,-176.83900451660156 -56.308998107910156,-176.32000732421875 -55.48500061035156,-176.10000610351562 C-54.20199966430664,-175.7239990234375 -19.138999938964844,-176.54100036621094 0.46700000762939453,-177.43600463867188 C2.940999984741211,-177.57899475097656 13.083999633789062,-177.43600463867188 23.0049991607666,-177.05999755859375 C89.76799774169922,-174.9080047607422 138.74400329589844,-164.70399475097656 177.3419952392578,-145.13900756835938 C185.52200317382812,-140.9770050048828 194.76199340820312,-135.60899353027344 193.79299926757812,-135.54400634765625 C193.5709991455078,-135.54400634765625 188.99000549316406,-137.177001953125 183.64999389648438,-139.18699645996094 C150.45799255371094,-151.76400756835938 111.16799926757812,-159.50399780273438 68.06800079345703,-161.9550018310547 C63.566001892089844,-162.2530059814453 57.92499923706055,-162.92799377441406 55.595001220703125,-163.5240020751953 C33.89500045776367,-168.87899780273438 -4.938000202178955,-171.26400756835938 -34.53099822998047,-169.03399658203125 C-71.63600158691406,-166.20799255371094 -115.41600036621094,-157.57200622558594 -149.88999938964844,-146.26600646972656 C-180.00599670410156,-136.3730010986328 -207.57000732421875,-122.22799682617188 -227.17599487304688,-106.54000091552734 C-256.5459899902344,-82.94300079345703 -278.927001953125,-48.41600036621094 -287.0419921875,-13.902000427246094 C-290.052001953125,-1.3250000476837158 -290.87701416015625,7.453000068664551 -290.3529968261719,21.00200080871582 C-289.60699462890625,40.20399856567383 -286.072998046875,53.81700134277344 -277.05499267578125,71.6709976196289 C-264.2149963378906,97.18699645996094 -240.9320068359375,121.3030014038086 -211.718994140625,139.3769989013672 C-177.8470001220703,160.35499572753906 -128.42599487304688,176.7310028076172 -77.197998046875,183.93899536132812 C-53.69200134277344,187.28399658203125 -46.624000549316406,187.73800659179688 -17.934999465942383,187.73800659179688 C12.260000228881836,187.73800659179688 22.69099998474121,186.92100524902344 47.78099822998047,182.75900268554688 C97.2020034790039,174.5780029296875 147.447998046875,154.77999877929688 189.73599243164062,126.87799835205078 C243.35899353027344,91.39099884033203 278.7359924316406,47.19200134277344 288.6570129394531,3.069999933242798 C290.98699951171875,-6.978000164031982 291.1310119628906,-31.457000732421875 288.9580078125,-41.05099868774414 C282.7279968261719,-69.09600067138672 267.10101318359375,-90.82599639892578 238.26699829101562,-111.36299896240234 C234.28900146484375,-114.26699829101562 229.1840057373047,-118.58499908447266 226.9980010986328,-121.03600311279297 C215.72900390625,-133.7550048828125 199.05499267578125,-146.33099365234375 182.38099670410156,-154.58999633789062 C160.5229949951172,-165.4550018310547 130.93099975585938,-175.1269989013672 105.25199890136719,-179.7429962158203 C72.33499908447266,-185.61599731445312 20.440000534057617,-189.33799743652344 -4.191999912261963,-187.5489959716797z M-20.94499969482422,-157.79299926757812 C-77.94400024414062,-148.7169952392578 -119.93099975585938,-134.20799255371094 -163.26600646972656,-108.69200134277344 C-203.82699584960938,-84.80999755859375 -231.38999938964844,-56.090999603271484 -244.83200073242188,-23.509000778198242 C-251.218994140625,-8.105999946594238 -253.39199829101562,4.171999931335449 -252.7899932861328,20.98900032043457 C-252.34500122070312,33.928001403808594 -250.01499938964844,44.792999267578125 -245.05499267578125,56.176998138427734 C-226.80999755859375,98.80799865722656 -187.82000732421875,130.35299682617188 -131.04299926757812,148.58200073242188 C-86.42500305175781,162.947998046875 -40.99599838256836,167.11000061035156 11.880000114440918,161.60000610351562 C77.67500305175781,154.83200073242188 135.49899291992188,135.33200073242188 178.4669952392578,105.27799987792969 C225.4149932861328,72.46199798583984 252.8209991455078,35.18600082397461 261.9049987792969,-8.105999946594238 C266.64300537109375,-30.433000564575195 263.4880065917969,-56.0260009765625 253.26600646972656,-79.75299835205078 C253.26600646972656,-79.75299835205078 250.25599670410156,-86.81999969482422 250.25599670410156,-86.81999969482422 C250.25599670410156,-86.81999969482422 255.43899536132812,-81.38700103759766 255.43899536132812,-81.38700103759766 C277.44000244140625,-58.39899826049805 285.1099853515625,-26.18000030517578 276.5369873046875,6.701000213623047 C263.4750061035156,56.39799880981445 212.02499389648438,108.03900146484375 142.39599609375,141.29600524902344 C99.36199951171875,161.83299255371094 56.54999923706055,172.84100341796875 6.985000133514404,176.18600463867188 C-66.54399871826172,181.10000610351562 -151.40899658203125,162.71499633789062 -204.66400146484375,130.43099975585938 C-228.92999267578125,115.7020034790039 -250.8520050048828,94.64600372314453 -262.9460144042969,74.2509994506836 C-284.42401123046875,38.24599838256836 -284.6470031738281,-3.7239999771118164 -263.4700012207031,-44.5 C-255.35499572753906,-60.124000549316406 -245.89300537109375,-72.84300231933594 -232.4510040283203,-86.09400177001953 C-210.1490020751953,-108.12200164794922 -183.93299865722656,-123.07099914550781 -145.62399291992188,-135.6479949951172 C-114.76100158691406,-145.76100158691406 -73.9000015258789,-154.17599487304688 -41.97800064086914,-157.0800018310547 C-37.2400016784668,-157.52099609375 -32.1349983215332,-158.052001953125 -30.708999633789062,-158.11700439453125 C-29.281999588012695,-158.25999450683594 -25.525999069213867,-158.4149932861328 -22.450000762939453,-158.4149932861328 C-22.450000762939453,-158.4149932861328 -16.82200050354004,-158.4929962158203 -16.82200050354004,-158.4929962158203 C-16.82200050354004,-158.4929962158203 -20.95800018310547,-157.81900024414062 -20.95800018310547,-157.81900024414062 C-20.95800018310547,-157.81900024414062 -20.94499969482422,-157.79299926757812 -20.94499969482422,-157.79299926757812z M79.10099792480469,-149.68899536132812 C133.4040069580078,-145.1510009765625 181.09800720214844,-131.91400146484375 216.99899291992188,-111.22100067138672 C224.89100646972656,-106.76100158691406 225.781005859375,-106.00900268554688 229.53700256347656,-100.65399932861328 C234.19700622558594,-94.10600280761719 241.552001953125,-80.41500091552734 244.78500366210938,-72.23300170898438 C259.57501220703125,-35.25600051879883 254.6280059814453,2.5390000343322754 230.06100463867188,39.672000885009766 C222.6269989013672,50.97800064086914 215.27099609375,59.691001892089844 203.54400634765625,70.91899871826172 C168.69000244140625,104.39600372314453 125.59100341796875,127.0989990234375 71.052001953125,140.77699279785156 C49.57400131225586,146.1320037841797 29.889999389648438,149.33399963378906 3.4509999752044678,151.78500366210938 C-13.00100040435791,153.2760009765625 -54.83000183105469,153.05499267578125 -67.89299774169922,151.40899658203125 C-120.8479995727539,144.56300354003906 -166.27699279785156,127.37100219726562 -195.947998046875,102.90499877929688 C-204.1280059814453,96.13700103759766 -214.9510040283203,84.67500305175781 -220.95899963378906,76.41600036621094 C-227.3459930419922,67.56099700927734 -235.906005859375,50.60200119018555 -238.3800048828125,41.888999938964844 C-251.52099609375,-4.980999946594238 -226.28599548339844,-54.016998291015625 -169.6540069580078,-91.29299926757812 C-153.96099853515625,-101.63899993896484 -132.2469940185547,-113.16600036621094 -114.5260009765625,-120.68599700927734 C-75.39199829101562,-137.12600708007812 -28.156999588012695,-147.5500030517578 20.885000228881836,-150.4409942626953 C33.88199996948242,-151.17999267578125 65.80400085449219,-150.81700134277344 79.08799743652344,-149.70199584960938 C79.08799743652344,-149.70199584960938 79.10099792480469,-149.68899536132812 79.10099792480469,-149.68899536132812z"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </span>{" "}
                with Us!
              </div>
              <div className="hide-this">
                <div className="text-size-regular">Connected</div>
              </div>
              <div className="spacer-small" />
              <div className="text-size-small">
                Looking for the latest news, industry trends, or expert advice?
                We've got you covered. Join our monthly newsletter for exclusive
                updates and insider insights tailored for you.
              </div>
              <div className="spacer-small" />
              <div className="footer_embed w-embed w-script">
                <div
                  id="hbspt-form-635e4fdd-b048-4c7a-b33a-1710de5fcdbe"
                  className="hbspt-form"
                  data-hs-forms-root="true"
                >
                    <form
        id="hsForm_f70088a9-e842-45c9-9d71-31dceb3907cf"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        noValidate=""
        action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/21052756/f70088a9-e842-45c9-9d71-31dceb3907cf"
        className="hs-form-private hsForm_f70088a9-e842-45c9-9d71-31dceb3907cf hs-form-f70088a9-e842-45c9-9d71-31dceb3907cf hs-form-f70088a9-e842-45c9-9d71-31dceb3907cf_635e4fdd-b048-4c7a-b33a-1710de5fcdbe hs-form stacked"
        target="target_iframe_f70088a9-e842-45c9-9d71-31dceb3907cf"
        data-instance-id="635e4fdd-b048-4c7a-b33a-1710de5fcdbe"
        data-form-id="f70088a9-e842-45c9-9d71-31dceb3907cf"
        data-portal-id={21052756}
        data-test-id="hsForm_f70088a9-e842-45c9-9d71-31dceb3907cf"
        onSubmit={handleSubmit}
      >
        <fieldset className="form-columns-2">
          <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
            <label
              id="label-firstname-f70088a9-e842-45c9-9d71-31dceb3907cf"
              className=""
              placeholder="Enter your "
              htmlFor="firstname-f70088a9-e842-45c9-9d71-31dceb3907cf"
            >
              <span />
            </label>
            <legend
              className="hs-field-desc"
              style={{ display: 'none' }}
            />
            <div className="input">
              <input
                id="firstname-f70088a9-e842-45c9-9d71-31dceb3907cf"
                name="firstname"
                required=""
                placeholder="First Name*"
                type="text"
                className="hs-input"
                inputMode="text"
                autoComplete="given-name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
            <label
              id="label-lastname-f70088a9-e842-45c9-9d71-31dceb3907cf"
              className=""
              placeholder="Enter your "
              htmlFor="lastname-f70088a9-e842-45c9-9d71-31dceb3907cf"
            >
              <span />
            </label>
            <legend
              className="hs-field-desc"
              style={{ display: 'none' }}
            />
            <div className="input">
              <input
                id="lastname-f70088a9-e842-45c9-9d71-31dceb3907cf"
                name="lastname"
                required=""
                placeholder="Last Name*"
                type="text"
                className="hs-input"
                inputMode="text"
                autoComplete="family-name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="form-columns-1">
          <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
            <label
              id="label-email-f70088a9-e842-45c9-9d71-31dceb3907cf"
              className=""
              placeholder="Enter your "
              htmlFor="email-f70088a9-e842-45c9-9d71-31dceb3907cf"
            >
              <span />
            </label>
            <legend
              className="hs-field-desc"
              style={{ display: 'none' }}
            />
            <div className="input">
              <input
                id="email-f70088a9-e842-45c9-9d71-31dceb3907cf"
                name="email"
                required=""
                placeholder="Enter Your Email*"
                type="email"
                className="hs-input"
                inputMode="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <div className="hs_submit hs-submit">
          <div
            className="hs-field-desc"
            style={{ display: 'none' }}
          />
          <div className="actions">
            <input
              type="submit"
              className="hs-button primary large"
              defaultValue="Sign Me Up!"
            />
          </div>
        </div>
        <input
          name="hs_context"
          type="hidden"
          defaultValue='{"embedAtTimestamp":"1705410056638","formDefinitionUpdatedAt":"1704404666560","lang":"en","embedType":"REGULAR","disableCookieSubmission":"true","renderRawHtml":"true","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36","pageTitle":"About Us | Darwin K-12 Performance Analytics Software","pageUrl":"https://Darwin.com/about","referrer":"https://Darwin.com/school-performance-software","isHubSpotCmsGeneratedPage":false,"formTarget":"#hbspt-form-635e4fdd-b048-4c7a-b33a-1710de5fcdbe","rumScriptExecuteTime":1707,"rumTotalRequestTime":2321.2999999988824,"rumTotalRenderTime":2385.0999999996275,"rumServiceResponseTime":614.2999999988824,"rumFormRenderTime":63.80000000074506,"connectionType":"4g","firstContentfulPaint":0,"largestContentfulPaint":0,"locale":"en","timestamp":1705410056913,"originalEmbedContext":{"portalId":"21052756","formId":"f70088a9-e842-45c9-9d71-31dceb3907cf","region":"na1","target":"#hbspt-form-635e4fdd-b048-4c7a-b33a-1710de5fcdbe","isBuilder":false,"isTestPage":false,"isPreview":false,"isMobileResponsive":true},"correlationId":"635e4fdd-b048-4c7a-b33a-1710de5fcdbe","renderedFieldsIds":["firstname","lastname","email"],"captchaStatus":"NOT_APPLICABLE","emailResubscribeStatus":"NOT_APPLICABLE","isInsideCrossOriginFrame":false,"source":"forms-embed-1.4517","sourceName":"forms-embed","sourceVersion":"1.4517","sourceVersionMajor":"1","sourceVersionMinor":"4517","allPageIds":{},"_debug_embedLogLines":[{"clientTimestamp":1705410056839,"level":"INFO","message":"Retrieved pageContext values which may be overriden by the embed context: {\"pageTitle\":\"About Us | Darwin K-12 Performance Analytics Software\",\"pageUrl\":\"https://Darwin.com/about\",\"referrer\":\"https://Darwin.com/school-performance-software\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36\",\"isHubSpotCmsGeneratedPage\":false}"},{"clientTimestamp":1705410056844,"level":"INFO","message":"Retrieved countryCode property from normalized embed definition response: \"IN\""}]}'
        />
        <iframe
          name="target_iframe_f70088a9-e842-45c9-9d71-31dceb3907cf"
          style={{ display: 'none' }}
        />
      </form>
                </div>
              </div>
              <div className="spacer-xsmall" />
              <div className="text-size-tiny text-color-grey">
                By subscribing you agree to with our{" "}
                <Link to="/" className="text-style-link">
                  Privacy Policy
                </Link>{" "}
                and provide consent to receive updates from our company.
              </div>
            </div>
            <div
              id="w-node-_01c688f0-dc4d-1932-a91c-361845a4af23-45a4af02"
              className="w-layout-grid footer_menu-wrapper"
            >
              <div className="footer_link-list">
                <div className="text-weight-semibold">Quick Links</div>
                <div className="spacer-xsmall" />
                <Link to="/ourteam" className="footer_link">
                  Our Team
                </Link>
                <Link to="/career" className="footer_link">
                  Careers
                </Link>
                <Link href="/" className="footer_link">
                  Terms &amp; Conditions
                </Link>
                <Link to="/" className="footer_link">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="footer_link">
                  Contact
                </Link>
              </div>
              <address className="address-wrapper">
                <div className="footer_link-list">
                  <div className="text-weight-semibold">
                    Company Information
                  </div>
                  <div className="spacer-xsmall" />
                  <div className="content-wrapper">
                    <div className="text-size-tiny text-weight-semibold">
                      Contact Support Team
                    </div>
                    <a
                      href="mailto:support@darwinanalytic.com"
                      className="footer_link"
                    >
                      support@Darwinanalytic.com
                    </a>
                  </div>
                  <div className="spacer-xsmall" />
                  <div className="content-wrapper">
                    <div className="text-size-tiny text-weight-semibold">
                      Contact Solutions Team
                    </div>
                    <a href="mailto:sales@darwinanalytic.com" className="footer_link">
                      sales@darwinanalytic.com
                    </a>
                  </div>
                  <div className="spacer-xsmall" />
                  <div className="content-wrapper">
                    <div className="text-size-tiny text-weight-semibold">
                      Address
                    </div>
                    <div className="spacer-xxsmall" />
                    <div className="text-size-tiny">
                    84 Harrow Road,
SellyOak,
B29 7DW, Birmingham
                    </div>
                  </div>
                </div>
              </address>
            </div>
            <div className="footer_social-link-list">
              <a
                title="Facebook"
                rel="noopener"
                aria-label="Facebook"
                href="https://www.facebook.com"
                target="_blank"
                className="footer_social-link w-inline-block"
              >
                <div className="icon-embed-small w-embed">
                  <svg
                    role="img"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                      fill="CurrentColor"
                    />
                  </svg>
                </div>
                <div className="hide">Facebook</div>
              </a>
              <a
                title="X"
                rel="noopener"
                aria-label="X"
                href="https://www.twitter.com"
                target="_blank"
                className="footer_social-link w-inline-block"
              >
                <div className="icon-embed-small w-embed">
                  <svg
                    aria-hidden="true"
                    role="img"
                    aria-label="X"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                      fill="CurrentColor"
                    />
                  </svg>
                </div>
                <div className="hide">X</div>
              </a>
              <a
                title="LinkedIn"
                rel="noopener"
                aria-label="LinkedIn"
                href="http://www.linkedin.com"
                target="_blank"
                className="footer_social-link w-inline-block"
              >
                <div className="icon-embed-small w-embed">
                  <svg
                    aria-hidden="true"
                    role="img"
                    aria-label="LinkedIn"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                      fill="CurrentColor"
                    />
                  </svg>
                </div>
                <div className="hide">LinkedIn</div>
              </a>
              <a
                title="YouTube"
                rel="noopener"
                aria-label="LinkedIn"
                href="https://www.youtube.com"
                target="_blank"
                className="footer_social-link w-inline-block"
              >
                <div className="icon-embed-small w-embed">
                  <svg
                    aria-hidden="true"
                    role="img"
                    aria-label="YouTube"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                      fill="CurrentColor"
                    />
                  </svg>
                </div>
                <div className="hide">Youtube</div>
              </a>
            </div>
          </div>
          <div className="spacer-xxlarge" />
          <div className="footer_line-divider" />
          <div className="spacer-large" />
          <div className="text-align-center">
            <div className="footer_credit-wrapper">
              <div
                id="w-node-fd38096f-f76b-c2dc-3a0b-19566ab78c7c-45a4af02"
                className="footer_credit-text"
              >
                ©
              </div>
              <div className="footer_credit-text w-embed w-iframe w-script">
                2024
                {/* Google Tag Manager (noscript) */}
                <noscript>
                  &lt;iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-MHJ9WFS3"
                  height="0" width="0"
                  style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
                </noscript>
                {/* End Google Tag Manager (noscript) */}
              </div>
              <div className="footer_credit-text">
                Darwin. All right reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
      </div>
    </>
  )
}

export default Layout
