import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    //TODO: call call back from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className=" search-bar ui segment"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field" style={{ textAlign: "center" }}>
            <label>VIDEO SEARCH</label>{" "}
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
