import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const socialIcons = (size) => {
  return [
    {
      path: "https://twitter.com/majidalfuttaim?lang=en",
      icon: <FiTwitter size={size} />,
    },
    {
      path: "https://www.instagram.com/majidalfuttaim/?hl=en",
      icon: <FiInstagram size={size} />,
    },
    {
      path: "https://www.facebook.com/MajidAlFuttaim/",
      icon: <FiFacebook size={size} />,
    },
  ];
};

export default socialIcons;
