import "../src/styles/App.scss";
import logoSvg from "../src/images/logo.svg";
import downArrow from "../src/images/icon-arrow-down.svg";

function App() {
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
      </section>
    </div>
  );
}

export default App;
