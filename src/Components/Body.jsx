import React from "react";
import "./Body.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import simage from "../images/ajitps.png";
import pdf from "../images/CV_2023061919411255.pdf";
import Card from "react-bootstrap/Card";
import anime from "../images/anime.png";
import moviearena from "../images/moviearena.png";
import hms from "../images/hms.png";
import parallax from "../images/parallax.png";
import tictactoe from "../images/tictactoe.png";
import travelista from "../images/travelista.png";
import weather from "../images/weather.png";
import zomato from "../images/zomato.png";
import ajith from "../images/ajithPS-1.png"
import png2 from "../images/png2.png"
import round from "../images/round.png"


function Body({isDarkMode}) {
  console.log(isDarkMode);
 

  return (
    <>
      <Container fluid id="home">
        <Row>
          <Col sm={8} lg={7 } className="d-flex flex-column justify-content-center align-items-center pt-5">
            <div className="titlediv">
              <p className="titlepara">Hey There,</p>
              <h1 className="titlehead">
                I'M <span className="ajith">AJITH PS</span>
              </h1>
              <h1 className="titlehead">A FULLSTACK DEVELOPER</h1>
              <p className="titlepara">
                {" "}
                a seasoned full-stack developer passionate about creating
                seamless web and software solutions. With expertise in both
                front-end and back-end technologies, I thrive on collaborative
                projects and stay updated with industry trends. Let's connect
                and build something amazing!
              </p>
            </div>
            <div className="abt mt-3 ml-5">
              <img
                className="img-fluid w-25"
                src={round}
                alt=""
              />
              <span className="abttxt">
                About me{" "}
                <i
                  className="fa-light fa-greater-than"
                  style={{ color: " #0f0f10;" }}
                ></i>
              </span>
            </div>
            <button className="b mt-4 ">Hire Me</button>
          </Col>
          <Col sm={4} lg={5 }>
          <div className="img-group">
            <img className="img-fluid png2" src={png2} alt="" />
          <img className="ajith img-fluid  " src={ajith} alt="" />
          {/* <img className="png img-fluid rounded" src={png} alt="" /> */}
          </div>
         
          </Col>
        </Row>
      </Container>
      <Container fluid id="about">
        <Row>
          <Col sm={2} lg={6}>
            <img className="img-fluid w-75" src={simage} alt="" />
          </Col>
          <Col
            sm={10}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center pt-5"
          >
            <div className="titlediv">
              <h2 className="titlehead">About Me</h2>
              <hr />
              <h2 className="shead pt-3">
                A Story of hard work and profession
              </h2>

              <p className="spara pt-3">
                Embarking on the journey of full-stack development has been a
                challenging yet rewarding pursuit. Through unwavering dedication
                and a thirst for knowledge, I aspire to attain mastery in both
                front-end and back-end technologies. My goal is to craft elegant
                and seamless web applications for both desktop and mobile
                platforms, transforming ideas into digital masterpieces
              </p>

              <div className="d-flex justify-content-center">
                <h4 className="pt-2 fs-4 fw-bolder">Know more about me</h4>{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href={pdf}
                  className="b mx-auto pl-4 pt-3"
                >
                  Download CV
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className=" d-flex flex-column justify-content-center  pt-5" 
      >
        <div className="pl-5">
          <h2 className="titlehead">Skills</h2>
          <hr style={{ width: "100px", height: "2px" }} />
          <div className="skill-width">
            <h2 className="shead pt-3">Proficient With:</h2>
            <ul className="skill-items d-flex p-0 justify-content-between flex-wrap ">
              <li>
                <i class="devicon-react-original colored"></i> React Js
              </li>
              <li>
                <i class="devicon-html5-plain colored"></i> HTML
              </li>
              <li>
                <i class="devicon-css3-plain colored"></i> CSS
              </li>
              <li>
                <i class="devicon-javascript-plain colored"></i> JavaScript
              </li>
              <li>
                {" "}
                <i class="devicon-angularjs-plain colored"></i> Angular
              </li>
              <li>
                <i class="devicon-nodejs-plain colored"></i> Node Js
              </li>
              <li>
                <i class="devicon-express-original colored"></i> Express Js
              </li>
              <li>
                <i class="devicon-bootstrap-plain colored"></i>Bootstarp
              </li>
            </ul>
            <h2 className="shead pt-4">Familar With:</h2>
            <ul className="skill-items d-flex p-0 justify-content-between flex-wrap ">
              <li>
                <i class="devicon-php-plain colored"></i> PHP
              </li>
              <li>
                <i class="devicon-python-plain colored colored"></i> Python
              </li>
              <li>
                <i class="devicon-c-plain colored"></i> C
              </li>
              <li>
                <i class="devicon-java-plain  colored"></i> Java
              </li>
              <li>
                <i class="devicon-tailwindcss-original-wordmark  colored"></i>{" "}
                Tailwind CSS
              </li>
              <li>
                <i class="devicon-cplusplus-plain colored"></i> C++
              </li>
              <li>
                <i class="devicon-photoshop-plain colored"></i> Photoshop
              </li>
              <li>
                <i class="devicon-microsoftsqlserver-plain colored"></i> Office
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container fluid id="projects"  >
        <div className="pl-5 pt-5">
          <h2 className="titlehead">Projects</h2>
          <hr style={{ width: "170px", height: "2px" }} />
          <Row>
            <Col lg={3}>
              {" "}
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={moviearena}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Netflix Clone</p>

                  <a className="overlay-a" href="https://github.com/ajps208/Moviearena">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a href="https://moviearenaa.netlify.app" className="overlay-a">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>

                <Card.Body>
                  <Card.Title>Movie Arena</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-react-original colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={hms}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Hostel mangement system</p>

                  <a className="overlay-a" href="https://github.com/ajps208/hms">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>HMS</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored ml-2"></i>
                    <i class="devicon-php-plain colored"></i>
                    <i class="devicon-mysql-plain colored"></i>
                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={anime}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Anime Details Finder</p>

                  <a className="overlay-a" href="https://github.com/ajps208/Anime-finder">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://animefinder-ajithps.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>Anime Finder</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-react-original colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={tictactoe}
                />
                <div className="overlay">
                  <h3 className="overlay-h">React Game</h3>
                  <p className="overlay-p">Game using react</p>

                  <a className="overlay-a" href="https://github.com/ajps208/TicTacToe">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://tictactoe-ajithps.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>TicTacToe Game</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-react-original colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              {" "}
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={zomato}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Zomato Clone</p>

                  <a className="overlay-a" href="">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://zomato-clone-ajithps.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>Zomato</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-react-original colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={parallax}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Parallax website design</p>

                 
                  <a className="overlay-a" href="https://github.com/ajps208/Discover-india">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://discover-india.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>parallax Site</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={travelista}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Landing page</p>

                  <a className="overlay-a" href="https://github.com/ajps208/Travelguide">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://travelguide-ajith.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>Travel Guide</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Card.Img
                  className="cardimg1 img-fluid"
                  variant="top"
                  src={weather}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Weather details</p>

                  <a className="overlay-a" href="https://github.com/ajps208/weatherApp">
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://weatherapp-ajithps.netlify.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>weather Site</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-bootstrap-plain colored ml-2"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="mt-5 " id="contacts">
      <div className="titlediv w-100 d-flex justify-content-center align-items-center flex-column">
              <p className="titlepara1 ">Get in Touch</p>
              <h1 className="titlehead">Contact Me</h1> 
              <hr />
              <p className="w-50 spara pt-3">
             <b> There are several platforms on which i'm available like facebook,linkedin,x,github</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly flex-wrap">
             <div >
              <h4 ><b>phone no</b></h4>
              <h5 className="linktext"><i class="fa-solid fa-phone"></i> 8139095765</h5>
              <h4><b>Email</b></h4>
              <h5 className="linktext"><i class="fa-regular fa-envelope"></i> ajithps208@gmail.com</h5>
             </div>
             <div className="fs-2">
             <a  className="ca" href="https://github.com/ajps208"><i class="fa-brands fa-github mx-3"></i></a>
             <a className="ca"  href="https://www.linkedin.com/in/ajith-ps-16a743259/"><i class="fa-brands fa-linkedin mx-3"></i></a>
             <a className="ca"  href=""><i class="fa-brands fa-instagram mx-3"></i></a>
             <a className="ca" href=""><i class="fa-brands fa-stack-overflow mx-3"></i></a>
             </div>
             <div className="fs-4 d-flex">
             <i class="fa-solid fa-location-dot"></i>&nbsp; < p className="linktext" >Puthupully House,Thottipal p.o,Thrissur, <br /> &nbsp; &nbsp; Kerala pincode:680310</ p >
             </div>
            </div>
      </Container>
    </>
  );
}

export default Body;
