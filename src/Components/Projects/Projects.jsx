import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
export const Projects = () => {
  return (
    <>
      <div className='section'>
        <h2 className='section__title different'>Projects</h2>
        <div className='allProjects'>
        <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://github.com/ShreyashGedam/portfolio-after-actyv/assets/97446064/86dc31b7-d51b-4370-a12b-1d4d032dacff'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Disney Clone</h2>
                <p>
                  This is a React Website created with React, Redux. This App
                  provides trending and searched movies and TV shows.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiReactrouter />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://admirable-genie-529bf0.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/ShreyashGedam/Disney-Hotstar-Clone/tree/master'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97446064/181039133-014b22c4-6e87-4c7c-a859-390a1530514d.PNG'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Sephora Clone</h2>
                <p>
                  This is a React Website created with React, Redux. This App
                  is the clone of the Ecommerce website sephora clone.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiReactrouter />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://sephora-clone-shreyashgedam.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/ShreyashGedam/Majore_Project'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97446064/164305859-50cac832-1697-4a41-8020-dcf4085d1c18.PNG'
                    alt=''
                  />
                </div>
              </div>

              <div className='project_information'>
                <h2>Appolo Pharmacy Clone</h2>
                <p>
                  This is the online pharmacy website . You can get all the features of the hospital in this website like online Doctor consultation, lab tests etc.
                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://spectacular-piroshki-411d76.netlify.app/labtests.html'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/ShreyashGedam/Apollo247'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97455068/169433809-322cecc7-866a-46cc-a24c-caa63bd48f0e.png'
                    alt=''
                  />
                </div>
              </div>

              <div className='project_information'>
                <h2>Live Weather Update</h2>
                <p>
                  It is an app created with React.js. You can search any city
                  name to get that's place weather details in real time.
                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://weather-update.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/ShreyashGedam/wether_app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
