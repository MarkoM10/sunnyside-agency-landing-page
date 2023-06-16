import { useState, useEffect } from "react";
import "../src/styles/App.scss";
import logoSvg from "../src/images/logo.svg";
import footerlogoSvg from "../src/images/footer-logo.svg";
import downArrow from "../src/images/icon-arrow-down.svg";
import women from "../src/images/image-emily.jpg";
import men from "../src/images/image-thomas.jpg";
import women2 from "../src/images/image-jennie.jpg";
import facebook from "../src/images/icon-facebook.svg";
import instagram from "../src/images/icon-instagram.svg";
import twitter from "../src/images/icon-twitter.svg";
import pinterest from "../src/images/icon-pinterest.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function App() {
  const [openHamburgerMenu, setOpenHamburgerMenu] =
    useState("hamburgerListNone");

  const [showHamburgerIcon, setShowHamburgerIcon] = useState("hamburger");
  const [showXMark, setShowXMark] = useState("xMarkNone");

  const openHamburger = () => {
    setOpenHamburgerMenu("hamburgerList");
    setShowHamburgerIcon("hamburgerNone");
  };

  useEffect(() => {
    if (showHamburgerIcon == "hamburgerNone") {
      setShowXMark("xMark");
    }
  }, [showHamburgerIcon]);

  const closeHamburger = () => {
    setOpenHamburgerMenu("hamburgerListNone");
    setShowXMark("xMarkNone");
    setShowHamburgerIcon("hamburger");
  };

  return (
    <div className="siteWrapper">
      <section className="heroSection">
        <div className="headerWrapper">
          <header>
            <a href="#">
              {" "}
              <img src={logoSvg}></img>
            </a>
            <nav className="navbar">
              <div className="hamburgerWrapperNone">
                <Bars3Icon
                  color="white"
                  className={showHamburgerIcon}
                  onClick={() => openHamburger()}
                />
                <XMarkIcon
                  color="white"
                  className={showXMark}
                  onClick={() => closeHamburger()}
                />
                <ul className={openHamburgerMenu}>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
              <ul className="menuList">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="heroHeadingWrapper">
          <h1>WE ARE CREATIVES</h1>
          <img src={downArrow}></img>
        </div>
      </section>
      <section className="articles">
        <section className="firstArticle">
          <div className="leftSide">
            <div>
              <label>Transform your brand</label>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
          <div></div>
        </section>
        <section className="secondArticle">
          <div className="leftImage"></div>
          <div className="rightSide">
            <div>
              <label>Stand out to the right audience</label>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll build and
                extend your brand in digital places.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
        </section>
        <section className="thirdArticle">
          <div className="cherrySide">
            <div className="leftCherry">
              <label>Graphic Design</label>
              <p>
                Great design makes you memorable. We deliver<br></br> artwork
                that underscores your brand message<br></br> and captures
                potential clients' attention.
              </p>
            </div>
          </div>
          <div className="orangeSide">
            <div className="rightOrange">
              <label>Photography</label>
              <p>
                Increase your credibility by getting the most<br></br> stunning,
                high-quality photos that improve your <br></br>business image.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <label className="testimonialHeading">CLIENT TESTIMONIALS</label>
          <div className="testimonialsGrid">
            <div className="testimonial">
              <img src={women}></img>
              <p>
                We put our trust in Sunnyside and they<br></br>delivered,making
                sure our needs were met<br></br>and deadlines were always hit.
              </p>
              <div>
                <label>Emily R.</label>
                <label>Marketing Director</label>
              </div>
            </div>
            <div className="testimonial">
              <img src={men}></img>
              <p>
                Sunnyside's enthusiasm coupled with their<br></br>keen interest
                in our brand's success made it<br></br>a satisfying and
                enjoyable experience.
              </p>
              <div>
                <label>Thomas S.</label>
                <label>Chief Operating Officer</label>
              </div>
            </div>
            <div className="testimonial">
              <img src={women2}></img>
              <p>
                Incredible end result! Our sales increased<br></br> over 400%
                when we worked with Sunnyside.<br></br>Highly recommended!
              </p>
              <div>
                <label>Jennie F.</label>
                <label>Business officer</label>
              </div>
            </div>
          </div>
        </section>
        <section className="imagesGrid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <footer className="footer">
          <div>
            <img alt="footerLogo" src={footerlogoSvg}></img>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <img alt="facebookIcon" src={facebook}></img>
            <img alt="instagramIcon" src={instagram}></img>
            <img alt="twitterIcon" src={twitter}></img>
            <img alt="pinterestIcon" src={pinterest}></img>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
