import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const socialIcons = (size) => {
  return [
    {
      path: "/",
      icon: <FiTwitter size={size} />,
    },
    {
      path: "/",
      icon: <FiInstagram size={size} />,
    },
    {
      path: "/",
      icon: <FiFacebook size={size} />,
    },
  ];
};

export default socialIcons;
