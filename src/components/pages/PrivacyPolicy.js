import React, { Suspense } from "react";
import "./comman.css";
import { Avatar} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
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
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Privacy Policy
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      {<br />}
      <Container maxWidth="xs">
        <Avatar
          alt="abt_vec_2"
          src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
          style={{ height: 300, width: 400 }}
        />
      </Container>
     
      <Container maxWidth="md">
      <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{ color: "#5bd1d7" }}
        >
         PRIVACY POLICY
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        We process individual information needed for the foundation, execution, or handling of our scope of administrations. If you have given us your agreement to deal with individual information for explicit purposes, we will handle it based on your assent
        </Typography>
        <ul>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            Individual information is gathered, handled, and utilized by us solely for the accompanying purposes
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            For contact and related correspondence
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            For handling your solicitation and for any further exhortation you might require
            </Typography>

            <Typography variant="subtitle1" gutterBottom component="div">
            To show remarks in our blog work
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            To get in touch with us to check your information
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            To guarantee that our site is introduced to you in the best and intriguing manner conceivable (for example through unknown assessment)
            </Typography>
          </li>
           <li>
            <Typography variant="subtitle1" gutterBottom component="div">
            For the specialized acknowledgement of our offers
            </Typography>
          </li>
        </ul>
      
      </Container>
      {<br />}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PrivacyPolicy;
