import { useState } from "react";
import CustomButton from "../customButton/customButton";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const TabContent = ({ currentTab }) => {
  const { title, description1, description2, imgs } = currentTab;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const socialItems = [
    {
      path: "https://www.instagram.com/majidalfuttaim/?hl=en",
      icon: <FiInstagram size="22" />,
    },
    {
      path: "https://www.facebook.com/MajidAlFuttaim/",
      icon: <FiFacebook size="22" />,
    },
    {
      path: "https://twitter.com/majidalfuttaim?lang=en",
      icon: <FiTwitter size="22" />,
    },
  ];

  // this function just to view the implementation of changing between 2 images.
  const onArrowClick = () => {
    if (currentImageIndex === 0) setCurrentImageIndex(1);
    else if (currentImageIndex === 1) setCurrentImageIndex(0);
  };

  return (
    <div className="tab-content-cotnainer">
      <div className="trip-images">
        <div className="image-container">
          <img
            src={imgs[currentImageIndex].path}
            alt={imgs[currentImageIndex].name}
          />
          {imgs.length > 1 && (
            <div className="arrows-container">
              <div className="arrow-icon left-arrow" onClick={onArrowClick}>
                <AiOutlineArrowLeft size="17" />
              </div>
              <div className="arrow-icon" onClick={onArrowClick}>
                <AiOutlineArrowRight size="17" />
              </div>
            </div>
          )}

          <div className="image-details">
            <label>{`0${currentImageIndex + 1}.`}</label>
            <h3>{`${imgs[currentImageIndex].name} LANDSCAPE`}</h3>
          </div>
        </div>
      </div>

      <div className="trip-details-container">
        <div className="trip-details">
          <h2>{title}</h2>
          <div className="description-container">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>

          <CustomButton text="See out latest offer" onClick={() => {}} />
        </div>

        <div className="social-links-wrapper">
          <label>SHARE IT: </label>
          <ul className="social-links-list">
            {socialItems.map((item, idx) => (
              <li className="social-item" key={idx}>
                <a href={item.path} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
