import React, { Suspense } from "react";
import "./Affiliateprogram.css";
import Image from "react-bootstrap/Image";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";

const Aboutussignup = React.lazy(() => import("./UI/aboutussignup"));
const Footer = React.lazy(() => import("./UI/footer"));

export default function AffiliateProgram() {
  return (
    <>
      <div className="affiliateprogram">
        <div className="heading">
          <h2> Affiliate Program</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home{" "}
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Affiliate Program
          </a>{" "}
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper className="paper" style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="card" style={{ boxShadow: "none" }}>
            <div className="container1">
              <span className="span">WHY SHOULD YOU JOIN</span>
              <div className="rt1-section-title">Affiliate Program</div>
              <p>
                Joining our affiliate program provides you with countless
                opportunities to combine your love for travel and your ability
                to earn <br />
                additional revenue.
              </p>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="textcontent" style={{ boxShadow: "none" }}>
            <Image
              className="iconx"
              src={process.env.PUBLIC_URL + "/iconx-3.png"}
              rounded
            />
            <h3>What affiliate benefits are offered?</h3>
            <ul>
              <li>
                <i class="far fa-check-circle">
                  {" "}
                  Earn up to 5% commission per sale
                </i>
              </li>
              <li>
                <i class="far fa-check-circle"> Average order of $650+</i>
              </li>
              <li>
                <i class="far fa-check-circle">
                  {" "}
                  Variety of text links and banners.
                </i>
              </li>
              <li>
                <i class="far fa-check-circle">
                  {" "}
                  Reliable third-party tracking
                </i>
              </li>
              <li>
                <i class="far fa-check-circle">
                  {" "}
                  Accessible and dynamic reporting
                </i>
              </li>
              <li>
                <i class="far fa-check-circle"> Monthly commission checks</i>
              </li>
              <li>
                <i class="far fa-check-circle"> Exciting incentive programs</i>
              </li>
              <li>
                <i class="far fa-check-circle"> Dedicated affiliate team</i>
              </li>
            </ul>
            <div>
              <Image
                className="workimg"
                src={process.env.PUBLIC_URL + "/work-img-6.png"}
                rounded
              />
            </div>
          </Card>
          <Card className="textcontent1" style={{ boxShadow: "none" }}>
            <Image
              className="iconx1"
              src={process.env.PUBLIC_URL + "/iconx-4.png"}
              rounded
            />
            <h3>Why partner with eHealthFlex ?</h3>
            <p>
              eHealthFlex is a thriving online travel superstore with a wide
              selection of ultimate vacation destinations and competitive
              pricing for the savvy traveler. Joining our affiliate program
              provides you with countless opportunities to combine your love for
              travel and your ability to earn additional revenue.
            </p>

            <button> READ MORE</button>
            <div>
              <Image
                className="workimg2"
                src={process.env.PUBLIC_URL + "/work-img-7.png"}
                rounded
              />
            </div>
          </Card>
        </Grid>
      </Paper>

      <Suspense fallback={<div>Loading...</div>}>
        <Aboutussignup />
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      {/* <p  style={{marginTop:'-0%'}}>
       <h6 ><i class="fas fa-home"></i> </h6>
       </p>
     */}
    </>
  );
}
