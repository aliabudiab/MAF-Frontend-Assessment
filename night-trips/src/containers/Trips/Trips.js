import { AiOutlineClose } from "react-icons/ai";
import TripsData from "../../pages/api/trips.json";
import TabsContainer from "../../components/Elements/Tab/tabsContainer";

const Trips = () => {
  return (
    <section className="trips-section" title="Trips Section" id="trips">
      <div className="content-wrapper">
        <div className="header-container">
          <h1>Pick your trip</h1>

          <div className="note-message-container">
            {/*TODO: remove the message when the icon is clicked */}
            <AiOutlineClose size="16" className="close-icon" />
            <p>
              Our team put together some trips to you to discover, feel free to
              discover each of them.
            </p>
          </div>
        </div>

        <TabsContainer tabs={TripsData} />
      </div>
    </section>
  );
};

export default Trips;
