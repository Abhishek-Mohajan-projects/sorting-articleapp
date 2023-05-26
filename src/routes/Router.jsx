import React from "react";
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <nav>
      <p>Sort By</p>
      <Link to="/most-upvoted" className="nav_Link">
        Most Upvoted
      </Link>
      <Link to="/most-recent" className="nav_Link">
        Most Recent
      </Link>
    </nav>
  );
};

export default Router;
