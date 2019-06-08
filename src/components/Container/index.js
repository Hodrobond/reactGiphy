import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  onClick(event) {
    console.log('onClick happened');
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          onChange={this.onChange}
          onClick={this.onClick}
        />
      </form>
    );
  }
}
export default Container;
