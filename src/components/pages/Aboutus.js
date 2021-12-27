import React, { Suspense } from "react";
import "./Aboutus.css";
import "./Home.css";
import { Grid, Paper } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
const Aboutussignup = React.lazy(() => import("./UI/aboutussignup"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

export default function Aboutus () {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="aboutus">
        <div className="aboutusheading">
          <h2> About us</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;About us
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper className="paper" style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="card" style={{ boxShadow: "none" }}>
            <span className="span">OUR SHORT STORY</span>
            <div className="style">Know About EHealthFlex</div>
            <div>
              <Image
                className="img"
                src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
                rounded
              />
            </div>
            <div class="wrapper">
              <p className="para" style={{ textAlign: "initial" }}>
                We have specialists from various sectors in healthcare,
                exceptionally gifted experts who are notable for their
                commitment to the field of medical science. We are here to serve
                and guide you all through your medical excursion. We will
                investigate every possibility in giving you what you are longing
                for and what you have longed for. Our entire group is here to
                hold your hand. We work with the best Doctors and Hospitals in
                India and the world. We guarantee you to give you the budget fit
                and the quality treatment alongside the fundamental data about
                the treatment and the connected plans. We are overall related
                with all medical services divisions and these medical care
                suppliers are for the most part assessed dependent on their
                worldwide certificates and affiliations. Cautiously and
                distinctly, we examine and confirm the experience of each
                specialist to guarantee the most elevated potential paces of
                progress, interfacing individuals through the most recent
                innovation and the computerized stages Thus, making an ideal
                framework. We are here to mastermind the best internet-based
                specialists for your arrangements across India, remembering
                every one of your necessities. We will try to benefit you of the
                administrations through the most recent advances utilized by our
                primary care physicians and propose you the best area or take
                you to your chose area in an issue free climate. We additionally
                offer clinical types of assistance to patients living in far off
                regions. We offer the best support for medical tourists that
                include travel assistance and accommodations.
              </p>
            </div>
          </Card>
          <Card className="card" style={{ boxShadow: "none" }}>
            <span className="span1" style={{ textAlign: "initial" }}>
              HOW WE'RE DIFFERENT
            </span>
            <div className="style1">
              Why Book {<br />}
              
              With Us?
            </div>
            <div>
              <Image
                className="img1"
                src={process.env.PUBLIC_URL + "/abt_vec_1.png"}
                rounded
              />
            </div>
            <div class="wrapper">
              <p className="para1" style={{ textAlign: "initial" }}>
                There are a lot of questions arising when we think about medical
                tourism. Medical and tourism both are different terms that seem
                a bit befuddling. There is an association between the duo which
                can be a complex one to understand. Yet, it isn't so intricate.
                Medical tourism simply means to travel to avail the best
                facilities in healthcare anywhere around the globe. We help you
                to make your journey easier and to find the best and
                cost-effective treatment options in India. Medical tourism is
                generally preferred by patients from poor and developing
                countries. Therefore, we are here to help you out in finding the
                top doctors and hospitals. We act as a platform where you can
                connect with highly skilled and top-class doctors. We also
                provide accommodation assistance and travel assistance. Language
                interpreters, local SIM availability for the medical tourists
                are few highlights of our offerings. You will get what you
                merit. i.e, the best treatment anyplace you need and in spending
                that accommodates your pocket.
              </p>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Paper className="iconpaper" style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="singleicon" style={{ borderRadius: "14px" }}>
            <Image src={process.env.PUBLIC_URL + "/box-icon-1.png"} rounded />
            <h3>100+ Hotels</h3>
            <p>
              Pick from a wide array of an ever-growing list of hotels in
              popular destinations (Over 14 million hotel rooms).
            </p>
          </Card>
          <Card className="singleicon" style={{ borderRadius: "14px" }}>
            <Image src={process.env.PUBLIC_URL + "/box-icon-2.png"} rounded />

            <h3>World Wide Tour Operators</h3>
            <p>
              The six continents are open for the adventures of a lifetime. Go
              anywhere, any place, anytime..
            </p>
          </Card>
          <Card className="singleicon" style={{ borderRadius: "14px" }}>
            <Image
              className="iconimg"
              src={process.env.PUBLIC_URL + "/box-icon-3.png"}
              rounded
            />
            <h3>Access To 1000+ Hospitals</h3>
            <p>
              
              Giving you access to the world's most prestigious and efficient
              Healthcare delivery centers.
            </p>
          </Card>
        </Grid>
      </Paper>

      <Suspense fallback={<div>Loading...</div>}>
        <Aboutussignup />
      </Suspense>
      <br />
      <br />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>

      {/* <p  style={{marginTop:'-0%'}}>
       <h6 ><i class="fas fa-home"></i> </h6>
       </p>
     */}
    </>
  );
}