import React from "react";
import "./styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div className="banner-text">
          Explore
          <br />
          <span style={{ color: "#eca83f" }}>Delecious</span> Recipes
        </div>
        <div className="banner-tagline">Every Recipe Tells a Story....</div>
      </div>

      <div className="banner-img">
        <img src="  img/image.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
