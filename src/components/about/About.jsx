import React from "react";
import "./About.css";
import logo from "../../assets/group.jpg";
const About = () => {
  return (
    <div className="grand_parent">
      <div className="container about__container">
        <div className="about__left">
          <h1 className="Ultrabold">The community</h1>
          <h1 className="Ultrabold">that aims big.</h1>
          <img src={logo} className='about__image' alt='' />          
        </div>
        <div className="about__right">
          <div className="about__content">
            <h3 className="Light">Grow with the Flow</h3>
            <p className="Regular">
              Here, we understand the value of personal growth. We empower our
              designers with free training opportunities, workshops and
              continuous mentoring to ensure you have everything you need to
              succeed.
            </p>
          </div>
          <hr />
          <div className="about__content">
            <h3 className="Light">Grow with the Flow</h3>
            <p className="Regular">
              Here, we understand the value of personal growth. We empower our
              designers with free training opportunities, workshops and
              continuous mentoring to ensure you have everything you need to
              succeed.
            </p>
          </div>
          <hr />
          <div className="about__content">
            <h3 className="Light">Grow with the Flow</h3>
            <p className="Regular">
              Here, we understand the value of personal growth. We empower our
              designers with free training opportunities, workshops and
              continuous mentoring to ensure you have everything you need to
              succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
