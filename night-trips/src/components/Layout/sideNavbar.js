import { AiOutlineClose } from "react-icons/ai";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const SideNavbar = ({ isOpen, onMenuToggle }) => {
  const socialItems = [
    {
      path: "/",
      icon: <FiTwitter size="22" />,
    },
    {
      path: "/",
      icon: <FiInstagram size="22" />,
    },
    {
      path: "/",
      icon: <FiFacebook size="22" />,
    },
  ];

  return (
    <div
      tabIndex="-1"
      className={`side-nav side-nav-left ${isOpen && "side-nav-open"}`}
    >
      <div className="side-nav-mask" onClick={onMenuToggle}></div>
      <div className="side-nav-content-wrapper">
        <div className="side-nav-content">
          <div className="close-icon-container">
            <AiOutlineClose onClick={onMenuToggle} size="22" />
          </div>

          <div className="inner-content-container">
            <div className="inner-content">
              <div className="menu-content-wrapper">
                <div className="menu-list">
                  <a>Home</a>
                  <a>Trips</a>
                </div>

                <div className="social-links-list-container">
                  <ul className="social-links-list">
                    {socialItems.map((item, idx) => (
                      <li className="social-link" key={idx}>
                        {item.icon}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
