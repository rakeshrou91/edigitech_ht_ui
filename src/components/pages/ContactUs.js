import React, { Suspense } from "react";
import "../../App.css";
import "./comman.css";
import Image from "react-bootstrap/Image";
import Input from "@mui/material/Input";
import { Grid, Paper, Avatar } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { SiIndeed } from "react-icons/si";
const Mapcontainer = React.lazy(() => import("./UI/map"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

export default function ContactUs() {
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="contact-us">
        <div className="contactusheading">
          <h2> Contact Us</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Contact Us
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="contactussection" style={{ boxShadow: "none" }}>
            <span>Contact us</span>
            <h1> Get In Touch </h1>
            <p>
              Please feel free to reach out to us for any kind of travel queries
              in relation to Medical
              <br /> Treatment. Our team will try & respond at the earliest.
            </p>
            <form>
              <Input className="input" placeholder="Name" required />
              <br />
              <Input className="input" placeholder="Mobile No" required />
              <br />
              <Input className="input" placeholder="Email Id" required />
              <br />

              <Input
                className="textfeild"
                placeholder="Message"
                multiline
                rows={2}
                rowsMax={4}
              />
              <br />
              <button className="btnsubmit">SUBMIT</button>
            </form>
            <Image
              className="sectionimg1"
              src={process.env.PUBLIC_URL + "/abt_vec_3.png"}
              rounded
            />
          </Card>
        </Grid>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <div className="row1">
            <div className="contcolumn">
              <Card
                className="addresssection"
                style={{
                  borderRadius: "26px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Avatar
                  className="avatar1"
                  src={process.env.PUBLIC_URL + "/con-1.png"}
                  style={{ height: 120, width: 100 }}
                />

                <span>Our Address</span>
                <p>
                411, Crossroads, Bhumkar Chowk,{<br/>}
                Wakad, Pune, India
                </p>
              </Card>
            </div>
            <div className="contcolumn">
              <Card
                className="addresssection"
                style={{
                  borderRadius: "26px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Avatar
                  className="contavatar"
                  src={process.env.PUBLIC_URL + "/con-2.png"}
                  style={{ height: 120, width: 120 }}
                />
                <span>Phone & Email</span>
                <p>
                +91 917 504 0052 {<br/>}
                support@ehealthflex.com
                
                </p>
              </Card>
            </div>
            <div className="contcolumn">
              <Card
                className="addresssection"
                style={{
                  borderRadius: "26px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Avatar
                  className="contavatar"
                  src={process.env.PUBLIC_URL + "/con-3.png"}
                  style={{ height: 120, width: 120 }}
                />
                <span>Stay In Touch</span>
                <br />
                <a href="/" className="socialicon">
                  <i class="fab fa-facebook"></i>
                </a>
                &nbsp;&nbsp;
                <a href="/" className="socialicon">
                  <i class="fab fa-twitter"></i>
                </a>
                &nbsp;&nbsp;
                <a href="/" className="socialicon">
                  <SiIndeed />
                </a>
                &nbsp;&nbsp;
              </Card>
            </div>
          </div>
          {/* <Card className="contactoverviewcardmap">
            <Suspense fallback={<div>Loading...</div>}>
              <Mapcontainer />
            </Suspense>
          </Card> */}
        </Grid>
      </Paper>
      {/* <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="textsection" style={{ boxShadow: "none" }}>
            <span>Take a Look at our</span>
            <h1>Trusted Partners</h1>
            <p>
              We are committed to being the best partner.eHealthFlex believes in
              being your trusted partner and earning that trust <br /> through
              confidence and performance in service and support.
            </p>
          </Card>
          <Card className="brands" style={{ boxShadow: "none" }}>
            <ul>
              <li>
                <Image src={process.env.PUBLIC_URL + "/brands-1.png"} />
              </li>
              <li>
                <Image src={process.env.PUBLIC_URL + "/brands-2.png"} />
              </li>
              <li>
                <Image src={process.env.PUBLIC_URL + "/brands-3.png"} />
              </li>
              <li>
                <Image src={process.env.PUBLIC_URL + "/brands-4.png"} />
              </li>
            </ul>
            <ul>
              <li style={{ borderBottom: "none" }}>
                <Image src={process.env.PUBLIC_URL + "/brands-4.png"} />
              </li>
              <li style={{ borderBottom: "none" }}>
                <Image src={process.env.PUBLIC_URL + "/brands-3.png"} />
              </li>
              <li style={{ borderBottom: "none" }}>
                <Image src={process.env.PUBLIC_URL + "/brands-2.png"} />
              </li>
              <li style={{ borderBottom: "none" }}>
                <Image src={process.env.PUBLIC_URL + "/brands-1.png"} />
              </li>
            </ul>
          </Card>
        </Grid>
      </Paper> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
