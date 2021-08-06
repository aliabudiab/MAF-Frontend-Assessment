import { useState } from "react";
import TabContent from "./tabContent";

const TabsContainer = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tab-item ${tab.id === activeTabIndex && "active"}`}
            onClick={() => {
              setActiveTabIndex(tab.id);
              setCurrentTab(tab);
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      {Boolean(Object.keys(currentTab).length) && (
        <TabContent currentTab={currentTab} />
      )}
    </div>
  );
};

export default TabsContainer;
