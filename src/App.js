/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
// import bullet from "./Img/bullet.svg";
import close from "./Img/close.svg";
// import dots from "./Img/dots.svg";
import holdingPhone from "./Img/holding-phone.jpg";
import illustration from "./Img/illustration.svg";
import person1 from "./Img/person-1.jfif";
import menu from "./Img/logo-c7.svg";
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

function App() {
  return (
    <div className="App">
      {/* <!--NAVIGATION BLOG START--> */}
      <div className="nav-bar">
        <div className="container">
          <a className="logo-nav" href="/">
            {" "}
            <img src={menu} alt="logo" />
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
      {/* <!--NAVIGATION BLOG END--> */}

      {/* <!--SECTION HERO BLOG START--> */}
      {/* <section className="hero">
        <div className="container">
          <div className="left-col">
            <p className="sub-head">it's nitty &amp; gritty</p>
            <h1>a task app that doesn't stink</h1>

            <div className="hero-cta">
              <a href="#" className="primery-cta">
                Try for free
              </a>
              <a href="#" className="watch-video-cta">
                <img src={video} alt="Video Clip" />
                Watch a video
              </a>
            </div>
          </div>

          <img src={illustration} alt="Illustration" className="hero-img" />
        </div>
      </section> */}
      {/* <!--SECTION HERO BLOG END--> */}

      {/* <!--SECTION FEATURES BLOG START--> */}

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

      <About />
      <Services />
      <WorkWith />

      <section className="features-section">
        <div className="container">
          <ul>
            <li>unlimited tasks</li>
            <li>confetti Explosions upon task completions</li>
            <li>real time collaboration</li>
            <li>sms task reminder</li>
            <li>social media announcement</li>
            <li>other awesome features</li>
          </ul>
        </div>
        <img src={holdingPhone} alt="phone" />
      </section>
      {/* <!--SECTION FEATURES BLOG END--> */}

      {/* <!--SECTION TEST  BLOG START--> */}
      <section className="test-monials-section">
        <div className="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={person1} alt="Person 1" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Sergio de Paula</cite>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={person2} alt="Person 2" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Craig McKay</cite>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={person3} alt="Person 3" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
      {/* <!--SECTION TEST  BLOG END--> */}

      {/* <!--SECTION CONTACT  BLOG START--> */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-left">
            <h2>Contact</h2>
            <ContactForm/>
            <form action="#" method="post">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <input
                type="submit"
                value="send message"
                className="send-message"
              />
            </form>
          </div>
          <div className="contact-left">
            <Box
              borderWidth='1px'
              borderRadius='lg'
              p='6' bg='white'
              boxShadow='lg'
            >
              <div>

              
              <iframe
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

              
            

          {/* <div class="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.03369795242!2d80.01091702588964!3d9.669999413076031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1631203020561!5m2!1sen!2slk"
              width="650"
              height="auto"
              // style="border:0"
              allowfullscreen=""
              loading="lazy"
              title="Lazy"
            ></iframe>
          </div> */}
        </div>
      </section>

      {/* <!--JAVASCRIPT START-->
     <script>
            
     </script> */}
    </div>
  );
}

export default App;
