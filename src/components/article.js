import React, { Component } from "react";
import Data from "./content.json";
export class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = Data.map((e, i) => {
      return (
        <div className="frame" key={i}>
          
          <h1>{e.title}</h1>
          <p>{e.content}</p>
        </div>
      );
    });

    return (
      <div className="article">
        <div>{data}</div>
      </div>
    );
  }
}

export default Article;
