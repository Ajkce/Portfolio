import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { convertLength } from "@mui/material/styles/cssUtils";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Githubuser from "../../img/Github.PNG";
import Backroad from "../../img/Backroad.PNG";
import Comfy from "../../img/Comfy.PNG";
import Jobster from "../../img/Jobster.PNG";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);

  const items = [
    {
      Id: 1,
      title: "Search Github-Users",
      type: "react",
      img: Githubuser,
      desc: "A github users search application project where data is fetched using github api. It displays the searched users github account details in an interactive chart format",
      tools: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Styled Components",
        },
        {
          id: 3,
          name: "Auth 0",
        },
      ],
      github: "https://github.com/Ajkce/Github-users",
      website: "https://ajaya-projects-github-users.netlify.app/",
    },
    {
      Id: 2,
      title: "jobster",
      type: "react",
      img: Jobster,
      desc: "A react-redux project which helps users to keep track of the job applications progress. It involves all the crud application like create, read, update and delete operations.",
      tools: [
        {
          id: 1,
          name: "React-redux",
        },
        {
          id: 2,
          name: "Axios",
        },
        {
          id: 3,
          name: "Styled Components",
        },
      ],
      github: "https://github.com/Ajkce/Jobster",
      website: "https://react-jobster.netlify.app",
    },
    {
      Id: 3,
      title: "Comfy",
      type: "javascript",
      img: Comfy,
      desc: "A sample ecommerce project created using vanilla js. It utilises javascript array funcation to search, filter, sort and select the products based on specific properties.",
      tools: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Javascript",
        },
      ],
      github: "https://github.com/Ajkce/Comfy",
      website: "https://comfy-ajaya.netlify.app",
    },
    {
      Id: 4,
      title: "Tours-project",
      type: "javascript",
      img: Backroad,
      desc: "A vanilla Js tours webpage created using HTML, CSS and Javascript",
      tools: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Javascript",
        },
      ],
      github: "https://github.com/Ajkce/tours",
      website: "https://vanilla-js-backroad-project.netlify.app",
    },
  ];

  const buttons = [
    {
      id: 1,
      value: "all",
    },
    {
      id: 2,
      value: "javascript",
    },
    {
      id: 3,
      value: "react",
    },
    {
      id: 4,
      value: "node",
    },
  ];
  const port1 = useRef();
  const port2 = useRef();
  const port3 = useRef();
  const svg = useRef(null);
  const text1 = useRef();
  const text2 = useRef();


  useEffect(() => {

    const text = gsap.timeline({
      scrollTrigger: {
        trigger: text1.current,
        markers: true,
        toggleActions: 'restart, none, reverse, none'
       
      },
    });
    
    text.from(text1, {
     
      x: 200,
      duration: 2,
    });
  })

  useEffect(() => {



    const to = gsap.timeline({
      scrollTrigger: {
        trigger: port1.current,
        opacity: 1,
      },
    });

    to.from(
      port2.current,

      {
        duration: 0.6,
        scaleX: 0.1,
        transformOrigin: "left",
        delay: 1,
        repeat: 0,
        opacity: 0,
      },

      []
    ).fromTo(
      ".portfolio-item",
      { opacity: 0, y: 200 },
      {
        duration: 1,
        y: 0,
        delay: 2,
        stagger: 0.3,
        opacity: 1,
      },

      []
    );
  }, []);

  const [data, setData] = useState(items);
  const [modelItem, setModelItem] = useState([]);
  const element = useRef(null);
  const [openbox, setOpenbox] = useState(false);
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(1);
  const togglelightbox = () => {
    setOpenbox(!openbox);
    setNumber(0);
  };
  const Openmodel = (e) => {
    e.preventDefault();
    const itemid = parseInt(e.target.value);
    const data = items.filter((item) => item.Id === itemid);
    console.log(data);
    setModelItem(data);
    togglelightbox();
    setNumber(itemid);
  };

  const handleClick = (e) => {
    setActive(e.target.id);
    console.log(active);
  };

  const nextItem = (id) => {
    if (number < items.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
    const item = [items[number]];
    console.log(number);

    setModelItem(item);
  };
  const prevItem = (id) => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(items.length - 1);
    }
    const item = [items[number]];
    console.log(number);

    setModelItem(item);
  };

  const setItems = (e) => {
    e.preventDefault();
    const type = e.currentTarget.value;

    const newItem = items.filter((item) => {
      if (item.type === type) {
        return item;
      } else if (type === "all") {
        return items;
      }
      return false;
    });
    setData(newItem);
    console.log(newItem);
    handleClick(e);
  };

  const [length, setLength] = useState(0);


  useEffect(() => {
    setLength(svg.current.getTotalLength() + 75);
    console.log(length)
   
   
  }, []);
  
  
 
  // The start position of the drawing
 

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

  window.addEventListener("scroll", getPercentOfView);

  function getPercentOfView() {
    const element = document.getElementById("mySVG");
    const viewTop = window.pageYOffset;

    const viewBottom = viewTop + window.innerHeight;
    const rect = element.getBoundingClientRect();

    const elementTop = rect.top + viewTop;

    const elementBottom = elementTop + rect.height;

    let percentage = 0;

    if (elementTop >= viewBottom || elementBottom <= viewTop) {
      // heigher or lower than viewport
      percentage = 0;
    } else if (elementTop <= viewTop) {
      // element is completely in viewport and bigger than viewport
      percentage = 1;
    } else if (elementTop <= viewBottom) {
      // intersects viewport top

      const value = ((viewBottom - elementTop) / window.innerHeight) * 2;
      if(value <= 0.30){
        percentage = 0
      }if(value >= 0.30 && value <= 1.30){
        percentage = value - 0.30
      }else if(value >= 1.30){
        percentage = 1
      }
      console.log('value' + value)
      console.log('percentage' + percentage)
    }

    var draw = length * percentage;

    // Reverse the drawing (when scrolling upwards)
   
    svg.current.style.strokeDashoffset = length - draw;
    const translate = (100 * percentage) / 2;

    text1.current.style.transform = `translateX(${translate}px)`
    text2.current.style.transform = `translateX(-${translate}px)`
  }










  return (
    <section className="portfolio-section pt-100" id="portfolio">
      <div className="wrapper">
        <div className="row align-items-center ">
          <div className="svg">
            <svg id="mySVG" x="0" y="0" viewBox="0 0 591.7 313.3">
              <polyline
                id="quote1Heart"
                className="quote1Heart"
                points="191.9,118.2 128,7.3 463.8,7.3 295.9,298 233.2,189.5"
                ref={svg}
              ></polyline>
              <rect
                x="170"
                y="112.9"
                className="quoteTextBG"
                width="93"
                height="82"
              ></rect>
              <rect
                x="370"
                y="43.9"
                className="quoteTextBG"
                width="93"
                height="82"
              ></rect>
              <text
                x="239.2858"
                y="109.9107"
                className="quoteText quote1TextTop"
                data-svg-origin="239.28579711914062 51.760318756103516"
                transform="matrix(1,0,0,1,0,0)"
                ref={text1}
              >
                “DO WHAT YOU LOVE
              </text>
              <text
                x="-0.7142"
                y="179.7315"
                className="quoteText quote1TextBottom"
                data-svg-origin="-0.7142000198364258 121.58112335205078"
                transform="matrix(1,0,0,1,0,0)"
                ref={text2}
              >
                LOVE WHAT YOU DO”
              </text>
            </svg>
          </div>

          <div
            className="section-title column align-items-center  "
            ref={port1}
          >
            <h5 className="sub-title ">Portfolio</h5>
            <h3 className="main-title-dark">My Latest Work</h3>
            <ul className="line" ref={port2}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter">
            {buttons.map((btn) => {
              return (
                <button
                  type="button"
                  key={btn.id}
                  className={active === btn.id ? "active" : ""}
                  id={btn.id}
                  value={btn.value}
                  onClick={setItems}
                >
                  {btn.value}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="portfolio-item" key={item.Id} ref={port3}>
                <div className="portfolio-item-inner">
                  <div className="portfolio-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <h3>React / Auth 0 / Stripe</h3>
                    <div className="button">
                      <button
                        className="btn btn-yellow"
                        value={item.Id}
                        onClick={Openmodel}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {modelItem.map((item) => {
            console.log(item);
            return (
              <div
                ref={element}
                key={item.id}
                className={`lightbox ${openbox && "open"} `}
              >
                <div className="lightbox-content">
                  <div className="lightbox-close" onClick={togglelightbox}>
                    &times;
                  </div>
                  <img
                    src={item.img}
                    onClick="nextItem()"
                    className="lightbox-img"
                    alt=""
                  ></img>
                  <div className="lightbox-caption">
                    <div className="caption-text"></div>
                    <div className="caption-counter"></div>
                  </div>
                  <div className="lightbox-info">
                    <div className="title">
                      <h2>{item.title}</h2>
                      <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                    <div className="desc">{item.desc}</div>
                    <div>
                      {item.tools.map((tool) => {
                        return (
                          <button key={tool.id} className="btn">
                            {tool.name}
                          </button>
                        );
                      })}
                    </div>

                    <div className="links">
                      <a href={item.github}>
                        <button className="github-btn">
                          <GitHubIcon className="github"></GitHubIcon>
                        </button>
                      </a>
                      <a href={item.website}>
                        <button className="website-btn">
                          <LinkIcon className="website"></LinkIcon>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lightbox-controls">
                  <div className="prev-item" value={item.Id} onClick={prevItem}>
                    <ArrowBackIosNewIcon className="micon" />
                  </div>
                  <div
                    className="next-item"
                    item-id={item.Id}
                    value={item.Id}
                    onClick={() => nextItem(item.Id)}
                  >
                    <ArrowForwardIosIcon className="micon" value={item.Id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
