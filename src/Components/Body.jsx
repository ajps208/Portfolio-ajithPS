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
import ajith from "../images/ajithPS-1.png";
import png2 from "../images/png2.png";
import round from "../images/round.png";
import portfolio from "../images/portfolio.png";
import ticktmate from "../images/ticktmate.png";
import mugprint from "../images/mugprint.png";
import notesin from "../images/notesin.png";

function Body({ isDarkMode }) {
  console.log(isDarkMode);

  return (
    <>
      <Container fluid id="home">
        <Row>
          <Col
            sm={8}
            lg={7}
            className="d-flex flex-column justify-content-center align-items-center pt-5"
          >
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
              <img className="img-fluid w-25" src={round} alt="" />
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
          <Col sm={4} lg={5}>
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
      {/* Experience Section */}
      <Container fluid id="experience" className="my-5">
        <div className="pl-5 pt-5">
          <h2 className="titlehead">Experience</h2>
          <hr style={{ width: "170px", height: "2px" }} />

          <Row className="mt-4">
            <Col lg={6} className="mb-4">
              <div className="experience-card p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-bold m-0">Software Developer</h3>
                  <span className="badge bg-primary">Current</span>
                </div>
                <h5 className="text-secondary">
                  Unplugapps [INNOVATIONS IT OMAN]
                </h5>
                <h6>03/2024 - Present | Irinjalakuda, Kerala</h6>
                <ul className="mt-3">
                  <li>
                    Proficiently troubleshoot and maintain software programs
                    daily, ensuring optimal performance.
                  </li>
                  <li>
                    Developed interactive React interfaces with Material-UI for
                    consistency and aesthetics.
                  </li>
                  <li>
                    Engineer Node.js server-side applications, managing routing,
                    authentication, and database integration.
                  </li>
                  <li>
                    Utilize SQL for efficient database design and management.
                  </li>
                  <li>
                    Created RESTful APIs for seamless front-end to back-end
                    communication.
                  </li>
                  <li>
                    Assisted team lead with development and prototype designs.
                  </li>
                  <li>
                    Conducted thorough unit testing and debugging to ensure
                    error-free functionality.
                  </li>
                  <li>
                    Expertly utilize Git for collaborative version control.
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} className="mb-4">
              <div className="experience-card p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-bold m-0">Developer Intern</h3>
                  <span className="badge bg-secondary">Completed</span>
                </div>
                <h5 className="text-secondary">Luminar Technolab</h5>
                <h6>06/2023 - 01/2024 | Kochi</h6>

                <div className="mt-3">
                  <h6 className="fw-bold">
                    BACK-END: Node.js, Express.js, MongoDB, REST API
                  </h6>
                  <ul>
                    <li>
                      Engineered robust backend infrastructure, cutting server
                      response time by 50%.
                    </li>
                    <li>
                      Enhanced data retrieval in databases by 10% using Node.js,
                      Express.js, and MongoDB.
                    </li>
                  </ul>

                  <h6 className="fw-bold mt-3">
                    FRONT-END: HTML/CSS, Bootstrap, React, Angular, JavaScript
                  </h6>
                  <ul>
                    <li>
                      Boosted application performance by 35% through frontend
                      optimization.
                    </li>
                    <li>
                      Achieved 30% app optimization and decreased backend
                      response time.
                    </li>
                    <li>
                      Implemented version control using Git, ensuring seamless
                      collaboration within the development team.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
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
                <i class="devicon-materialui-plain colored"></i> Material UI
              </li>
              <li>
                <i class="devicon-microsoftsqlserver-plain colored"></i> Office
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {/* Education Section */}
      <Container fluid id="education" className="my-5">
        <div className="pl-5 pt-5">
          <h2 className="titlehead">Education</h2>
          <hr style={{ width: "170px", height: "2px" }} />

          <Row className="mt-4">
            <Col lg={4} className="mb-4">
              <div className="education-card p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-bold m-0">MCA</h3>
                  <span className="badge bg-primary">Pursuing</span>
                </div>
                <h5 className="text-secondary">
                  INDIRA GANDHI NATIONAL UNIVERSITY
                </h5>
                <h6>2025 - </h6>
                <p className="mt-3">
                  Currently pursuing Master of Computer Applications, enhancing
                  advanced computing skills and knowledge.
                </p>
              </div>
            </Col>

            <Col lg={4} className="mb-4">
              <div className="education-card p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-bold m-0">BSc Computer Science</h3>
                  <span className="badge bg-secondary">Completed</span>
                </div>
                <h5 className="text-secondary">
                  Sri C Achuthamenon Govt College
                </h5>
                <h6>July 2020 - March 2023 | Thrissur</h6>
                <p className="mt-3">
                  Graduated with 80.05%, gaining comprehensive knowledge in
                  computer science fundamentals and programming concepts.
                </p>
              </div>
            </Col>

            <Col lg={4} className="mb-4">
              <div className="education-card p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-bold m-0">Higher Secondary</h3>
                  <span className="badge bg-secondary">Completed</span>
                </div>
                <h5 className="text-secondary">St. Antonys HSS Pudukad</h5>
                <h6>June 2018 - March 2020 | Thrissur</h6>
                <p className="mt-3">
                  Completed with 90%, establishing a strong foundation for
                  higher education in computer science.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Certificates Section */}
      <Container fluid id="certificates" className="my-5">
        <div className="pl-5 pt-5">
          <h2 className="titlehead">Certifications</h2>
          <hr style={{ width: "200px", height: "2px" }} />

          <Row className="mt-4">
            <Col lg={6} className="mb-4">
              <div className="certificate-card p-4 shadow-sm rounded">
                <div className="certificate-icon mb-3">
                  <i className="fa-solid fa-certificate fs-1 text-warning"></i>
                </div>
                <h3 className="fw-bold">BSc Computer Science</h3>
                <h5 className="text-secondary">Calicut University</h5>
                <p className="mt-3">
                  Bachelor's degree in Computer Science, covering fundamental
                  and advanced concepts in programming, algorithms, and computer
                  systems.
                </p>
              </div>
            </Col>

            <Col lg={6} className="mb-4">
              <div className="certificate-card p-4 shadow-sm rounded">
                <div className="certificate-icon mb-3">
                  <i className="fa-solid fa-award fs-1 text-primary"></i>
                </div>
                <h3 className="fw-bold">MERN Full Stack Development</h3>
                <h5 className="text-secondary">NACTET</h5>
                <p className="mt-3">
                  Comprehensive certification in MERN (MongoDB, Express.js,
                  React.js, Node.js) stack development, covering front-end and
                  back-end technologies.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid id="projects">
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
                  src={portfolio}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Portfolio Website</p>

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Ajith_Portfolio_FrontEnd"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    href="https://ajith-portfolio-new.vercel.app/"
                    className="overlay-a"
                  >
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>

                <Card.Body>
                  <Card.Title>AjithGPT</Card.Title>
                  <Card.Text className="fs-2">
                    <i class="devicon-html5-plain colored"></i>

                    <i class="devicon-css3-plain colored ml-2"></i>

                    <i class="devicon-react-original colored ml-2"></i>

                    <i class="devicon-javascript-plain colored ml-2"></i>

                    <i class="devicon-materialui-plain colored ml-2"></i>
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
                  src={ticktmate}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Ticket Mangement System</p>

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Ticket-Book"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://ticket-book-ajith.vercel.app/"
                  >
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>Ticket Mate</Card.Title>
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
                  src={mugprint}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Art Website </p>

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/MugPrint"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a className="overlay-a" href="https://mug-print.vercel.app">
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>WallArt</Card.Title>
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
                  src={notesin}
                />
                <div className="overlay">
                  <h3 className="overlay-h">Notes Website</h3>
                  <p className="overlay-p">Notes Gallery</p>

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/doc-app"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://notes-in-new.vercel.app/"
                  >
                    <i class="fa-solid fa-link  text-light  fs-2 "></i>
                  </a>
                </div>{" "}
                <Card.Body>
                  <Card.Title>NotesIn</Card.Title>
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
                  src={moviearena}
                />
                <div className="overlay">
                  <h3 className="overlay-h">WEBSITE DESIGN</h3>
                  <p className="overlay-p">Netflix Clone</p>

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Moviearena"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    href="https://moviearenaa.netlify.app"
                    className="overlay-a"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/hms"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Anime-finder"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://animefinder-ajithps.netlify.app"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/TicTacToe"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://tictactoe-ajithps.netlify.app"
                  >
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
          {/* <Row>
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
                  <a
                    className="overlay-a"
                    href="https://zomato-clone-ajithps.netlify.app"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Discover-india"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://discover-india.netlify.app"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/Travelguide"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://travelguide-ajith.netlify.app"
                  >
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

                  <a
                    className="overlay-a"
                    href="https://github.com/ajps208/weatherApp"
                  >
                    {" "}
                    <i class="devicon-github-original text-light  fs-2 "></i>
                  </a>
                  <a
                    className="overlay-a"
                    href="https://weatherapp-ajithps.netlify.app"
                  >
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
          </Row> */}
        </div>
      </Container>
      {/* Contact Section Redesign */}
      <Container fluid className="contact-section py-5" id="contacts">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="text-center mb-5">
              <p className="subtitle">Get in Touch</p>
              <h1 className="section-title">Contact Me</h1>
              <div className="title-underline mx-auto"></div>
              <p className="section-description mt-4">
                Let's connect and discuss how we can work together on your next
                project
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={11} lg={11}>
            <div className="contact-card">
              <Row>
                <Col md={5}>
                  <div className="contact-info p-4">
                    <h3 className="mb-4">Let's Talk</h3>

                    <div className="contact-item mb-4">
                      <div className="contact-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Phone</h5>
                        <p>8139095765</p>
                      </div>
                    </div>

                    <div className="contact-item mb-4">
                      <div className="contact-icon">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Email</h5>
                        <p>ajithps208@gmail.com</p>
                      </div>
                    </div>

                    <div className="contact-item mb-4">
                      <div className="contact-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Location</h5>
                        <p>
                          Puthupully House, Thottipal p.o, Thrissur, Kerala
                          680310
                        </p>
                      </div>
                    </div>

                    <div className="social-links mt-5">
                      <a
                        href="https://github.com/ajps208"
                        className="social-icon"
                        aria-label="GitHub"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ajith-ps-16a743259/"
                        className="social-icon"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        aria-label="Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        aria-label="Stack Overflow"
                      >
                        <i className="fa-brands fa-stack-overflow"></i>
                      </a>
                    </div>
                  </div>
                </Col>

                <Col md={7}>
                  <div className="contact-form p-4">
                    <h3 className="mb-4">Send Me a Message</h3>
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="send-message-btn">
                        Send Message{" "}
                        <i className="fa-solid fa-paper-plane ms-2"></i>
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
