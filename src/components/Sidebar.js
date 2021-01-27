import React from "react";

import SidebarImage from "./SidebarImage";
import "./Sidebar.css";

const Sidebar = ({ imageVault, delMeme, editMeme }) => {
  const deleteMeme = (e, i) => {
    e.stopPropagation();
    delMeme(i);
  };
  const edit = (e, i) => {
    e.stopPropagation();
    editMeme(i);
  };

  return (
    <div className="Sidebar" style={{ padding: "10px" }}>
      {imageVault.map((meme, i) => (
        <SidebarImage
          key={`${meme.name}.${i}`}
          delete={e => deleteMeme(e, i)}
          edit={e => edit(e, i)}
          {...meme}
        />
      ))}
    </div>
  );
};

export default Sidebar;
