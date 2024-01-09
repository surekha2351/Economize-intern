import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabPanel, Tab, TabList, TabPanels } from "@chakra-ui/react";
import AmountChart from "../../../components/charts/Pie";
import React, { useState } from "react";
import "./Bottom.css";

function Bottom() {
  const [value, setValue] = useState(0);

  const automationsData = [
    {
      title: "Abandoned Cart 7 Days",
      subtitle: "4024 Sent | 124 Clicks",
      amount: "$5,231",
      sub2: "41 Orders | $150 AOV",
    },
    {
      title: "Abandoned Cart 15 Min",
      subtitle: "4024 Sent | 124 Clicks",
      amount: "$24,521",
      sub2: "41 Orders | $150 AOV",
    },
    {
      title: "Abandoned Cart 15 Min",
      subtitle: "4024 Sent | 124 Clicks",
      amount: "$24,521",
      sub2: "41 Orders | $150 AOV",
    },
  ];

  function getTabContent(index) {
    switch (index) {
      case 0:
        return (
          <>
            {automationsData.map((item, index) => (
              <div
                key={index}
                className={
                  "dashboard__card " +
                  (index === 0 ? "dashboard__card--selected" : "")
                }
              >
                <FontAwesomeIcon
                  className="dashboard__card--icon"
                  icon={faCartShopping}
                />
                <div className="dashboard__card--col">
                  <div className="dashboard__card--title">{item.title}</div>
                  <div className="dashboard__card--subtitle">
                    {item.subtitle}
                  </div>
                </div>
                <div className="dashboard__card--actions">
                  <div className="dashboard__card--amount">{item.amount}</div>
                  <div className="dashboard__card--subtitle">{item.sub2}</div>
                </div>
              </div>
            ))}
          </>
        );
      case 1:
        return <h1>Campaigns</h1>;
      case 2:
        return <h1>Segments</h1>;
      default:
        return null;
    }
  }

  return (
    <div className="dashboard__bottom">
      <div className="dashboard__list">
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => setValue(newValue)}
        >
         
          <TabList tabListProps={{ borderBottom: "2px solid red" }}>
          <h2 style={{paddingLeft:"5%"}}>Automations</h2>
          <h2 style={{paddingLeft:"25%"}}>Campaigns</h2>
          <h2 style={{paddingLeft:"25%", paddingRight:"30px"}}>Segments</h2>
            <button className="dashboard__action dashboard__tab--action">
              LastMonth
              <FontAwesomeIcon
                className="dashboard__action--icon dashboard__icon--right"
                icon={faAngleDown}
              />
            </button>
          </TabList>
          <TabPanels>
            <TabPanel
              square={value ? value.toString() : undefined}

              className="dashboard__list--paper"
            >
              {getTabContent(value)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="dashboard__meter">
        <h1 className="dashboard__meter--title">
          Level 5{" "}
          <FontAwesomeIcon
            className="dashboard__meter--icon"
            icon={faArrowRight}
          />
        </h1>
        <h6 className="dashboard__meter--subtitle">
          +$32,050 in the last month
        </h6>
        <AmountChart />
        <h2 className="dashboard__meter--amount">$14,495</h2>
      </div>
    </div>
  );
}

export default Bottom;
