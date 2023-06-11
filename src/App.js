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
    </div>
  );
}

export default App;
