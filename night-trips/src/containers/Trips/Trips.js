import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TripsData from "../../pages/api/trips.json";
import TabsContainer from "../../components/Elements/Tab/tabsContainer";
import CustomButton from "../../components/Elements/customButton/customButton";

const Trips = () => {
  const [showTeamMessage, setShowTeamMessage] = useState(true);

  return (
    <section className="trips-section" title="Trips Section" id="trips">
      <div className="content-wrapper">
        <div
          className={`header-container ${!showTeamMessage && "column-flex"}`}
        >
          <h1>Pick your trip</h1>
          {showTeamMessage ? (
            <div className="note-message-container">
              <AiOutlineClose
                size="16"
                className="close-icon"
                onClick={() => setShowTeamMessage(false)}
              />
              <p>
                Our team put together some trips to you to discover, feel free
                to discover each of them.
              </p>
            </div>
          ) : (
            <CustomButton
              text="Click to show our team message"
              onClick={() => setShowTeamMessage(true)}
            />
          )}
        </div>

        <TabsContainer tabs={TripsData} />
      </div>
    </section>
  );
};

export default Trips;
