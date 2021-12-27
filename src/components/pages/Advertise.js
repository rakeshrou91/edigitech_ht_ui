import React, { Suspense } from 'react';
import "./comman.css";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Typography from '@mui/material/Typography';

const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));
const Advertise = () => {
    return (
        <>
       <Suspense fallback={<div>Loading...</div>}>
          <Navbar1/>
       </Suspense>
     
      <div className="advertise">
        <div className="advertiseheading">
        <Typography  variant="h2" gutterBottom component="div">
        <h2>Advertise With Us</h2>
        </Typography>
         
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Advertise With Us
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="advertiseheadingcard" style={{ boxShadow: "none" }}>
            <span>Advertise With Us</span>

            <Image
              className="img"
              src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
              rounded
            />
            <div className="wrapper">
            
                  <p style={{ textAlign: "initial" }}>
                  We are working dedicatedly to be amongst the industry’s leading healthcare providing platforms. Advertisers can trust our brand, products, and services as we are recognized for excellence. Advertising with us will help you in gaining new leads and boosting sales.


                  </p>
              
            </div>
          </Card>
        </Grid>
      </Paper>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
        </>
    )
}

export default Advertise;
