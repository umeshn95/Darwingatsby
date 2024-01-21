import * as React from "react"
import { useState,useEffect } from "react";
import { Link } from 'gatsby';



const Header = ({ siteTitle }) => {
  const [isDropdownOneOpen, setDropdownOneOpen] = useState(false);
  const [isDropdownTwoOpen, setDropdownTwoOpen] = useState(false);
  const [isDropdownThreeOpen, setDropdownThreeOpen] = useState(false);

  const toggleDropdownOne = () => setDropdownOneOpen(!isDropdownOneOpen);
  const toggleDropdownTwo = () => setDropdownTwoOpen(!isDropdownTwoOpen);
  const toggleDropdownThree = () => setDropdownThreeOpen(!isDropdownThreeOpen);

  useEffect(() => {
    const closeDropdowns = () => {
      setDropdownOneOpen(false);
      setDropdownTwoOpen(false);
      setDropdownThreeOpen(false);
    };

    // Add event listener for Gatsby navigation
    window.addEventListener("gatsby-navigate", closeDropdowns);

    // Cleanup
    return () => {
      window.removeEventListener("gatsby-navigate", closeDropdowns);
    };
  }, []);

 return (<div className="nav_component-wrapper">
    <div
      data-animation="default"
      className="nav_component w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="8cd9a279-4460-1c73-32fb-6c71cafbee63"
      role="banner"
      data-duration={400}
    >
      <div className="nav_container">
        <a
          href="#main"
          className="button is-skip-to-main-content w-button w--current"
        >
          Skip to main content
        </a>
        <a
          href="/"
          title="darwin Homepage"
          aria-label="Homepage"
          className="nav_logo-link w-nav-brand"
        >
          <div className="logo-embed w-embed">
            <strong>Darwin</strong>
          </div>
          <div className="hide">Homepage</div>
        </a>
        <nav
          role="navigation"
          id="w-node-_8cd9a279-4460-1c73-32fb-6c71cafbee69-cafbee62"
          className="nav_menu is-page-height-tablet w-nav-menu"
        >
          <div
            data-hover="false"
            data-delay={300}
            data-w-id="f8a2b19c-c8d2-77f8-bfd8-dcfeae7f7f36"
            className="nav_item-dropdown-component w-dropdown"
            style={{ zIndex: isDropdownOneOpen ? 901 : "" }}

          >
            <div
              className={ `nav_item-dropdown-toggle w-dropdown-toggle ${isDropdownOneOpen ? 'w--open' : ''}`}
              id="w-dropdown-toggle-0"
              aria-controls="w-dropdown-list-0"
              aria-haspopup="menu"
              aria-expanded={isDropdownOneOpen?"true":"false"}
              role="button"
              tabIndex={0}
              onClick={toggleDropdownOne}
            >
              <div className="dropdown-icon w-embed" style={{transform:isDropdownOneOpen?"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg);":"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);", transformStyle:"preserve-3d" }}>
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
              <div>School Solutions</div>
            </div>
           {isDropdownOneOpen? <nav
              className="nav_item-dropdown-list w-dropdown-list w--open"
              id="w-dropdown-list-0"
              aria-labelledby="w-dropdown-toggle-0"
              style={{
                opacity: isDropdownOneOpen?1:0,
  transform: isDropdownOneOpen
    ? "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
    : "translate3d(0px, 3rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);",
  transformStyle: "preserve-3d"
              }}
            >
              <div className="nav_item-dropdown-container">
                <div className="nav_item-dropdown-content">
                  <div className="nav_item-dropdown-content-layout is-box-shadow">
                    <Link
                      to="/fandpassessment"
                      className="nav_item-dropdown-link background-color-grey w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          F&P Assessment{" "}
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-regular">
                        F&P Assessment Visualization designed to show growth of students{" "}
                        </p>
                      </div>
                      <div className="button-simple is-link">
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
                      </div>
                    </Link>
                    <Link
                      to="/nweamap"
                      className="nav_item-dropdown-link background-color-blue w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          NWEA Map Suite{" "}
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-regular">
                         NWEA MAP Suite is widely recognized as reliable tool for assessing progress{" "}
                        </p>
                      </div>
                      <div
                        data-text-color="white"
                        className="button-simple is-link"
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
                      </div>
                    </Link>
                    <a
                      href="/widaassessement"
                      className="nav_item-dropdown-link background-color-green w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          WIDA Dashboard{" "}
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-regular">
                          Instant insights into scores and variations,all in one place{" "}
                        </p>
                      </div>
                      <div className="button-simple is-link">
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
                      </div>
                    </a>
                    <a
                      href="/cbsegrade"
                      className="nav_item-dropdown-link background-color-pink w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          CBSE Grade Evaluation{" "}
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-regular">
                          The CBSE Grade Analytics provides Data insights to educators{" "}
                        </p>
                      </div>
                      <div
                        data-text-color="black"
                        className="button-simple is-link"
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
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </nav>:""}
          </div>
          <div
            data-hover="false"
            data-delay={200}
            data-w-id="c581f1b3-1f1e-d4c6-f804-f1dcbb1633d2"
            className="nav_darwin-dropdown-component w-dropdown"
          >
            <div
              className="nav_dropdown-toggle w-dropdown-toggle"
              id="w-dropdown-toggle-1"
              aria-controls="w-dropdown-list-1"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
              tabIndex={0}
            >
              <div className="dropdown-icon w-embed">
                {/* <svg
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
                </svg> */}
              </div>
              <Link style={{textDecoration:"none"}} to='/whydarwin'><div>Why Darwin</div></Link>
            </div>
            <nav
              className="nav_darwin-dropdown-list is-box-shadow w-dropdown-list"
              id="w-dropdown-list-1"
              aria-labelledby="w-dropdown-toggle-1"
              style={{
                opacity: 0,
                transform:
                  "translate3d(0px, 3rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="nav_darwin-dropdown-layout-wrapper">
                <div className="nav_darwin-dropdown-content">
                  <div className="nav_darwin-dropdown-link-list">
                    <div
                      id="w-node-f033c4e8-b325-1154-6bfc-c98e600711d0-cafbee62"
                      className="text-weight-semibold"
                    >
                      By Role
                    </div>
                    <img
                      src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
                      loading="lazy"
                      id="w-node-c2e02328-5b5c-c0b7-f220-472e2379bde2-cafbee62"
                      alt="A line being used as a divider."
                      className="nav_darwin-dropdown-divider"
                    />
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <Link
                          data-w-id="08515e1d-4f15-00cb-e42b-6f4565ae04f7"
                          to="/fandpassessment"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Superintendent
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          data-w-id="6a3970f5-718c-03a3-b7eb-94f873823353"
                          href="/use-case/k-12-student-achievement-student-risk-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            School Administrator
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          data-w-id="7a635107-0c3a-2bad-cf77-379a5d20012d"
                          href="/cbsegrade"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Teacher
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          href="/use-case/k-12-district-fiscal-wellness-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Finance
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <Link
                          to="/nweamap"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Curriculum
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <Link
                          to="/nweamap"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            HR/Pupil Services
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                  </div>
                  <div className="nav_darwin-dropdown-link-list">
                    <div
                      id="w-node-_10263ea3-cbbd-b7e2-a76f-1e95f9d43b0c-cafbee62"
                      className="text-weight-semibold"
                    >
                      By Need
                    </div>
                    <img
                      src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
                      loading="lazy"
                      id="w-node-_10263ea3-cbbd-b7e2-a76f-1e95f9d43b0e-cafbee62"
                      alt="A line being used as a divider."
                      className="nav_darwin-dropdown-divider"
                    />
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          href="/municipal-performance-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Municipal Solutions
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          data-w-id="10263ea3-cbbd-b7e2-a76f-1e95f9d43b11"
                          href="/cbsegrade"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Intervention
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          href="/use-case/k-12-needs-assessment-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Progress Monitoring
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          href="/use-case/k-12-student-achievement-student-risk-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            MTSS
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <Link
                          to="/nweamap"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Peer Analysis &amp; Benchmarking
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
                    <div className="nav_darwin-dropdown-item">
                      <div className="nav_darwin-dropdown-text-wrapper">
                        <a
                          href="/use-case/k-12-transparency-software"
                          className="nav_darwin-dropdown-title-wrapper w-inline-block"
                          tabIndex={0}
                        >
                          <div className="text-size-small text-weight-semibold">
                            Transparency
                          </div>
                          <div
                            className="icon-embed-xxsmall text-color-blue w-embed"
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
            </nav>
          </div>
          <div
            data-hover="false"
            data-delay={300}
            data-w-id="97181020-17c8-0dfe-80ee-03acddea702f"
            className="nav_item-dropdown-component w-dropdown"
            
          >
            <div
              className="nav_item-dropdown-toggle w-dropdown-toggle"
              id="w-dropdown-toggle-2"
              aria-controls="w-dropdown-list-2"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
              tabIndex={0}
            >
              {/* <div className="dropdown-icon w-embed">
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
              </div> */}
              <Link style={{textDecoration:"none"}} to='/career'> <div>Career</div> </Link>
            </div>
            <nav
              className="nav_item-dropdown-list w-dropdown-list"
              id="w-dropdown-list-2"
              aria-labelledby="w-dropdown-toggle-2"
              style={{
                opacity: 0,
                transform:
                  "translate3d(0px, 3rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="nav_item-dropdown-container">
                <div className="nav_item-dropdown-content">
                  <div className="nav_item-dropdown-content-layout is-three-columns is-box-shadow">
                    <a
                      href="/k-12-Career"
                      className="nav_item-dropdown-link background-color-grey w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          Blogs &amp; Whitepapers
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-small">
                          Stay connected with fresh perspectives and expert K-12
                          analysis
                        </p>
                      </div>
                      <div className="button-simple is-link">
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
                      </div>
                    </a>
                    <a
                      href="/k-12-webinars"
                      className="nav_item-dropdown-link background-color-grey w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">Webinars </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-small">
                          Dive into Webinars &amp; Live Events, crafted by
                          industry leaders
                        </p>
                      </div>
                      <div className="button-simple is-link">
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
                      </div>
                    </a>
                    <a
                      href="/k-12-success-stories"
                      className="nav_item-dropdown-link background-color-grey w-inline-block"
                      tabIndex={0}
                    >
                      <div className="content-wrapper">
                        <div className="text-weight-semibold">
                          Success Stories{" "}
                        </div>
                        <div className="spacer-tiny" />
                        <p className="text-size-small">
                          See how organizations are redefining K-12 success with
                          darwin
                        </p>
                      </div>
                      <div className="button-simple is-link">
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
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <a href="/about" className="nav_link w-nav-link">
            About Us
          </a>
          <Link to='/login' className="nav_link show-mobile-landscape w-nav-link">
            Login
          </Link>
          <Link to="/register" className="nav_link show-mobile-landscape w-nav-link">
            Register
          </Link>
          <div className="show-mobile-landscape">
            <div className="spacer-small" />
            <a item-style="" href="/contact" className="button w-inline-block">
              <div>Get in touch</div>
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
        </nav>
        <div
          id="w-node-_8cd9a279-4460-1c73-32fb-6c71cafbee99-cafbee62"
          className="nav_button-wrapper"
        >
          <Link
           to='/login'
            rel="noopener"
            target="_blank"
            className="nav_link hide-mobile-landscape w-nav-link"
          >
            Login
          </Link>
          <Link 
            to="/register"
            rel="noopener"
            target="_blank"
            className="nav_link hide-mobile-landscape w-nav-link"
          >
            Register
          </Link>
          <a
            href="/demo"
            className="button is-nav hide-mobile-landscape w-inline-block"
          >
            <Link style={{textDecoration:"none"}} to='/contact'><div>Get a tour</div></Link>
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
          <div onClick={toggleDropdownOne}
            className={`nav_menu-button w-nav-button ${isDropdownOneOpen?"w--open":undefined}`}
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded={isDropdownOneOpen?"true":"false"}
          >
            <div className="menu-icon" onClick={toggleDropdownOne}>
              <div className="menu-icon_line-top" style={{ transform:isDropdownOneOpen?"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);":" translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);", transformStyle:"preserve-3d"}}  />
              <div className="menu-icon_line-middle" style={{opacity: isDropdownOneOpen?0:1}}>
                <div className="menu-icon_line-middle-inner" style={{transform:isDropdownOneOpen?"translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);":" translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d"}} />
              </div>
              <div className="menu-icon_line-bottom" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{height: isDropdownOneOpen?"12273.5px":"",display: isDropdownOneOpen?"block":"none"}} > <nav
  role="navigation"
  id="w-node-_8cd9a279-4460-1c73-32fb-6c71cafbee69-cafbee62"
  className="nav_menu is-page-height-tablet w-nav-menu"
  style={{
    transition: "height 0.5s ease 0s, transform 400ms ease 0s",
    transform: "translateY(0px) translateX(0px)"
  }}
  data-nav-menu-open=""
>
  <div
    data-hover="false"
    data-delay={300}
    data-w-id="f8a2b19c-c8d2-77f8-bfd8-dcfeae7f7f36"
    className="nav_item-dropdown-component w-dropdown w--nav-dropdown-open"
    style={{zIndex:isDropdownTwoOpen?901:""}}
  >
    <div
    onClick={toggleDropdownTwo}
      className={`nav_item-dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open ${isDropdownTwoOpen?"w--open":""}`}
      id="w-dropdown-toggle-0"
      aria-controls="w-dropdown-list-0"
      aria-haspopup="menu"
      aria-expanded={isDropdownTwoOpen?"true":"false"}
      role="button"
      tabIndex={0}
    >
      <div className="dropdown-icon w-embed" style={{transform:!isDropdownTwoOpen?" translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);":"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg);", transformStyle:"preserve-3d"}}>
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
      <div>School Solutions</div>
    </div>
    <nav
      className={`nav_item-dropdown-list w-dropdown-list w--nav-dropdown-list-open ${isDropdownTwoOpen?"w--open":""}`}
      id={isDropdownTwoOpen?"":"w-dropdown-list-0"}
      aria-labelledby={isDropdownTwoOpen?"":"w-dropdown-toggle-0"}
      style={{ height:!isDropdownTwoOpen? 0:"auto",width:"305"  }}
    >
      <div className="nav_item-dropdown-container">
        <div className="nav_item-dropdown-content">
          <div className="nav_item-dropdown-content-layout is-box-shadow">
            <Link
              to="/fandpassessment"
              className="nav_item-dropdown-link background-color-grey w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">
                  F&P Assessment{" "}
                </div>
                <div className="spacer-tiny" />
                <p className="text-size-regular">
                F&P Assessment Visualization designed to show growth and achievement of students{" "}
                </p>
              </div>
              <div className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </Link>
            <Link
              to="/nweamap"
              className="nav_item-dropdown-link background-color-blue w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">NWEA Map Suite </div>
                <div className="spacer-tiny" />
                <p className="text-size-regular">
                 NWEA MAP Suite is widely recognized as reliable tool for assessing progress{" "}
                </p>
              </div>
              <div data-text-color="white" className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </Link>
            <Link
              to="/widaassessement"
              className="nav_item-dropdown-link background-color-green w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">WIDA Dashboard </div>
                <div className="spacer-tiny" />
                <p className="text-size-regular">
                  Instant insights into scores and variations,all in one place{" "}
                </p>
              </div>
              <div className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </Link>
            <a
              href="/cbsegrade"
              className="nav_item-dropdown-link background-color-pink w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">
                  CBSE Grade Evaluation{" "}
                </div>
                <div className="spacer-tiny" />
                <p className="text-size-regular">
                  The CBSE Grade Analytics provides Data insights to educators{" "}
                </p>
              </div>
              <div data-text-color="black" className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div
    data-hover="false"
    data-delay={200}
    data-w-id="c581f1b3-1f1e-d4c6-f804-f1dcbb1633d2"
    className="nav_darwin-dropdown-component w-dropdown w--nav-dropdown-open"
  >
    <div
      className="nav_dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
      id="w-dropdown-toggle-1"
      aria-controls="w-dropdown-list-1"
      aria-haspopup="menu"
      aria-expanded="false"
      role="button"
      tabIndex={0}
    >
      <div className="dropdown-icon w-embed">
        {/* <svg
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
        </svg> */}
      </div>
      <Link to='/whydarwin'><div>Why Darwin</div></Link>
    </div>
    <nav
      className="nav_darwin-dropdown-list is-box-shadow w-dropdown-list w--nav-dropdown-list-open"
      id="w-dropdown-list-1"
      aria-labelledby="w-dropdown-toggle-1"
      style={{ height: 0 }}
    >
      <div className="nav_darwin-dropdown-layout-wrapper">
        <div className="nav_darwin-dropdown-content">
          <div className="nav_darwin-dropdown-link-list">
            <div
              id="w-node-f033c4e8-b325-1154-6bfc-c98e600711d0-cafbee62"
              className="text-weight-semibold"
            >
              By Role
            </div>
            <img
              src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
              loading="lazy"
              id="w-node-c2e02328-5b5c-c0b7-f220-472e2379bde2-cafbee62"
              alt="A line being used as a divider."
              className="nav_darwin-dropdown-divider"
            />
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <Link
                  data-w-id="08515e1d-4f15-00cb-e42b-6f4565ae04f7"
                  to="/fandpassessment"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Superintendent
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  data-w-id="6a3970f5-718c-03a3-b7eb-94f873823353"
                  href="/use-case/k-12-student-achievement-student-risk-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    School Administrator
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  data-w-id="7a635107-0c3a-2bad-cf77-379a5d20012d"
                  href="/cbsegrade"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Teacher
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  href="/use-case/k-12-district-fiscal-wellness-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Finance
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <Link
                  to="/nweamap"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Curriculum
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <Link
                  to="/nweamap"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    HR/Pupil Services
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
          </div>
          <div className="nav_darwin-dropdown-link-list">
            <div
              id="w-node-_10263ea3-cbbd-b7e2-a76f-1e95f9d43b0c-cafbee62"
              className="text-weight-semibold"
            >
              By Need
            </div>
            <img
              src="https://assets-global.website-files.com/64e5cf2b369bee13651a6e82/64e61f79866443e89e89edf9_darwin-divider.svg"
              loading="lazy"
              id="w-node-_10263ea3-cbbd-b7e2-a76f-1e95f9d43b0e-cafbee62"
              alt="A line being used as a divider."
              className="nav_darwin-dropdown-divider"
            />
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  href="/municipal-performance-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Municipal Solutions
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  data-w-id="10263ea3-cbbd-b7e2-a76f-1e95f9d43b11"
                  href="/cbsegrade"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Intervention
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  href="/use-case/k-12-needs-assessment-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Progress Monitoring
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  href="/use-case/k-12-student-achievement-student-risk-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    MTSS
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <Link
                  to="/nweamap"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Peer Analysis &amp; Benchmarking
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
            <div className="nav_darwin-dropdown-item">
              <div className="nav_darwin-dropdown-text-wrapper">
                <a
                  href="/use-case/k-12-transparency-software"
                  className="nav_darwin-dropdown-title-wrapper w-inline-block"
                  tabIndex={0}
                >
                  <div className="text-size-small text-weight-semibold">
                    Transparency
                  </div>
                  <div className="icon-embed-xxsmall text-color-blue w-embed">
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
    </nav>
  </div>
  <div
    data-hover="false"
    data-delay={300}
    data-w-id="97181020-17c8-0dfe-80ee-03acddea702f"
    className="nav_item-dropdown-component w-dropdown w--nav-dropdown-open"
  >
    <div
      className="nav_item-dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
      id="w-dropdown-toggle-2"
      aria-controls="w-dropdown-list-2"
      aria-haspopup="menu"
      aria-expanded="false"
      role="button"
      tabIndex={0}
    >
      <div className="dropdown-icon w-embed" >
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
      <Link to='/career'> <div>Career</div> </Link>
    </div>
    <nav
      className="nav_item-dropdown-list w-dropdown-list w--nav-dropdown-list-open"
      id="w-dropdown-list-2"
      aria-labelledby="w-dropdown-toggle-2"
      style={{ height: 0 }}
    >
      <div className="nav_item-dropdown-container">
        <div className="nav_item-dropdown-content">
          <div className="nav_item-dropdown-content-layout is-three-columns is-box-shadow">
            <a
              href="/k-12-Career"
              className="nav_item-dropdown-link background-color-grey w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">
                  Blogs &amp; Whitepapers
                </div>
                <div className="spacer-tiny" />
                <p className="text-size-small">
                  Stay connected with fresh perspectives and expert K-12
                  analysis
                </p>
              </div>
              <div className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </a>
            <a
              href="/k-12-webinars"
              className="nav_item-dropdown-link background-color-grey w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">Webinars </div>
                <div className="spacer-tiny" />
                <p className="text-size-small">
                  Dive into Webinars &amp; Live Events, crafted by industry
                  leaders
                </p>
              </div>
              <div className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </a>
            <a
              href="/k-12-success-stories"
              className="nav_item-dropdown-link background-color-grey w-inline-block"
              tabIndex={0}
            >
              <div className="content-wrapper">
                <div className="text-weight-semibold">Success Stories </div>
                <div className="spacer-tiny" />
                <p className="text-size-small">
                  See how organizations are redefining K-12 success with
                  darwin
                </p>
              </div>
              <div className="button-simple is-link">
                <div>Learn more</div>
                <div className="icon-embed-xxsmall w-embed">
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
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <a href="/about" className="nav_link w-nav-link w--nav-link-open">
    About Us
  </a>
  <Link
    to="/login"
    className="nav_link show-mobile-landscape w-nav-link w--nav-link-open"
  >
    Login
  </Link>
  <Link
    to="/register"
    className="nav_link show-mobile-landscape w-nav-link w--nav-link-open"
  >
    Register
  </Link>
  <div className="show-mobile-landscape">
    <div className="spacer-small" />
    <a item-style="" href="/contact" className="button w-inline-block">
      <div>Get in touch</div>
      <div className="icon-embed-xxsmall w-embed">
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
</nav>
 </div>
    </div>
  </div>)

            }

export default Header
