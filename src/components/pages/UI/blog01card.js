import React from "react";
import "../comman.css";
import Image from "react-bootstrap/Image";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";

const Blog01card = () => {
  return (
    <>
      <Card className="blog01section">
        <Image
          className="blog01img"
          src={process.env.PUBLIC_URL + "/mpost-2.jpg"}
        />
        <br />
        <br />
        <span>
          Online Travel Agent Secrets That Saves Clients 100s to 1000s of
          Dollars Off All Travel
        </span>{" "}
        <br />
        <br />
        <a>
          <i class="fas fa-comments"></i> 20 Comments
        </a>
        <a>
          <i class="fas fa-eye-slash"></i> 466 View
        </a>
        <p>
          {" "}
          Although global travel insurance does, by its nature, cover the
          majority of the world, the current climate ensures that there are some
          places where the likelihood of incident means that UK travel insurance
          providers are unable to offer protection. Thankfully, the list is
          clear of the majority of popular holiday destinations.
        </p>
        <br />
        <br />
        <footer className="blog01footer">Read More</footer>
      </Card>
      <Card className="blog01section">
        <Image
          className="blog01img"
          src={process.env.PUBLIC_URL + "/mpost-2.jpg"}
        />
        <br />
        <br />
        <span>
          At Your Own Risk - 10 Countries Where Travel Insurance Won't Be Able
          To Help You
        </span>{" "}
        <br />
        <br />
        <a>
          <i class="fas fa-comments"></i> 20 Comments
        </a>
        <a>
          <i class="fas fa-eye-slash"></i> 466 View
        </a>
        <p>
          Hosting travel agencies now make it possible for you to become a
          travel agent without quitting your current job, but you'll still get
          all the benefits of becoming a travel agent. You just follow a simple
          process and you can become a travel agent within a few days.
        </p>
        <br />
        <br />
        <footer className="blog01footer">Read More</footer>
      </Card>
      <Card className="blog01section">
        <Image
          className="blog01img"
          src={process.env.PUBLIC_URL + "/mpost-5.jpg"}
        />
        <br />
        <br />
        <span>
          Become A Travel Agent - The Secret To Saving Up To 80% On Your
          Personal Travel
        </span>{" "}
        <br />
        <br />
        <a>
          <i class="fas fa-comments"></i> 20 Comments
        </a>
        <a>
          <i class="fas fa-eye-slash"></i> 466 View
        </a>
        <p>
          Business and leisure travel just got cheaper when booked online
          through a personal online travel agency owner. Online travel agents
          are savings clients $100s to $1000s easily. Professional agents
          continue to be true money savers beyond those Expedia specials we
          often see.
        </p>
        <br />
        <br />
        <footer className="blog01footer">Read More</footer>
      </Card>
    </>
  );
};

export default Blog01card;
