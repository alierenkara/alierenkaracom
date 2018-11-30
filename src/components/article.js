import React, { Component } from "react";

export class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="article">
        article
        <div className="frame">frame</div>
      </div>
    );
  }
}

export default Article;
