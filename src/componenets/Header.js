import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img alt="image_link" className="logo" src={LOGO_URL} />
      </div>
      <div className="navigation_container">
        <ul className="navigation_links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
