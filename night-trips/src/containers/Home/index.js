import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Index = () => {
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
    <section className="home-section" title="Home Section" id="home">
      <div className="content-wrapper">
        <h1>Night Trips</h1>
        <label>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</label>
        <p>
          Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
          venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida
          sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies.
          Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
        </p>
      </div>

      <div className="linear-gradient-div">
        <div className="links-container">
          {/*TODO: activate linkes */}
          <label className="scroll-label">SCROLL</label>
          <ul className="social-links-container">
            {socialItems.map((item, idx) => (
              <li className="social-item" key={idx}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
