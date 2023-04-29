import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Profile-picc.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is
                <span className="different"> Shreyash Gedam </span> and I am
                from
                <span className="different">

                  &nbsp;Baner Pune, Maharashtra (India)
                </span>
                . I have completed my engineering from
                <span className="different">
                  &nbsp;Lokmanya Tilak Collage of Engineering, Mumbai.
                </span>&nbsp;After that I qualified GATE 2020 and 2021
                . Then I joined full stack development course by
                <span className="different">&nbsp;Masai School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Quick Learner
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Collaborative
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
