import "./App.css";
import "./header.css";

import Lupa from "../../Lesson3/src/assets/search-icon (2).svg";
import basket from "../../Lesson3/src/assets/Cart Icon.svg";
// Header
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <h1>UI.Desk</h1>
        </div>
        <div className="header__center">
          <ul>
            <li>
              <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
                About
              </a>
            </li>
            <li>
              <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
                Testimonis
              </a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
            {" "}
            <img src={Lupa} alt="search" className="img" />
          </a>
          <a href="https://www.ucsfhealth.org/education/top-ten-foods-for-health">
            {" "}
            <img src={basket} alt="korzinka" className="img" />
          </a>
          <button className="order">Order Now</button>
        </div>
      </div>
    </>
  );
}
export default Header;
