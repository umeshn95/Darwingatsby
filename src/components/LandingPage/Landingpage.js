import * as React from "react"
import './styles.css'
import {Link} from 'gatsby'
import Lottie from "lottie-react";
import animation from './animation.json'


const Landingpage = () => (
    
<div className="page-wrapper">
  <div className="global-styles w-embed">
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n/* Make text look crisper and more legible in all browsers */\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n\n/* Focus state style for keyboard navigation for the focusable elements */\n*[tabindex]:focus-visible,\n  input[type="file"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n\n/* Get rid of top margin on first element in any rich text element */\n.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n\n/* Get rid of bottom margin on last element in any rich text element */\n.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n\n/* Prevent all click and hover interaction with an element */\n.pointer-events-off {\n\tpointer-events: none;\n}\n\n/* Enables all click and hover interaction with an element */\n.pointer-events-on {\n  pointer-events: auto;\n}\n\n/* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.div-square::after {\n\tcontent: "";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n\n/* Make sure containers never lose their center alignment */\n.container-medium,.container-small, .container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example "All Links" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n\n/* Apply "..." after 3 lines of text */\n.text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n\n/* Apply "..." after 5 lines of text */\n.text-style-5lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 5;\n\t-webkit-box-orient: vertical;\n}\n\n/* Apply "..." after 2 lines of text */\n.text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n\n/* Apply "..." after 4 lines of text */\n.text-style-4lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 4;\n\t-webkit-box-orient: vertical;\n}\n\n/* Apply "..." after 5 lines of text */\n.text-style-5lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 5;\n\t-webkit-box-orient: vertical;\n}\n\n/* Adds inline flex display */\n.display-inlineflex {\n  display: inline-flex;\n}\n\n/* These classes are never overwritten */\n.hide {\n  display: none !important;\n}\n\n@media screen and (max-width: 991px) {\n    .hide, .hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .hide-mobile{\n      display: none !important;\n    }\n}\n \n.margin-0 {\n  margin: 0rem !important;\n}\n  \n.padding-0 {\n  padding: 0rem !important;\n}\n\n.spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n\n.margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n  \n.margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n.margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n.margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n  \n.padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n  \n.margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n\n.padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n\n.margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n  \n.padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n\na {color: inherit;}\n\n.swiper {\n    overflow: visible !important;\n}\n\n.page-wrapper {\n\toverflow: clip;\n}\n\n@media (max-width: 1280px) and (min-width: 992px) {\n  .nav_link,\n  .nav_dropdown-link,\n  .nav_item-dropdown-toggle,\n  .nav_dropdown-toggle {\n    font-size: 0.875rem;\n  }\n  \n  .logo-embed {\n    width: 7rem;\n  }\n  .dropdown-icon {\n  \twidth: 0.625rem;\n    height: 0.625rem;\n   }\n  .button.is-nav {\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1100px) {\n  .four-column-list {\n    grid-template-columns: 1fr 1fr;\n    grid-row-gap: 1.25rem;\n  }\n}\n\n[data-text-color="black"] {\n\tcolor: #131313 !important;\n}\n\n[data-text-color="white"] {\n\tcolor: #FFFFFF !important;\n}\n\n[item-style="alternate"] {\n\tcolor: #0B58F4 !important;\n  background-color: #FFFFFF !important;\n}\n\n.swiper-pagination {\n    bottom: -2.5rem !important;\n}\n\n@media screen and (min-width: 1371px) {\n  .bg-element-wrapper.is-star-element.is-small {\n    display: block;\n  }\n}\n\n.text-rich-text ul {\n  padding: 0;\n  list-style-type: none;\n}\n\n.text-rich-text ul li {\n  background-image: url(\'https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650c0e55a5169634b7ebb457_blue-bullet-point-darwin.svg\');\n  background-repeat: no-repeat;\n  padding-left: 1.5rem;\n  background-position: 0 6px;\n}\n\n'
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\nfieldset.form-columns-2 {\n  max-width: none;\n}\nfieldset.form-columns-1 {\n  max-width: none;\n}\n.hs-input {\n    width: 100% !important;\n    margin-bottom: 16px;\n}\n.grecaptcha-badge {\n\t\tmargin-bottom: 16px;\n}\n.hs-button {\n\t  cursor: pointer;\n}\n.input {\n    margin-right: 0px!important;\n}\n.hs-form-field {\n    padding-right: 4px!important;\n    padding-left: 4px!important;\n}\n.hs-button {\n\t\theight: 3rem;\n}\n\n"
      }}
    />
  </div>
  
  <main id="main" className="main-wrapper"> 
    <header className="section_header is-home-header">
      <div className="header_layout">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="w-layout-grid header_component">
                <div className="header_content">
                  <h1 className="heading-style-h1">
                    Improve Learning{" "}
                    <span role="presentation" className="line-break">
                      <br />
                    </span>
                    With&nbsp;
                    <span className="span-wrapper">
                      Data
                      <div
                        className="span-element is-line"
                        data-w-id="b6e4a555-8cfe-80e2-6512-9a98d9a34c84"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650302c35aa9cdd684a47b9c_line-grey.json"
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
                          viewBox="0 0 1098 54"
                          width={1098}
                          height={54}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible"
                          }}
                        >
                          <defs>
                            <clipPath id="__lottie_element_100">
                              <rect width={1098} height={54} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_104">
                              <g
                                transform="matrix(1,0,0,1,549,27)"
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
                                    strokeWidth={30}
                                    d=" M-593,23.65399932861328 C-287,-10 349,-39 573,3"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_104_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_104" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_100)">
                            <g
                              mask="url(#__lottie_element_104_1)"
                              style={{ display: "block" }}
                            >
                              <g transform="matrix(1,0,0,1,549,27)" opacity={1}>
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(192,211,249)"
                                    fillOpacity={1}
                                    d=" M461.94000244140625,-20.354000091552734 C438.1210021972656,-21.600000381469727 413.8949890136719,-22.84600067138672 389.66900634765625,-24.091999053955078 C381.86700439453125,-24.506999969482422 373.6549987792969,-24.507999420166016 365.8529968261719,-24.92300033569336 C348.60699462890625,-25.33799934387207 331.3609924316406,-25.753999710083008 314.114990234375,-26.16900062561035 C304.6709899902344,-26.583999633789062 294.8160095214844,-26.584999084472656 285.37200927734375,-27 C282.49798583984375,-27 279.6239929199219,-27 277.1600036621094,-27 C271.0010070800781,-27 264.84100341796875,-27 258.2720031738281,-27 C229.93899536132812,-27 201.60699462890625,-27 173.2740020751953,-27 C166.70399475097656,-27 159.7239990234375,-27 153.1540069580078,-26.584999084472656 C136.31900024414062,-26.170000076293945 119.89399719238281,-26.16900062561035 103.05899810791016,-25.753999710083008 C84.16999816894531,-25.339000701904297 65.28199768066406,-25.33799934387207 46.39400100708008,-24.92300033569336 C16.007999420166016,-24.091999053955078 -14.788000106811523,-23.261999130249023 -45.17399978637695,-22.430999755859375 C-62.83000183105469,-22.016000747680664 -80.48699951171875,-21.600000381469727 -98.14299774169922,-21.184999465942383 C-128.5290069580078,-19.93899917602539 -158.9149932861328,-18.691999435424805 -189.3000030517578,-17.445999145507812 C-206.13499450683594,-16.614999771118164 -222.55999755859375,-16.200000762939453 -239.39500427246094,-15.369000434875488 C-271.01300048828125,-13.291999816894531 -302.6300048828125,-11.630999565124512 -334.24798583984375,-9.968999862670898 C-351.0830078125,-9.137999534606934 -367.9179992675781,-8.307999610900879 -384.75299072265625,-7.061999797821045 C-415.9599914550781,-4.570000171661377 -447.5780029296875,-1.6619999408721924 -478.7850036621094,1.246000051498413 C-485.3550109863281,1.6610000133514404 -492.3349914550781,2.493000030517578 -499.31500244140625,2.9079999923706055 C-512.4550170898438,4.1539998054504395 -526.0059814453125,6.230999946594238 -539.5560302734375,7.892000198364258 C-540.3770141601562,7.892000198364258 -541.198974609375,8.307999610900879 -542.02001953125,8.307999610900879 C-543.6619873046875,8.307999610900879 -544.8939819335938,9.138999938964844 -546.1259765625,10.385000228881836 C-548.1790161132812,12.461999893188477 -549,14.954000473022461 -549,17.445999145507812 C-549,19.937999725341797 -548.1790161132812,22.430999755859375 -546.1259765625,24.091999053955078 C-544.4840087890625,25.753000259399414 -541.6090087890625,27 -539.5560302734375,27 C-523.1309814453125,25.339000701904297 -507.1180114746094,23.26099967956543 -490.6929931640625,21.600000381469727 C-475.5,20.354000091552734 -460.3070068359375,19.10700035095215 -445.114013671875,17.861000061035156 C-428.6889953613281,16.614999771118164 -412.2650146484375,14.954000473022461 -395.42999267578125,13.708000183105469 C-388.8599853515625,13.293000221252441 -382.2900085449219,12.461000442504883 -375.3089904785156,12.045999526977539 C-349.4410095214844,10.800000190734863 -323.98199462890625,9.137999534606934 -298.1130065917969,7.892000198364258 C-282.0989990234375,7.060999870300293 -266.0849914550781,6.230999946594238 -250.0709991455078,5.400000095367432 C-243.50100708007812,4.985000133514404 -236.9320068359375,4.568999767303467 -230.36199951171875,4.1539998054504395 C-204.9040069580078,2.9079999923706055 -179.44500732421875,2.0769999027252197 -153.98699951171875,0.8309999704360962 C-138.38400268554688,0.41600000858306885 -123.19100189208984,-0.41600000858306885 -107.58799743652344,-0.8309999704360962 C-102.25,-0.8309999704360962 -97.3219985961914,-1.246000051498413 -91.98400115966797,-1.246000051498413 C-64.4729995727539,-2.0769999027252197 -36.96200180053711,-2.492000102996826 -9.449999809265137,-3.322999954223633 C5.743000030517578,-3.73799991607666 21.34600067138672,-4.1539998054504395 36.53900146484375,-4.568999767303467 C41.87699890136719,-4.568999767303467 47.625,-4.985000133514404 52.9630012512207,-4.985000133514404 C81.2959976196289,-5.400000095367432 109.62799835205078,-5.400000095367432 138.3719940185547,-5.815000057220459 C156.0279998779297,-5.815000057220459 173.68499755859375,-6.230999946594238 191.34100341796875,-6.230999946594238 C221.3159942626953,-6.230999946594238 251.70199584960938,-6.230000019073486 281.677001953125,-5.815000057220459 C287.42498779296875,-5.815000057220459 293.5849914550781,-5.400000095367432 299.3330078125,-5.400000095367432 C316.1679992675781,-4.985000133514404 332.5929870605469,-4.568999767303467 349.4280090332031,-3.73799991607666 C361.74700927734375,-3.322999954223633 374.47601318359375,-2.9070000648498535 386.79400634765625,-2.492000102996826 C395.8280029296875,-2.0769999027252197 404.45098876953125,-1.6610000133514404 413.4840087890625,-1.246000051498413 C439.3529968261719,0 465.6300048828125,1.6610000133514404 491.5,3.322999954223633 C498.07000732421875,3.73799991607666 504.6400146484375,4.1539998054504395 511.2099914550781,4.568999767303467 C518.1900024414062,4.984000205993652 525.5800170898438,5.400000095367432 532.5599975585938,6.230999946594238 C533.7999877929688,6.230999946594238 534.6199951171875,6.646999835968018 535.8499755859375,7.061999797821045 C538.719970703125,7.4770002365112305 541.1900024414062,7.47599983215332 543.6500244140625,5.815000057220459 C546.1099853515625,4.568999767303467 547.760009765625,2.0769999027252197 548.5800170898438,-0.41499999165534973 C550.219970703125,-5.815000057220459 546.9299926757812,-11.630999565124512 541.1900024414062,-13.291999816894531 C536.260009765625,-14.538000106811523 531.3300170898438,-14.954000473022461 526.8099975585938,-15.78499984741211 C523.530029296875,-16.200000762939453 520.239990234375,-16.614999771118164 516.9600219726562,-16.614999771118164 C510.3900146484375,-17.445999145507812 503.82000732421875,-17.445999145507812 497.6600036621094,-18.277000427246094 C486.1600036621094,-18.691999435424805 473.8500061035156,-19.523000717163086 461.94000244140625,-20.354000091552734z"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </span>
                  </h1>
                  <div className="hide-this">
                    <div className="heading-style-h1">Data</div>
                  </div>
                  <div className="spacer-small" />
                  <div className="max-width-medium">
                    <p className="text-size-large">
                    Transforming data into actionable insights that positively impact Learning
                    </p>
                  </div>
                  <div className="spacer-large" />
                  <div
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                    className="display-inlineflex"
                  >
                    <Link
                      item-style=""
                      href="/contact"
                      className="button w-inline-block"
                    >
                      <div>Get a tour</div>
                      <div
                        className="icon-embed-xxsmall w-embed"
                        style={{
                          transform:
                            "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          role="img"
                          aria-label="Arrow next"
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="header_graphic-column">
                  <div className="image-grid_image-wrapper">
                    <div className="w-layout-grid image-grid_image-layout-3">
                      <div
                        id="w-node-e8dd22da-dd03-d5ca-0743-c84889407895-5c749fea"
                        className="image-grid_image-wrapper is-01-layout3"
                      >
                        <div
                          id="w-node-e8dd22da-dd03-d5ca-0743-c84889407896-5c749fea"
                          className="image-wrapper-1-1 is-rounded-image is-box-shadow z-index-2"
                        >
                          <img
                            src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af07c3aebacb206a54090_teacher-and-pupil.webp"
                            loading="eager"
                            width={500}
                            height={334}
                            alt="Happy teacher and students at school."
                            srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af07c3aebacb206a54090_teacher-and-pupil-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af07c3aebacb206a54090_teacher-and-pupil-p-800.webp 800w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af07c3aebacb206a54090_teacher-and-pupil-p-1080.webp 1080w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af07c3aebacb206a54090_teacher-and-pupil.webp 1200w"
                            sizes="(max-width: 479px) 79vw, (max-width: 767px) 59vw, (max-width: 991px) 54vw, 32vw"
                            className="image-wrapper_image"
                          />
                        </div>
                        <div
                          style={{ opacity: 1 }}
                          className="image-grid_bg-element-03"
                        >
                          <div
                            aria-hidden="true"
                            role="presentation"
                            className="bg-element is-triangle"
                            style={{
                              transform:
                                "translate3d(0px, -0.47352rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              willChange: "transform"
                            }}
                          >
                            <div className="bg-element-embed is-blue w-embed">
                              <svg
                                aria-hidden="true"
                                role="presentation"
                                width="100%"
                                height="100%"
                                viewBox="0 0 210 222"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M105 0L209.789 222H0.210938L105 0Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-e8dd22da-dd03-d5ca-0743-c8488940789d-5c749fea"
                        className="image-grid_image-wrapper is-02-layout3"
                      >
                        <div
                          id="w-node-e8dd22da-dd03-d5ca-0743-c8488940789e-5c749fea"
                          className="image-wrapper-3-2 is-rounded-image is-box-shadow z-index-2"
                        >
                          <img
                            src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing.webp"
                            loading="eager"
                            width={500}
                            height={334}
                            alt="Group of elementary school pupils sitting on floor in classroom."
                            srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing-p-800.webp 800w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing-p-1080.webp 1080w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing-p-1600.webp 1600w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing-p-2000.webp 2000w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae100e1af14bc3ac01_kids-laughing.webp 2090w"
                            sizes="(max-width: 479px) 79vw, (max-width: 767px) 62vw, (max-width: 991px) 58vw, 30vw"
                            className="image-wrapper_image"
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          role="presentation"
                          style={{ opacity: 1 }}
                          className="header_bg-element-02"
                        >
                          <div
                            role="presentation"
                            className="bg-element is-rectangle is-pink"
                            style={{
                              transform:
                                "translate3d(0px, -0.47352rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              willChange: "transform"
                            }}
                          />
                        </div>
                      </div>
                      <div
                        id="w-node-e8dd22da-dd03-d5ca-0743-c848894078a2-5c749fea"
                        className="image-grid_floating-image-layout-3"
                      >
                        <div className="image-wrapper-4-3 is-rounded-image is-box-shadow z-index-2">
                          <img
                            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705732477/darwinheaderimage1_imvdfp.png"
                            loading="eager"
                            width="324.5"
                            height={235}
                            alt="Darwin Dashboard image."                            
                            sizes="(max-width: 479px) 57vw, (max-width: 767px) 45vw, (max-width: 991px) 48vw, 24vw"
                            className="image-wrapper_image is-aligned-right"
                          />
                        </div>
                        <div className="image-grid_bg-element-01">
                          <div
                            aria-hidden="true"
                            role="presentation"
                            className="bg-element is-circle is-green"
                            style={{
                              transform:
                                "translate3d(0px, -0.47352rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              willChange: "transform"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section
      data-w-id="af55c2f2-b21e-6bac-c6f2-88f3907807d6"
      className="section_feature"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="z-index-2">
              <div className="text-align-center">
                <div className="max-width-xlarge align-center">
                  <h2 className="span-heading is-larger">
                    <span className="z-index-2">Darwin</span>{" "}
                    <span className="span-wrapper">
                      
                      <div
                        className="span-element is-scribble"
                        data-w-id="93a99d60-559f-a4cd-5a18-59a5973c1f38"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303044441db8d378d7dcc_scribble-green.json"
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
                            <clipPath id="__lottie_element_107">
                              <rect width={581} height={376} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_111">
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
                                    d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_111_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_111" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_107)">
                            <g
                              mask="url(#__lottie_element_111_1)"
                              style={{ display: "block" }}
                            >
                              <g
                                transform="matrix(1,0,0,1,290.5,188)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(192,211,249)"
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
                    <span className="z-index-2">– One Student at a Time</span>​
                  </h2>
                  <div className="hide-this">
                    <div className="heading-style-h2">Impact</div>
                  </div>
                  <div className="spacer-small" />
                  <p className="text-size-medium">
                    {" "}
                    
                  </p>
                </div>
              </div>
              <div className="spacer-xxlarge" />
              <div className="w-layout-grid three-column-list">
                <div className="feature_item">
                  <div className="content-wrapper">
                    <img
                      src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705733247/freecompress-womanheadshot_cgi42q.png"
                      loading="lazy"
                      width={118}
                      height={118}
                      alt="Woman on a pink background."
                      className="rounded-avatar"
                    />
                    <div className="spacer-medium" />
                    <h3 className="heading-style-h4">Teacher</h3>
                    <div className="spacer-xsmall" />
                    <p className="text-size-regular">
                      Empower Every Lesson. We help you personalize
                      interventions, monitor subtle shifts in progress, and stay
                      one step ahead to ensure every student thrives.
                    </p>
                  </div>
                  <Link
                    data-text-color=""
                    to="/contact"
                    className="button is-link w-inline-block"
                  >
                    <div>Learn more</div>
                    <div
                      className="icon-embed-xxsmall w-embed"
                      style={{
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        role="img"
                        aria-label="Arrow right"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="feature_item">
                  <div className="content-wrapper">
                    <img
                      src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705733678/freecompress-womanheadshotonbluebackground_kpfuzq.png"
                      loading="lazy"
                      width={118}
                      height={118}
                      alt="Woman headshot with blue background."
                      className="rounded-avatar"
                    />
                    <div className="spacer-medium" />
                    <h3 className="heading-style-h4">School Administrator</h3>
                    <div className="spacer-xsmall" />
                    <p className="text-size-regular">
                      Optimize School Operations. Effortlessly consolidate and
                      interpret school-wide data, ensuring you drive each
                      student toward&nbsp;success.
                    </p>
                  </div>
                  <Link
                    data-text-color=""
                    to="/contact"
                    className="button is-link w-inline-block"
                  >
                    <div>Learn more</div>
                    <div
                      className="icon-embed-xxsmall w-embed"
                      style={{
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        role="img"
                        aria-label="Arrow right"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="feature_item">
                  <div className="content-wrapper">
                    <img
                      src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705734164/freecompress-womanheadshotongreenbackground_lhmt0x.png"
                      loading="lazy"
                      width={118}
                      height={118}
                      alt="Man headshot on a green background."
                      className="rounded-avatar"
                    />
                    <div className="spacer-medium" />
                    <h3 className="heading-style-h4">Superintendent</h3>
                    <div className="spacer-xsmall" />
                    <p className="text-size-regular">
                      Revolutionize District Management. We simplify
                      district-wide analytics so you have a holistic view to
                      guide you toward impactful&nbsp;decisions.
                    </p>
                  </div>
                  <Link
                    data-text-color=""
                    to="/contact"
                    className="button is-link w-inline-block"
                  >
                    <div>Learn more</div>
                    <div
                      className="icon-embed-xxsmall w-embed"
                      style={{
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        role="img"
                        aria-label="Arrow right"
                        width="100%"
                        height="100%"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="spacer-xxlarge" />
              <div className="stats_component">
                <div className="stats_layout is-four-column">
                  <div className="stats_item">
                    <h3 className="stats_heading">1K</h3>
                    <div className="spacer-xsmall" />
                    <div className="max-width-xxsmall align-center">
                      <h3 className="heading-style-h5">Students Served</h3>
                    </div>
                  </div>
                  <img
                    className="stats_divider hide-tablet"
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e62a58463ebf921f6b8c03_darwin-stats-divider.svg"
                    width={2}
                    height={205}
                    alt="A line being used as a divider."
                    aria-hidden="true"
                    role="presentation"
                    id="w-node-_83562c41-18f8-cdc8-53f4-0579f39f1e19-f39f1e10"
                    loading="lazy"
                  />
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650ae687df2af3f1d4553dfa_stats-divider.svg"
                    loading="lazy"
                    width="Auto"
                    height={2}
                    alt="A line being used as a divider."
                    role="presentation"
                    id="w-node-_31e34994-7c9c-ab34-59bb-53f1ae0dd2d3-f39f1e10"
                    className="stats_horizontal-divider"
                  />
                  <div className="stats_item">
                    <h3 className="stats_heading">30+</h3>
                    <div className="spacer-xsmall" />
                    <h3 className="heading-style-h5">Reports Available</h3>
                  </div>
                  <img
                    className="stats_divider hide-tablet"
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e62a58463ebf921f6b8c03_darwin-stats-divider.svg"
                    width={2}
                    height={205}
                    alt="A line being used as a divider."
                    aria-hidden="true"
                    role="presentation"
                    id="w-node-_83562c41-18f8-cdc8-53f4-0579f39f1e21-f39f1e10"
                    loading="lazy"
                  />
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650ae687df2af3f1d4553dfa_stats-divider.svg"
                    loading="lazy"
                    width="Auto"
                    height={2}
                    alt="A line being used as a divider."
                    role="presentation"
                    id="w-node-eb2c41ec-02b7-74ed-79bf-66f67ae1ae7a-f39f1e10"
                    className="stats_horizontal-divider"
                  />
                  <div className="stats_item">
                    <h3 className="heading-style-h5">Over</h3>
                    <h3 className="stats_heading">4</h3>
                    <div className="spacer-xsmall" />
                    <div className="max-width-xxsmall align-center">
                      <h3 className="heading-style-h5"> Districts Served</h3>
                    </div>
                  </div>
                  <img
                    className="stats_divider hide-tablet"
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e62a58463ebf921f6b8c03_darwin-stats-divider.svg"
                    width={2}
                    height={205}
                    alt="A line being used as a divider."
                    aria-hidden="true"
                    role="presentation"
                    id="w-node-_29b89915-7d9f-f453-a413-df0505e04a07-f39f1e10"
                    loading="lazy"
                  />
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650ae687df2af3f1d4553dfa_stats-divider.svg"
                    loading="lazy"
                    width="Auto"
                    height={2}
                    alt="A line being used as a divider."
                    role="presentation"
                    id="w-node-_8af1e83b-80f9-8dbc-07e1-4f64d3a06492-f39f1e10"
                    className="stats_horizontal-divider"
                  />
                  <div className="stats_item">
                    <h3 className="stats_heading">101</h3>
                    <div className="spacer-xsmall" />
                    <h3 className="heading-style-h5">Datasets Captured</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-element-wrapper is-top-right">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-circle is-green is-large"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
      <div className="bg-element-wrapper is-bottom-left">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-rectangle is-large is-pink"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
      <img
        src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
        loading="lazy"
        width={1196}
        height={2}
        alt="A line being used as a divider."
        aria-hidden="true"
        role="presentation"
        className="section-divider"
      />
    </section>
    <section className="section_solution">
      <img
        src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
        loading="lazy"
        width={1196}
        height={2}
        alt="A line being used as a divider."
        aria-hidden="true"
        role="presentation"
        className="section-divider is-aligned-top"
      />
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="z-index-2">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h2 className="span-heading">
                    <span className="z-index-2">Powerful</span>{" "}
                    <span className="span-wrapper">
                      Tools
                      <div
                        className="span-element is-scribble is-small-word"
                        data-w-id="b56f30e2-7110-e909-f38f-7c16000dd7c5"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303044441db8d378d7dcc_scribble-green.json"
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
                            <clipPath id="__lottie_element_114">
                              <rect width={581} height={376} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_118">
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
                                    d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_118_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_118" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_114)">
                            <g
                              mask="url(#__lottie_element_118_1)"
                              style={{ display: "block" }}
                            >
                              <g
                                transform="matrix(1,0,0,1,290.5,188)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(192,211,249)"
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
                    <span className="z-index-2">to Help You Succeed</span>
                  </h2>
                  <div className="hide-this">
                    <div className="heading-style-h2">Tools</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-xlarge" />
            <div className="collection-list-wrapper w-dyn-list">
              <div role="list" className="three-column-list w-dyn-items">
                <div
                  role="listitem"
                  className="collection-list-item w-dyn-item"
                >
                  <div className="card-element is-full-height is-box-shadow">
                    <div className="card-content is-space-between">
                      <div className="content-wrapper">
                        <h3 className="heading-min-height-2-lines">
                          F&P Assessment
                        </h3>
                        <div className="spacer-xsmall" />
                        <p className="text-size-regular">
                        F&P Assessment Visualization designed to show growth of students
                        </p>
                        <div className="spacer-medium" />
                      </div>
                      <Link
                        data-text-color=""
                        to="/fandpassessment"
                        className="button is-link w-inline-block"
                      >
                        <div>Learn more</div>
                        <div
                          className="icon-embed-xxsmall w-embed"
                          style={{
                            transform:
                              "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow right"
                            width="100%"
                            height="100%"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <div className="bg-element-wrapper is-bottom-right-corner w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-circle is-green"
                      />
                    </div>
                    <div className="bg-element-wrapper is-top-right-corner">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-triangle is-small"
                      >
                        <div className="bg-element-embed is-blue w-embed">
                          <svg
                            aria-hidden="true"
                            role="presentation"
                            width="100%"
                            height="100%"
                            viewBox="0 0 210 222"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M105 0L209.789 222H0.210938L105 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-element-wrapper is-middle-small w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-rectangle is-pink"
                      />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="collection-list-item w-dyn-item"
                >
                  <div className="card-element is-full-height is-box-shadow">
                    <div className="card-content is-space-between">
                      <div className="content-wrapper">
                        <h3 className="heading-min-height-2-lines">
                          Nwea Map Suite
                        </h3>
                        <div className="spacer-xsmall" />
                        <p className="text-size-regular">
                        NWEA MAP Suite is widely recognized as reliable tool for assessing progress
                        </p>
                        <div className="spacer-medium" />
                      </div>
                      <Link
                        data-text-color=""
                        to="/nweamap"
                        className="button is-link w-inline-block"
                      >
                        <div>Learn more</div>
                        <div
                          className="icon-embed-xxsmall w-embed"
                          style={{
                            transform:
                              "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow right"
                            width="100%"
                            height="100%"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <div className="bg-element-wrapper is-bottom-right-corner">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-circle is-green"
                      />
                    </div>
                    <div className="bg-element-wrapper is-top-right-corner w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-triangle is-small"
                      >
                        <div className="bg-element-embed is-blue w-embed">
                          <svg
                            aria-hidden="true"
                            role="presentation"
                            width="100%"
                            height="100%"
                            viewBox="0 0 210 222"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M105 0L209.789 222H0.210938L105 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-element-wrapper is-middle-small w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-rectangle is-pink"
                      />
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="collection-list-item w-dyn-item"
                >
                  <div className="card-element is-full-height is-box-shadow">
                    <div className="card-content is-space-between">
                      <div className="content-wrapper">
                        <h3 className="heading-min-height-2-lines">
                          WIDA Dashboard
                        </h3>
                        <div className="spacer-xsmall" />
                        <p className="text-size-regular">
                        Instant insights into scores and variations,all in one place
                        </p>
                        <div className="spacer-medium" />
                      </div>
                      <Link
                        data-text-color=""
                        to="/widaassessement"
                        className="button is-link w-inline-block"
                      >
                        <div>Learn more</div>
                        <div
                          className="icon-embed-xxsmall w-embed"
                          style={{
                            transform:
                              "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow right"
                            width="100%"
                            height="100%"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <div className="bg-element-wrapper is-bottom-right-corner w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-circle is-green"
                      />
                    </div>
                    <div className="bg-element-wrapper is-top-right-corner w-condition-invisible">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-triangle is-small"
                      >
                        <div className="bg-element-embed is-blue w-embed">
                          <svg
                            aria-hidden="true"
                            role="presentation"
                            width="100%"
                            height="100%"
                            viewBox="0 0 210 222"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M105 0L209.789 222H0.210938L105 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-element-wrapper is-middle-small">
                      <div
                        aria-hidden="true"
                        role="presentation"
                        className="bg-element-static is-rectangle is-pink"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-xlarge" />
            <div className="button-group is-center">
              <Link item-style="" to="/contact" className="button w-inline-block">
                <div>Get a tour</div>
                <div
                  className="icon-embed-xxsmall w-embed"
                  style={{
                    transform:
                      "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <svg
                    aria-hidden="true"
                    role="img"
                    aria-label="Arrow next"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="bg-element-wrapper is-left-aligned-star hide-tablet"
      >
        <img
          src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e740881ef9f91daac7cef2_star-detail.svg"
          loading="lazy"
          width={120}
          height={149}
          alt="A drawing of two blue stars."
          className="bg-element-image"
        />
      </div>
    </section>
    {/* <section className="section_testimonial">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="z-index-2">
              <div className="max-width-large align-center">
                <div className="text-align-center">
                  <h2 className="span-heading hide-tablet">
                    <span className="span-wrapper">
                      Success
                      <div
                        className="span-element is-scribble"
                        data-w-id="93a99d60-559f-a4cd-5a18-59a5973c1f38"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303044441db8d378d7dcc_scribble-green.json"
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
                            <clipPath id="__lottie_element_121">
                              <rect width={581} height={376} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_125">
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
                                    d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_125_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_125" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_121)">
                            <g
                              mask="url(#__lottie_element_125_1)"
                              style={{ display: "block" }}
                            >
                              <g
                                transform="matrix(1,0,0,1,290.5,188)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(192,211,249)"
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
                    <span className="z-index-2">
                      in Action – Real Results From Schools Like Yours
                    </span>
                  </h2>
                  <div className="hide-this">
                    <div className="heading-style-h2">Success</div>
                  </div>
                  <h2 className="span-heading show-tablet">
                    <span className="span-wrapper">
                      Success
                      <div
                        className="span-element is-line"
                        data-w-id="d9a47e4e-5a14-c5ed-1236-594f2d6150b3"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650302bcb00360c86ee66891_line-green.json"
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
                          viewBox="0 0 1098 54"
                          width={1098}
                          height={54}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible"
                          }}
                        >
                          <defs>
                            <clipPath id="__lottie_element_128">
                              <rect width={1098} height={54} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_132">
                              <g
                                transform="matrix(1,0,0,1,549,27)"
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
                                    strokeWidth={30}
                                    d=" M-593,23.65399932861328 C-287,-10 349,-39 573,3"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_132_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_132" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_128)">
                            <g
                              mask="url(#__lottie_element_132_1)"
                              style={{ display: "block" }}
                            >
                              <g transform="matrix(1,0,0,1,549,27)" opacity={1}>
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(126,227,78)"
                                    fillOpacity={1}
                                    d=" M461.94000244140625,-20.354000091552734 C438.1210021972656,-21.600000381469727 413.8949890136719,-22.84600067138672 389.66900634765625,-24.091999053955078 C381.86700439453125,-24.506999969482422 373.6549987792969,-24.507999420166016 365.8529968261719,-24.92300033569336 C348.60699462890625,-25.33799934387207 331.3609924316406,-25.753999710083008 314.114990234375,-26.16900062561035 C304.6709899902344,-26.583999633789062 294.8160095214844,-26.584999084472656 285.37200927734375,-27 C282.49798583984375,-27 279.6239929199219,-27 277.1600036621094,-27 C271.0010070800781,-27 264.84100341796875,-27 258.2720031738281,-27 C229.93899536132812,-27 201.60699462890625,-27 173.2740020751953,-27 C166.70399475097656,-27 159.7239990234375,-27 153.1540069580078,-26.584999084472656 C136.31900024414062,-26.170000076293945 119.89399719238281,-26.16900062561035 103.05899810791016,-25.753999710083008 C84.16999816894531,-25.339000701904297 65.28199768066406,-25.33799934387207 46.39400100708008,-24.92300033569336 C16.007999420166016,-24.091999053955078 -14.788000106811523,-23.261999130249023 -45.17399978637695,-22.430999755859375 C-62.83000183105469,-22.016000747680664 -80.48699951171875,-21.600000381469727 -98.14299774169922,-21.184999465942383 C-128.5290069580078,-19.93899917602539 -158.9149932861328,-18.691999435424805 -189.3000030517578,-17.445999145507812 C-206.13499450683594,-16.614999771118164 -222.55999755859375,-16.200000762939453 -239.39500427246094,-15.369000434875488 C-271.01300048828125,-13.291999816894531 -302.6300048828125,-11.630999565124512 -334.24798583984375,-9.968999862670898 C-351.0830078125,-9.137999534606934 -367.9179992675781,-8.307999610900879 -384.75299072265625,-7.061999797821045 C-415.9599914550781,-4.570000171661377 -447.5780029296875,-1.6619999408721924 -478.7850036621094,1.246000051498413 C-485.3550109863281,1.6610000133514404 -492.3349914550781,2.493000030517578 -499.31500244140625,2.9079999923706055 C-512.4550170898438,4.1539998054504395 -526.0059814453125,6.230999946594238 -539.5560302734375,7.892000198364258 C-540.3770141601562,7.892000198364258 -541.198974609375,8.307999610900879 -542.02001953125,8.307999610900879 C-543.6619873046875,8.307999610900879 -544.8939819335938,9.138999938964844 -546.1259765625,10.385000228881836 C-548.1790161132812,12.461999893188477 -549,14.954000473022461 -549,17.445999145507812 C-549,19.937999725341797 -548.1790161132812,22.430999755859375 -546.1259765625,24.091999053955078 C-544.4840087890625,25.753000259399414 -541.6090087890625,27 -539.5560302734375,27 C-523.1309814453125,25.339000701904297 -507.1180114746094,23.26099967956543 -490.6929931640625,21.600000381469727 C-475.5,20.354000091552734 -460.3070068359375,19.10700035095215 -445.114013671875,17.861000061035156 C-428.6889953613281,16.614999771118164 -412.2650146484375,14.954000473022461 -395.42999267578125,13.708000183105469 C-388.8599853515625,13.293000221252441 -382.2900085449219,12.461000442504883 -375.3089904785156,12.045999526977539 C-349.4410095214844,10.800000190734863 -323.98199462890625,9.137999534606934 -298.1130065917969,7.892000198364258 C-282.0989990234375,7.060999870300293 -266.0849914550781,6.230999946594238 -250.0709991455078,5.400000095367432 C-243.50100708007812,4.985000133514404 -236.9320068359375,4.568999767303467 -230.36199951171875,4.1539998054504395 C-204.9040069580078,2.9079999923706055 -179.44500732421875,2.0769999027252197 -153.98699951171875,0.8309999704360962 C-138.38400268554688,0.41600000858306885 -123.19100189208984,-0.41600000858306885 -107.58799743652344,-0.8309999704360962 C-102.25,-0.8309999704360962 -97.3219985961914,-1.246000051498413 -91.98400115966797,-1.246000051498413 C-64.4729995727539,-2.0769999027252197 -36.96200180053711,-2.492000102996826 -9.449999809265137,-3.322999954223633 C5.743000030517578,-3.73799991607666 21.34600067138672,-4.1539998054504395 36.53900146484375,-4.568999767303467 C41.87699890136719,-4.568999767303467 47.625,-4.985000133514404 52.9630012512207,-4.985000133514404 C81.2959976196289,-5.400000095367432 109.62799835205078,-5.400000095367432 138.3719940185547,-5.815000057220459 C156.0279998779297,-5.815000057220459 173.68499755859375,-6.230999946594238 191.34100341796875,-6.230999946594238 C221.3159942626953,-6.230999946594238 251.70199584960938,-6.230000019073486 281.677001953125,-5.815000057220459 C287.42498779296875,-5.815000057220459 293.5849914550781,-5.400000095367432 299.3330078125,-5.400000095367432 C316.1679992675781,-4.985000133514404 332.5929870605469,-4.568999767303467 349.4280090332031,-3.73799991607666 C361.74700927734375,-3.322999954223633 374.47601318359375,-2.9070000648498535 386.79400634765625,-2.492000102996826 C395.8280029296875,-2.0769999027252197 404.45098876953125,-1.6610000133514404 413.4840087890625,-1.246000051498413 C439.3529968261719,0 465.6300048828125,1.6610000133514404 491.5,3.322999954223633 C498.07000732421875,3.73799991607666 504.6400146484375,4.1539998054504395 511.2099914550781,4.568999767303467 C518.1900024414062,4.984000205993652 525.5800170898438,5.400000095367432 532.5599975585938,6.230999946594238 C533.7999877929688,6.230999946594238 534.6199951171875,6.646999835968018 535.8499755859375,7.061999797821045 C538.719970703125,7.4770002365112305 541.1900024414062,7.47599983215332 543.6500244140625,5.815000057220459 C546.1099853515625,4.568999767303467 547.760009765625,2.0769999027252197 548.5800170898438,-0.41499999165534973 C550.219970703125,-5.815000057220459 546.9299926757812,-11.630999565124512 541.1900024414062,-13.291999816894531 C536.260009765625,-14.538000106811523 531.3300170898438,-14.954000473022461 526.8099975585938,-15.78499984741211 C523.530029296875,-16.200000762939453 520.239990234375,-16.614999771118164 516.9600219726562,-16.614999771118164 C510.3900146484375,-17.445999145507812 503.82000732421875,-17.445999145507812 497.6600036621094,-18.277000427246094 C486.1600036621094,-18.691999435424805 473.8500061035156,-19.523000717163086 461.94000244140625,-20.354000091552734z"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </span>{" "}
                    <span className="z-index-2">
                      in Action – Real Results From Schools Like Yours
                    </span>
                  </h2>
                  <div className="hide-this">
                    <div className="heading-style-h2">Success</div>
                  </div>
                </div>
              </div>
              <div className="spacer-xlarge" />
              <div className="slider-main_component">
                <div className="swiper is-cards w-dyn-list swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight">
                  <div
                    role="list"
                    className="swiper-wrapper is-cards w-dyn-items"
                    id="swiper-wrapper-3103d366ce25f8b18"
                    aria-live="off"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-2904.96px, 0px, 0px)",
                      height: 446
                    }}
                  >
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index={2}
                      aria-label="3 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin provides an application where we can host
                              all of our mandatory data. A one-stop shop where
                              people can go to look up our information. It also
                              provides SO MUCH comparative data relative to
                              instruction and financial information that we can
                              use for a large number of reasons.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Stacey Haag"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Stacey Haag
                              </p>
                              <p>Business Manager, Gratiot-Isabella RESD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index={3}
                      aria-label="4 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is great for transparency reporting and
                              keeping documents organized and published as
                              required.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Shatara Morris"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Shatara Morris
                              </p>
                              <p>
                                Board Governance and Strategic Operations
                                Coordinator, Choice Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={4}
                      aria-label="5 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Things are always improving. I look forward to
                              continued growth in darwin's ability to create
                              partnerships with other SISs and better data flow
                              between the MiDataHub and darwin!
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Sean Townsin"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Sean Townsin
                              </p>
                              <p>
                                State/Federal Grants Director, Melvindale-North
                                Allen Park Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={5}
                      aria-label="6 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is like having a whole staff at your
                              fingertips.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Chris Barnett"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Chris Barnett
                              </p>
                              <p>Supervisor, Orion Township</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={6}
                      aria-label="7 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Staff members can now monitor and report the
                              growth and effectiveness of teachers at any level.
                              This provides the opportunity to dive into data
                              and have critical conversations about what is
                              working.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Shivon Reed"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Shivon Reed
                              </p>
                              <p>Data Coach, Brown City Community Schools</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={7}
                      aria-label="8 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin provides cost-effective and
                              time-efficient tools to produce accurate,
                              reliable, and easy-to-use data to inform our
                              instructional decision-making.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="James Schwarz, Ph.D"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                James Schwarz, Ph.D
                              </p>
                              <p>Superintendent, Avondale School District</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item"
                      data-swiper-slide-index={0}
                      aria-label="1 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Not only is darwin a powerful data and analytics
                              provider, they are a true business partner that
                              has become an extension of our team.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Charmian Fletcher"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Charmian Fletcher
                              </p>
                              <p>Superintendent, Ithaca Public Schools</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-prev"
                      data-swiper-slide-index={1}
                      aria-label="2 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              I am always impressed at how well darwin
                              understands my issues and seeks feedback from
                              their clients to constantly improve. I cannot
                              think of how a district could be disappointed in
                              any way by making darwin its vendor of choice.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Debra Barry"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Debra Barry
                              </p>
                              <p>
                                Assistant Superintendent, Marquette Public
                                Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-active"
                      data-swiper-slide-index={2}
                      aria-label="3 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin provides an application where we can host
                              all of our mandatory data. A one-stop shop where
                              people can go to look up our information. It also
                              provides SO MUCH comparative data relative to
                              instruction and financial information that we can
                              use for a large number of reasons.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Stacey Haag"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Stacey Haag
                              </p>
                              <p>Business Manager, Gratiot-Isabella RESD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-next"
                      data-swiper-slide-index={3}
                      aria-label="4 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is great for transparency reporting and
                              keeping documents organized and published as
                              required.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Shatara Morris"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Shatara Morris
                              </p>
                              <p>
                                Board Governance and Strategic Operations
                                Coordinator, Choice Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item"
                      data-swiper-slide-index={4}
                      aria-label="5 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Things are always improving. I look forward to
                              continued growth in darwin's ability to create
                              partnerships with other SISs and better data flow
                              between the MiDataHub and darwin!
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Sean Townsin"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Sean Townsin
                              </p>
                              <p>
                                State/Federal Grants Director, Melvindale-North
                                Allen Park Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item"
                      data-swiper-slide-index={5}
                      aria-label="6 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is like having a whole staff at your
                              fingertips.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Chris Barnett"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Chris Barnett
                              </p>
                              <p>Supervisor, Orion Township</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item"
                      data-swiper-slide-index={6}
                      aria-label="7 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Staff members can now monitor and report the
                              growth and effectiveness of teachers at any level.
                              This provides the opportunity to dive into data
                              and have critical conversations about what is
                              working.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Shivon Reed"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Shivon Reed
                              </p>
                              <p>Data Coach, Brown City Community Schools</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item"
                      data-swiper-slide-index={7}
                      aria-label="8 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin provides cost-effective and
                              time-efficient tools to produce accurate,
                              reliable, and easy-to-use data to inform our
                              instructional decision-making.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="James Schwarz, Ph.D"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                James Schwarz, Ph.D
                              </p>
                              <p>Superintendent, Avondale School District</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={0}
                      aria-label="1 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Not only is darwin a powerful data and analytics
                              provider, they are a true business partner that
                              has become an extension of our team.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Charmian Fletcher"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Charmian Fletcher
                              </p>
                              <p>Superintendent, Ithaca Public Schools</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index={1}
                      aria-label="2 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              I am always impressed at how well darwin
                              understands my issues and seeks feedback from
                              their clients to constantly improve. I cannot
                              think of how a district could be disappointed in
                              any way by making darwin its vendor of choice.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Debra Barry"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Debra Barry
                              </p>
                              <p>
                                Assistant Superintendent, Marquette Public
                                Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index={2}
                      aria-label="3 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin provides an application where we can host
                              all of our mandatory data. A one-stop shop where
                              people can go to look up our information. It also
                              provides SO MUCH comparative data relative to
                              instruction and financial information that we can
                              use for a large number of reasons.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Stacey Haag"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Stacey Haag
                              </p>
                              <p>Business Manager, Gratiot-Isabella RESD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index={3}
                      aria-label="4 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is great for transparency reporting and
                              keeping documents organized and published as
                              required.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Shatara Morris"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Shatara Morris
                              </p>
                              <p>
                                Board Governance and Strategic Operations
                                Coordinator, Choice Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={4}
                      aria-label="5 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              Things are always improving. I look forward to
                              continued growth in darwin's ability to create
                              partnerships with other SISs and better data flow
                              between the MiDataHub and darwin!
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Sean Townsin"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Sean Townsin
                              </p>
                              <p>
                                State/Federal Grants Director, Melvindale-North
                                Allen Park Schools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      className="swiper-slide is-cards w-dyn-item swiper-slide-duplicate"
                      data-swiper-slide-index={5}
                      aria-label="6 / 8"
                      style={{ width: "341.76px", marginRight: "21.36px" }}
                    >
                      <div className="card-element is-full-height is-box-shadow">
                        <div className="card-content is-space-between">
                          <div className="content-wrapper">
                            <div className="text-weight-semibold">
                              darwin is like having a whole staff at your
                              fingertips.
                            </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="testimonial_client">
                            <div className="testimonial_client-image-wrapper w-condition-invisible">
                              <img
                                loading="lazy"
                                width={56}
                                height={56}
                                alt="Chris Barnett"
                                src=""
                                className="testimonial_customer-image w-dyn-bind-empty"
                              />
                            </div>
                            <div className="testimonial_client-info">
                              <p className="text-weight-semibold">
                                Chris Barnett
                              </p>
                              <p>Supervisor, Orion Township</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
                <div className="padding-bottom padding-large" />
                <div className="slider-main_navigation">
                  <div className="swiper-bullet-wrapper swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 1"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 2"
                    />
                    <button
                      className="swiper-bullet-item is-active"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 3"
                      aria-current="true"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 4"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 5"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 6"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 7"
                    />
                    <button
                      className="swiper-bullet-item"
                      tabIndex={0}
                      role="button"
                      aria-label="Go to slide 8"
                    />
                  </div>
                  <div className="slider-main_button-wrapper">
                    <a
                      aria-label="Previous slide"
                      href="#"
                      className="slider-main_button swiper-prev w-inline-block"
                      tabIndex={0}
                      role="button"
                      aria-controls="swiper-wrapper-3103d366ce25f8b18"
                    >
                      <div className="icon-embed-small w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-label="Arrow left"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ic"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
                          />
                        </svg>
                      </div>
                      <div className="hide">Previous Slide</div>
                    </a>
                    <a
                      aria-label="Next slide"
                      href="#"
                      className="slider-main_button swiper-next w-inline-block"
                      tabIndex={0}
                      role="button"
                      aria-controls="swiper-wrapper-3103d366ce25f8b18"
                    >
                      <div className="icon-embed-small w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          aria-label="Arrow right"
                          className="iconify iconify--ic"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                          />
                        </svg>
                      </div>
                      <div className="hide">Next Slide</div>
                    </a>
                  </div>
                </div>
                <div className="slider-main_embed w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n.slider-main_button.is-disabled {\n  background-color: #bec5d3;\n  pointer-events: none;\n}\n"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
        loading="lazy"
        width={1196}
        height={2}
        alt="A line being used as a divider."
        aria-hidden="true"
        role="presentation"
        className="section-divider is-aligned-top"
      />
      <div className="bg-element-wrapper is-top-left">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-rectangle is-large is-green"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="bg-element-wrapper is-star-element hide-tablet"
      >
        <img
          src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e740881ef9f91daac7cef2_star-detail.svg"
          loading="lazy"
          width={120}
          height={149}
          alt="A drawing of two blue stars."
          className="bg-element-image"
        />
      </div>
    </section> */}
    {/* <section className="section_logo">
      <div className="padding-global">
        <div className="container-medium">
          <div className="spacer-medium" />
          <div className="text-align-center">
            <div className="max-width-large align-center">
              <h2>Awards &amp; Recognitions</h2>
            </div>
          </div>
          <div className="spacer-xlarge" />
          <div className="logo_component">
            <img
              src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
              loading="lazy"
              width={1196}
              height={2}
              alt="A line being used as a divider."
              aria-hidden="true"
              role="presentation"
              className="logo_divider"
            />
            <img
              src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
              loading="lazy"
              width={1196}
              height={2}
              alt="A line being used as a divider."
              aria-hidden="true"
              role="presentation"
              className="logo_divider is-top"
            />
            <div className="marquee">
              <div className="marquee-content scroll">
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650181b2fee5e884b3feccdf_darwin-EdTech-Breakthrough-Award-Badge-2021.webp"
                    loading="lazy"
                    alt="Edtech breakthrough 2021."
                    height={120}
                    width="119.5"
                    className="logo_image"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/6501827badfd400ebad8dbf4_Nominee-Badge_Tech-Learning-Awards.png"
                    loading="lazy"
                    alt="Tech & Learning Awards of Excellence Remote Learning, nominee badge."
                    height={120}
                    width="119.5"
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650184bc4883643ade17f734_CODIE_2021_winner_black.webp"
                    loading="lazy"
                    alt="Codie 2021 winner badge."
                    height={120}
                    width={120}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017.webp"
                    loading="lazy"
                    alt="Center for Digital Government award 2017."
                    height={120}
                    width={120}
                    srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017.webp 640w"
                    sizes="(max-width: 767px) 128px, 144px"
                    className="logo_image"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo.webp"
                    loading="lazy"
                    alt="Edi-Fi partner badge."
                    height={90}
                    width={282}
                    srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo.webp 564w"
                    sizes="(max-width: 767px) 128px, 144px"
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716a9a4e2bd02f9e21a_DA-Top-100-Products_2015.webp"
                    loading="lazy"
                    alt="District Administration Top Products 2015."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187165ea5cd2c657e1bd1_DA_Top100_2016.webp"
                    loading="lazy"
                    alt="District Administration Top Products 2016."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187150926af0ccb3e144a_Govtech100-Badge-2016.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2016."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716f255dded9f4cabb5_GovTech-100-2017-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2017."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018715c48ecf3dc2268b94_GovTech-100-2018-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2018."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187160d632ff1b58ebca0_GovTech2019.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2019."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716b3d8c30ce110408f_GovTech-2021-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2021."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716211ebcbd9c72b246_GovTech-2022-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2022."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
              </div>
              <div className="marquee-content scroll">
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650181b2fee5e884b3feccdf_darwin-EdTech-Breakthrough-Award-Badge-2021.webp"
                    loading="lazy"
                    alt="Edtech breakthrough 2021."
                    height={120}
                    width="119.5"
                    className="logo_image"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/6501827badfd400ebad8dbf4_Nominee-Badge_Tech-Learning-Awards.png"
                    loading="lazy"
                    alt="Tech & Learning Awards of Excellence Remote Learning, nominee badge."
                    height={120}
                    width="119.5"
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650184bc4883643ade17f734_CODIE_2021_winner_black.webp"
                    loading="lazy"
                    alt="Codie 2021 winner badge."
                    height={120}
                    width={120}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017.webp"
                    loading="lazy"
                    alt="Center for Digital Government award 2017."
                    height={120}
                    width={120}
                    srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185710926af0ccb3c4523_CDG-GovExperience-project-winner-2017.webp 640w"
                    sizes="(max-width: 767px) 128px, 144px"
                    className="logo_image"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo.webp"
                    loading="lazy"
                    alt="Edi-Fi partner badge."
                    height={90}
                    width={282}
                    srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650185c4133e2c6dc9c08841_Ed-Fi_Partner_logo.webp 564w"
                    sizes="(max-width: 767px) 128px, 144px"
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716a9a4e2bd02f9e21a_DA-Top-100-Products_2015.webp"
                    loading="lazy"
                    alt="District Administration Top Products 2015."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187165ea5cd2c657e1bd1_DA_Top100_2016.webp"
                    loading="lazy"
                    alt="District Administration Top Products 2016."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187150926af0ccb3e144a_Govtech100-Badge-2016.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2016."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716f255dded9f4cabb5_GovTech-100-2017-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2017."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018715c48ecf3dc2268b94_GovTech-100-2018-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2018."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650187160d632ff1b58ebca0_GovTech2019.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2019."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716b3d8c30ce110408f_GovTech-2021-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2021."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
                <div className="logo_logo">
                  <img
                    src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/65018716211ebcbd9c72b246_GovTech-2022-Badge.webp"
                    loading="lazy"
                    alt="GovTech 100 Company 2022."
                    height={134}
                    width={114}
                    className="logo_image is-lighter"
                  />
                </div>
              </div>
            </div>
            <div className="w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n@keyframes scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(calc(-100% - 2rem));\n  }\n}\n\n.scroll {\n  animation: scroll 50s linear infinite;\n}\n\n.reverse {\n  animation-direction: reverse;\n}\n"
                }}
              />
            </div>
            <div className="logo_gradient" />
            <div className="logo_gradient is-right" />
          </div>
          <div className="spacer-huge" />
        </div>
      </div>
    </section> */}
    <section className="section_cta">
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-medium">
            <div className="text-align-center z-index-1">
              <h2 className="span-heading">
                <span className="z-index-2">Ready to Take</span>{" "}
                <span className="span-wrapper">
                  Action
                  <div
                    className="span-element is-scribble is-small-word"
                    data-w-id="d43a8002-db82-141f-8bbf-3e4b8fd8418f"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303045e89e33328d7268a_scribble-grey.json"
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
                        <clipPath id="__lottie_element_135">
                          <rect width={581} height={376} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_139">
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
                                d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                              />
                            </g>
                          </g>
                        </g>
                        <mask id="__lottie_element_139_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_139" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_135)">
                        <g
                          mask="url(#__lottie_element_139_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,290.5,188)" opacity={1}>
                            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(130,230,243)"
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
                <span className="z-index-2">With Your Data?</span>
              </h2>
              <div className="hide-this">
                <div className="heading-style-h2">Action</div>
              </div>
              <div className="spacer-large" />
              <div
                className="display-inlineflex"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                <Link href="/contact" className="button is-alternate w-inline-block">
                  <div>Schedule a tour</div>
                  <div
                    className="icon-embed-xxsmall w-embed"
                    style={{
                      transform:
                        "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      role="img"
                      aria-label="Arrow next"
                      width="100%"
                      height="100%"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <img
                src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705988026/64e74511b01ee5b84275f367_arrow-element-darwin_fxkyfg.svg"
                loading="lazy"
                width={187}
                height={107}
                alt="A yellow drawing featuring an arrow at the end."
                role="presentation"
                aria-hidden="true"
                className="bg-arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="section_blog">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="z-index-2">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h2 className="span-heading">
                    <span className="z-index-2">Recent</span>{" "}
                    <span className="z-index-2">School</span>{" "}
                    <span className="span-wrapper">
                      News
                      <div
                        className="span-element is-scribble"
                        data-w-id="93a99d60-559f-a4cd-5a18-59a5973c1f38"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303044441db8d378d7dcc_scribble-green.json"
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
                            <clipPath id="__lottie_element_142">
                              <rect width={581} height={376} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_146">
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
                                    d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                                  />
                                </g>
                              </g>
                            </g>
                            <mask id="__lottie_element_146_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_146" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_142)">
                            <g
                              mask="url(#__lottie_element_146_1)"
                              style={{ display: "block" }}
                            >
                              <g
                                transform="matrix(1,0,0,1,290.5,188)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(192,211,249)"
                                    fillOpacity={1}
                                    d=" M-4.191999912261963,-187.5489959716797 C-26.874000549316406,-185.97999572753906 -56.9900016784668,-179.96299743652344 -56.9900016784668,-177.13699340820312 C-56.9900016784668,-176.83900451660156 -56.308998107910156,-176.32000732421875 -55.48500061035156,-176.10000610351562 C-54.20199966430664,-175.7239990234375 -19.138999938964844,-176.54100036621094 0.46700000762939453,-177.43600463867188 C2.940999984741211,-177.57899475097656 13.083999633789062,-177.43600463867188 23.0049991607666,-177.05999755859375 C89.76799774169922,-174.9080047607422 138.74400329589844,-164.70399475097656 177.3419952392578,-145.13900756835938 C185.52200317382812,-140.9770050048828 194.76199340820312,-135.60899353027344 193.79299926757812,-135.54400634765625 C193.5709991455078,-135.54400634765625 188.99000549316406,-137.177001953125 183.64999389648438,-139.18699645996094 C150.45799255371094,-151.76400756835938 111.16799926757812,-159.50399780273438 68.06800079345703,-161.9550018310547 C63.566001892089844,-162.2530059814453 57.92499923706055,-162.92799377441406 55.595001220703125,-163.5240020751953 C33.89500045776367,-168.87899780273438 -4.938000202178955,-171.26400756835938 -34.53099822998047,-169.03399658203125 C-71.63600158691406,-166.20799255371094 -115.41600036621094,-157.57200622558594 -149.88999938964844,-146.26600646972656 C-180.00599670410156,-136.3730010986328 -207.57000732421875,-122.22799682617188 -227.17599487304688,-106.54000091552734 C-256.5459899902344,-82.94300079345703 -278.927001953125,-48.41600036621094 -287.0419921875,-13.902000427246094 C-290.052001953125,-1.3250000476837158 -290.87701416015625,7.453000068664551 -290.3529968261719,21.00200080871582 C-289.60699462890625,40.20399856567383 -286.072998046875,53.81700134277344 -277.05499267578125,71.6709976196289 C-264.2149963378906,97.18699645996094 -240.9320068359375,121.3030014038086 -211.718994140625,139.3769989013672 C-177.8470001220703,160.35499572753906 -128.42599487304688,176.7310028076172 -77.197998046875,183.93899536132812 C-53.69200134277344,187.28399658203125 -46.624000549316406,187.73800659179688 -17.934999465942383,187.73800659179688 C12.260000228881836,187.73800659179688 22.69099998474121,186.92100524902344 47.78099822998047,182.75900268554688 C97.2020034790039,174.5780029296875 147.447998046875,154.77999877929688 189.73599243164062,126.87799835205078 C243.35899353027344,91.39099884033203 278.7359924316406,47.19200134277344 288.6570129394531,3.069999933242798 C290.98699951171875,-6.978000164031982 291.1310119628906,-31.457000732421875 288.9580078125,-41.05099868774414 C282.7279968261719,-69.09600067138672 267.10101318359375,-90.82599639892578 238.26699829101562,-111.36299896240234 C234.28900146484375,-114.26699829101562 229.1840057373047,-118.58499908447266 226.9980010986328,-121.03600311279297 C215.72900390625,-133.7550048828125 199.05499267578125,-146.33099365234375 182.38099670410156,-154.58999633789062 C160.5229949951172,-165.4550018310547 130.93099975585938,-175.1269989013672 105.25199890136719,-179.7429962158203 C72.33499908447266,-185.61599731445312 20.440000534057617,-189.33799743652344 -4.191999912261963,-187.5489959716797z M-20.94499969482422,-157.79299926757812 C-77.94400024414062,-148.7169952392578 -119.93099975585938,-134.20799255371094 -163.26600646972656,-108.69200134277344 C-203.82699584960938,-84.80999755859375 -231.38999938964844,-56.090999603271484 -244.83200073242188,-23.509000778198242 C-251.218994140625,-8.105999946594238 -253.39199829101562,4.171999931335449 -252.7899932861328,20.98900032043457 C-252.34500122070312,33.928001403808594 -250.01499938964844,44.792999267578125 -245.05499267578125,56.176998138427734 C-226.80999755859375,98.80799865722656 -187.82000732421875,130.35299682617188 -131.04299926757812,148.58200073242188 C-86.42500305175781,162.947998046875 -40.99599838256836,167.11000061035156 11.880000114440918,161.60000610351562 C77.67500305175781,154.83200073242188 135.49899291992188,135.33200073242188 178.4669952392578,105.27799987792969 C225.4149932861328,72.46199798583984 252.8209991455078,35.18600082397461 261.9049987792969,-8.105999946594238 C266.64300537109375,-30.433000564575195 263.4880065917969,-56.0260009765625 253.26600646972656,-79.75299835205078 C253.26600646972656,-79.75299835205078 250.25599670410156,-86.81999969482422 250.25599670410156,-86.81999969482422 C250.25599670410156,-86.81999969482422 255.43899536132812,-81.38700103759766 255.43899536132812,-81.38700103759766 C277.44000244140625,-58.39899826049805 285.1099853515625,-26.18000030517578 276.5369873046875,6.701000213623047 C263.4750061035156,56.39799880981445 212.02499389648438,108.03900146484375 142.39599609375,141.29600524902344 C99.36199951171875,161.83299255371094 56.54999923706055,172.84100341796875 6.985000133514404,176.18600463867188 C-66.54399871826172,181.10000610351562 -151.40899658203125,162.71499633789062 -204.66400146484375,130.43099975585938 C-228.92999267578125,115.7020034790039 -250.8520050048828,94.64600372314453 -262.9460144042969,74.2509994506836 C-284.42401123046875,38.24599838256836 -284.6470031738281,-3.7239999771118164 -263.4700012207031,-44.5 C-255.35499572753906,-60.124000549316406 -245.89300537109375,-72.84300231933594 -232.4510040283203,-86.09400177001953 C-210.1490020751953,-108.12200164794922 -183.93299865722656,-123.07099914550781 -145.62399291992188,-135.6479949951172 C-114.76100158691406,-145.76100158691406 -73.9000015258789,-154.17599487304688 -41.97800064086914,-157.0800018310547 C-37.2400016784668,-157.52099609375 -32.1349983215332,-158.052001953125 -30.708999633789062,-158.11700439453125 C-29.281999588012695,-158.25999450683594 -25.525999069213867,-158.4149932861328 -22.450000762939453,-158.4149932861328 C-22.450000762939453,-158.4149932861328 -16.82200050354004,-158.4929962158203 -16.82200050354004,-158.4929962158203 C-16.82200050354004,-158.4929962158203 -20.95800018310547,-157.81900024414062 -20.95800018310547,-157.81900024414062 C-20.95800018310547,-157.81900024414062 -20.94499969482422,-157.79299926757812 -20.94499969482422,-157.79299926757812z M79.10099792480469,-149.68899536132812 C133.4040069580078,-145.1510009765625 181.09800720214844,-131.91400146484375 216.99899291992188,-111.22100067138672 C224.89100646972656,-106.76100158691406 225.781005859375,-106.00900268554688 229.53700256347656,-100.65399932861328 C234.19700622558594,-94.10600280761719 241.552001953125,-80.41500091552734 244.78500366210938,-72.23300170898438 C259.57501220703125,-35.25600051879883 254.6280059814453,2.5390000343322754 230.06100463867188,39.672000885009766 C222.6269989013672,50.97800064086914 215.27099609375,59.691001892089844 203.54400634765625,70.91899871826172 C168.69000244140625,104.39600372314453 125.59100341796875,127.0989990234375 71.052001953125,140.77699279785156 C49.57400131225586,146.1320037841797 29.889999389648438,149.33399963378906 3.4509999752044678,151.78500366210938 C-13.00100040435791,153.2760009765625 -54.83000183105469,153.05499267578125 -67.89299774169922,151.40899658203125 C-120.8479995727539,144.56300354003906 -166.27699279785156,127.37100219726562 -195.947998046875,102.90499877929688 C-204.1280059814453,96.13700103759766 -214.9510040283203,84.67500305175781 -220.95899963378906,76.41600036621094 C-227.3459930419922,67.56099700927734 -235.906005859375,50.60200119018555 -238.3800048828125,41.888999938964844 C-251.52099609375,-4.980999946594238 -226.28599548339844,-54.016998291015625 -169.6540069580078,-91.29299926757812 C-153.96099853515625,-101.63899993896484 -132.2469940185547,-113.16600036621094 -114.5260009765625,-120.68599700927734 C-75.39199829101562,-137.12600708007812 -28.156999588012695,-147.5500030517578 20.885000228881836,-150.4409942626953 C33.88199996948242,-151.17999267578125 65.80400085449219,-150.81700134277344 79.08799743652344,-149.70199584960938 C79.08799743652344,-149.70199584960938 79.10099792480469,-149.68899536132812 79.10099792480469,-149.68899536132812z"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </span>
                  </h2>
                  <div className="hide-this">
                    <div className="heading-style-h2">News</div>
                  </div>
                </div>
              </div>
              <div className="spacer-xlarge" />
              <div className="blog_component">
                <div className="blog_list-wrapper w-dyn-list">
                  <div role="list" className="three-column-list w-dyn-items">
                    <div
                      role="listitem"
                      className="blog_item is-home-layout w-dyn-item"
                    >
                      <div className="blog_content-wrapper is-box-shadow">
                        <a
                          aria-label="Read blog article"
                          href="/resource/reducing-rising-absenteeism-identifying-at-risk-students-with-the-darwin-early-warning-module"
                          className="link-wrapper w-inline-block"
                        >
                          <div className="image-wrapper-4-3">
                            <img
                              height={253}
                              loading="lazy"
                              width={500}
                              alt="darwin logo."
                              src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6502dadcd355afdcd372035c_darwin-thumbnail.svg"
                              className="image-wrapper_image"
                            />
                          </div>
                          <div className="hide">Read more</div>
                        </a>
                        <div className="blog_item-content">
                          <div className="content-wrapper">
                            <div className="content-wrapper">
                              <div className="content-wrapper">
                                <div className="tag-element">Blog</div>
                                <div className="tag-element w-condition-invisible">
                                  Webinar
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                              <div className="blog_date-wrapper">
                                <div className="blog_icon-wrapper">
                                  <div className="icon-embed-xsmall text-color-blue w-embed">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="calendar"
                                      className="iconify iconify--bx"
                                      width="100%"
                                      height="100%"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                                      />
                                      <path
                                        fill="currentColor"
                                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-size-small">
                                  January 3, 2024
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                            </div>
                            <a
                              href="/resource/reducing-rising-absenteeism-identifying-at-risk-students-with-the-darwin-early-warning-module"
                              className="link-wrapper w-inline-block"
                            >
                              <h3 className="heading-style-h4">
                                Reducing Rising Absenteeism: Identifying At-Risk
                                Students with the darwin Early Warning Module
                              </h3>
                            </a>
                            <div className="spacer-xsmall" />
                            <div className="text-size-regular text-style-5lines">
                              Discover how the darwin Early Warning Module
                              tackles the surge in student absenteeism
                              post-COVID-19 by identifying and monitoring
                              at-risk students, simplifying data management, and
                              enhancing student success and graduation rates.
                            </div>
                          </div>
                          <div
                            style={{
                              opacity: 1,
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d"
                            }}
                            className="display-inlineflex"
                          >
                            <a
                              data-text-color=""
                              href="/resource/reducing-rising-absenteeism-identifying-at-risk-students-with-the-darwin-early-warning-module"
                              className="button is-link w-inline-block"
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{
                                  transform:
                                    "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow right"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="blog_item is-home-layout w-dyn-item"
                    >
                      <div className="blog_content-wrapper is-box-shadow">
                        <a
                          aria-label="Read blog article"
                          href="/resource/michigan-integrated-continuous-improvement-process-micip-darwin-partnership-with-the-michigan-department-of-education"
                          className="link-wrapper w-inline-block"
                        >
                          <div className="image-wrapper-4-3">
                            <img
                              height={253}
                              loading="lazy"
                              width={500}
                              alt="darwin logo."
                              src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6502dadcd355afdcd372035c_darwin-thumbnail.svg"
                              className="image-wrapper_image"
                            />
                          </div>
                          <div className="hide">Read more</div>
                        </a>
                        <div className="blog_item-content">
                          <div className="content-wrapper">
                            <div className="content-wrapper">
                              <div className="content-wrapper">
                                <div className="tag-element">Blog</div>
                                <div className="tag-element w-condition-invisible">
                                  Webinar
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                              <div className="blog_date-wrapper">
                                <div className="blog_icon-wrapper">
                                  <div className="icon-embed-xsmall text-color-blue w-embed">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="calendar"
                                      className="iconify iconify--bx"
                                      width="100%"
                                      height="100%"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                                      />
                                      <path
                                        fill="currentColor"
                                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-size-small">
                                  January 3, 2024
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                            </div>
                            <a
                              href="/resource/michigan-integrated-continuous-improvement-process-micip-darwin-partnership-with-the-michigan-department-of-education"
                              className="link-wrapper w-inline-block"
                            >
                              <h3 className="heading-style-h4">
                                Michigan Integrated Continuous Improvement
                                Process (MICIP): darwin Partnership with the
                                Michigan Department of Education
                              </h3>
                            </a>
                            <div className="spacer-xsmall" />
                            <div className="text-size-regular text-style-5lines">
                              Explore how the darwin data-driven suite of
                              tools helps facilitate comprehensive needs
                              assessments and strategic planning, enhancing
                              educational outcomes and school district
                              operations.
                            </div>
                          </div>
                          <div
                            style={{
                              opacity: 1,
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d"
                            }}
                            className="display-inlineflex"
                          >
                            <a
                              data-text-color=""
                              href="/resource/michigan-integrated-continuous-improvement-process-micip-darwin-partnership-with-the-michigan-department-of-education"
                              className="button is-link w-inline-block"
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{
                                  transform:
                                    "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow right"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="blog_item is-home-layout w-dyn-item"
                    >
                      <div className="blog_content-wrapper is-box-shadow">
                        <a
                          aria-label="Read blog article"
                          href="/resource/revolutionizing-wisconsins-education-sector-with-darwin"
                          className="link-wrapper w-inline-block"
                        >
                          <div className="image-wrapper-4-3">
                            <img
                              height={253}
                              loading="lazy"
                              width={500}
                              alt="White background with darwin logo on it."
                              src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/658080e6ba760c62e8e9aa15_Revolutionizing%20Wisconsin%E2%80%99s%20Education%20Sector%20with%20darwin%20%20Blog%20Post%20Image%202023%20(600%20x%20400%20px).png"
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 29vw"
                              srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/658080e6ba760c62e8e9aa15_Revolutionizing%20Wisconsin%E2%80%99s%20Education%20Sector%20with%20darwin%20%20Blog%20Post%20Image%202023%20(600%20x%20400%20px)-p-500.png 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/658080e6ba760c62e8e9aa15_Revolutionizing%20Wisconsin%E2%80%99s%20Education%20Sector%20with%20darwin%20%20Blog%20Post%20Image%202023%20(600%20x%20400%20px).png 600w"
                              className="image-wrapper_image"
                            />
                          </div>
                          <div className="hide">Read more</div>
                        </a>
                        <div className="blog_item-content">
                          <div className="content-wrapper">
                            <div className="content-wrapper">
                              <div className="content-wrapper">
                                <div className="tag-element">Blog</div>
                                <div className="tag-element w-condition-invisible">
                                  Webinar
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                              <div className="blog_date-wrapper">
                                <div className="blog_icon-wrapper">
                                  <div className="icon-embed-xsmall text-color-blue w-embed">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="calendar"
                                      className="iconify iconify--bx"
                                      width="100%"
                                      height="100%"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                                      />
                                      <path
                                        fill="currentColor"
                                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="text-size-small">
                                  December 18, 2023
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                            </div>
                            <a
                              href="/resource/revolutionizing-wisconsins-education-sector-with-darwin"
                              className="link-wrapper w-inline-block"
                            >
                              <h3 className="heading-style-h4">
                                Revolutionizing Wisconsin’s Education Sector
                                with darwin{" "}
                              </h3>
                            </a>
                            <div className="spacer-xsmall" />
                            <div className="text-size-regular text-style-5lines">
                              darwin is revolutionizing Wisconsin’s education
                              sector with its all-in-one, user-friendly
                              platform, offering comprehensive financial,
                              academic, and early warning modules designed to
                              enhance the educational experience.
                            </div>
                          </div>
                          <div
                            style={{
                              opacity: 1,
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d"
                            }}
                            className="display-inlineflex"
                          >
                            <a
                              data-text-color=""
                              href="/resource/revolutionizing-wisconsins-education-sector-with-darwin"
                              className="button is-link w-inline-block"
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{
                                  transform:
                                    "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow right"
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-xlarge" />
              <div className="spacer-xlarge hide-tablet" />
              <div className="button-group is-center">
                <a
                  item-style=""
                  href="/k-12-resources"
                  className="button w-inline-block"
                >
                  <div>Explore More</div>
                  <div
                    className="icon-embed-xxsmall w-embed"
                    style={{
                      transform:
                        "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      role="img"
                      aria-label="Arrow next"
                      width="100%"
                      height="100%"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-element-wrapper is-bottom-left">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-rectangle is-large is-green"
        />
      </div>
      <img
        src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
        loading="lazy"
        width={1196}
        height={2}
        alt="A line being used as a divider."
        aria-hidden="true"
        role="presentation"
        className="section-divider"
      />
    </section> */}
    {/* <section
      data-w-id="46ecffee-65a2-fc0b-72e4-0d18d39d35eb"
      className="section_webinar"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <h2 className="span-heading is-larger">
                  <span className="z-index-2">Join An Upcoming</span>{" "}
                  <span className="span-wrapper">
                    Webinar
                    <div
                      className="span-element is-scribble"
                      data-w-id="93a99d60-559f-a4cd-5a18-59a5973c1f38"
                      data-animation-type="lottie"
                      data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650303044441db8d378d7dcc_scribble-green.json"
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
                          <clipPath id="__lottie_element_149">
                            <rect width={581} height={376} x={0} y={0} />
                          </clipPath>
                          <g id="__lottie_element_153">
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
                                  d=" M70.56400299072266,-155.1020050048828 C70.56400299072266,-155.1020050048828 34.005001068115234,-164.41900634765625 -12.258000373840332,-164.09100341796875 C-43.9010009765625,-163.86700439453125 -81.88099670410156,-159.41799926757812 -120.45600128173828,-149.33099365234375 C-147.0590057373047,-142.375 -174.3260040283203,-132.76199340820312 -199.21099853515625,-118.37300109863281 C-262.0830078125,-82.01799774169922 -283.98699951171875,-27.41200065612793 -284.77398681640625,15.968000411987305 C-285.1510009765625,36.72600173950195 -279.9209899902344,54.91299819946289 -273.4800109863281,67.30000305175781 C-265.7869873046875,82.09400177001953 -251.23899841308594,102.80000305175781 -227.32200622558594,121.2699966430664 C-188.7010040283203,151.093994140625 -126.4530029296875,177.4980010986328 -35.20000076293945,181.79800415039062 C112.56400299072266,188.76100158691406 194.63699340820312,118.33399963378906 218.552001953125,99.79199981689453 C241.5,82 317.5,0 270,-73 C255.26800537109375,-95.63999938964844 230.98399353027344,-112.0270004272461 202.73199462890625,-124.91300201416016 C177.36099243164062,-136.48500061035156 148.88699340820312,-145.42599487304688 119.62999725341797,-150.281005859375 C76.4209976196289,-157.45199584960938 32.084999084472656,-157.37899780273438 0,-154.5 C-64.0719985961914,-148.75 -155.5,-123 -207.5,-67 C-216.38800048828125,-57.428001403808594 -224.91799926757812,-48.16600036621094 -230.96400451660156,-38.284000396728516 C-244.4219970703125,-16.288999557495117 -249.82000732421875,6.4070000648498535 -246.97500610351562,28.93400001525879 C-243.6199951171875,55.49700164794922 -228.60899353027344,81.82599639892578 -199,106.5 C-133,161.5 -12.5,170.5 75,145 C162.96099853515625,119.36599731445312 238.81100463867188,72.95999908447266 257.5,-15.5 C261.2090148925781,-33.05500030517578 258.2030029296875,-49.19599914550781 253.3939971923828,-64.46700286865234 C245.0290069580078,-91.02999877929688 228.15699768066406,-114.11100006103516 210.27099609375,-130.1280059814453 C196.8520050048828,-142.14500427246094 182.4250030517578,-149.96499633789062 173,-153.5 C163.89700317382812,-156.91400146484375 140.9080047607422,-167.93800354003906 102.63899993896484,-175.22900390625 C56.82600021362305,-183.95799255371094 -8.28600025177002,-187.98699951171875 -62.5,-176"
                                />
                              </g>
                            </g>
                          </g>
                          <mask id="__lottie_element_153_1" mask-type="alpha">
                            <use xlinkHref="#__lottie_element_153" />
                          </mask>
                        </defs>
                        <g clipPath="url(#__lottie_element_149)">
                          <g
                            mask="url(#__lottie_element_153_1)"
                            style={{ display: "block" }}
                          >
                            <g
                              transform="matrix(1,0,0,1,290.5,188)"
                              opacity={1}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(192,211,249)"
                                  fillOpacity={1}
                                  d=" M-4.191999912261963,-187.5489959716797 C-26.874000549316406,-185.97999572753906 -56.9900016784668,-179.96299743652344 -56.9900016784668,-177.13699340820312 C-56.9900016784668,-176.83900451660156 -56.308998107910156,-176.32000732421875 -55.48500061035156,-176.10000610351562 C-54.20199966430664,-175.7239990234375 -19.138999938964844,-176.54100036621094 0.46700000762939453,-177.43600463867188 C2.940999984741211,-177.57899475097656 13.083999633789062,-177.43600463867188 23.0049991607666,-177.05999755859375 C89.76799774169922,-174.9080047607422 138.74400329589844,-164.70399475097656 177.3419952392578,-145.13900756835938 C185.52200317382812,-140.9770050048828 194.76199340820312,-135.60899353027344 193.79299926757812,-135.54400634765625 C193.5709991455078,-135.54400634765625 188.99000549316406,-137.177001953125 183.64999389648438,-139.18699645996094 C150.45799255371094,-151.76400756835938 111.16799926757812,-159.50399780273438 68.06800079345703,-161.9550018310547 C63.566001892089844,-162.2530059814453 57.92499923706055,-162.92799377441406 55.595001220703125,-163.5240020751953 C33.89500045776367,-168.87899780273438 -4.938000202178955,-171.26400756835938 -34.53099822998047,-169.03399658203125 C-71.63600158691406,-166.20799255371094 -115.41600036621094,-157.57200622558594 -149.88999938964844,-146.26600646972656 C-180.00599670410156,-136.3730010986328 -207.57000732421875,-122.22799682617188 -227.17599487304688,-106.54000091552734 C-256.5459899902344,-82.94300079345703 -278.927001953125,-48.41600036621094 -287.0419921875,-13.902000427246094 C-290.052001953125,-1.3250000476837158 -290.87701416015625,7.453000068664551 -290.3529968261719,21.00200080871582 C-289.60699462890625,40.20399856567383 -286.072998046875,53.81700134277344 -277.05499267578125,71.6709976196289 C-264.2149963378906,97.18699645996094 -240.9320068359375,121.3030014038086 -211.718994140625,139.3769989013672 C-177.8470001220703,160.35499572753906 -128.42599487304688,176.7310028076172 -77.197998046875,183.93899536132812 C-53.69200134277344,187.28399658203125 -46.624000549316406,187.73800659179688 -17.934999465942383,187.73800659179688 C12.260000228881836,187.73800659179688 22.69099998474121,186.92100524902344 47.78099822998047,182.75900268554688 C97.2020034790039,174.5780029296875 147.447998046875,154.77999877929688 189.73599243164062,126.87799835205078 C243.35899353027344,91.39099884033203 278.7359924316406,47.19200134277344 288.6570129394531,3.069999933242798 C290.98699951171875,-6.978000164031982 291.1310119628906,-31.457000732421875 288.9580078125,-41.05099868774414 C282.7279968261719,-69.09600067138672 267.10101318359375,-90.82599639892578 238.26699829101562,-111.36299896240234 C234.28900146484375,-114.26699829101562 229.1840057373047,-118.58499908447266 226.9980010986328,-121.03600311279297 C215.72900390625,-133.7550048828125 199.05499267578125,-146.33099365234375 182.38099670410156,-154.58999633789062 C160.5229949951172,-165.4550018310547 130.93099975585938,-175.1269989013672 105.25199890136719,-179.7429962158203 C72.33499908447266,-185.61599731445312 20.440000534057617,-189.33799743652344 -4.191999912261963,-187.5489959716797z M-20.94499969482422,-157.79299926757812 C-77.94400024414062,-148.7169952392578 -119.93099975585938,-134.20799255371094 -163.26600646972656,-108.69200134277344 C-203.82699584960938,-84.80999755859375 -231.38999938964844,-56.090999603271484 -244.83200073242188,-23.509000778198242 C-251.218994140625,-8.105999946594238 -253.39199829101562,4.171999931335449 -252.7899932861328,20.98900032043457 C-252.34500122070312,33.928001403808594 -250.01499938964844,44.792999267578125 -245.05499267578125,56.176998138427734 C-226.80999755859375,98.80799865722656 -187.82000732421875,130.35299682617188 -131.04299926757812,148.58200073242188 C-86.42500305175781,162.947998046875 -40.99599838256836,167.11000061035156 11.880000114440918,161.60000610351562 C77.67500305175781,154.83200073242188 135.49899291992188,135.33200073242188 178.4669952392578,105.27799987792969 C225.4149932861328,72.46199798583984 252.8209991455078,35.18600082397461 261.9049987792969,-8.105999946594238 C266.64300537109375,-30.433000564575195 263.4880065917969,-56.0260009765625 253.26600646972656,-79.75299835205078 C253.26600646972656,-79.75299835205078 250.25599670410156,-86.81999969482422 250.25599670410156,-86.81999969482422 C250.25599670410156,-86.81999969482422 255.43899536132812,-81.38700103759766 255.43899536132812,-81.38700103759766 C277.44000244140625,-58.39899826049805 285.1099853515625,-26.18000030517578 276.5369873046875,6.701000213623047 C263.4750061035156,56.39799880981445 212.02499389648438,108.03900146484375 142.39599609375,141.29600524902344 C99.36199951171875,161.83299255371094 56.54999923706055,172.84100341796875 6.985000133514404,176.18600463867188 C-66.54399871826172,181.10000610351562 -151.40899658203125,162.71499633789062 -204.66400146484375,130.43099975585938 C-228.92999267578125,115.7020034790039 -250.8520050048828,94.64600372314453 -262.9460144042969,74.2509994506836 C-284.42401123046875,38.24599838256836 -284.6470031738281,-3.7239999771118164 -263.4700012207031,-44.5 C-255.35499572753906,-60.124000549316406 -245.89300537109375,-72.84300231933594 -232.4510040283203,-86.09400177001953 C-210.1490020751953,-108.12200164794922 -183.93299865722656,-123.07099914550781 -145.62399291992188,-135.6479949951172 C-114.76100158691406,-145.76100158691406 -73.9000015258789,-154.17599487304688 -41.97800064086914,-157.0800018310547 C-37.2400016784668,-157.52099609375 -32.1349983215332,-158.052001953125 -30.708999633789062,-158.11700439453125 C-29.281999588012695,-158.25999450683594 -25.525999069213867,-158.4149932861328 -22.450000762939453,-158.4149932861328 C-22.450000762939453,-158.4149932861328 -16.82200050354004,-158.4929962158203 -16.82200050354004,-158.4929962158203 C-16.82200050354004,-158.4929962158203 -20.95800018310547,-157.81900024414062 -20.95800018310547,-157.81900024414062 C-20.95800018310547,-157.81900024414062 -20.94499969482422,-157.79299926757812 -20.94499969482422,-157.79299926757812z M79.10099792480469,-149.68899536132812 C133.4040069580078,-145.1510009765625 181.09800720214844,-131.91400146484375 216.99899291992188,-111.22100067138672 C224.89100646972656,-106.76100158691406 225.781005859375,-106.00900268554688 229.53700256347656,-100.65399932861328 C234.19700622558594,-94.10600280761719 241.552001953125,-80.41500091552734 244.78500366210938,-72.23300170898438 C259.57501220703125,-35.25600051879883 254.6280059814453,2.5390000343322754 230.06100463867188,39.672000885009766 C222.6269989013672,50.97800064086914 215.27099609375,59.691001892089844 203.54400634765625,70.91899871826172 C168.69000244140625,104.39600372314453 125.59100341796875,127.0989990234375 71.052001953125,140.77699279785156 C49.57400131225586,146.1320037841797 29.889999389648438,149.33399963378906 3.4509999752044678,151.78500366210938 C-13.00100040435791,153.2760009765625 -54.83000183105469,153.05499267578125 -67.89299774169922,151.40899658203125 C-120.8479995727539,144.56300354003906 -166.27699279785156,127.37100219726562 -195.947998046875,102.90499877929688 C-204.1280059814453,96.13700103759766 -214.9510040283203,84.67500305175781 -220.95899963378906,76.41600036621094 C-227.3459930419922,67.56099700927734 -235.906005859375,50.60200119018555 -238.3800048828125,41.888999938964844 C-251.52099609375,-4.980999946594238 -226.28599548339844,-54.016998291015625 -169.6540069580078,-91.29299926757812 C-153.96099853515625,-101.63899993896484 -132.2469940185547,-113.16600036621094 -114.5260009765625,-120.68599700927734 C-75.39199829101562,-137.12600708007812 -28.156999588012695,-147.5500030517578 20.885000228881836,-150.4409942626953 C33.88199996948242,-151.17999267578125 65.80400085449219,-150.81700134277344 79.08799743652344,-149.70199584960938 C79.08799743652344,-149.70199584960938 79.10099792480469,-149.68899536132812 79.10099792480469,-149.68899536132812z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </span>
                </h2>
                <div className="hide-this">
                  <div className="heading-style-h2">webinars</div>
                </div>
              </div>
            </div>
            <div className="spacer-xlarge" />
            <div className="z-index-2">
              <div className="w-layout-grid webinar_wrapper">
                <div
                  id="w-node-_01f71276-ff22-8f14-75ff-5e7cbcff0089-4f04227e"
                  className="webinar_layout2-wrapper"
                >
                  <div
                    id="w-node-_5f591e37-c124-a08f-a360-71d21fde429a-4f04227e"
                    className="collection-list-wrapper w-dyn-list"
                  >
                    <div role="list" className="webinar_layout2 w-dyn-items">
                      <div
                        role="listitem"
                        className="webinar_layout2-item w-dyn-item"
                      >
                        <div className="blog_content-wrapper is-box-shadow">
                          <a
                            rel="noopener"
                            href="https://us02web.zoom.us/webinar/register/WN_zEpH4SZcQNWGi-75reYqEg"
                            target="_blank"
                            className="link-wrapper w-inline-block"
                          >
                            <div className="blog_webinar-thumbnail">
                              <div className="blog_text-thumbnail">
                                <div className="text-size-medium text-style-4lines">
                                  Learn how darwin can help enhance reading
                                  improvement plans with individual student
                                  assessment data
                                </div>
                              </div>
                            </div>
                            <div className="hide">Read more</div>
                          </a>
                          <div className="blog_item-content">
                            <div className="content-wrapper">
                              <div className="blog_date-layout">
                                <div className="blog_date-wrapper">
                                  <div className="blog_icon-wrapper">
                                    <div className="icon-embed-xsmall text-color-blue w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="calendar"
                                        className="iconify iconify--bx"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                                        />
                                        <path
                                          fill="currentColor"
                                          d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    fs-cmsfilter-field="date"
                                    className="text-size-small"
                                  >
                                    January 16, 2024
                                  </div>
                                </div>
                                <div
                                  role="presentation"
                                  className="blog_divider"
                                />
                                <div className="blog_date-wrapper">
                                  <div className="blog_icon-wrapper">
                                    <div className="icon-embed-xsmall text-color-blue w-embed">
                                      <svg
                                        aria-hidden="true"
                                        role="presentation"
                                        aria-label="Clock icon"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 13 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6.47335 1.13932C3.22068 1.13932 0.473348 3.88666 0.473348 7.13932C0.473348 10.392 3.22068 13.1393 6.47335 13.1393C9.72602 13.1393 12.4733 10.392 12.4733 7.13932C12.4733 3.88666 9.72602 1.13932 6.47335 1.13932ZM6.47335 11.806C3.94401 11.806 1.80668 9.66866 1.80668 7.13932C1.80668 4.60999 3.94401 2.47266 6.47335 2.47266C9.00268 2.47266 11.14 4.60999 11.14 7.13932C11.14 9.66866 9.00268 11.806 6.47335 11.806Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M7.14 6.47267V3.806H5.80667V7.806H9.80667V6.47267H7.14ZM9.996 0.944L10.9373 0L12.944 2L12.002 2.94467L9.996 0.944ZM2.93867 0.944L0.945333 2.94333L0 2.002L1.99333 0.00200001L2.93867 0.944Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    fs-cmsfilter-field="date"
                                    className="text-size-small"
                                  >
                                    11:00 am
                                  </div>
                                </div>
                              </div>
                              <div className="spacer-xsmall" />
                              <h3
                                fs-cmsfilter-field="title"
                                className="heading-style-h5"
                              >
                                Enhanced Reading Interventions with darwin
                              </h3>
                              <div className="content-wrapper">
                                <div className="spacer-xsmall" />
                                <div className="blog_author-wrapper">
                                  <div className="blog_author-image-wrapper">
                                    <img
                                      loading="lazy"
                                      width={48}
                                      height={48}
                                      alt="Taylor Lynch"
                                      src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ee179fcf594d5cc3f87_taylor-frank.webp"
                                      className="blog_author-image"
                                    />
                                  </div>
                                  <div className="blog_author-text">
                                    <div className="text-size-small text-weight-semibold">
                                      Taylor Lynch
                                    </div>
                                    <div className="text-size-small">
                                      Marketing Growth Coordinator
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="display-inlineflex"
                              style={{
                                opacity: 1,
                                transform:
                                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                              }}
                            >
                              <a
                                rel="noopener"
                                href="https://us02web.zoom.us/webinar/register/WN_zEpH4SZcQNWGi-75reYqEg"
                                target="_blank"
                                className="button is-link w-inline-block"
                              >
                                <div>Register</div>
                                <div
                                  className="icon-embed-xxsmall w-embed"
                                  style={{
                                    transform:
                                      "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"
                                  }}
                                >
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    aria-label="Arrow right"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 8 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-xlarge" />
                  <div className="button-group is-center">
                    <a
                      item-style=""
                      href="/k-12-webinars#replays"
                      className="button w-inline-block"
                    >
                      <div>Watch previous webinars</div>
                      <div
                        className="icon-embed-xxsmall w-embed"
                        style={{
                          transform:
                            "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          role="img"
                          aria-label="Arrow next"
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="bg-element-wrapper is-top-right"
      >
        <div
          role="presentation"
          className="bg-element is-rectangle is-pink"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
    </section> */}
  </main>
  <section
    data-w-id="d62b5bb8-cf8f-48fd-3ec0-25c003e9e936"
    className="section_why-darwin"
  >
    <img
      src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
      loading="lazy"
      width={1196}
      height={2}
      alt="A line being used as a divider."
      aria-hidden="true"
      role="presentation"
      className="section-divider is-aligned-top"
    />
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-medium">
          <div className="w-layout-grid why-darwin_layout">
            <div
              id="w-node-_44cac3d9-8c15-7071-5ad8-de6a6ae825c7-03e9e936"
              className="image-wrapper-4-3 is-rounded-image is-box-shadow"
            >
              <img
                src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705732477/darwinheaderimage1_imvdfp.png"
                loading="lazy"
                width={540}
                height={374}
                alt="Darwin portal image."
                className="image-wrapper_image"
              />
            </div>
            <div className="content-wrapper">
              <h2 className="span-heading is-larger">
                <span className="z-index-2">Built by</span>{" "}
                <span className="span-wrapper">
                  Educators
                  <div
                    className="span-element is-line"
                    data-w-id="9a2be7be-f7cb-1c0a-67bb-60f20b7a8719"
                    data-animation-type="lottie"
                    data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650302c35aa9cdd684a47b9c_line-grey.json"
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
                      viewBox="0 0 1098 54"
                      width={1098}
                      height={54}
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "translate3d(0px, 0px, 0px)",
                        contentVisibility: "visible"
                      }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_156">
                          <rect width={1098} height={54} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_160">
                          <g
                            transform="matrix(1,0,0,1,549,27)"
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
                                strokeWidth={30}
                                d=" M-593,23.65399932861328 C-287,-10 349,-39 573,3"
                              />
                            </g>
                          </g>
                        </g>
                        <mask id="__lottie_element_160_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_160" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_156)">
                        <g
                          mask="url(#__lottie_element_160_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,549,27)" opacity={1}>
                            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(192,211,249)"
                                fillOpacity={1}
                                d=" M461.94000244140625,-20.354000091552734 C438.1210021972656,-21.600000381469727 413.8949890136719,-22.84600067138672 389.66900634765625,-24.091999053955078 C381.86700439453125,-24.506999969482422 373.6549987792969,-24.507999420166016 365.8529968261719,-24.92300033569336 C348.60699462890625,-25.33799934387207 331.3609924316406,-25.753999710083008 314.114990234375,-26.16900062561035 C304.6709899902344,-26.583999633789062 294.8160095214844,-26.584999084472656 285.37200927734375,-27 C282.49798583984375,-27 279.6239929199219,-27 277.1600036621094,-27 C271.0010070800781,-27 264.84100341796875,-27 258.2720031738281,-27 C229.93899536132812,-27 201.60699462890625,-27 173.2740020751953,-27 C166.70399475097656,-27 159.7239990234375,-27 153.1540069580078,-26.584999084472656 C136.31900024414062,-26.170000076293945 119.89399719238281,-26.16900062561035 103.05899810791016,-25.753999710083008 C84.16999816894531,-25.339000701904297 65.28199768066406,-25.33799934387207 46.39400100708008,-24.92300033569336 C16.007999420166016,-24.091999053955078 -14.788000106811523,-23.261999130249023 -45.17399978637695,-22.430999755859375 C-62.83000183105469,-22.016000747680664 -80.48699951171875,-21.600000381469727 -98.14299774169922,-21.184999465942383 C-128.5290069580078,-19.93899917602539 -158.9149932861328,-18.691999435424805 -189.3000030517578,-17.445999145507812 C-206.13499450683594,-16.614999771118164 -222.55999755859375,-16.200000762939453 -239.39500427246094,-15.369000434875488 C-271.01300048828125,-13.291999816894531 -302.6300048828125,-11.630999565124512 -334.24798583984375,-9.968999862670898 C-351.0830078125,-9.137999534606934 -367.9179992675781,-8.307999610900879 -384.75299072265625,-7.061999797821045 C-415.9599914550781,-4.570000171661377 -447.5780029296875,-1.6619999408721924 -478.7850036621094,1.246000051498413 C-485.3550109863281,1.6610000133514404 -492.3349914550781,2.493000030517578 -499.31500244140625,2.9079999923706055 C-512.4550170898438,4.1539998054504395 -526.0059814453125,6.230999946594238 -539.5560302734375,7.892000198364258 C-540.3770141601562,7.892000198364258 -541.198974609375,8.307999610900879 -542.02001953125,8.307999610900879 C-543.6619873046875,8.307999610900879 -544.8939819335938,9.138999938964844 -546.1259765625,10.385000228881836 C-548.1790161132812,12.461999893188477 -549,14.954000473022461 -549,17.445999145507812 C-549,19.937999725341797 -548.1790161132812,22.430999755859375 -546.1259765625,24.091999053955078 C-544.4840087890625,25.753000259399414 -541.6090087890625,27 -539.5560302734375,27 C-523.1309814453125,25.339000701904297 -507.1180114746094,23.26099967956543 -490.6929931640625,21.600000381469727 C-475.5,20.354000091552734 -460.3070068359375,19.10700035095215 -445.114013671875,17.861000061035156 C-428.6889953613281,16.614999771118164 -412.2650146484375,14.954000473022461 -395.42999267578125,13.708000183105469 C-388.8599853515625,13.293000221252441 -382.2900085449219,12.461000442504883 -375.3089904785156,12.045999526977539 C-349.4410095214844,10.800000190734863 -323.98199462890625,9.137999534606934 -298.1130065917969,7.892000198364258 C-282.0989990234375,7.060999870300293 -266.0849914550781,6.230999946594238 -250.0709991455078,5.400000095367432 C-243.50100708007812,4.985000133514404 -236.9320068359375,4.568999767303467 -230.36199951171875,4.1539998054504395 C-204.9040069580078,2.9079999923706055 -179.44500732421875,2.0769999027252197 -153.98699951171875,0.8309999704360962 C-138.38400268554688,0.41600000858306885 -123.19100189208984,-0.41600000858306885 -107.58799743652344,-0.8309999704360962 C-102.25,-0.8309999704360962 -97.3219985961914,-1.246000051498413 -91.98400115966797,-1.246000051498413 C-64.4729995727539,-2.0769999027252197 -36.96200180053711,-2.492000102996826 -9.449999809265137,-3.322999954223633 C5.743000030517578,-3.73799991607666 21.34600067138672,-4.1539998054504395 36.53900146484375,-4.568999767303467 C41.87699890136719,-4.568999767303467 47.625,-4.985000133514404 52.9630012512207,-4.985000133514404 C81.2959976196289,-5.400000095367432 109.62799835205078,-5.400000095367432 138.3719940185547,-5.815000057220459 C156.0279998779297,-5.815000057220459 173.68499755859375,-6.230999946594238 191.34100341796875,-6.230999946594238 C221.3159942626953,-6.230999946594238 251.70199584960938,-6.230000019073486 281.677001953125,-5.815000057220459 C287.42498779296875,-5.815000057220459 293.5849914550781,-5.400000095367432 299.3330078125,-5.400000095367432 C316.1679992675781,-4.985000133514404 332.5929870605469,-4.568999767303467 349.4280090332031,-3.73799991607666 C361.74700927734375,-3.322999954223633 374.47601318359375,-2.9070000648498535 386.79400634765625,-2.492000102996826 C395.8280029296875,-2.0769999027252197 404.45098876953125,-1.6610000133514404 413.4840087890625,-1.246000051498413 C439.3529968261719,0 465.6300048828125,1.6610000133514404 491.5,3.322999954223633 C498.07000732421875,3.73799991607666 504.6400146484375,4.1539998054504395 511.2099914550781,4.568999767303467 C518.1900024414062,4.984000205993652 525.5800170898438,5.400000095367432 532.5599975585938,6.230999946594238 C533.7999877929688,6.230999946594238 534.6199951171875,6.646999835968018 535.8499755859375,7.061999797821045 C538.719970703125,7.4770002365112305 541.1900024414062,7.47599983215332 543.6500244140625,5.815000057220459 C546.1099853515625,4.568999767303467 547.760009765625,2.0769999027252197 548.5800170898438,-0.41499999165534973 C550.219970703125,-5.815000057220459 546.9299926757812,-11.630999565124512 541.1900024414062,-13.291999816894531 C536.260009765625,-14.538000106811523 531.3300170898438,-14.954000473022461 526.8099975585938,-15.78499984741211 C523.530029296875,-16.200000762939453 520.239990234375,-16.614999771118164 516.9600219726562,-16.614999771118164 C510.3900146484375,-17.445999145507812 503.82000732421875,-17.445999145507812 497.6600036621094,-18.277000427246094 C486.1600036621094,-18.691999435424805 473.8500061035156,-19.523000717163086 461.94000244140625,-20.354000091552734z"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </span>{" "}
                <span className="z-index-2">&amp; Data&nbsp;Scientists</span>
              </h2>
              <div className="hide-this">
                <div className="heading-style-h2">Educators</div>
              </div>
              <div className="spacer-large" />
              <div className="text-rich-text w-richtext">
                <h3>Actionable intelligence</h3>
                <p>
                  Our tools transform your raw data into practical insights to
                  give you a holistic view of your school’s well-being and how
                  it stacks up against others in your district and beyond.
                </p>
                <h3>Transparency at your fingertips</h3>
                <p>
                  Whether it's financial figures or school performance metrics,
                  you can foster trust in your community with the power of
                  transparent reporting right in your hands.
                </p>
                <h3>Personalized support</h3>
                <p>
                  We know your time is valuable. That’s why our team is here to
                  help you set up your data and achieve your goals – every step
                  of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-element-wrapper is-middle-left hide-mobile-landscape">
      <div
        className="bg-element is-circle is-large is-pink"
        style={{
          willChange: "transform",
          transform:
            "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d"
        }}
      />
    </div>
    <div className="bg-element-wrapper is-top-left show-mobile-landscape">
      <div
        className="bg-element is-circle is-large is-pink"
        style={{
          willChange: "transform",
          transform:
            "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d"
        }}
      />
    </div>
  </section>
  <section className="section_cta">
    <div className="padding-global">
      <div className="container-small">
        <div className="padding-section-medium">
          <div className="text-align-center z-index-1">
            <h2 className="span-heading">
              <span className="z-index-2">Thinking of Bringing Our</span>{" "}
              <span className="span-wrapper">
                Solutions
                <div
                  className="span-element is-line"
                  data-w-id="e7ac37cd-e29e-922f-8aa3-6db59609198b"
                  data-animation-type="lottie"
                  data-src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650302cf9bb39d613184b936_line-turquoise.json"
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
                    viewBox="0 0 1098 54"
                    width={1098}
                    height={54}
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate3d(0px, 0px, 0px)",
                      contentVisibility: "visible"
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_163">
                        <rect width={1098} height={54} x={0} y={0} />
                      </clipPath>
                      <g id="__lottie_element_167">
                        <g
                          transform="matrix(1,0,0,1,549,27)"
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
                              strokeWidth={30}
                              d=" M-593,23.65399932861328 C-287,-10 349,-39 573,3"
                            />
                          </g>
                        </g>
                      </g>
                      <mask id="__lottie_element_167_1" mask-type="alpha">
                        <use xlinkHref="#__lottie_element_167" />
                      </mask>
                    </defs>
                    <g clipPath="url(#__lottie_element_163)">
                      <g
                        mask="url(#__lottie_element_167_1)"
                        style={{ display: "block" }}
                      >
                        <g transform="matrix(1,0,0,1,549,27)" opacity={1}>
                          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                            <path
                              fill="rgb(130,230,243)"
                              fillOpacity={1}
                              d=" M461.94000244140625,-20.354000091552734 C438.1210021972656,-21.600000381469727 413.8949890136719,-22.84600067138672 389.66900634765625,-24.091999053955078 C381.86700439453125,-24.506999969482422 373.6549987792969,-24.507999420166016 365.8529968261719,-24.92300033569336 C348.60699462890625,-25.33799934387207 331.3609924316406,-25.753999710083008 314.114990234375,-26.16900062561035 C304.6709899902344,-26.583999633789062 294.8160095214844,-26.584999084472656 285.37200927734375,-27 C282.49798583984375,-27 279.6239929199219,-27 277.1600036621094,-27 C271.0010070800781,-27 264.84100341796875,-27 258.2720031738281,-27 C229.93899536132812,-27 201.60699462890625,-27 173.2740020751953,-27 C166.70399475097656,-27 159.7239990234375,-27 153.1540069580078,-26.584999084472656 C136.31900024414062,-26.170000076293945 119.89399719238281,-26.16900062561035 103.05899810791016,-25.753999710083008 C84.16999816894531,-25.339000701904297 65.28199768066406,-25.33799934387207 46.39400100708008,-24.92300033569336 C16.007999420166016,-24.091999053955078 -14.788000106811523,-23.261999130249023 -45.17399978637695,-22.430999755859375 C-62.83000183105469,-22.016000747680664 -80.48699951171875,-21.600000381469727 -98.14299774169922,-21.184999465942383 C-128.5290069580078,-19.93899917602539 -158.9149932861328,-18.691999435424805 -189.3000030517578,-17.445999145507812 C-206.13499450683594,-16.614999771118164 -222.55999755859375,-16.200000762939453 -239.39500427246094,-15.369000434875488 C-271.01300048828125,-13.291999816894531 -302.6300048828125,-11.630999565124512 -334.24798583984375,-9.968999862670898 C-351.0830078125,-9.137999534606934 -367.9179992675781,-8.307999610900879 -384.75299072265625,-7.061999797821045 C-415.9599914550781,-4.570000171661377 -447.5780029296875,-1.6619999408721924 -478.7850036621094,1.246000051498413 C-485.3550109863281,1.6610000133514404 -492.3349914550781,2.493000030517578 -499.31500244140625,2.9079999923706055 C-512.4550170898438,4.1539998054504395 -526.0059814453125,6.230999946594238 -539.5560302734375,7.892000198364258 C-540.3770141601562,7.892000198364258 -541.198974609375,8.307999610900879 -542.02001953125,8.307999610900879 C-543.6619873046875,8.307999610900879 -544.8939819335938,9.138999938964844 -546.1259765625,10.385000228881836 C-548.1790161132812,12.461999893188477 -549,14.954000473022461 -549,17.445999145507812 C-549,19.937999725341797 -548.1790161132812,22.430999755859375 -546.1259765625,24.091999053955078 C-544.4840087890625,25.753000259399414 -541.6090087890625,27 -539.5560302734375,27 C-523.1309814453125,25.339000701904297 -507.1180114746094,23.26099967956543 -490.6929931640625,21.600000381469727 C-475.5,20.354000091552734 -460.3070068359375,19.10700035095215 -445.114013671875,17.861000061035156 C-428.6889953613281,16.614999771118164 -412.2650146484375,14.954000473022461 -395.42999267578125,13.708000183105469 C-388.8599853515625,13.293000221252441 -382.2900085449219,12.461000442504883 -375.3089904785156,12.045999526977539 C-349.4410095214844,10.800000190734863 -323.98199462890625,9.137999534606934 -298.1130065917969,7.892000198364258 C-282.0989990234375,7.060999870300293 -266.0849914550781,6.230999946594238 -250.0709991455078,5.400000095367432 C-243.50100708007812,4.985000133514404 -236.9320068359375,4.568999767303467 -230.36199951171875,4.1539998054504395 C-204.9040069580078,2.9079999923706055 -179.44500732421875,2.0769999027252197 -153.98699951171875,0.8309999704360962 C-138.38400268554688,0.41600000858306885 -123.19100189208984,-0.41600000858306885 -107.58799743652344,-0.8309999704360962 C-102.25,-0.8309999704360962 -97.3219985961914,-1.246000051498413 -91.98400115966797,-1.246000051498413 C-64.4729995727539,-2.0769999027252197 -36.96200180053711,-2.492000102996826 -9.449999809265137,-3.322999954223633 C5.743000030517578,-3.73799991607666 21.34600067138672,-4.1539998054504395 36.53900146484375,-4.568999767303467 C41.87699890136719,-4.568999767303467 47.625,-4.985000133514404 52.9630012512207,-4.985000133514404 C81.2959976196289,-5.400000095367432 109.62799835205078,-5.400000095367432 138.3719940185547,-5.815000057220459 C156.0279998779297,-5.815000057220459 173.68499755859375,-6.230999946594238 191.34100341796875,-6.230999946594238 C221.3159942626953,-6.230999946594238 251.70199584960938,-6.230000019073486 281.677001953125,-5.815000057220459 C287.42498779296875,-5.815000057220459 293.5849914550781,-5.400000095367432 299.3330078125,-5.400000095367432 C316.1679992675781,-4.985000133514404 332.5929870605469,-4.568999767303467 349.4280090332031,-3.73799991607666 C361.74700927734375,-3.322999954223633 374.47601318359375,-2.9070000648498535 386.79400634765625,-2.492000102996826 C395.8280029296875,-2.0769999027252197 404.45098876953125,-1.6610000133514404 413.4840087890625,-1.246000051498413 C439.3529968261719,0 465.6300048828125,1.6610000133514404 491.5,3.322999954223633 C498.07000732421875,3.73799991607666 504.6400146484375,4.1539998054504395 511.2099914550781,4.568999767303467 C518.1900024414062,4.984000205993652 525.5800170898438,5.400000095367432 532.5599975585938,6.230999946594238 C533.7999877929688,6.230999946594238 534.6199951171875,6.646999835968018 535.8499755859375,7.061999797821045 C538.719970703125,7.4770002365112305 541.1900024414062,7.47599983215332 543.6500244140625,5.815000057220459 C546.1099853515625,4.568999767303467 547.760009765625,2.0769999027252197 548.5800170898438,-0.41499999165534973 C550.219970703125,-5.815000057220459 546.9299926757812,-11.630999565124512 541.1900024414062,-13.291999816894531 C536.260009765625,-14.538000106811523 531.3300170898438,-14.954000473022461 526.8099975585938,-15.78499984741211 C523.530029296875,-16.200000762939453 520.239990234375,-16.614999771118164 516.9600219726562,-16.614999771118164 C510.3900146484375,-17.445999145507812 503.82000732421875,-17.445999145507812 497.6600036621094,-18.277000427246094 C486.1600036621094,-18.691999435424805 473.8500061035156,-19.523000717163086 461.94000244140625,-20.354000091552734z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </span>{" "}
              <span className="z-index-2">to Your Schools?</span>
            </h2>
            <div className="hide-this">
              <div className="heading-style-h2">Solutions</div>
            </div>
            <div className="spacer-small" />
            <p className="text-size-medium">
              Request a free demo to explore how darwin can help
              you&nbsp;achieve your goals.
            </p>
            <div className="spacer-large" />
            <div
              className="display-inlineflex"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <Link to="/contact" className="button is-alternate w-inline-block">
                <div>Request a demo</div>
                <div
                  className="icon-embed-xxsmall w-embed"
                  style={{
                    transform:
                      "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <svg
                    aria-hidden="true"
                    role="img"
                    aria-label="Arrow next"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="content-wrapper">
              <div className="spacer-large" />
              <div>
                Have a question? <Link href="/contact">Contact us here.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>



)

export default Landingpage
