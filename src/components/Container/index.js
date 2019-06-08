import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import ImageGrid from '../ImageGrid';

const INPUT_ID = 'giphy_search';
class Container extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      [INPUT_ID]: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  async onClick(event) {
    event.preventDefault();
    const images = await this.getImages();
    this.setState({
      images,
    })
  }

  async getImages() {
    const searchVal = document.getElementById(INPUT_ID).value;
    const giphyRes = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=${GIPHY_API_TOKEN}`);
    const parsed = await giphyRes.json();
    return parsed.data;
  }
  render() {
    const { [INPUT_ID]: searchVal } = this.state;
    console.log('IMAGES');
    console.log(this.state.images[0]);
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id={INPUT_ID}
          value={searchVal}
          onChange={this.onChange}
          onClick={this.onClick}
        />
        <ImageGrid
          images={this.state.images}
        />
      </form>
    );
  }
}
export default Container;
