import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from './components/Container';
const RenderedApp = () => <Container />;
export default RenderedApp;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
