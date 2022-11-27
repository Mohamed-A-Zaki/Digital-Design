import React from "react";
import Tags from "../../Components/Tags/Tags";
import Posts from "../../Components/Posts/Posts";
import Search from "../../Components/Search/Search";
import Categories from "../../Components/Categories/Categories";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Search></Search>
      <Posts></Posts>
      <Categories></Categories>
      <Tags></Tags>
    </div>
  );
};

export default Sidebar;
