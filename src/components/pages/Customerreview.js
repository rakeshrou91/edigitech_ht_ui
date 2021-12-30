import React, { Suspense } from "react";
import "./comman.css";
import { Grid, Paper, Avatar } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1 = React.lazy(() => import("../Navbar1"));
export default function Customerreview() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar1 />
      </Suspense>

      <div className="customerreview">
        <div className="customerreviewheading">
          <Typography variant="h2" gutterBottom component="div">
            <h2>Customer Reviews</h2>
          </Typography>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Customer Reviews
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
          CUSTOMER REVIEWS
        </Typography>
        <ul>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
              The medical tourism platform provided by eHealthFlex has made my
              medical journey easier and fruitful. I am satisfied with the
              service provided and the doctors suggested are amongst the best
              ones in India. I would recommend eHealthFlex for medical tourism
              around the globe - "Steve Smith"
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
              I have used eHealthFlex platform to travel from Kenya to India for
              my heart surgery. I am much satisfied with their services and the
              assistance received when I arrived in India. They have helped me
              with the guest house and also with the city tour - "Henry Ngidi"
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" gutterBottom component="div">
              I would like to thank eHealthFlex for the support and guidance
              they have given at the time of treatment. They have helped me in
              finding the best accommodation, hospital and doctors - "Abdullah
              Shaikh"
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
}
