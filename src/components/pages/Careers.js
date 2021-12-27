import React,{ Suspense} from 'react'
import "./comman.css";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Typography from '@mui/material/Typography';

const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

const Careers = () => {
    return (
       <>
       <Suspense fallback={<div>Loading...</div>}>
          <Navbar1/>
       </Suspense>
     
      <div className="careers">
        <div className="careersheading">
        <Typography  variant="h2" gutterBottom component="div">
        <h2>Careers</h2>
        </Typography>
         
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Careers
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="advertiseheadingcard" style={{ boxShadow: "none" }}>
            <span>Careers</span>

            <Image
              className="img"
              src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
              rounded
            />
            <div className="wrapper1">
            
                  <p style={{ textAlign: "initial" }}>
                  Working with eHealthFlex, You can contribute your efforts to meet the goals by working with eHealthFlex. We aim to look after the health and quality of life with our services.


                  </p>
               
            </div>
            <span>Careers</span>
            <div className="wrapper">
            
           
        
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

export default Careers;
