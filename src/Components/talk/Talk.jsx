import React from "react";
import "./talk.scss";
import chat from "../../img/contact.jpg";

const Talk = () => {
  return (
    <div className="lets-talk row">
      <div className="info">
        <h2>Have A Project In Mind ?</h2>
        <p className="email">
          If you want to chat about a project with me, email me at:
          kshettryaj93@gmail.com
        </p>
        <p className="design">
          I can help design a new product, improve an existing part of your
          product experience, refine your product strategy, and build a strong
          design system.
        </p>
        <div>
            <button className="btn green-btn">Hire Me</button>
        </div>
      </div>
      <div className="image">

        <img src={chat} alt="" />
      </div>
    </div>
  );
};

export default Talk;
