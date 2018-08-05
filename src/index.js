import React from "react";
import ReactDOM from "react-dom";
import { NavLink, Container, Button } from "reactstrap";
import classnames from "classnames";
import MultiTabs, { MultiTabContext } from "./components/MutiTabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Tab = ({ count }) => (
  <MultiTabContext.Consumer>
    {({ activeTabId, currentTab, addTab, toggle, close }) => {
      return (
        <div className="border-right border-left border-bottom p-3">
          <h2>Tab {count}</h2>
          <Button
            onClick={() => {
              const nextTab = currentTab + 1;
              addTab(`Tab ${nextTab}`, <Tab count={nextTab} />);
            }}
          >
            Add new tab
          </Button>
          <Button className="m-1" onClick={() => close(activeTabId)}>
            Close this ({activeTabId}) tab
          </Button>
        </div>
      );
    }}
  </MultiTabContext.Consumer>
);
function App() {
  return <Container>
      <h3>Example of MultiTabs</h3>
      <Container className="m-3">
        <MultiTabs>
          <MultiTabs.Tab title={({ close, activeTabId, tabId }) => <NavLink onClick={() => console.log(`Selected tab: ${tabId}`)} className={classnames(
                  { active: activeTabId === tabId }
                )}>
                <div className="d-flex align-content-center flex-wrap">
                  <div className="m-1"> Tab 1</div>
                  <div className="p-0">
                    <Button size="sm" color="link" onClick={event => {
                        event.stopPropagation();
                        console.log("Custom close clicked");
                        close(tabId);
                      }}>
                      X
                    </Button>
                  </div>
                </div>
              </NavLink>}>
            <Tab count={1} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 2">
            <Tab count={2} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 3">
            <Tab count={3} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 4">
            <Tab count={4} />
          </MultiTabs.Tab>
        </MultiTabs>
      </Container>
      <h3>Example of MultiTabs with Auto Open newly added tab</h3>
      <Container className="m-3 ">
      <MultiTabs openTabImmediately defaultActiveTab={2}>
          <MultiTabs.Tab title={({ close, activeTabId, tabId }) => <NavLink onClick={() => console.log(`Selected tab: ${tabId}`)} className={classnames(
                  { active: activeTabId === tabId }
                )}>
                <div className="d-flex align-content-center flex-wrap">
                  <div className="m-1"> Tab 1</div>
                  <div className="p-0">
                    <Button size="sm" color="link" onClick={event => {
                        event.stopPropagation();
                        console.log("Custom close clicked");
                        close(tabId);
                      }}>
                      X
                    </Button>
                  </div>
                </div>
              </NavLink>}>
            <Tab count={1} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 2">
            <Tab count={2} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 3">
            <Tab count={3} />
          </MultiTabs.Tab>
          <MultiTabs.Tab title="Tab 4">
            <Tab count={4} />
          </MultiTabs.Tab>
        </MultiTabs>
      </Container>
    </Container>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
