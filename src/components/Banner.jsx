import React from "react";
import "./styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        Explore
        <br />
        <span style={{ color: "#eca83f" }}>Delecious</span> Recipes
        <br />
        <span style={{ fontSize: "1.5rem", fontWeight: "400" }}>
          Here Every Recipe Tells a Story....
        </span>
      </div>

      <div className="banner-img">
        <img src="  img/image.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
