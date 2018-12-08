import React, { Component } from "react";
import Article from "./article";
import Sidebar from "./sidebar";
import MediaQuery from "react-responsive";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <MediaQuery minWidth={700} minDeviceWidth={700}>
        {matches => {
          if (matches) {
            return (
              <div >
                <Sidebar />
                <Article/>
              </div>
            );
          } else {
            return (
              <div className={'mobile-app'}>
                <Sidebar />
                <Article />
              </div>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default App;
