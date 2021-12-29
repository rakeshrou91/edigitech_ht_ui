import React, { Suspense } from "react";
import "./comman.css";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@mui/material";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1 = React.lazy(() => import("../Navbar1"));

const Specialoffer = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar1 />
        </Suspense>
  
        <div className="special">
          <div className="specialheading">
            <Typography variant="h2" gutterBottom component="div">
              <h2>Special Offers</h2>
            </Typography>
            <a href="/">
              <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
              <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Special Offers
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
            Special Offers
         
         </Typography>
         <Typography variant="subtitle1" gutterBottom component="div">
         With the help of our channel partners and the healthcare service providers, we run special offer campaigns for our users & clients and we hope they can make the most of it.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Example: Special offers can be on complete package or it can be applicable for only few components of the package. Users need to check on details of the special offers


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

export default Specialoffer;
