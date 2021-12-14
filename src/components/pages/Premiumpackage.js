import React, { Suspense, useState } from "react";
import "./comman.css";
import { Grid, Paper} from "@material-ui/core";
import { Card } from "@material-ui/core";
import Progress from "react-progressbar";
const Mapcontainer = React.lazy(() => import("./UI/map"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));

export default function Premiumpackage() {
  const [policies, setPolicies] = useState(false);
  const [description, setDescription] = useState(false);
  const [overview, setOverview] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [services, setServices] = useState(false);
  const [packagedetails, setPackagedetails] = useState(false);

  const descriptionContent = (
    <div>
      <Card className="standardhotelcard">
        <span>Hotel Description</span>
        <p>
          Within walking distance of your destination's business and financial
          centers as well as several shopping malls. Property will be nearer to
          your Hospital and will have good connectivity with other parts of the
          city. Several public transportation options will also be available .
        </p>
        <p>
          Spacious hotel rooms and suites overlooking the city with panoramic
          garden views, offer optimal comfort with full service at a reasonable
          price. Suites come with fully-equipped kitchens.
        </p>
      </Card>
    </div>
  );
  const reviewsContent = (
    <div>
      <Card className="standardreviewsprogressbar">
        <span>
          <h3>Reviews</h3>
          <h5>(86 verified reviews)</h5>
        </span>
        <div className="standreview1scontainer">
          <h4>Excellent</h4>
          <h3>
            4.3<a>/5</a>
          </h3>
          <h5>
            <a href="none" style={{textDecoration:'none',cursor:'text'}}>eHealthFlex </a>Verified Reviews
          </h5>
          <span></span>
        </div>
        <Card className="standreviewsprogressbar" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <span>Location </span>
              <span>4.4</span>
              <Progress
                style={{
                  width: "38%",
                  backgroundColor: "#e1e1e4",
                  borderRadius: "999px",
                  marginBottom: "4px",
                }}
                completed={80}
              />
            </li>
            <li>
              <span>Cleanliness </span>
              <span>4.5</span>
              <Progress
                style={{
                  width: "38%",
                  backgroundColor: "#e1e1e4",
                  borderRadius: "999px",
                  marginBottom: "4px",
                }}
                completed={80}
              />
            </li>
          </ul>
          <ul>
            <li>
              <span>Service </span>
              <span>4.4</span>
              <Progress
                style={{
                  width: "38%",
                  backgroundColor: "#e1e1e4",
                  borderRadius: "999px",
                  marginBottom: "4px",
                }}
                completed={80}
              />
            </li>
            <li>
              <span>Facilities</span>
              <span>4.5</span>
              <Progress
                style={{
                  width: "38%",
                  backgroundColor: "#e1e1e4",
                  borderRadius: "999px",
                  marginBottom: "4px",
                }}
                completed={80}
              />
            </li>
          </ul>
        </Card>
      </Card>

      <Card className="standardreviews">
        <div className="standreviewscontainer">
          <img
            src={process.env.PUBLIC_URL + "/cmnt-2.jpg"}
            style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
            alt="cmnt-2"
          />
          <span>
            <i class="fas fa-calendar-alt"></i> Stayed in Nov 2020
          </span>
          <br />
          <span>
            <i class="fas fa-calendar-check"></i> Stayed in Nov 2020
          </span>
        </div>
        <div className="standreviewscontainer1" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <h4>
                Simon Lopez <i class="fas fa-star fa-xs "></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </h4>
            </li>
            <li>
              <span>November 20, 2020 at 8:31 pm</span>
            </li>
            <li>
              <p>
                I am very please with Hotel! I will certainly return. I got a
                wonderful from the 15 floor to the Botanical Garden a great
                Supermarket in the corner, about 2 minutes walking, and a bus
                stop to downtown within few meters. It is close to downtown and
                great price!
              </p>
            </li>
          </ul>
          <a>
            
            Reply <i class="fas fa-reply-all"></i>
          </a>
        </div>
      </Card>
      <Card className="standardreviews">
        <div className="standreviewscontainer">
          <img
            src={process.env.PUBLIC_URL + "/cmnt-3.jpg"}
            style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
            alt="cmnt-3"
          />
          <span>
            <i class="fas fa-calendar-alt"></i> Stayed in Nov 2020
          </span>
          <br />
          <span>
            <i class="fas fa-calendar-check"></i> Stayed in Nov 2020
          </span>
        </div>
        <div className="standreviewscontainer1" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <h4>
                Gary Dunn <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </h4>
            </li>
            <li>
              <span>November 20, 2020 at 8:31 pm</span>
            </li>
            <li>
              <p>
                I am very please with Hotel! I will certainly return. I got a
                wonderful from the 15 floor to the Botanical Garden a great
                Supermarket in the corner, about 2 minutes walking, and a bus
                stop to downtown within few meters. It is close to downtown and
                great price!
              </p>
            </li>
          </ul>
          <a>
            
            Reply <i class="fas fa-reply-all"></i>
          </a>
        </div>
      </Card>
      <Card className="standardreviews">
        <div className="standreviewscontainer">
          <img
            src={process.env.PUBLIC_URL + "/cmnt-4.jpg"}
            style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
            alt="cmnt-4"
          />
          <span>
            <i class="fas fa-calendar-alt"></i> Stayed in Nov 2020
          </span>
          <br />
          <span>
            <i class="fas fa-calendar-check"></i> Stayed in Nov 2020
          </span>
        </div>
        <div className="standreviewscontainer1" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <h4>
                Mark Ques <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </h4>
            </li>
            <li>
              <span>November 20, 2020 at 8:31 pm</span>
            </li>
            <li>
              <p>
                I am very please with Hotel! I will certainly return. I got a
                wonderful from the 15 floor to the Botanical Garden a great
                Supermarket in the corner, about 2 minutes walking, and a bus
                stop to downtown within few meters. It is close to downtown and
                great price!
              </p>
            </li>
          </ul>
          <a>
            
            Reply <i class="fas fa-reply-all"></i>
          </a>
        </div>
      </Card>
      <Card className="standardreviews">
        <div className="standreviewscontainer">
          <img
            src={process.env.PUBLIC_URL + "/cmnt-5.jpg"}
            style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
          />
          <span>
            <i class="fas fa-calendar-alt"></i> Stayed in Nov 2020
          </span>
          <br />
          <span>
            <i class="fas fa-calendar-check"></i> Stayed in Nov 2020
          </span>
        </div>
        <div className="standreviewscontainer1" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <h4>
                Mans Livly <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </h4>
            </li>
            <li>
              <span>November 20, 2020 at 8:31 pm</span>
            </li>
            <li>
              <p>
                I am very please with Hotel! I will certainly return. I got a
                wonderful from the 15 floor to the Botanical Garden a great
                Supermarket in the corner, about 2 minutes walking, and a bus
                stop to downtown within few meters. It is close to downtown and
                great price!
              </p>
            </li>
          </ul>
          <a>
            
            
            Reply <i class="fas fa-reply-all"></i>
           
          </a>
        </div>
      </Card>
      <Card className="standardreviews">
        <div className="standreviewscontainer">
          <img
            src={process.env.PUBLIC_URL + "/cmnt-2.jpg"}
            style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
          />
          <span>
            <i class="fas fa-calendar-alt"></i> Stayed in Nov 2020
          </span>
          <br />
          <span>
            <i class="fas fa-calendar-check"></i> Stayed in Nov 2020
          </span>
        </div>
        <div className="standreviewscontainer1" style={{ boxShadow: "none" }}>
          <ul>
            <li>
              <h4>
                Sirlon Mika <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </h4>
            </li>
            <li>
              <span>November 20, 2020 at 8:31 pm</span>
            </li>
            <li>
              <p>
                I am very please with Hotel! I will certainly return. I got a
                wonderful from the 15 floor to the Botanical Garden a great
                Supermarket in the corner, about 2 minutes walking, and a bus
                stop to downtown within few meters. It is close to downtown and
                great price!
              </p>
            </li>
          </ul>
          <a href="#">
            
            Reply <i class="fas fa-reply-all"></i>
          </a>
        </div>
      </Card>
    </div>
  );
  const policiesContent = (
    <div>
      <Card className="standardpolicies">
        <h3>Hotel Policies</h3>
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-16.png"} alt='hottel-cion-16' />
            <h4>Check-In & Check-Out</h4>
            <div>
              <p>
                <i class="far fa-check-circle"></i> Check-in from 12:00
              </p>
              <p>
                <i class="far fa-check-circle"></i> Check-out before 11:00
              </p>
            </div>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-17.png"} alt='hottel-cion-17' />
            <h4>Children And Extra Beds</h4>
            <span>
              Guests aged under 18 must be accompanied by a parent or legal
              guardian.
            </span>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-15.png"} alt='hottel-cion-15'/>
            <h5>Dining</h5>
            <div>
              <span>Buffet Breakfast $15</span>
            </div>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-14.png"} alt='hottel-cion-14'/>
            <h4>Paying At The Hotel</h4>
            <span>
              <div>
                <ul>
                  <li>
                    <img
                      style={{ height: "26px" }}
                      src={process.env.PUBLIC_URL + "/card-1.png"}
                      alt="card-1"
                    />
                  </li>
                  <li>
                    <img
                      style={{ height: "26px" }}
                      src={process.env.PUBLIC_URL + "/card-2.png"}
                      alt="card-2"
                    />
                  </li>
                  <li>
                    <img
                      style={{ height: "26px" }}
                      src={process.env.PUBLIC_URL + "/card-3.png"}
                      alt="card-3"
                    />
                  </li>
                  <li>
                    <img
                      style={{ height: "26px" }}
                      src={process.env.PUBLIC_URL + "/card-4.png"}
                      alt="card-4"
                    />
                  </li>
                  <li>
                    <img
                      style={{ height: "26px" }}
                      src={process.env.PUBLIC_URL + "/card-5.png"}
                      alt="card-5"
                    />
                  </li>
                </ul>
              </div>
            </span>
          </li>
        </ul>
      </Card>
      <Card className="standardcancel">
        <span>Cancellation</span>
        <h3>CANCELLATIONS AND REFUNDS</h3>
        <h4>Our Fault</h4>
        <p>
          We work very hard to ensure that all tours run as scheduled and enjoy
          a 99% success rate. When a tour cancels, and it is the fault of The
          Shoreditch Pub Crawl or one of the freelance guides we work with, we
          will refund your prebought ticket as well as offer up to 100% of the
          value of the original ticket price as credit towards the purchase of
          another tour as compensation. This credit cannot be used in any other
          way and will not be cashable.
        </p>
        <h4>Your Request</h4>
        <p>
          Should you not be able to attend your tour and need to cancel a tour
          booking letting us know at least 24 hours before your tour, we will
          cancel your ticket and credit you 50% of the purchase price towards
          the purchase of an additional future tour. We have a no refund policy,
          unless we are at fault for the cancelation of your tour.
        </p>
        <h4>Acts of God</h4>
        <p>
          We may not be held responsible should we be unable to offer a tour due
          to Acts of God, (tsunamis, earthquakes, volcanic dust clouds, extreme
          weather, etc.).
        </p>
      </Card>
    </div>
  );
  const servicesContent = (
    <div>
      <Card className="standardservices">
        <span>Services & Amenities</span>
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-12.png"} alt="hottel-cion-12"/>
            <h5>Transportation Services</h5>
            <p>
              <i class="far fa-check-circle"></i> Airport pickup service
              <i class="far fa-check-circle"></i> Parking
              <i class="far fa-check-circle"></i> Car rental
            </p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-13.png"} alt="hottel-cion-13"/>
            <h5>General</h5>
            <p>
              <i class="far fa-check-circle"></i> Free Wi-Fi areas
              <i class="far fa-check-circle"></i> Parking
              <i class="far fa-check-circle"></i> Car rental
            </p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-15.png"} alt="hottel-cion-15"/>
            <h5>Food & Drink</h5>
            <p>
              <i class="far fa-check-circle"></i> Western restaurant
              <i class="far fa-check-circle"></i> Indian & Western
              <i class="far fa-check-circle"></i> Café
            </p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-14.png"} alt="hottel-cion-14"/>
            <h5>Front Desk Services</h5>
            <p>
              <i class="far fa-check-circle"></i> Luggage storage
              <i class="far fa-check-circle"></i> Porter
              <i class="far fa-check-circle"></i> Tourist map
              <i class="far fa-check-circle"></i> Ticket service
              <i class="far fa-check-circle"></i> Postal service
            </p>
          </li>
        </ul>
      </Card>
    </div>
  );
  const overviewContent = (
    <div>
      <Card className="standardoverviewcard">
        <h4>highlights</h4>
        <ul>
          <li>
            <i class="fas fa-check"></i> A full-time language interpreter will
            be provided
          </li>
          <li>
            <i class="fas fa-check"></i> Priority for the treatment will be
            given to premium members
          </li>
          <li>
            <i class="fas fa-check"></i> Full-time Valet support
          </li>
          <li>
            <i class="fas fa-check"></i> 24x7 customer support services to
            resolve the issues
          </li>
          <li>
            <i class="fas fa-check"></i> Currency, SIM, Internet & Banking
            Assistant
          </li>
          <li>
            <i class="fas fa-check"></i> Dedicated personal assistance
          </li>
          <li>
            <i class="fas fa-check"></i> The package will also include
            recreational activities which can be customized as per the client
            requirement
          </li>
        </ul>
      </Card>
      <Card className="standardoverviewcard1">
        <h3>Tour Details</h3>
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/tour-1.png"} alt="tour-1"/>

            <h2>Booking Type</h2>
            <h4>Instant Booking</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/tour-2.png"} alt="tour-2"/>

            <h2>Tour Type </h2>
            <h4>Private Tour</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/tour-3.png"} alt="tour-3"/>

            <h2>Availability</h2>
            <h4>Guide/Instructor</h4>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/tour-4.png"} alt="tour-4"/>

            <h2>Guiding Method</h2>
            <h4>Available Daily</h4>
          </li>
        </ul>
      </Card>

      <Card className="standardoverviewcard1">
        <h3>Good to know</h3>
        <span>PAYMENT</span>
        <p>
          A deposit of 10% is required when booking this tour. The remaining
          balance will be charged 45 days prior departure. For any bookings
          within 45 days of departure, the full tour amount will be charged upon
          booking.
        </p>
        <span>TRAVEL INSURANCE</span>
        <p>
          A deposit of 10% is required when booking this tour. The remaining
          balance will be charged 45 days prior departure. For any bookings
          within 45 days of departure, the full tour amount will be charged upon
          booking.
        </p>
      </Card>
      <Card className="standardoverviewcardmap">
        <Suspense fallback={<div>Loading...</div>}>
          <Mapcontainer />
        </Suspense>
      </Card>
    </div>
  );
  const packagedetailsContent = (
    <div>
      <Card className="standardpackagedetails">
        <div className="packcontainer">
          <img src={process.env.PUBLIC_URL + "/hroom-1.jpg"} alt="hroom-1"/>
          <span>PREMIER ROOM</span>
          <h6>
            
            <img src={process.env.PUBLIC_URL + "/hottel-cion-10.png"} alt="hottel-cion-10"/>
            17 m²
          </h6>
          <h6>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-11.png"} alt="hottel-cion-11"/> Floor
            8-15
          </h6>
          <p>Bigger than most similar rooms in Hong Kong</p>
        </div>
        <Card className="packcontainer1">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
        <Card className="packcontainer2">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
      </Card>
      <Card className="standardpackagedetails">
        <div className="packcontainer">
          <img src={process.env.PUBLIC_URL + "/hroom-1.jpg"} alt="hottel-cion-1" />
          <span>PREMIER ROOM</span>
          <h6>
            
            <img src={process.env.PUBLIC_URL + "/hottel-cion-10.png"} alt="hottel-cion-10"/>
            17 m²
          </h6>
          <h6>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-11.png"} alt="hottel-cion-11"/> Floor
            8-15
          </h6>
          <p>
            <a>Bigger than most similar rooms in the Destination</a>
          </p>
        </div>
        <Card className="packcontainer1">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
        <Card className="packcontainer2">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
      </Card>

      <Card className="standardpackagedetails">
        <div className="packcontainer">
          <img src={process.env.PUBLIC_URL + "/hroom-1.jpg"} alt="hroom-1"/>
          <span>PREMIER ROOM</span>
          <h6>
            
            <img src={process.env.PUBLIC_URL + "/hottel-cion-10.png"} alt="hottel-cion-10"/>
            17 m²
          </h6>
          <h6>
            <img src={process.env.PUBLIC_URL + "/hottel-cion-11.png"} alt="hottel-cion-10"/> Floor
            8-15
          </h6>
          <p>Bigger than most similar rooms at your Destination</p>
        </div>
        <Card className="packcontainer1">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
        <Card className="packcontainer2">
          <ul>
            <li>
              <i class="fas fa-bed"></i> <i class="fas fa-bed"></i>
            </li>
            <li>
              <span>1 double bed or</span>
            </li>
            <li>
              <span>2 single beds</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-1.png"} alt="hottel-cion-1"/> Free
              in-room Wi-Fi
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-2.png"} alt="hottel-cion-2"/> Gym
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-3.png"} alt="hottel-cion-3"/>
              Western restaurant
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-4.png"} alt="hottel-cion-4"/> Front
              desk (24 hours)
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/hottel-cion-5.png"} alt="hottel-cion-5"/> soft
              drinks
            </li>
          </ul>
          <ul>
            <li>
              <i class="far fa-check-circle"></i> Free cancellation before Nov
              10,
              <br />
              2018, 12:00 (hotel's local time
            </li>
            <li>
              <i class="far fa-check-circle"></i> Instant Confirmation
            </li>
            <li>
              <i class="far fa-check-circle"></i> Summer promotion
            </li>
          </ul>
          <ul>
            <li>From USD</li>
            <li>
              <h3>$364</h3>
            </li>
            <li>After tax $410</li>
          </ul>
          <ul>
            <li>
              <button>Book</button>
            </li>
            <li style={{ color: "#2f7000" }}>
              <i class="fas fa-check"></i> Price Guarantee
            </li>
          </ul>
        </Card>
      </Card>
    </div>
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="premium">
        <div className="standardheading">
          <h2> Premium Package</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Premium Package
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper style={{ boxShadow: "none" }}>
        <Grid>
          <Card className="standardcard" style={{ boxShadow: "none" }}>
            <div>Premium Package</div>
            <h5>Premium Package</h5>
            <p>We provide you a comfortable journey at affordable rates</p>
            <span>
              <img src={process.env.PUBLIC_URL + "/flight.png"} alt="flight"/>
              <p>Flight Tickets in Business Class or Private Jet</p>
            </span>
            <span>
              <img src={process.env.PUBLIC_URL + "/cab.jpg"} alt="cab"/>
              <p>
                Premium Car for airport pick and drop or smaller room in 5 Star
              </p>
            </span>
            <span>
              <img src={process.env.PUBLIC_URL + "/hotel.jpg"} alt="hotel"/>
              <p>5 Star Hotel Accommodation</p>
            </span>
            <span>
              <img src={process.env.PUBLIC_URL + "/hospital.png"} alt="hospital"/>
              <p>Priority Treatment at Hospital</p>
            </span>
            <span>
              <img src={process.env.PUBLIC_URL + "/return.png"} alt="return"/>
              <p>Pre-departure orientation</p>
            </span>
          </Card>
          <Card className="standardpackage" style={{ boxShadow: "none" }}>
            <div>
              <span>From USD</span>
              <h2>
                $3364 <a href="/compare">select package</a>
              </h2>
            </div>
          </Card>
          <Card className="standardpackbutton" style={{ boxShadow: "none" }}>
            <ul>
              <li>
                <a
                  onClick={() => {
                    setOverview(!overview);
                  }}
                 
                >
                  OVERVIEW
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setPackagedetails(!packagedetails);
                  }}
                 
                >
                  Package details
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setDescription(!description);
                  }}
                 
                >
                  Description
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setServices(!services);
                  }}
                 
                >
                  Services & amenities
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setPolicies(!policies);
                  }}
                 
                >
                  Policies
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setReviews(!reviews);
                  }}
                 
                >
                  Reviews
                </a>
              </li>
            </ul>
          </Card>
          {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a> */}
        </Grid>
      </Paper>
      {description && descriptionContent}
      {packagedetails && packagedetailsContent}
      {services && servicesContent}
      {policies && policiesContent}
      {overview && overviewContent}
      {reviews && reviewsContent}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
