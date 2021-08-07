import socialIcons from "../../../helpers/socialIcons";

const Index = () => {
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
          <a href="#trips" className="scroll-link">
            SCROLL
          </a>
          <ul className="social-links-container">
            {socialIcons("22").map((item, idx) => (
              <li className="social-item" key={idx}>
                <a href={item.path} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
