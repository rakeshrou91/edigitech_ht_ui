import React, { Suspense, useState } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import "./Home.css";
import "../../App.css";
import { ReactVideo } from "reactjs-media";
import Image from "react-bootstrap/Image";
import { Currency2, Department, Destination,Currency1,Amount ,Convertamount,ConvertButton} from "../select/Select";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar= React.lazy(()=> import("../Navbar"));


export default function Home() {
  const cardstyle = {
    boxShadow: "none",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
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

  const [mumbai, setMumbai] = useState(false);
  const [delhi, setDelhi] = useState(false);
  const [kolkata, setKolkata] = useState(false);
  const [pune, setPune] = useState(false);
  const [bangalore, setBangalore] = useState(false);
  const [hyderabad, setHyderabad] = useState(false);
  const [getdiagnosed, setGetdiagnosed] = useState(false);

  const mumbaiImage = (
    <div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/11.jpg"}
            alt="Deteminology"
            style={{ height: "100%", width: "100%" }}
           
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Ophthalmologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Cardiologists'
          />
        </div>
      </div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Endocrinologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/15.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Gastroenterologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Nephrologists'
          />
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
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/12.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Cardiologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Gastroenterologists'
          />
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
            style={{ height: "80%", width: "40%" }}
            alt='Ophthalmologists'
          />
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
            alt='Ophthalmologists'
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Endocrinologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Nephrologists'
          />
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
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Cardiologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Endocrinologists'
          />
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
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/13.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Ophthalmologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/14.jpg"}
            style={{ height: "100%", width: "100%" }}
            alt='Endocrinologists'
          />
        </div>
      </div>
      <div class="row1" style={{ marginLeft: "1%" }}>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/15.jpg"}
            style={{ height: "100%", width: "60%" }}
            alt='Gastroenterologists'
          />
        </div>
        <div class="column1">
          <img
            src={process.env.PUBLIC_URL + "/16.jpg"}
            style={{ height: "100%", width: "60%" }}
            alt='Nephrologists'
          />
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
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              name="file[]"
              multiple="multiple"
            />
          </form>
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
        </Card>
        <br />
        <br />
      </Card>
    </div>
  );
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      </Suspense>
      <h1 className="services"></h1>
     
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
              REACH BEFORE YOY FLY OUT
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
              <button class="link-button1" href="#">
                <b>Read More</b>
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
          </Card>
          <br />
          <Card className="currency" style={{ boxShadow: "none" }}>
            <br />
            <div className="selectbox">
              <Currency1></Currency1>&nbsp;&nbsp; &nbsp;
              <Amount/>
              &nbsp;&nbsp; <Currency2></Currency2>
            </div>
            <br />
            <br />
            <Convertamount/>
            &nbsp; &nbsp;
            <ConvertButton/>
          </Card>
        </Grid>
      </Paper>
      <br />
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
                onClick={() => {
                  setMumbai(!mumbai);
                }}
                class="button-hover"
              >
                Mumbai
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setDelhi(!delhi);
                }}
                class="button-hover"
              >
                Delhi
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setKolkata(!kolkata);
                }}
                class="button-hover"
              >
                Kolkata
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setPune(!pune);
                }}
                class="button-hover"
              >
                Pune
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setBangalore(!bangalore);
                }}
                class="button-hover"
              >
                Bangalore
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setHyderabad(!hyderabad);
                }}
                class="button-hover"
              >
                Hyderabad
              </button>
              <space />
              <space />
              <button
                onClick={() => {
                  setHyderabad(!hyderabad);
                }}
                class="button-hover"
              >
                Ahmedabad
              </button>
              <space />
              <space />
              <br />
              {mumbai && mumbaiImage}
              {delhi && delhiImage}
              {kolkata && kolkataImage}
              {pune && puneImage}
              {bangalore && bangaloreImage}
              {hyderabad && hyderabadImage}
              <a class="link-button1" href="#">
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
      <br />
      <br />
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
            <button class="button111">Already Diagnosed </button> <space />
            <space />
            <button
              onClick={() => {
                setGetdiagnosed(!getdiagnosed);
              }}
              style={{ backgroundColor: "#5BD1D7", borderColor: "#5BD1D7" }}
              class="button111"
            >
              Get Diagnosed
            </button>
            <space />
            <space />
            <br />
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
          marginTop: "4%",
        }}
      >
        <Grid>
          <Card className="card" style={cardstyle}>
            <Card
              className="Card1"
              style={{
                textAlign: "center",
                justifyContent: "center",
                boxShadow: "5px 10px 8px #888888 ",
              }}
            >
              <br />
              <br /> <Department></Department> &nbsp; &nbsp; &nbsp; &nbsp;
              <Destination></Destination>
              <br />
              <br />
              <div className="deptbutton">
                <button
                  class="link-button1"
                  style={{ textAlign: "center", justifyContent: "center" }}
                >
                  <b>Search Facility </b>
                </button>
                &nbsp;&nbsp;
                <button
                  class="link-button1"
                  style={{ textAlign: "center", justifyContent: "center" }}
                >
                  <b>Search Doctor</b>
                </button>
              </div>
              <br />
            </Card>
            <br />
            <br />
          </Card>
          {getdiagnosed && getdiagnosedContent}
        </Grid>
      </Paper> 
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
