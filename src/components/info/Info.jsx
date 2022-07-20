import React from "react";
import "./Info.css";
import { BsArrowRight } from "react-icons/bs";
const Info = () => {
  return (
    <div>
      <hr style={{ width: "80vw", margin: "auto", marginTop: "8rem" }} />
      <div className="creative container" style={{marginTop: "8rem"}}>
        <div className="left__side__info">
          <h3 className="Regular">
            We regularly seek new talents to scale our design team. Submit your
            application.
          </h3>
        </div>
        <div className="right__side__info" style={{ width: "70%" }}>
          <div style={{ alignItems: "center" }}>
            <a
              href="/"
              style={{
                fontFamily: "Poppins, sans-serif",
                marginBottom: "2.2rem",
                fontSize: "1.4rem",
                lineHeight: "24px",
                fontWeight: "bold",
                color: "var(--color-green)",
              }}
            >
              Submit Now
            </a>
            <BsArrowRight className="icon__info" />
          </div>
        </div>
      </div>
      <hr style={{ width: "80vw", margin: "auto" }} />

      <div className="happening">
        <div className="container">
            <h1 className="Ultrabold">What happens next?</h1>
            <div className="happens">
                <div className="left__happens">
                    <p className="Regular" style={{color: 'var(--color-light)'}}>1.</p>
                    <p className="Regular">Line interview</p>
                </div>
                <div className="right__happens">
                    <p>If your application is successful, we'll invite you to a live video interview, where you'll have the opportunity to share your experience and learn more about Koncepted</p>
                </div>
            </div>
            <hr style={{marginBottom: '2rem'}}/>
            <div className="happens">
                <div className="left__happens">
                    <p className="Regular"  style={{color: 'var(--color-light)'}}>2.</p>
                    <p className="Regular">Paid test task</p>
                </div>
                <div className="right__happens">
                    <p>If your application is successful, we'll invite you to a live video interview, where you'll have the opportunity to share your experience and learn more about Koncepted</p>
                </div>
            </div>
            <hr style={{marginBottom: '2rem'}}/>
            <div className="happens">
                <div className="left__happens">
                    <p className="Regular"  style={{color: 'var(--color-light)'}}>3.</p>
                    <p className="Regular">Onboarding</p>
                </div>
                <div className="right__happens">
                    <p>If your application is successful, we'll invite you to a live video interview, where you'll have the opportunity to share your experience and learn more about Koncepted</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
