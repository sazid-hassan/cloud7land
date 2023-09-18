/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
// import bullet from "./Img/bullet.svg";
import close from "./Img/close.svg";
// import dots from "./Img/dots.svg";
import holdingPhone from "./Img/holding-phone.jpg";
import illustration from "./Img/illustration.svg";
import person1 from "./Img/person-1.jfif";
import logo from "./Img/logo-c7.svg";
import person2 from "./Img/person-2.jfif";
import person3 from "./Img/person-3.jpg";
import video from "./Img/video.svg";
import About from "./Pages/About";
import Services from "./Pages/Services";
import background from "./Img/background.jpg";
import WorkWith from "./Pages/WorkWith";
import { Button } from "@chakra-ui/button";
import ContactForm from "./Components/ContactForm";
import { Box } from "@chakra-ui/layout";
import AbooutUsCard from "./Components/AboutUsCard";

function App() {
  return (
    <div className="App">
      {/* <!--NAVIGATION BLOG START--> */}
      <div className="nav-bar">
        <div className="container">
          <a className="logo-nav" href="/">
            {" "}
            <img src={logo} alt="logo" />
          </a>

          <nav>
            <ul className="first-nav"></ul>
            <ul className="second-nav">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
     

      <section className="bg-image">
        <div className="container">
          <div className="left-col">
            {/* welcome design
             */}
            <h2>welcome</h2>

            <h1>
              You've entered
              <span
                href="#"
                style={{
                  color: "blue",
                }}
              >
                {" "}
                Cloud 7
              </span>
            </h1>
            <div className="hero-cta">
              <a href="#" className="">
                <h3>“Unlocking the future of payments”</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <AbooutUsCard/> */}

      <About />
      <Services />
      <WorkWith />

      {/* <!--SECTION TEST  BLOG END--> */}

      {/* <!--SECTION CONTACT  BLOG START--> */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-left">
            <h2>Contact</h2>
            <ContactForm/>
            
          </div>
          <div >
            <Box
            className=""
              borderWidth='1px'
              borderRadius='lg'
              p='6' bg='white'
              boxShadow='lg'
            >
              <div className="">

              
              <iframe
              className="contact-iframe"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8498589542687!2d90.3783899748722!3d23.752732888687653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ae4144ca89%3A0x1a5e6bffc7992f2!2sUnion%20Heights!5e0!3m2!1sen!2sbd!4v1695034884353!5m2!1sen!2sbd" 
              width="650px"
              // style="border:0"
              allowfullscreen=""
              loading="lazy"
              title="Lazy"
            ></iframe>
            </div>
            <div>
            <h2>Address</h2>
            <p>
              <strong>Phone:</strong> (+880) 1711325111
              <br />
              <strong>Email:</strong>
              <a href="mailto: " target="_blank" rel="noopener noreferrer">
                {"cloud7@gmail.com "}
              </a>

            </p>

            
            <p>
              Cloud 7 Limited
              <br />
              Union Heights(Level-5),Panthapath,Dhaka
            </p>
              
            </div>
            

            
            </Box>
          </div>

              
            

         
        </div>
      </section>

    </div>
  );
}

export default App;
