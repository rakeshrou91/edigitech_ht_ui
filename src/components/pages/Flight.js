import React, { Suspense } from "react";
import "./comman.css";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@mui/material";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1 = React.lazy(() => import("../Navbar1"));

const Flight = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar1 />
        </Suspense>
  
        <div className="flights">
          <div className="flightsheading">
            <Typography variant="h2" gutterBottom component="div">
              <h2>Flights</h2>
            </Typography>
            <a href="/">
              <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
              <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Flights
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
          Flights
         
         </Typography>
         <Typography variant="subtitle1" gutterBottom component="div">
         We help you in getting best deal on your flight reservation. As per your priorities and requirements, we make sure you get the best price, connectivity and comfort to and fro.
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

export default Flight;

