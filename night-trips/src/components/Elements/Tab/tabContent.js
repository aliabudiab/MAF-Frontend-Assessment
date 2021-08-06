import CustomButton from "../customButton/customButton";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const TabContent = ({ currentTab }) => {
  const { title, description1, description2 } = currentTab;

  //TODO: handle arrow actions
  return (
    <div className="tab-content-cotnainer">
      <div className="images-part">
        <div className="image-container">
          <img src="/assets/images/mountain1.jpg" alt="as" />
          <div className="arrows-container">
            <div className="arrow-icon left-arrow">
              <AiOutlineArrowLeft size="17" onClick={() => {}} />
            </div>
            <div className="arrow-icon">
              <AiOutlineArrowRight size="17" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="info-part">
        <h2>{title}</h2>
        <div className="description-container">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        <CustomButton text="See out latest offer" onClick={() => {}} />
      </div>
    </div>
  );
};

export default TabContent;
