import React from "react";
import Tags from "../../Components/Tags/Tags";
import Posts from "../../Components/Posts/Posts";
import Search from "../../Components/Search/Search";
import Categoties from "../../Components/Categoties/Categoties";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Search></Search>
      <Posts></Posts>
      <Categoties></Categoties>
      <Tags></Tags>
    </div>
  );
};

export default Sidebar;
