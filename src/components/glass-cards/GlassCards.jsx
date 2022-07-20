import React from "react";
import "./GlassCards.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

const GlassCards = () => {
  return (
    <div className="container" style={{marginTop: "10%"}}>
      <h1 className="Regular head__glass">What we'll need</h1>
      <div className="glass__container">

        <article className="glass__item">
          <div className="glass__icon-div">
            <FaUserFriends className="icon" />
          </div>
          <h3 className="glass__content">
            Great verbal and written English skills, a portfolio to show
          </h3>
        </article>

        <article className="glass__item">
          <div className="glass__item-image">
            <FaLaptopCode className="icon" />
          </div>
          <h3 className="glass__content">
            Available to work atleast 20 hours a week with good experience
          </h3>
        </article>

        <article className="glass__item">
          <div className="glass__item-image">
            <SiMicrosoftexcel className="icon" />
          </div>
          <h3 className="glass__content">
            A portfolio to show what you\'ve worked so far
          </h3>
        </article>

      </div>
    </div>
  );
};

export default GlassCards;
