import React, { Suspense } from "react";
import "./comman.css";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@mui/material";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1 = React.lazy(() => import("../Navbar1"));

const Careers = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar1 />
      </Suspense>

      <div className="careers">
        <div className="careersheading">
          <Typography variant="h2" gutterBottom component="div">
            <h2>Careers</h2>
          </Typography>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Careers
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
      <Container maxWidth="md">
      
      
        <Typography variant="h4" gutterBottom component="div" style={{color:"#5bd1d7"}} >
        Careers
       </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
       Working with eHealthFlex, You can contribute your efforts to
                meet the goals by working with eHealthFlex. We aim to look after
                the health and quality of life with our services.
      </Typography>
      {<br/>}
      <Typography variant="h4" gutterBottom component="div" style={{color:"#5bd1d7"}}> 
      Join Our Team
       </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
       We are now accepting applications for fellowships and internships.
      </Typography>
      </Container>
      {<br/>}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Careers;
