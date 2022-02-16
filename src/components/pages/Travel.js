import React, { Suspense } from "react";
import "./comman.css";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@mui/material";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1 = React.lazy(() => import("../Navbar1"));

const Travel = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar1 />
        </Suspense>
  
        <div className="travel">
          <div className="travelheading">
            <Typography variant="h2" gutterBottom component="div">
              <h2>Travel Insurance & Safety Guide</h2>
            </Typography>
            <a href="/">
              <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
              <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Travel Insurance & Safety Guide
            </a>
            &nbsp;&nbsp;
          </div>
        </div>
        {<br />}
        <Container maxWidth="xs">
      <Avatar
          alt="abt_vec_2"
          src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
          style={{ height: 300, width: 400}}
        />
      </Container>
      {<br/>}
        <Container maxWidth="md">
        
          {/* <Avatar
            alt="abt_vec_2"
            src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
            style={{ height: 300, width: 300,display:"center",justifyContent: "center",alignContent:"center"}}
          /> */}
          <Typography variant="h4" gutterBottom component="div" style={{color:"#5bd1d7"}} >
              Travel Insurance & Safety Guide
         
         </Typography>
         <Typography variant="subtitle1" gutterBottom component="div">
         Travel insurances are made to safeguard the journey of the patients. there are different types of insurance policies that are designed as per the needs of the patients travelling. The Travel Insurance will be covering the risks like trip cancellation, medical emergency, theft or loss. It is important to understand the policy before buying it. Identifying the coverages during the medical journey and choosing the best fit is required.


        </Typography>
        {<br/>}
    
        </Container>
        {<br/>}
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </>
    )
}

export default Travel;
