import React from "react";
import "../comman.css";
import Image from "react-bootstrap/Image";
import {Input } from "@material-ui/core";
import { Card } from "@material-ui/core";

const Blog01sidecard = () => {
  return (
    <>
      <Card className="sideblog01card">
        <span>Subscriber</span>
        <h3>For NewsLetter</h3>
        <Input placeholder="Enter your Email Address" />
        <button> subscribe</button>
      </Card>
      <Card className="sideblog01card1">
        <h3>Categories</h3>
        <tr>
          <td>
            <a href="/" className="atag">Travelling</a>{" "}
          </td>
          <td>(33)</td>
        </tr>
        <tr>
          <td>
            <a href="/" className="atag">World Tour </a>
          </td>
          <td>(77)</td>
        </tr>
        <tr>
          <td>
            <a href="/" className="atag">Guide</a>{" "}
          </td>
          <td>(49)</td>
        </tr>
        <tr>
          <td>
            <a href="/" className="atag">Explore</a>{" "}
          </td>
          <td>(70)</td>
        </tr>
        <tr>
          <td>
            <a href="/" className="atag">Design</a>{" "}
          </td>
          <td>(89)</td>
        </tr>
      </Card>
      <Card className="sideblog01card3">
        <h3>Latest Post</h3>
        <tr>
          <Image src={process.env.PUBLIC_URL + "/rcp-1.jpg"} />
          <br />
          <br />
          <span> Base Tendriling Travel Expenses</span>
          <p>December 2, 2018</p>
        </tr>
        <tr>
          <Image src={process.env.PUBLIC_URL + "/rcp-2.jpg"} />
          <br />
          <br />
          <span>Travel Pre And Post Internet</span>
          <p>December 2, 2018</p>
        </tr>
        <tr>
          <Image src={process.env.PUBLIC_URL + "/rcp-3.jpg"} />
          <br />
          <br />
          <span>Travelling Tips for the Disabled</span>
          <p>December 2, 2018</p>
        </tr>
        <tr>
          <Image src={process.env.PUBLIC_URL + "/rcp-4.jpg"} />
          <br />
          <br />
          <span> 15 Travelers That I Have Met</span>
          <p>December 2, 2018</p>
        </tr>
      </Card>
      <Card className="sideblog01card1">
        <h3>Archieves</h3>
        <tr>
          <td>May 2018</td>
          <td>(33)</td>
        </tr>
        <tr>
          <td>June 2018 </td>
          <td>(77)</td>
        </tr>
        <tr>
          <td>July 2018</td>
          <td>(49)</td>
        </tr>
        <tr>
          <td>Feb 2017</td>
          <td>(70)</td>
        </tr>
        <tr>
          <td>April 2017</td>
          <td>(89)</td>
        </tr>
      </Card>
      <Card className="sideblog01card1">
        <h3>Tags</h3>
        <div className="alink">
          <a href="/">Travellor</a>
          <a href="/">Adventures</a>
          <a href="/">Beach</a>
          <a href="/">Dream</a>
          <a href="/">Wach</a>
        </div>
      </Card>
    </>
  );
};

export default Blog01sidecard;
