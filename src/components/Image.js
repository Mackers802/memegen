import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div
      className="imageDiv"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <input
        className="topTextInput"
        name="topText"
        type="text"
        placeholder="Place Text Here"
        onChange={props.handleChange}
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Place Text Here")}
        value={props.topText}
      />
      <input
        className="bottomTextInput"
        name="bottomText"
        type="text"
        placeholder="Place Text Here"
        onChange={props.handleChange}
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Place Text Here")}
        value={props.bottomText}
      />
    </div>
  );
}

export default Image;
