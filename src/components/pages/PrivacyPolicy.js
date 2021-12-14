import React, { Suspense } from "react";
import "./comman.css";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";

const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

const PrivacyPolicy = () => {
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="privacypolicy">
        <div className="privacypolicyheading">
          <h2>Privacy Policy</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Privacy Policy
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="customerreviewcard" style={{ boxShadow: "none" }}>
            <span>PRIVACY POLICY</span>

            <Image
              className="img"
              src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
              rounded
            />
            <div className="wrapper">
              <ul>
                <li class="para">
                  <p style={{ textAlign: "initial" }}>
                    We process individual information needed for the foundation,
                    execution, or handling of our scope of administrations. If
                    you have given us your agreement to deal with individual
                    information for explicit purposes, we will handle it based
                    on your assent
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    Individual information is gathered, handled, and utilized by
                    us solely for the accompanying purposes
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    for contact and related correspondence
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    for handling your solicitation and for any further
                    exhortation you might require
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    to show remarks in our blog work
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    to get in touch with us to check your information
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    to guarantee that our site is introduced to you in the best
                    and intriguing manner conceivable (for example through
                    unknown assessment)
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    for the specialized acknowledgement of our offers
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </Grid>
      </Paper>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PrivacyPolicy;
