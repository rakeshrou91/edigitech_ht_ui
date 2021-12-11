import React, { Suspense } from "react";
import "./comman.css";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
const Footer = React.lazy(() => import("./UI/footer"));

export default function Customerreview() {
  return (
    <>
      <div className="customerreview">
        <div className="customerreviewheading">
          <h2>Customer Reviews</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home{" "}
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Customer Reviews
          </a>{" "}
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="customerreviewcard" style={{ boxShadow: "none" }}>
            <span>CUSTOMER REVIEWS</span>

            <Image
              className="img"
              src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
              rounded
            />
            <div className="wrapper">
              <ul>
                <li>
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
                    I have used eHealthFlex platform to travel from Kenya to
                    India for my heart surgery. I am much satisfied with their
                    services and the assistance received when I arrived in
                    India. They have helped me with the guest house and also
                    with the city tour
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "initial" }}>
                    I would like to thank eHealthFlex for the support and
                    guidance they have given at the time of treatment. They have
                    helped me in finding the best accommodation, hospital and
                    doctors
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
}
