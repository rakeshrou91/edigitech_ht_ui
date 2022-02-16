import React, { Suspense } from "react";
import "./comman.css";
import "./Affiliateprogram.css";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Questionhelp from "./UI/Questionhelp";
import Container from "@material-ui/core/Container";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

export default function HelpCenter() {

  

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="help">
      <Container maxWidth="xs">
      <h2 style={{fontSize:'70px'}}>  Help Center</h2>
      {<br/>}
      <a href="/"  style={{ textDecoration:'none',color:'#fff',marginLeft:'1em'}}>
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp; Help Center
      </a>
      </Container>
        {/* <div className="helpheading">
          <h2> Help Center</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Help Center
          </a>
          &nbsp;&nbsp;
        </div> */}
      </div>
      <Paper className="paper" style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="card" style={{ boxShadow: "none" }}>
            <div className="container1">
              <span className="span">WELCOME TO</span>
              <div className="rt1-section-title">Our Help Center</div>
              <p>
                We're here to help you 24/7.Check out our help guides for
                information and answers.
              </p>
            </div>
          </Card>
          <Card style={{ boxShadow: "none" }}>
            <div className="row">
              <div className="column">
                <img src={process.env.PUBLIC_URL + "help-icon-1.png"} alt='help-icon-1'/> <br />
                <h2>Account Overview</h2>
                <br />
              </div>
              <div className="column">
                <img src={process.env.PUBLIC_URL + "help-icon-2.png"} alt='help-icon-2'/>
                <br />
                <h2>FAQ</h2>
                <br />
              </div>
              <div className="column">
                <img src={process.env.PUBLIC_URL + "help-icon-3.png"} alt='help-icon-3'/> <br />
                <h2>Contact Us</h2>
                <br />
              </div>
              <div className="column">
                <img src={process.env.PUBLIC_URL + "help-icon-4.png"} alt='help-icon-4'/>
                <br />
                <h2> Meet The Team</h2>
                <br />
              </div>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card style={{ boxShadow: "none" }}>
            <div className="section3">
              <div> Didn't find what You were looking for?</div>
              <button ><a href="/contact-us">SUBMIT YOUR QUERY</a></button>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          {/* <Card className="helpquetionscard" style={{ borderRadius: "555px" }}>
            <ul>
              <li>
                <a
                  onClick={() => {
                    setQuestion1(!question1);
                  }}
                  
                >
                  <Avatar style={{ backgroundColor: "#004D61" }}>
                    <i class="fas fa-question"></i>
                  </Avatar>
                </a>
                <span>
                  What are the possible reasons for my credit card declining?
                </span>
              </li>
            </ul>
          </Card>
          {question1 && question1Content}
          <Card className="helpquetionscard" style={{ borderRadius: "555px" }}>
            <ul>
              <li>
                <h6
                  onClick={() => {
                    setQuestion2(!question2);
                  }}
                 
                >
                  <Avatar style={{ backgroundColor: "#004D61" }}>
                    <i class="fas fa-question"></i>
                  </Avatar>
                </h6>
                <span>
                  How long in advance must we book and make full payment?
                </span>
              </li>
            </ul>
          </Card>
          {question2 && question2Content}
          <Card className="helpquetionscard" style={{ borderRadius: "555px" }}>
            <ul>
              <li>
                <h6
                  onClick={() => {
                    setQuestion3(!question3);
                  }}
                 
                >
                  <Avatar style={{ backgroundColor: "#004D61" }}>
                    <i class="fas fa-question"></i>
                  </Avatar>
                </h6>
                <span>
                  How do I search for a hotel in a certain area using the map
                  tool?
                </span>
              </li>
            </ul>
          </Card>
          {question3 && question3Content}
          <Card className="helpquetionscard" style={{ borderRadius: "555px" }}>
            <ul>
              <li>
                <h6
                  onClick={() => {
                    setQuestion4(!question4);
                  }}
                 
                >
                  <Avatar style={{ backgroundColor: "#004D61" }}>
                    <i class="fas fa-question"></i>
                  </Avatar>
                </h6>
                <span>How can I make a booking?</span>
              </li>
            </ul>
         
          {question4 && question4Content} */}
          
        </Grid>
      </Paper>
      <Questionhelp />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
