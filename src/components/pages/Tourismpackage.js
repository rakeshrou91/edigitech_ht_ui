import React, { Suspense } from "react";
import "./comman.css";
import Image from "react-bootstrap/Image";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

export default function TourismPackage() {
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="compare">
      <Container maxWidth="md">
      <h2 style={{fontSize:'70px'}}> Tourism Package</h2>
      {<br/>}
      <a href="/"  style={{ textDecoration:'none',color:'#fff',marginLeft:'1em'}}>
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp; Tourism Package
      </a>
      </Container>
        {/* <div className="compareheading">
          <h2> Tourism Package</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Tourism Package
          </a>
          &nbsp;&nbsp;
        </div> */}
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="comparecard" style={{ boxShadow: "none" }}>
            <span>OUR EXCLUSIVE OFFERS</span>
            <h2>Tourism Package</h2>
            <p>
              We offer a wide range of package that meets all your requirements.
              eHealthFlex also offers
              <br /> a facility to customize the package according to your
              budget and expectations
            </p>
          </Card>
          <Card className="comparecardset" style={{ boxShadow: "none" }}>
            <tr>
              <td>
                <Card className="comparestandard">
                  <Image src={process.env.PUBLIC_URL + "/vol22.jpg"} />
                  <br />
                  <br />
                  <span>Standard</span>
                  <ul>
                    <li>
                      <i class="fas fa-check"></i> 3-4 Star Comfortable Budget
                      Accommodation
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Flight Booking Assistance
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Standard Car For All
                      Movements
                    </li>
                    <li>
                      <i class="fas fa-check"></i> NA
                    </li>
                    <li>
                      <i class="fas fa-check"></i> City Tour Included
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Linguist
                    </li>
                    <li>
                      <i class="fas fa-check"></i> NA
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Currency, SIM, Internet &
                      Banking Assistant
                    </li>
                    <div>
                      <a href="/" style={{ textDecoration:'none',color:'#fff' }} >CLICK HERE FOR MORE DETAILS</a>
                    </div>
                  </ul>
                </Card>
              </td>
              <td>
                <Card className="comparestandard">
                  <Image src={process.env.PUBLIC_URL + "/vol11.jpg"} />
                  <br />
                  <br />
                  <span>Premium</span>
                  <ul>
                    <li>
                      <i class="fas fa-check"></i> 3-4 Star Comfortable Budget
                      Accommodation
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Flight Booking Assistance
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Standard Car For All
                      Movements
                    </li>
                    <li>
                      <i class="fas fa-check"></i> NA
                    </li>
                    <li>
                      <i class="fas fa-check"></i> City Tour Included
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Linguist
                    </li>
                    <li>
                      <i class="fas fa-check"></i> NA
                    </li>
                    <li>
                      <i class="fas fa-check"></i> Currency, SIM, Internet &
                      Banking Assistant
                    </li>
                    <div>
                      <a href="/" style={{ textDecoration:'none',color:'#fff' }}>CLICK HERE FOR MORE DETAILS</a>
                    </div>
                  </ul>
                </Card>
              </td>
            </tr>
          </Card>
        </Grid>
      </Paper>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
