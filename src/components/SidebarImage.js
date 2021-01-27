import React from "react";
import "./SidebarImage.css";

const SidebarImage = meme => {
  return (
    <div
      onClick={meme.edit}
      className="sidebarImage"
      style={{
        backgroundImage: `url(${meme.imageUrl})`,
      }}
    >
      <button className="deleteButton" onClick={meme.delete}>
        X
      </button>
      <h2 className="topTextPlacement">{meme.topText}</h2>
      <h2 className="bottomTextPlacement">{meme.bottomText}</h2>
    </div>
  );
};

export default SidebarImage;
