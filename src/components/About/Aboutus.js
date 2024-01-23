import React from 'react'
import {Link} from 'gatsby'
const Aboutus = () => {
  return (
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
    <header className="section_header">
      <div className="header_layout">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="w-layout-grid header_component is-layout2">
                <div className="header_content">
                  <h1>
                    Changing the Way Schools and Local Governments Use{" "}
                    <span className="span-wrapper">
                      Data
                      <div
                        className="span-element is-line"
                        data-w-id="657cd973-a755-6fc5-db16-015f4a75424a"
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
                            <clipPath id="__lottie_element_73">
                              <rect width={1098} height={54} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_77">
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
                            <mask id="__lottie_element_77_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_77" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_73)">
                            <g
                              mask="url(#__lottie_element_77_1)"
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
                    <p className="text-size-medium">
                      Founded in 2012 by two educators in a small garage, we
                      embarked on a mission with one focus: to empower educators
                      and organizations by transforming their data into
                      actionable insights.
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
                      to="/contact"
                      className="button w-inline-block"
                    >
                      <div>Get a tour</div>
                      <div className="icon-embed-xxsmall w-embed" style={{}}>
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
                    <div className="w-layout-grid image-grid_image-layout-4">
                      <div
                        id="w-node-f5466cf9-9538-2885-d79e-6c4ecacfda94-5c74a00c"
                        className="image-grid_image-wrapper is-01-layout-4"
                      >
                        <div
                          id="w-node-f5466cf9-9538-2885-d79e-6c4ecacfda95-5c74a00c"
                          className="image-wrapper-1-1 is-rounded-image is-box-shadow z-index-2"
                        >
                          <img
                            src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af0cb4a186d7890d69fd8_teacher-high-five-with-pupil.webp"
                            loading="eager"
                            width={500}
                            height={334}
                            alt="Teacher high-fiving student in classroom."
                            srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af0cb4a186d7890d69fd8_teacher-high-five-with-pupil-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af0cb4a186d7890d69fd8_teacher-high-five-with-pupil-p-800.webp 800w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af0cb4a186d7890d69fd8_teacher-high-five-with-pupil-p-1080.webp 1080w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650af0cb4a186d7890d69fd8_teacher-high-five-with-pupil.webp 1500w"
                            sizes="(max-width: 479px) 82vw, (max-width: 767px) 59vw, (max-width: 991px) 50vw, 28vw"
                            className="image-wrapper_image"
                          />
                        </div>
                        <div className="image-grid_bg-element-01">
                          <div
                            aria-hidden="true"
                            role="presentation"
                            className="bg-element is-circle is-green"
                            style={{
                              transform:
                                "translate3d(0px, -1.99972rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              willChange: "transform"
                            }}
                          />
                        </div>
                      </div>
                      <div
                        id="w-node-f5466cf9-9538-2885-d79e-6c4ecacfda9a-5c74a00c"
                        className="image-grid_image-wrapper is-02-layout-4"
                      >
                        <div
                          id="w-node-f5466cf9-9538-2885-d79e-6c4ecacfda9b-5c74a00c"
                          className="image-wrapper-3-2 is-rounded-image is-box-shadow z-index-2"
                        >
                          <img
                            src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging.webp"
                            loading="eager"
                            width={500}
                            height={334}
                            alt="Two girls celebrating exam results in school corridor."
                            srcSet="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging-p-500.webp 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging-p-800.webp 800w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging-p-1080.webp 1080w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging-p-1600.webp 1600w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging-p-2000.webp 2000w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650aefae6ffa66871df51620_girl-friends-hugging.webp 2185w"
                            sizes="(max-width: 479px) 82vw, (max-width: 767px) 59vw, (max-width: 991px) 50vw, 28vw"
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
                                "translate3d(0px, -1.99972rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              willChange: "transform"
                            }}
                          />
                        </div>
                      </div>
                      <div
                        id="w-node-f5466cf9-9538-2885-d79e-6c4ecacfda9f-5c74a00c"
                        className="image-grid_floating-image-layout-4"
                      >
                        <div className="image-wrapper-4-3 is-rounded-image is-box-shadow z-index-2">
                          <img
                            src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650457d3ed60b904f0fbddc4_darwin-finance-portal-image-02.webp"
                            loading="eager"
                            width="324.5"
                            height={235}
                            alt="darwin financial portal image."
                            srcSet="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705762842/whydarwinmodule1_idkrlx.png 500w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650457d3ed60b904f0fbddc4_darwin-finance-portal-image-02-p-800.webp 800w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650457d3ed60b904f0fbddc4_darwin-finance-portal-image-02-p-1080.webp 1080w, https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650457d3ed60b904f0fbddc4_darwin-finance-portal-image-02.webp 1298w"
                            sizes="(max-width: 479px) 53vw, (max-width: 991px) 46vw, 22vw"
                            className="image-wrapper_image is-aligned-right"
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
                                "translate3d(0px, -1.99972rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="section_info">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="w-layout-grid two-column-content z-index-2">
              <div
                id="w-node-b99f0fa9-c638-b681-9f3c-bbeacbd24a52-5c74a00c"
                className="image-wrapper-4-3 is-rounded-image is-box-shadow"
              >
                <img
                  src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650c4b7e13e3fb7a3ca5a929_darwin-team-image.webp"
                  loading="eager"
                  width={649}
                  height={475}
                  alt="darwin team photograph."
                  srcSet="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705988603/teamcompany_mq2xu5.png"
                  sizes="(max-width: 767px) 92vw, (max-width: 991px) 90vw, 35vw"
                  className="image-wrapper_image"
                />
              </div>
              <div
                id="w-node-b99f0fa9-c638-b681-9f3c-bbeacbd24a49-5c74a00c"
                className="content-wrapper"
              >
                <h2 className="span-heading">
                  <span className="z-index-2">We’re Turning Data into</span>{" "}
                  <span className="span-wrapper">
                    Opportunities
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
                          <clipPath id="__lottie_element_80">
                            <rect width={1098} height={54} x={0} y={0} />
                          </clipPath>
                          <g id="__lottie_element_84">
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
                                  d="M0 0"
                                />
                              </g>
                            </g>
                          </g>
                          <mask id="__lottie_element_84_1" mask-type="alpha">
                            <use xlinkHref="#__lottie_element_84" />
                          </mask>
                        </defs>
                        <g clipPath="url(#__lottie_element_80)">
                          <g
                            mask="url(#__lottie_element_84_1)"
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
                </h2>
                <div className="hide-this">
                  <div className="heading-style-h2">Opportunities</div>
                </div>
                <div className="spacer-small" />
                <div className="text-rich-text w-richtext">
                  <p>
                    Built by a team of educators and data scientists, we combine
                    wide-ranging district and school data with publicly
                    available K-12 data to provide real-time, actionable
                    insights on academic, operational, and fiscal performance.​
                  </p>
                  <p>
                    Our mission is to simplify data and performance analytics
                    for educators, allowing them to focus on helping students
                    thrive. To achieve this, we transform data into actionable
                    intelligence, empowering educators to enable every student
                    to achieve their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-element-wrapper is-top-left">
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
    </section>
    {/* <section className="section_info">
      <div className="padding-global">
        <div className="container-medium">
          <div className="spacer-medium" />
          <div
            id="w-node-af108036-db1d-c811-d75e-5e1db47549d3-5c74a00c"
            className="z-index-2"
          >
            <div
              id="w-node-e163a5e4-77bc-8b41-c1ed-78dad95af49b-5c74a00c"
              className="max-width-large align-center"
            >
              <div
                id="w-node-_74692b04-d3b5-468e-892b-498077d7c5d0-5c74a00c"
                className="text-align-center"
              >
                <div className="text-rich-text w-richtext">
                  <h2>Data as a Pathway to Success</h2>
                  <p>
                    At the heart of our company is the belief that data should
                    be more than numbers on a screen. It should be a catalyst
                    for change, a tool for growth, and a pathway to success.
                    That's why we remain dedicated to our goal, understanding
                    that every data point represents a student, a teacher, or a
                    possibility; and we’re here to help you make every one of
                    those possibilities a reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-huge" />
        </div>
      </div>
      <div className="bg-element-wrapper is-bottom-right">
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
    </section> */}
    {/* <section
      data-w-id="6b8710f8-6c9f-9352-2c5b-5f22f5f76a12"
      className="section_about-value"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="text-align-center">
              <h2>
                <span className="z-index-2">We Live By Our</span>{" "}
                <span className="span-wrapper">
                  Values
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
                        <clipPath id="__lottie_element_87">
                          <rect width={581} height={376} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_91">
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
                        <mask id="__lottie_element_91_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_91" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_87)">
                        <g
                          mask="url(#__lottie_element_91_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,290.5,188)" opacity={1}>
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
                <div className="heading-style-h2">Values</div>
              </div>
            </div>
            <div className="spacer-xlarge" />
            <div className="z-index-2">
              <div className="slider-main_component">
                <div className="swiper is-cards swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight">
                  <div
                    className="swiper-wrapper is-cards"
                    id="swiper-wrapper-a08a22b479d0c7101"
                    aria-live="off"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-3002.37px, 0px, 0px)",
                      height: 352
                    }}
                  >
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate"
                      role="group"
                      aria-label="1 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={0}
                    >
                      <div
                        id="w-node-fad803b8-34fd-7043-e8cd-1101cbb0cf70-5c74a00c"
                        className="card-element is-full-height is-box-shadow is-padding-small"
                      >
                        <h3>Deliver Impact</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>We deliver accurate performance analytics</li>
                            <li>We believe speed matters</li>
                            <li>We know our customer success is our success</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-prev"
                      role="group"
                      aria-label="2 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={1}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Win Together</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We work together as one team, communicate openly,
                              with empathy
                            </li>
                            <li>
                              We work together to do what's best for darwin
                              and our customers
                            </li>
                            <li>
                              We appreciate and celebrate each other and our
                              successes
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-active"
                      role="group"
                      aria-label="3 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={2}
                    >
                      <div className="card-element is-padding-small is-full-height is-box-shadow">
                        <h3>Drive Results</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We take initiative, ownership, and responsibility
                            </li>
                            <li>We deliver on commitments</li>
                            <li>
                              We own our mistakes and take positive action
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-next"
                      role="group"
                      aria-label="4 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={3}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Adapt &amp; Evolve</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We learn from one another because we don't have
                              all the answers
                            </li>
                            <li>
                              We are curious and seek knowledge to fuel our
                              future
                            </li>
                            <li>We are open and humble</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate"
                      role="group"
                      aria-label="5 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={4}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Forward Thinking &amp; Optimistic</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We consistently plan and work for success,
                              choosing to contribute rather than criticize
                            </li>
                            <li>
                              We view work with a positive eye and an open mind
                            </li>
                            <li>
                              We have the mindset that nothing is impossible,
                              and we will make a difference
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards"
                      role="group"
                      aria-label="1 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={0}
                    >
                      <div
                        id="w-node-fad803b8-34fd-7043-e8cd-1101cbb0cf70-5c74a00c"
                        className="card-element is-full-height is-box-shadow is-padding-small"
                      >
                        <h3>Deliver Impact</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>We deliver accurate performance analytics</li>
                            <li>We believe speed matters</li>
                            <li>We know our customer success is our success</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-prev"
                      role="group"
                      aria-label="2 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={1}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Win Together</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We work together as one team, communicate openly,
                              with empathy
                            </li>
                            <li>
                              We work together to do what's best for darwin
                              and our customers
                            </li>
                            <li>
                              We appreciate and celebrate each other and our
                              successes
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-active"
                      role="group"
                      aria-label="3 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={2}
                    >
                      <div className="card-element is-padding-small is-full-height is-box-shadow">
                        <h3>Drive Results</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We take initiative, ownership, and responsibility
                            </li>
                            <li>We deliver on commitments</li>
                            <li>
                              We own our mistakes and take positive action
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-next"
                      role="group"
                      aria-label="4 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={3}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Adapt &amp; Evolve</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We learn from one another because we don't have
                              all the answers
                            </li>
                            <li>
                              We are curious and seek knowledge to fuel our
                              future
                            </li>
                            <li>We are open and humble</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards"
                      role="group"
                      aria-label="5 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={4}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Forward Thinking &amp; Optimistic</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We consistently plan and work for success,
                              choosing to contribute rather than criticize
                            </li>
                            <li>
                              We view work with a positive eye and an open mind
                            </li>
                            <li>
                              We have the mindset that nothing is impossible,
                              and we will make a difference
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate"
                      role="group"
                      aria-label="1 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={0}
                    >
                      <div
                        id="w-node-fad803b8-34fd-7043-e8cd-1101cbb0cf70-5c74a00c"
                        className="card-element is-full-height is-box-shadow is-padding-small"
                      >
                        <h3>Deliver Impact</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>We deliver accurate performance analytics</li>
                            <li>We believe speed matters</li>
                            <li>We know our customer success is our success</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-prev"
                      role="group"
                      aria-label="2 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={1}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Win Together</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We work together as one team, communicate openly,
                              with empathy
                            </li>
                            <li>
                              We work together to do what's best for darwin
                              and our customers
                            </li>
                            <li>
                              We appreciate and celebrate each other and our
                              successes
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-active"
                      role="group"
                      aria-label="3 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={2}
                    >
                      <div className="card-element is-padding-small is-full-height is-box-shadow">
                        <h3>Drive Results</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We take initiative, ownership, and responsibility
                            </li>
                            <li>We deliver on commitments</li>
                            <li>
                              We own our mistakes and take positive action
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate swiper-slide-duplicate-next"
                      role="group"
                      aria-label="4 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={3}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Adapt &amp; Evolve</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We learn from one another because we don't have
                              all the answers
                            </li>
                            <li>
                              We are curious and seek knowledge to fuel our
                              future
                            </li>
                            <li>We are open and humble</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide is-cards swiper-slide-duplicate"
                      role="group"
                      aria-label="5 / 5"
                      style={{ width: "412.09px", marginRight: "16.82px" }}
                      data-swiper-slide-index={4}
                    >
                      <div className="card-element is-full-height is-box-shadow is-padding-small">
                        <h3>Forward Thinking &amp; Optimistic</h3>
                        <div className="spacer-small" />
                        <div className="text-rich-text text-size-small w-richtext">
                          <ul role="list">
                            <li>
                              We consistently plan and work for success,
                              choosing to contribute rather than criticize
                            </li>
                            <li>
                              We view work with a positive eye and an open mind
                            </li>
                            <li>
                              We have the mindset that nothing is impossible,
                              and we will make a difference
                            </li>
                          </ul>
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
                  </div>
                  <div className="slider-main_button-wrapper">
                    <a
                      aria-label="Previous slide"
                      href="#"
                      className="slider-main_button swiper-prev w-inline-block"
                      tabIndex={0}
                      role="button"
                      aria-controls="swiper-wrapper-a08a22b479d0c7101"
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
                      aria-controls="swiper-wrapper-a08a22b479d0c7101"
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
        className="section-divider"
      />
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
      <div className="bg-element-wrapper is-middle-left">
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
      <div className="bg-element-wrapper is-bottom-right">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-circle is-large is-green"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
    </section> */}
    {/* <section id="team" className="section_about-team">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <h2>
                  Our{" "}
                  <span className="span-wrapper">
                    Team
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
                          <clipPath id="__lottie_element_94">
                            <rect width={581} height={376} x={0} y={0} />
                          </clipPath>
                          <g id="__lottie_element_98">
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
                          <mask id="__lottie_element_98_1" mask-type="alpha">
                            <use xlinkHref="#__lottie_element_98" />
                          </mask>
                        </defs>
                        <g clipPath="url(#__lottie_element_94)">
                          <g
                            mask="url(#__lottie_element_98_1)"
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
                  <div className="heading-style-h2">team</div>
                </div>
                <div className="spacer-small" />
                <p className="text-size-medium">
                  We're changing the way schools and local governments use data
                </p>
              </div>
            </div>
            <div className="spacer-xlarge" />
            <div className="card-element is-box-shadow">
              <div className="text-align-center">
                <h3>Executive</h3>
              </div>
              <div className="spacer-xlarge" />
              <div className="about-team_list-wrapper w-dyn-list">
                <div role="list" className="about-team_list w-dyn-items">
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Ginny Norton"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton.webp 600w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Ginny Norton</h4>
                      <div>Chief Executive Officer</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Ginny Norton"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e1ec0f28079cb7cfee8_ginny-norton.webp 600w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/ginnyn/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:gnorton@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Ginny Norton
                                </div>
                                <div className="text-size-medium">
                                  Chief Executive Officer
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Ginny is a mission-driven leader with a
                                    passion for education. She has spent her
                                    entire career focused on how innovation can
                                    create a lasting effect on human outcomes,
                                    and has had the opportunity to work in an
                                    area of education that has an outsized
                                    effect on a child’s learning trajectory —
                                    early learning. &nbsp;Ginny has the
                                    experience and determination to help solve
                                    interesting strategic problems in education,
                                    and is ready to take on her new role as CEO
                                    of darwin.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Doug LaFleur"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240.jpeg"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240-p-500.jpeg 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240.jpeg 509w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Doug LaFleur</h4>
                      <div>VP of Business Development</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Doug LaFleur"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240.jpeg"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240-p-500.jpeg 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650e1dcf407395ad8422cdcf_IMG_3240.jpeg 509w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="#"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:dlafleur@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Doug LaFleur
                                </div>
                                <div className="text-size-medium">
                                  VP of Business Development
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Doug was the founder of Eidex, a data
                                    analytic firm that was recently acquired by
                                    darwin. &nbsp;He has also served on his
                                    local school board for 18 years and has a
                                    passion for education and helping districts
                                    better serve their students through the use
                                    of timely, accurate and visualized data.
                                    &nbsp;In his new role with darwin, Doug is
                                    working to develop strategic relationships
                                    with state associations and thought leaders
                                    to build the darwin brand across the
                                    United States.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Linda Kraft"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft.webp 600w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Linda Kraft</h4>
                      <div>VP of Customer Experience</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Linda Kraft"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e640a3ae14953fd99e6_linda-kraft.webp 600w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/linda-kraft-72119210"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:linda@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Linda Kraft
                                </div>
                                <div className="text-size-medium">
                                  VP of Customer Experience
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Linda is an innovative implementation and
                                    professional development leader with over 12
                                    years of industry experience in educational
                                    technology, online learning and data
                                    analytics. &nbsp;She has led successful
                                    implementation and training programs with
                                    districts of all shapes and sizes across the
                                    country, from Chicago Public Schools and the
                                    School District of Philadelphia to
                                    Burlington, Wisconsin – and everything
                                    spanning in-between. &nbsp;Linda, a former
                                    teacher and always an educator at heart, is
                                    considered by districts to be a trusted
                                    advisor and partner in implementation.
                                    &nbsp;She has received peer awards for
                                    leadership and brings experience in building
                                    successful teams, implementations, and
                                    professional development programs to the
                                    darwin team.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Ali Rexrode"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-2000.webp 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode.webp 2560w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Ali Rexrode</h4>
                      <div>Senior Marketing Director</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Ali Rexrode"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode-p-2000.webp 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dd2f3e576a13b9fedc4_alison-rexrode.webp 2560w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/alirexrode/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:arexrode@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Ali Rexrode
                                </div>
                                <div className="text-size-medium">
                                  Senior Marketing Director
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Alison leads the company’s marketing with
                                    over 14 years experience in enterprise SaaS
                                    growth. She’s passionate about growing
                                    brands and solving problems through
                                    automation.
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Timothy Freer"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer.webp 598w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Timothy Freer</h4>
                      <div>VP of Finance</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Timothy Freer"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9eed5e6e8fbe1752fbed_timothy-freer.webp 598w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/timothy-freer-68637012a/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:tfreer@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Timothy Freer
                                </div>
                                <div className="text-size-medium">
                                  VP of Finance
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Tim has worked his entire career in high
                                    growth VC backed SaaS startups. In the past
                                    6 years he has built out two
                                    accounting/finance departments from bottom
                                    up. Experienced in financial modeling,
                                    external/internal audit, contract
                                    negotiations, pricing and tech stack
                                    optimization.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Jim Hall"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall.webp 599w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Jim Hall</h4>
                      <div>Product &amp; Engineering Director</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Jim Hall"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e2aa43e3fc0e967b4cc_jim-hall.webp 599w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/jim-hall-aa805723/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:jhall@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">Jim Hall</div>
                                <div className="text-size-medium">
                                  Product &amp; Engineering Director
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Jim Hall is a software engineer with over a
                                    decade of experience building software. His
                                    experiences range from front-end engineering
                                    to dev ops and everything in between. He
                                    works on full-stack application development,
                                    dev-ops, and project planning at darwin.
                                    Jim gets geeked out about the powerful tools
                                    available to software engineers today and
                                    the capabilities they unlock. In his free
                                    time, Jim likes to spend time with his
                                    family. Jim’s biggest hobby is playing,
                                    writing, illustrating, and publishing
                                    tabletop role-playing games.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Alissa Letkowski"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski.webp 1914w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Alissa Letkowski</h4>
                      <div>Sales Director</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Alissa Letkowski"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ddcdbe2e591477fafdc_alissa-letkowski.webp 1914w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/alissaletkowski/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:aletkowski@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Alissa Letkowski
                                </div>
                                <div className="text-size-medium">
                                  Sales Director
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Alissa Letkowski comes to darwin with
                                    expertise in bringing workflow management
                                    and transparency tools to state and local
                                    governments and the education sector. As
                                    Sales Director, she’s passionate about
                                    bringing the darwin solution to educators
                                    across the U.S., allowing them to make
                                    data-driven decisions that impact the
                                    communities they serve for the better.
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f108eea9-53b6-4048-6c5e-221be23af5cf-5c74a00c"
                    role="listitem"
                    className="about-team_item w-dyn-item"
                  >
                    <div className="content-wrapper">
                      <div className="image-wrapper-1-1 is-rounded-image">
                        <img
                          height={256}
                          loading="lazy"
                          width={256}
                          alt="Katie Sohacki"
                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki.webp"
                          sizes="(max-width: 767px) 83vw, (max-width: 991px) 38vw, 20vw"
                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki.webp 600w"
                          className="image-wrapper_image"
                        />
                      </div>
                      <div className="spacer-small" />
                      <h4>Katie Sohacki</h4>
                      <div>Operations &amp; HR Director</div>
                      <div className="spacer-small" />
                    </div>
                    <div className="content-wrapper">
                      <a
                        fs-scrolldisable-element="disable"
                        data-w-id="18c55b95-a609-fb62-6275-d9667d4e825f"
                        href="#"
                        className="button is-link w-inline-block"
                      >
                        <div className="content-wrapper">
                          <div>Read more</div>
                        </div>
                        <div className="icon-embed-xxsmall w-embed" style={{}}>
                          <svg
                            aria-hidden="true"
                            role="img"
                            aria-label="Arrow down"
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
                      <div
                        style={{ display: "none", opacity: 0 }}
                        className="modal_component"
                      >
                        <div
                          fs-scrolldisable-element="preserve"
                          style={{
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                          }}
                          className="modal_content-wrapper"
                        >
                          <a
                            fs-scrolldisable-element="enable"
                            aria-label="Close Modal"
                            data-w-id="18c55b95-a609-fb62-6275-d9667d4e8265"
                            href="#"
                            className="modal_close-button w-inline-block"
                          >
                            <div className="icon-embed-xsmall w-embed">
                              <svg
                                aria-hidden="true"
                                role="img"
                                aria-label="Close icon"
                                width="100%"
                                height="100%"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="hide">Close Modal</div>
                          </a>
                          <div className="max-width-large align-center">
                            <div className="modal_layout">
                              <div className="content-wrapper">
                                <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                  <img
                                    height={256}
                                    loading="eager"
                                    width={256}
                                    alt="Katie Sohacki"
                                    src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki.webp"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e39dbe2e591478025fd_katie-sohacki.webp 600w"
                                    className="image-wrapper_image"
                                  />
                                </div>
                                <div className="spacer-small hide-mobile-landscape" />
                                <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                  <a
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                    href="https://www.linkedin.com/in/katiecarroll12/"
                                    target="_blank"
                                    className="social-link w-inline-block"
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
                                    aria-label="Email"
                                    rel="noopener"
                                    href="mailto:katie@darwin.com"
                                    className="social-link w-inline-block"
                                  >
                                    <div className="icon-embed-small w-embed">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        aria-label="Email"
                                        className="iconify iconify--ic"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="hide">Email</div>
                                  </a>
                                </div>
                              </div>
                              <div className="text-align-left">
                                <div className="heading-style-h3">
                                  Katie Sohacki
                                </div>
                                <div className="text-size-medium">
                                  Operations &amp; HR Director
                                </div>
                                <div className="spacer-xsmall" />
                                <div className="text-rich-text w-richtext">
                                  <p>
                                    Katie joins darwin with a background in
                                    office and project management for community
                                    organizations and local government. She has
                                    a degree in Business Administration and
                                    applies her broad experiences to many
                                    different facets of darwin’s operations.{" "}
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          fs-scrolldisable-element="enable"
                          data-w-id="18c55b95-a609-fb62-6275-d9667d4e8287"
                          className="modal_background-overlay"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-large" />
            <div
              data-hover="false"
              data-delay={400}
              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9c6"
              className="about-team_dropdown is-box-shadow w-dropdown"
            >
              <div
                className="about-team_dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-3"
                aria-controls="w-dropdown-list-3"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <h3>Sales &amp; Marketing</h3>
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                  className="about-team_dropdown-icon"
                >
                  <div className="icon-embed-small w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      aria-label="Arrow down"
                      width="100%"
                      height="100%"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.853578 1.56048L6.56058 7.26748L12.2676 1.56048L10.8536 0.146484L6.56058 4.43948L2.26758 0.146484L0.853578 1.56048Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <nav
                className="about-team_dropdown-list w-dropdown-list"
                id="w-dropdown-list-3"
                aria-labelledby="w-dropdown-toggle-3"
              >
                <div
                  style={{ width: "100%", height: 0 }}
                  className="about-team_dropdown-content-wrapper"
                >
                  <div
                    style={{ opacity: 0 }}
                    className="about-team_dropdown-padding"
                  >
                    <div className="about-team_list-wrapper w-dyn-list">
                      <div role="list" className="about-team_list w-dyn-items">
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Pete Solar"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Pete Solar</h4>
                            <div>Senior Account Executive</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Pete Solar"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ea9dd4767c8e428aafa_peter-solar.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/pete-solar-65a598b"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:peter@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Pete Solar
                                      </div>
                                      <div className="text-size-medium">
                                        Senior Account Executive
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Pete has over 20 years of K-12 sales
                                          experience. He has a history of being
                                          a top performer in sales leadership
                                          roles, bringing experience in
                                          management, strategy development, and
                                          business growth and process to the
                                          darwin team.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Susie Manikas"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Susie Manikas</h4>
                            <div>Senior Account Executive</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Susie Manikas"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ed21eecdd4629b61322_susie-manikas.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/susie-manikas-b7845414/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:smanikas@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Susie Manikas
                                      </div>
                                      <div className="text-size-medium">
                                        Senior Account Executive
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Susie comes to darwin as a Senior
                                          Account Executive, with a diverse
                                          background in SaaS sales. She has a
                                          passion for building long-standing
                                          relationships with her clients and
                                          loves helping to solve problems with
                                          innovative technology. &nbsp;Susie
                                          brings industry experience in the
                                          Ed-Tech space and prides herself on
                                          creating an exceptional customer
                                          experience. It is with much enthusiasm
                                          that she looks forward to assisting
                                          district leaders with their meaning
                                          and impactful work.{" "}
                                        </p>
                                        <p>
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Tom Potapenko"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Tom Potapenko</h4>
                            <div>Inside Sales</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Tom Potapenko"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9efce2c33de3997d991a_tom-potapenko.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/tomnickspotapenko/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:tpotapenko@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Tom Potapenko
                                      </div>
                                      <div className="text-size-medium">
                                        Inside Sales
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Tom is a sales professional and expert
                                          problem solver that has helped many
                                          state and local government agencies
                                          including law enforcement, cities,
                                          counties, school districts, colleges
                                          and universities solve complex issues
                                          using state of the art SaaS solutions
                                          in his tenure. He is bringing his
                                          problem-solving experience to the
                                          education sector to help school
                                          districts solve complex issues with
                                          the darwin platform.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Stafford Jones"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-2000.webp 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones.webp 2560w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Stafford Jones</h4>
                            <div>Growth &amp; Content Marketing Manager </div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Stafford Jones"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-1600.webp 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones-p-2000.webp 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ec4e2c33de3997d5176_stafford-jones.webp 2560w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="#"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:sjones@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Stafford Jones
                                      </div>
                                      <div className="text-size-medium">
                                        Growth &amp; Content Marketing Manager{" "}
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Stafford is an experienced marketing
                                          leader currently serving as the
                                          Content Marketing Manager at darwin.
                                        </p>
                                        <p>
                                          With a career that spans across
                                          notable organizations like Walt Disney
                                          Parks &amp; Resorts and Cadre,
                                          Stafford’s work reflects his deep
                                          passion for fostering meaningful
                                          connections.
                                        </p>
                                        <p>
                                          Beyond driving customer advocacy and
                                          boosting brand awareness, he strives
                                          to bridge the divide between
                                          businesses and their audiences through
                                          relevant content.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Taylor Lynch"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ee179fcf594d5cc3f87_taylor-frank.webp"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Taylor Lynch</h4>
                            <div>Marketing Growth Coordinator</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Taylor Lynch"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9ee179fcf594d5cc3f87_taylor-frank.webp"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/taylor-frank-a8271620a/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:tfrank@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Taylor Lynch
                                      </div>
                                      <div className="text-size-medium">
                                        Marketing Growth Coordinator
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          As the Marketing Growth Coordinator,
                                          Taylor helps develop and support
                                          marketing efforts of darwin’s
                                          marketing team. Taylor is a recent
                                          graduate from Grand Valley State
                                          University with a Bachelors of
                                          Business degree in Marketing and Human
                                          Resources. She is kicking off her
                                          career with the darwin team!
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-c51fb4bb-3a63-a0b8-abeb-624657f1f9d1-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Josh Waddle"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1).png"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-500.png 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-800.png 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-1080.png 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1).png 1260w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Josh Waddle</h4>
                            <div>Senior Account Executive</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9dc"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9e2"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Josh Waddle"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1).png"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-500.png 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-800.png 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1)-p-1080.png 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/6511b3114e2e87c5191f5fa1_JWaddle%20300dpi%20(1).png 1260w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="#"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:jwaddle@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Josh Waddle
                                      </div>
                                      <div className="text-size-medium">
                                        Senior Account Executive
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Josh Waddle comes to darwin with
                                          expertise in knowing the insight that
                                          Data and Analytics can bring to a
                                          school district. Josh comes from a
                                          long career in EdTech SaaS sales and
                                          has worked with school districts
                                          across the U.S. As a Senior Sales
                                          Executive he’s excited to continue his
                                          work with the Top Performing districts
                                          in Texas and Beyond.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="c51fb4bb-3a63-a0b8-abeb-624657f1f9fc"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="spacer-large" />
            <div
              data-hover="false"
              data-delay={400}
              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7569"
              className="about-team_dropdown is-box-shadow w-dropdown"
            >
              <div
                className="about-team_dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-4"
                aria-controls="w-dropdown-list-4"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <h3>Customer Success</h3>
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                  className="about-team_dropdown-icon"
                >
                  <div className="icon-embed-small w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      aria-label="Arrow down"
                      width="100%"
                      height="100%"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.853578 1.56048L6.56058 7.26748L12.2676 1.56048L10.8536 0.146484L6.56058 4.43948L2.26758 0.146484L0.853578 1.56048Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <nav
                className="about-team_dropdown-list w-dropdown-list"
                id="w-dropdown-list-4"
                aria-labelledby="w-dropdown-toggle-4"
              >
                <div
                  style={{ width: "100%", height: 0 }}
                  className="about-team_dropdown-content-wrapper"
                >
                  <div
                    style={{ opacity: 0 }}
                    className="about-team_dropdown-padding"
                  >
                    <div className="about-team_list-wrapper w-dyn-list">
                      <div role="list" className="about-team_list w-dyn-items">
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Dawn Schupbach"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Dawn Schupbach</h4>
                            <div>Customer Success Manager</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Dawn Schupbach"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e0f79f83432f6d13d2b_dawn-schupbach.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/dawn-schupbach-7034b730/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:dawn@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Dawn Schupbach
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Success Manager
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Dawn has a Masters in Counseling from
                                          Siena Heights and a BA from Hillsdale
                                          College with a major in Mathematics
                                          and minor in Biology. She has 30 years
                                          of experience teaching high school in
                                          Michigan. During her teaching career
                                          she has chaired and been on numerous
                                          School Improvement committees and
                                          served as department chairperson and
                                          master scheduler. She has trained
                                          staff on numerous technology based
                                          educational programs.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Marty Lappe"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Marty Lappe</h4>
                            <div>Customer Success Manager</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Marty Lappe"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e7d79fcf594d5cbaad5_martin-lappe.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/martinlappe/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:mlappe@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Marty Lappe
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Success Manager
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Marty comes to darwin with over 15
                                          years of teaching in k-8 classrooms,
                                          as well as increasing leadership
                                          responsibilities in education
                                          culminating as a School Administrator.
                                          In addition, he has owned a small
                                          business in SW Michigan for the past
                                          14 years. As a school leader, he has
                                          supported many areas of education from
                                          state and federal programming, working
                                          with school improvement, instructional
                                          coaching, evaluating teachers,
                                          developing and reviewing curriculum,
                                          to creating and facilitating
                                          professional development, strategic
                                          planning, and budgeting. Marty looks
                                          forward to using his background
                                          knowledge to support schools with
                                          darwin as an Customer Success
                                          Manager.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Myra Munroe"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe.webp 995w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Myra Munroe</h4>
                            <div>Customer Success Manager</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Myra Munroe"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d6390bc90c64035fe8482_myra-monroe.webp 995w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="#"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:mmunroe@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Myra Munroe
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Success Manager
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Myra has over 30 years of educational
                                          experience as a teacher of special and
                                          general education, principal,
                                          assistant superintendent,
                                          superintendent, trainer, consultant,
                                          executive coach, instructional
                                          specialist, professor, and presenter
                                          in preK-12 to Higher Education
                                          settings. As a lead learner, Myra has
                                          experience in the continuous
                                          improvement process, curriculum and
                                          staff development, budgeting,
                                          strategic management, educator
                                          evaluation and growth, data analysis,
                                          instructional coaching as well as
                                          assisting schools not making adequate
                                          yearly progress in ELA and/or Math
                                          including the various target
                                          populations. Myra is excited to
                                          continue the rewarding work of
                                          supporting educators as a Customer
                                          Success Manager at darwin.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Kevin Smith"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Kevin Smith</h4>
                            <div>Customer Success Manager</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Kevin Smith"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9e53dd4767c8e4283e1e_kevin-smith.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="#"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:ksmith@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Kevin Smith
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Success Manager
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Kevin comes to us with 24 years of
                                          experience in municipal finance and
                                          budgeting from the City of Battle
                                          Creek. He’s also a previous darwin
                                          user, which allows him to identify
                                          with users and is excited to
                                          contribute to the Customer Experience
                                          Team! His experience and approach to
                                          darwin’s power of “Performance
                                          Analytics” allows him to integrate and
                                          assist your team with confidence.
                                          Kevin graduated with a bachelor’s
                                          degree in Accountancy from Ferris
                                          State University, where he was also
                                          awarded the Distinguished Alumni Award
                                          in 2012. Kevin loves sports, fishing,
                                          hunting, golfing, motorcycle trips,
                                          relaxing at the lake and vacationing
                                          in Cabo San Lucas.{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Andy Ingall"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019.jpg"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-500.jpg 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-800.jpg 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-1080.jpg 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-1600.jpg 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-2000.jpg 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019.jpg 2215w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Andy Ingall</h4>
                            <div>Customer Success Manager</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Andy Ingall"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019.jpg"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-500.jpg 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-800.jpg 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-1080.jpg 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-1600.jpg 1600w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019-p-2000.jpg 2000w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/653ac1a2bfc5bca058414b29_Ingall%202019.jpg 2215w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/andrew-ingall-2a0837102/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:aingall@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Andy Ingall
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Success Manager
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Andy has been a user of data and
                                          education technology throughout his
                                          career. He joined Eidex in early 2022
                                          and then transitioned to the Munetix
                                          team at the time of acquisition.
                                          Prior, he was Superintendent of the
                                          Grand Haven Area Public Schools from
                                          July 2015 until his retirement in
                                          December 2021. Andy also spent 15
                                          years as an administrator with the
                                          Chelsea School District including time
                                          as Superintendent, Executive Director
                                          of Instruction and Community
                                          Education, and middle school
                                          Principal. Andy taught middle and high
                                          school math with the Okemos Public
                                          Schools prior to becoming an
                                          administrator.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_71a188a1-05de-df20-3a7b-c6f4738d7574-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Ian Wilkewitz"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Ian Wilkewitz</h4>
                            <div>Customer Data &amp; Technology Specialist</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="71a188a1-05de-df20-3a7b-c6f4738d757f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="71a188a1-05de-df20-3a7b-c6f4738d7585"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Ian Wilkewitz"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dbd980d2066a9d2efab_ian-wilkewitz.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/ianwi/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:iwilkewitz@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Ian Wilkewitz
                                      </div>
                                      <div className="text-size-medium">
                                        Customer Data &amp; Technology
                                        Specialist
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Ian is a graduate from Grand Valley
                                          State University With a Bachelor’s of
                                          Science in Computer Science. While at
                                          GVSU, he spent time abroad in Germany
                                          and Switzerland studying data science.
                                          As a data researcher, Ian helps
                                          darwin expand into new states to
                                          provide more schools and
                                          municipalities with the ability to get
                                          the most out of their data.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="71a188a1-05de-df20-3a7b-c6f4738d759f"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="spacer-large" />
            <div
              data-hover="false"
              data-delay={400}
              data-w-id="e042d447-b322-5b53-226a-3b9ff2f4d306"
              className="about-team_dropdown is-box-shadow w-dropdown"
            >
              <div
                className="about-team_dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-5"
                aria-controls="w-dropdown-list-5"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <h3>Development</h3>
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                  className="about-team_dropdown-icon"
                >
                  <div className="icon-embed-small w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      aria-label="Arrow down"
                      width="100%"
                      height="100%"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.853578 1.56048L6.56058 7.26748L12.2676 1.56048L10.8536 0.146484L6.56058 4.43948L2.26758 0.146484L0.853578 1.56048Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <nav
                className="about-team_dropdown-list w-dropdown-list"
                id="w-dropdown-list-5"
                aria-labelledby="w-dropdown-toggle-5"
              >
                <div
                  style={{ width: "100%", height: 0 }}
                  className="about-team_dropdown-content-wrapper"
                >
                  <div
                    style={{ opacity: 0 }}
                    className="about-team_dropdown-padding"
                  >
                    <div className="about-team_list-wrapper w-dyn-list">
                      <div role="list" className="about-team_list w-dyn-items">
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Buzz Brown"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Buzz Brown</h4>
                            <div>Chairman</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Buzz Brown"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9dea05654630a1b84f70_buzz-brown.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/buzzbrown"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:buzz@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Buzz Brown
                                      </div>
                                      <div className="text-size-medium">
                                        Chairman
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          A digital pioneer, Buzz has played a
                                          key role since the early 1970’s in the
                                          development and sale of computer and
                                          database products. After launching a
                                          successful consultancy in 2000, he
                                          turned his energies to darwin a
                                          decade later. In addition to handling
                                          the technical side of the business,
                                          Buzz works with state and regional
                                          governments as an efficiency expert.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Hailey Kim"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Hailey Kim</h4>
                            <div>Product Owner</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Hailey Kim"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bff7492160ad515f585_hailey-kim.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/seahyun-kim"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:hailey@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Hailey Kim
                                      </div>
                                      <div className="text-size-medium">
                                        Product Owner
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Hailey comes to us from South Korea by
                                          way of Central Michigan University,
                                          where she graduated with a degree in
                                          Business Information Systems. Hailey
                                          has worked in data analytics with
                                          organizations ranging from Consumers
                                          Energy to the Michigan Department of
                                          Health and Human Services, and has
                                          Green Belt Certification in Lean Six
                                          Sigma as well as SAP Global
                                          Certification.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Matthew Dixon"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Matthew Dixon</h4>
                            <div>Product Owner, Public Data</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Matthew Dixon"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bf35858957e3a965909_matthew-dixon.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/matthew-dixon-590660160/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:mdixon@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Matthew Dixon
                                      </div>
                                      <div className="text-size-medium">
                                        Product Owner, Public Data
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Matthew joined the darwin team
                                          during his last semester at Oakland
                                          University, where he earned his
                                          Bachelor’s degree in Management
                                          Information Systems. He has
                                          contributed to adding new
                                          visualizations to the darwin system,
                                          as well as assisting in analysis to
                                          help customers better understand and
                                          learn from their data.
                                        </p>
                                        <p>
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Michael Hall"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Michael Hall</h4>
                            <div>Data Engineer</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Michael Hall"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9db190213b0506b4b14d_michael-hall.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/michael-hall-759328201/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:mhall@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Michael Hall
                                      </div>
                                      <div className="text-size-medium">
                                        Data Engineer
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Mike started working in the data
                                          engineering field after graduating
                                          from Michigan State University. Before
                                          joining darwin he worked in IT and
                                          analyzed website data. Now he builds
                                          systems to process parcel-level data.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Joshua Anderson"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson.webp 600w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Joshua Anderson</h4>
                            <div>Data Engineer</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Joshua Anderson"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/64fb9bd0f3e576a13b9d761a_joshua-anderson.webp 600w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="https://www.linkedin.com/in/jewanderson/"
                                          target="_blank"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:janderson@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Joshua Anderson
                                      </div>
                                      <div className="text-size-medium">
                                        Data Engineer
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Joshua started working as a data
                                          engineer after graduating from Eastern
                                          Washington University with a degree in
                                          Data Science. &nbsp;Before joining
                                          darwin he consulted as a data
                                          engineer for a large financial firm.
                                          &nbsp;Now he processes municipal data
                                          to provide parcel level insight to
                                          darwin clients.
                                          <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-b7ac53cf-6154-ab5e-3ac9-a77c6d12cc94-5c74a00c"
                          role="listitem"
                          className="about-team_item w-dyn-item"
                        >
                          <div className="content-wrapper">
                            <div className="image-wrapper-1-1 is-rounded-image">
                              <img
                                height={256}
                                loading="lazy"
                                width={256}
                                alt="Nick Spruit"
                                src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit.webp"
                                sizes="100vw"
                                srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit.webp 1454w"
                                className="image-wrapper_image"
                              />
                            </div>
                            <div className="spacer-small" />
                            <h4>Nick Spruit</h4>
                            <div>Data Systems Engineer</div>
                            <div className="spacer-small" />
                          </div>
                          <div className="content-wrapper">
                            <a
                              fs-scrolldisable-element="disable"
                              data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cc9f"
                              href="#"
                              className="button is-link w-inline-block"
                              tabIndex={0}
                            >
                              <div>Read more</div>
                              <div
                                className="icon-embed-xxsmall w-embed"
                                style={{}}
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  aria-label="Arrow down"
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
                            <div
                              style={{ display: "none", opacity: 0 }}
                              className="modal_component"
                            >
                              <div
                                fs-scrolldisable-element="preserve"
                                style={{
                                  transform:
                                    "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d"
                                }}
                                className="modal_content-wrapper"
                              >
                                <a
                                  fs-scrolldisable-element="enable"
                                  aria-label="Close Modal"
                                  data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12cca5"
                                  href="#"
                                  className="modal_close-button w-inline-block"
                                  tabIndex={0}
                                >
                                  <div className="icon-embed-xsmall w-embed">
                                    <svg
                                      aria-hidden="true"
                                      role="img"
                                      aria-label="Close icon"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <div className="hide">Close Modal</div>
                                </a>
                                <div className="max-width-large align-center">
                                  <div className="modal_layout">
                                    <div className="content-wrapper">
                                      <div className="image-wrapper-1-1 is-team-modal is-rounded-image">
                                        <img
                                          height={256}
                                          loading="eager"
                                          width={256}
                                          alt="Nick Spruit"
                                          src="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit.webp"
                                          sizes="100vw"
                                          srcSet="https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-500.webp 500w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-800.webp 800w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit-p-1080.webp 1080w, https://assets-global.website-files.com/64ecc548af720ceec70c8b7c/650d63bd2641a46e4f6805d6_nick-spruit.webp 1454w"
                                          className="image-wrapper_image"
                                        />
                                      </div>
                                      <div className="spacer-small hide-mobile-landscape" />
                                      <div className="w-layout-grid about-team_social hide-mobile-landscape">
                                        <a
                                          aria-label="LinkedIn"
                                          rel="noopener"
                                          href="#"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
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
                                          aria-label="Email"
                                          rel="noopener"
                                          href="mailto:nspruit@darwin.com"
                                          className="social-link w-inline-block"
                                          tabIndex={0}
                                        >
                                          <div className="icon-embed-small w-embed">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              aria-label="Email"
                                              className="iconify iconify--ic"
                                              width="100%"
                                              height="100%"
                                              preserveAspectRatio="xMidYMid meet"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                                              />
                                            </svg>
                                          </div>
                                          <div className="hide">Email</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-align-left">
                                      <div className="heading-style-h3">
                                        Nick Spruit
                                      </div>
                                      <div className="text-size-medium">
                                        Data Systems Engineer
                                      </div>
                                      <div className="spacer-xsmall" />
                                      <div className="text-rich-text w-richtext">
                                        <p>
                                          Nick graduated from Grand Valley State
                                          University with a degree in computer
                                          science. He worked for several years
                                          as a data engineer, designing and
                                          building data integrations for K-12
                                          educational data. Now Nick uses that
                                          experience at darwin to help build
                                          student-level data pipelines.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                fs-scrolldisable-element="enable"
                                data-w-id="b7ac53cf-6154-ab5e-3ac9-a77c6d12ccbf"
                                className="modal_background-overlay"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <section className="section_cta">
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-medium">
            <div className="text-align-center z-index-1">
              <h2 className="span-heading">
                <span className="span-wrapper">
                  Join
                  <div
                    className="span-element is-scribble is-small-word"
                    data-w-id="b39f8e27-be01-cf8c-0311-0707f450e84c"
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
                        <clipPath id="__lottie_element_101">
                          <rect width={581} height={376} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_105">
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
                        <mask id="__lottie_element_105_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_105" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_101)">
                        <g
                          mask="url(#__lottie_element_105_1)"
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
                Our Team!
              </h2>
              <div className="hide-this">
                <div className="heading-style-h2">Join</div>
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
                  to="/contact"
                  className="button is-alternate w-inline-block"
                >
                  <div>Open positions</div>
                  <div className="icon-embed-xxsmall w-embed" style={{}}>
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
  </main>
  <section
    data-w-id="d62b5bb8-cf8f-48fd-3ec0-25c003e9e936"
    className="section_why-darwin"
  >
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-medium">
          <div className="w-layout-grid why-darwin_layout">
            <div
              id="w-node-_44cac3d9-8c15-7071-5ad8-de6a6ae825c7-03e9e936"
              className="image-wrapper-4-3 is-rounded-image is-box-shadow"
            >
              <img
                src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1705762842/whydarwinmodule1_idkrlx.png"
                loading="lazy"
                width={540}
                height={374}
                alt="darwin portal image."
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
                        <clipPath id="__lottie_element_108">
                          <rect width={1098} height={54} x={0} y={0} />
                        </clipPath>
                        <g id="__lottie_element_112">
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
                                d="M0 0"
                              />
                            </g>
                          </g>
                        </g>
                        <mask id="__lottie_element_112_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_112" />
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_108)">
                        <g
                          mask="url(#__lottie_element_112_1)"
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
                      <clipPath id="__lottie_element_115">
                        <rect width={1098} height={54} x={0} y={0} />
                      </clipPath>
                      <g id="__lottie_element_119">
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
                              d="M0 0"
                            />
                          </g>
                        </g>
                      </g>
                      <mask id="__lottie_element_119_1" mask-type="alpha">
                        <use xlinkHref="#__lottie_element_119" />
                      </mask>
                    </defs>
                    <g clipPath="url(#__lottie_element_115)">
                      <g
                        mask="url(#__lottie_element_119_1)"
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
                <div className="icon-embed-xxsmall w-embed" style={{}}>
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
                Have a question? <Link to="/contact">Contact us here.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

  )
}

export default Aboutus