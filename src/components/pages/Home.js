import React, { Suspense, useState } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import "./Home.css";
import "../../App.css";
import { ReactVideo } from "reactjs-media";
import Image from "react-bootstrap/Image";
import Currency from "./UI/Currency";
import { Department, Destination } from "../select/Select";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const Background = React.lazy(()=>import("./UI/background"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar = React.lazy(() => import("../Navbar"));
const Upload = React.lazy(() => import("./UI/Upload"));

export default function Home() {
  const cardstyle = {
    boxShadow: "none",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    paddingRight: "10px",
    paddingLeft: "10px",
  };
  const paperStyle = {
    padding: 20,
    height: 800,
    width: "100%",
    margin: "24% 0%",
    boxShadow: "none",
    justifyContent: "center",
    textAlign: "center",
  };
  const [active, setActive] = useState("Mumbai");

  const [getdiagnosedactive, setActivegetdiagnosed] = useState("already");

  const mumbaiImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/11.jpg"}
            alt="Deteminology"
            style={{ height: "90%", width: "90%" }}
          />
          <Typography variant="h6" gutterBottom component="div">
          Deteminology
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Ophthalmologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Ophthalmologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Cardiologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Cardiologists
          </Typography>
        </div>
      </div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Endocrinologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Endocrinologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/15.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Gastroenterologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Gastroenterologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Nephrologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Nephrologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const delhiImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/11.jpg"}
            alt="Deteminology"
            style={{ height: "90%", width: "90%" }}
          />
           <Typography variant="h6" gutterBottom component="div">
           Deteminology
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Cardiologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Cardiologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/15.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Gastroenterologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Gastroenterologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const kolkataImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            style={{ height: "90%", width: "30%" }}
            alt="Ophthalmologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Ophthalmologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const puneImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            alt="Ophthalmologists"
            style={{ height: "90%", width: "90%" }}
          />
           <Typography variant="h6" gutterBottom component="div">
           Ophthalmologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Endocrinologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Endocrinologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Nephrologists"
          />
           <Typography variant="h6" gutterBottom component="div">
          Nephrologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const bangaloreImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/11.jpg"}
            alt="Deteminology"
            style={{ height: "90%", width: "90%" }}
          />
           <Typography variant="h6" gutterBottom component="div">
           Deteminology
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Cardiologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Cardiologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Endocrinologists"
          />
           <Typography variant="h6" gutterBottom component="div">
           Endocrinologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const hyderabadImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/11.jpg"}
            alt="Deteminology"
            style={{ height: "90%", width: "90%" }}
          />
          <Typography variant="h6" gutterBottom component="div">
          Deteminology
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Ophthalmologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Ophthalmologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "90%", width: "90%" }}
            alt="Endocrinologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Endocrinologists
          </Typography>
        </div>
      </div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/15.jpg"}
            style={{ height: "90%", width: "60%" }}
            alt="Gastroenterologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Gastroenterologists
          </Typography>
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "90%", width: "60%" }}
            alt="Nephrologists"
          />
          <Typography variant="h6" gutterBottom component="div">
          Nephrologists
          </Typography>
        </div>
      </div>
    </div>
  );
  const getdiagnosedContent = (
    <div>
      <Card className="card" style={cardstyle}>
        <Card className="Card1" style={{ boxShadow: "5px 10px 8px #888888 " }}>
          <form>
            <TextField
              style={{ width: "436px", marginRight: "20px", marginTop: "20px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              style={{ width: "436px", marginTop: "20px" }}
              id="outlined-basic"
              label="Diseases Symptom"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "436px", marginTop: "10px", marginRight: "20px" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              style={{ width: "436px", marginTop: "10px" }}
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "896px", marginTop: "10px" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
            <TextField
              style={{ width: "400px", marginTop: "10px", marginRight: "10px" }}
              id="outlined-basic"
              label="Country"
              variant="outlined"
            />
            <TextField
              style={{ width: "300px", marginTop: "10px", marginRight: "10px" }}
              id="outlined-basic"
              label="State"
              variant="outlined"
            />
            <TextField
              style={{ width: "160px", marginTop: "10px", marginRight: "10px" }}
              id="outlined-basic"
              label="Pin Code"
              variant="outlined"
            />
            <br />
            <div
              style={{
                width: "892px",
                height: "200px",
                marginTop: "10px",
                marginLeft: "106px",
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Upload style={{ height: "100px" }} />
              </Suspense>
            </div>
         
          <br />
          <br />
          <div className="deptbutton">
            <button
              class="link-button1"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <b>Submit</b>
            </button>
          </div>
          <br />
          </form>
        </Card>
        <br />
        <br />
      </Card>
    </div>
  );
  const alreadydiagnosedContent = (
    <div>
       <Container maxWidth="md">
        <Card
          style={{
            display: "center",
            justifyContent: "center",
            tableLayout: "center",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
        >
          <br />
          <br />
          <Department></Department> &nbsp; &nbsp; &nbsp; &nbsp;
          <Destination></Destination>
          <button class="link-button1">
            <b>Search Facility </b>
          </button>
          &nbsp;&nbsp;
          <button class="link-button1">
            <b>Search Doctor</b>
          </button>
          <br />
          <br />
        </Card>
      </Container>
    </div>
  );
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Background/> */}
        <Navbar />
      </Suspense>

      <div className="services"></div>

      {/* <Image className="img" src={process.env.PUBLIC_URL + "/banner1.png"} /> */}
      <div className="mtimg">
        <Image src={process.env.PUBLIC_URL + "/mt.png"} rounded />
        <h4 style={{ color: "#413E3E" }}>
          Looking for a stress-free medical journey?
        </h4>
      </div>
      <Paper style={paperStyle}>
        <Grid>
          <Card className="reactoutsection" style={cardstyle}>
            <span
              style={{ color: "#5BD1D7", fontSize: "2vh", fontWeight: "bold" }}
            >
              REACH BEFORE YOU FLY OUT
            </span>
            <div className="rt1-section-title">
              Connect With The <br />
              Leading Doctors &<br /> Hospitals
            </div>
            <p>
              You can rely on us for choosing the top specialists and clinics.
              The list of doctors and hospitals present on <br />
              the portal is curated after thorough research and you can expect
              to find the best-fit as per your
              <br /> requirement. You can rely on us for finding the best
              doctors in India and around the globe. This is not a <br />
              google promoted list that we provide.
            </p>
          </Card>
        </Grid>
      </Paper>
      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "-55%",
        }}
      >
        <Grid>
          <Card className="card" style={cardstyle}>
            <div className="rt1-section-title">Simple Steps to Get Started</div>
            <br />
            <p style={{ color: "#413E3E" }}>
              Prepare For Your Medical Trip. Find out all you need to know
              before you start. Healthcare issues are critical & unique at the
              same <br /> time. And there is no one package that fits all.
              That's why we offer customized treatment packages
            </p>
          </Card>
        </Grid>
      </Paper>
      <br />
      <br />
      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid>
          <Card className="iconsection" style={cardstyle}>
            <div className="rowicon">
              <div className="columnicon">
                <Avatar
                  className="avatar"
                  src={process.env.PUBLIC_URL + "01.png"}
                  style={{ height: 120, width: 120 }}
                />
                <br />
                <span>Sneak Peek</span>
                <br />
                <p>
                  Choose from list of selected Hospitals,
                  <br /> Clinics and Healthcare Providers
                </p>
              </div>
              <div className="columnicon">
                <Avatar
                  className="avatar"
                  src={process.env.PUBLIC_URL + "02.png"}
                  style={{ height: 120, width: 120 }}
                />
                <br />
                <span>Travel</span>
                <br />
                <p>Search by price, destination, and ratings</p>
              </div>
              <div className="columnicon">
                <Avatar
                  className="avatar"
                  src={process.env.PUBLIC_URL + "03.png"}
                  style={{ height: 120, width: 120 }}
                />
                <br />
                <span>Accommodation</span>
                <br />
                <p>
                  Get best in class and wholesome <br />
                  experience with us
                </p>
              </div>
              <div className="columnicon">
                <Avatar
                  className="avatar"
                  src={process.env.PUBLIC_URL + "04.png"}
                  style={{ height: 120, width: 120 }}
                />
                <br />
                <span> Treatment</span>
                <br />
                <p>
                  Get the most suitable treatment options
                  <br /> in India & across the globe
                </p>
              </div>
            </div>
          </Card>
        </Grid>
      </Paper>

      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid>
          <Card className="section" style={cardstyle}>
            <div className="divclass">
              <h2>TAKE A LOOK AT</h2>
              <h1>Our Favourite Deals</h1>
              <br />
              <br />
              <br />
              <p>
                Experience the best-in-class medical treatment and support for
                medical tourists along with activities & trips in India
                <br /> and around the globe
              </p>
              <br />
              <br />
              <br />
              <button class="link-button1">
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="/compare"
                >
                  Read More
                </a>
              </button>
            </div>
          </Card>
        </Grid>
      </Paper>

      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid>
          <Card className="card" style={cardstyle}>
            <span
              style={{ color: "#5BD1D7", fontSize: "2vh", fontWeight: "bold" }}
            >
              YOUR MONEY IS SECURE WITH US
            </span>
            <div class="rt1-section-title">Conversion Check</div>
            <p>Enquire the best for your medical travel</p>
            <Currency />
          </Card>
          <br />
        </Grid>
      </Paper>
      <br />

      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid>
          <Card className="imagessection" style={cardstyle}>
            <div className="imagesectiondiv">
              <h2>
                <b> GLIMPSE OF</b>
              </h2>
              <br />
              <h1>
                Top Medical Tourism <br />
                Destinations
              </h1>
              <br />
              <p>
                We offer the best services and a list of treatment centres as
                per your requirement. Find the best hospitals
                <br /> and treatment centres in India and around the globe.
              </p>
              <br /> <br />
              <button
                onClick={() => {setActive("Mumbai");  }}
                class={active==="Mumbai"? "button-hover clickactive" :" button-hover "}
              >
                Mumbai
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Delhi");
                }}
                class={active=== "Delhi"? "button-hover clickactive" :" button-hover"}
              >
                Delhi
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Kolkata");
                }}
                class={active=== "Kolkata"? "button-hover clickactive" :" button-hover"}
              >
                Kolkata
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Pune");
                }}
                class={active=== "Pune"? "button-hover clickactive" :" button-hover"}
              >
                Pune
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Bangalore");
                }}
                class={active=== "Bangalore"? "button-hover clickactive" :" button-hover"}
              >
                Bangalore
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Hyderabad");
                }}
                class={active=== "Hyderabad"? "button-hover clickactive" :" button-hover"}
              >
                Hyderabad
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setActive("Ahmedabad");
                }}
                class={active=== "Ahmedabad"? "button-hover clickactive" :" button-hover"}
              >
                Ahmedabad
              </button>
              <space />
              <space />
              <br />
              {active === "Mumbai" && mumbaiImage}
              {active === "Delhi" && delhiImage}
              {active === "Kolkata" && kolkataImage}
              {active === "Pune" && puneImage}
              {active === "Bangalore" && bangaloreImage}
              {active === "Hyderabad" && hyderabadImage}
              {active === "Ahmedabad" && hyderabadImage}
              <a class="link-button1" href="/">
                <b>SIGN IN FOR MORE OPTIONS</b>
              </a>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "6%",
        }}
      >
        <Grid>
          <Card className="reactoutsection" style={cardstyle}>
            <div class="rt1-section-title">
              Treatment Packages
              <br /> On Offer
            </div>
            <p style={{ color: "#413E3E" }}>
              Get urged to travel and seek medical advice, track down the best
              treatment choices at the most
              <br /> circumspect costs. Track down our top deals that are
              updated every day to book the most appropriate
              <br /> medical treatment according to your requirements. We offer
              the best support for medical tourists.
            </p>
            </Card>
          {<br/>}

          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 428,
                  height: 228,
                },
              }}
            >
              <Paper
                elevation={3}
                style={{ background: "linear-gradient(#e66465, #9198e5)" }}
              >
                <h1 style={{ marginTop: 59 }}>
                  <a
                    href="/standard"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Standard
                  </a>
                </h1>
              </Paper>
              <Paper
                elevation={3}
                style={{ background: "linear-gradient(#e66465, #9198e5)" }}
              >
                <h1 style={{ marginTop: 59 }}>
                  <a
                    href="/premium"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Premium
                  </a>
                </h1>
              </Paper>
            </Box>
          </Container>
         
        </Grid>
      </Paper>
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
      </div>
      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Grid>
          <Card className="card" style={cardstyle}>
            <Card className="reactvideo" style={{ borderRadius: "26px" }}>
              <ReactVideo
                src={process.env.PUBLIC_URL + "/Flex-MT_Videov6.mp4"}
                poster={process.env.PUBLIC_URL + "/play-video-bg.png"}
                primaryColor="red"
              />
            </Card>
          </Card>
        </Grid>
      </Paper>
      <br />

      <Paper
        style={{
          boxShadow: "none",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "4%",
        }}
      >
        <Grid>
          <Card
            className="reactoutsection"
            style={{ cardstyle, boxShadow: "none" }}
          >
            <div class="rt1-section-title">
              Help Us To Find You
              <br /> The Best
            </div>
            <br />
            <br />
            <button  onClick={() => {
                setActivegetdiagnosed("already");
              }}class={getdiagnosedactive=== "already"? "button111 activeevent" :"button111"}>Already Diagnosed </button> <space />
            <space />
            <button
               onClick={() => {
                setActivegetdiagnosed("get");
              }}
              
              className={getdiagnosedactive=== "get"? "button111 activeevent" :" button111"}
            >
              Get Diagnosed
            </button>
            <space />
            <space />
            <br />
          </Card>
          {getdiagnosedactive === "already" && alreadydiagnosedContent}
          {getdiagnosedactive === "get" && getdiagnosedContent}
        </Grid>
      </Paper>
      <br />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
