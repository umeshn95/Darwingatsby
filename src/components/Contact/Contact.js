import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {};
  
    if (!formData.firstname.trim()) {
      isValid = false;
      toast.error('FirstName is Required')

    }
  
  
    if (!formData.email.trim()) {
      isValid = false;

      toast.error('Email is Required')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;

      toast.error('Email is Invalid')
    }
  
    if (!formData.message.trim()) {
      isValid = false;

      toast.error("Message is Required")
    }

    
    try {
      const response = await fetch('https://contactapi-for-darwin.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
         if(isValid){
          toast.success("Successfully Submitted")
         }
          // You can reset the form or perform other actions after a successful submission
        } else {
          alert('Submission failed. Please check the form fields.');
        }
      } else {
        alert('Server error. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

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
    <header
      data-w-id="e5292902-118a-0f94-48be-f7beebb6e0fb"
      className="section_contact"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="z-index-2">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h1 className="span-heading">
                    <span className="span-wrapper">
                      Contact
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
                            <clipPath id="__lottie_element_37">
                              <rect width={1098} height={54} x={0} y={0} />
                            </clipPath>
                            <g id="__lottie_element_41">
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
                            <mask id="__lottie_element_41_1" mask-type="alpha">
                              <use xlinkHref="#__lottie_element_41" />
                            </mask>
                          </defs>
                          <g clipPath="url(#__lottie_element_37)">
                            <g
                              mask="url(#__lottie_element_41_1)"
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
                    Us
                  </h1>
                  <div className="hide-this">
                    <div className="heading-style-h1">Contact</div>
                  </div>
                  <div className="spacer-xsmall" />
                  <p className="text-size-medium">We're here to help</p>
                </div>
              </div>
              <div className="max-width-large" />
              <div className="spacer-xlarge" />
              <div className="w-layout-grid contact_component">
                <div className="card-element is-box-shadow">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3">Contact Us</h2>
                    <div className="spacer-medium" />
                  </div>
                  <div className="w-embed w-script">
                    <div
                      id="hbspt-form-8f1bd86b-289a-4a23-99c3-9df04cf53a5c"
                      className="hbspt-form"
                      data-hs-forms-root="true"
                    >
                       <form
        onSubmit={handleSubmit}
        className="hs-form-private hsForm_ff014533-262d-4f2a-9336-efd80fc4dbe4 hs-form-ff014533-262d-4f2a-9336-efd80fc4dbe4 hs-form-ff014533-262d-4f2a-9336-efd80fc4dbe4_8f1bd86b-289a-4a23-99c3-9df04cf53a5c hs-form stacked"
        target="target_iframe_ff014533-262d-4f2a-9336-efd80fc4dbe4"
        data-instance-id="8f1bd86b-289a-4a23-99c3-9df04cf53a5c"
        data-form-id="ff014533-262d-4f2a-9336-efd80fc4dbe4"
        data-portal-id={21052756}
        data-test-id="hsForm_ff014533-262d-4f2a-9336-efd80fc4dbe4"
      >
        <fieldset className="form-columns-2">
          <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
            <label htmlFor="firstname-ff014533-262d-4f2a-9336-efd80fc4dbe4">
              <span>First name</span>
              <span className="hs-form-required">*</span>
            </label>
            <legend className="hs-field-desc" style={{ display: 'none' }} />
            <div className="input">
              <input
                id="firstname-ff014533-262d-4f2a-9336-efd80fc4dbe4"
                name="firstname"
                required=""
                type="text"
                className="hs-input"
                autoComplete="given-name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
            <label htmlFor="lastname-ff014533-262d-4f2a-9336-efd80fc4dbe4">
              <span>Last name</span>
              <span className="hs-form-required">*</span>
            </label>
            <legend className="hs-field-desc" style={{ display: 'none' }} />
            <div className="input">
              <input
                id="lastname-ff014533-262d-4f2a-9336-efd80fc4dbe4"
                name="lastname"
                required=""
                type="text"
                className="hs-input"
                autoComplete="family-name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="form-columns-1">
          <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
            <label htmlFor="email-ff014533-262d-4f2a-9336-efd80fc4dbe4">
              <span>Email</span>
              <span className="hs-form-required">*</span>
            </label>
            <legend className="hs-field-desc" style={{ display: 'none' }} />
            <div className="input">
              <input
                id="email-ff014533-262d-4f2a-9336-efd80fc4dbe4"
                name="email"
                required=""
                type="email"
                className="hs-input"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="form-columns-1">
          <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
            <label htmlFor="company-ff014533-262d-4f2a-9336-efd80fc4dbe4">
              <span>Organization name</span>
            </label>
            <legend className="hs-field-desc" style={{ display: 'none' }} />
            <div className="input">
              <input
                id="company-ff014533-262d-4f2a-9336-efd80fc4dbe4"
                name="organization"
                type="text"
                className="hs-input"
                autoComplete="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="form-columns-1">
          <div className="hs_message hs-message hs-fieldtype-textarea field hs-form-field">
            <label htmlFor="message-ff014533-262d-4f2a-9336-efd80fc4dbe4">
              <span>What are you looking for?</span>
              <span className="hs-form-required">*</span>
            </label>
            <legend className="hs-field-desc" style={{ display: 'none' }} />
            <div className="input">
              <textarea
                id="message-ff014533-262d-4f2a-9336-efd80fc4dbe4"
                className="hs-input hs-fieldtype-textarea"
                name="message"
                required=""
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        
        <div className="hs_submit hs-submit">
          <div className="actions">
            <input
              type="submit"
              className="hs-button primary large"
              defaultValue="Submit"
            />
          </div>
        </div>
      </form>

                    </div>
                  </div>
                </div>
                <div className="contact_content">
                  <div className="w-layout-grid contact_contact-list">
                    <div className="card-element is-box-shadow">
                      <div className="text-align-center">
                        <h3 className="heading-style-h5">
                          Looking for Product and Account Support?
                        </h3>
                        <div className="spacer-xxsmall" />
                        <div>
                          Our customer success team is always here to lend a
                          hand.
                        </div>
                        <div className="spacer-xsmall" />
                        <div className="contact_icon-layout">
                          <div className="icon-embed-small text-color-blue w-embed">
                            <svg
                              aria-hidden="true"
                              role="presentation"
                              aria-label="email icon"
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="contact_email">
                            <a
                              href="mailto:support@darwin.com"
                              className="text-style-link"
                            >
                              support@darwinanalytic.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-element is-box-shadow">
                      <div className="text-align-center">
                        <h3 className="heading-style-h5">
                          Have Questions About darwin Solutions?
                        </h3>
                        <div className="spacer-xxsmall" />
                        <div>
                          Reach out to our solutions team&nbsp;for help.
                        </div>
                        <div className="spacer-xsmall" />
                        <div className="contact_icon-layout">
                          <div className="icon-embed-small text-color-blue w-embed">
                            <svg
                              aria-hidden="true"
                              role="presentation"
                              aria-label="email icon"
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="contact_email">
                            <a
                              href="mailto:sales@darwin.com"
                              className="text-style-link"
                            >
                              sales@darwinanalytic.com
                            </a>
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
      <div className="bg-element-wrapper is-top-left">
        <div
          className="bg-element is-circle is-green is-large"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, -1.48512rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
      <div className="bg-element-wrapper is-bottom-right">
        <div
          aria-hidden="true"
          role="presentation"
          className="bg-element is-triangle is-large"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0px, -1.48512rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
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
    </header>
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
                  src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/650457d42db63adfdd5f8f27_darwin-finance-portal-image.webp"
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
                          <clipPath id="__lottie_element_44">
                            <rect width={1098} height={54} x={0} y={0} />
                          </clipPath>
                          <g id="__lottie_element_48">
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
                          <mask id="__lottie_element_48_1" mask-type="alpha">
                            <use xlinkHref="#__lottie_element_48" />
                          </mask>
                        </defs>
                        <g clipPath="url(#__lottie_element_44)">
                          <g
                            mask="url(#__lottie_element_48_1)"
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
                    Whether it's financial figures or school performance
                    metrics, you can foster trust in your community with the
                    power of transparent reporting right in your hands.
                  </p>
                  <h3>Personalized support</h3>
                  <p>
                    We know your time is valuable. That’s why our team is here
                    to help you set up your data and achieve your goals – every
                    step of the way.
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
  </main>
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
                      <clipPath id="__lottie_element_51">
                        <rect width={1098} height={54} x={0} y={0} />
                      </clipPath>
                      <g id="__lottie_element_55">
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
                      <mask id="__lottie_element_55_1" mask-type="alpha">
                        <use xlinkHref="#__lottie_element_55" />
                      </mask>
                    </defs>
                    <g clipPath="url(#__lottie_element_51)">
                      <g
                        mask="url(#__lottie_element_55_1)"
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
            <div className="display-inlineflex">
              <a href="/demo" className="button is-alternate w-inline-block">
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
              </a>
            </div>
            <div className="content-wrapper">
              <div className="spacer-large" />
              <div>
                Have a question?{" "}
                <a href="/contact" aria-current="page" className="w--current">
                  Contact us here.
                </a>
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

export default Contact