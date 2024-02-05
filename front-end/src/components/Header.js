import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <img
              src={LOGO_URL}
              alt="logo-image"
            />
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default Header;