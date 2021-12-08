import React from 'react';
import '../comman.css';
import Image from 'react-bootstrap/Image';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";


const Blogcode = () => {
    return (
    <>
       <Paper style={{boxShadow:'none'}}>
      <Grid >
        <div className="gridrow">
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-1.jpg"} /><br/><br/>
             {/* <div className="metadate"><span>22</span><span>Dec</span></div>*/}
             
             <span>Elements of a Strong Corporate Travel Program</span> <br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
            
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-2.jpg"} /><br/><br/>
             <span>Closer To Truth:Is Time Travel Possible?</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
           
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-3.jpg"} /><br/><br/>
             <span>Travel Risk Management and Foreseeable Risk</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
           
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          
       
        </div>
        <div className="gridrow">
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-4.jpg"} /><br/><br/>
             {/* <div className="metadate"><span>22</span><span>Dec</span></div>*/}
             <span>How to Become a Group Leader and Travel Free</span> <br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
             
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-5.jpg"} /><br/><br/>
             <span>Best Traveling Experience at Affordable Cost</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
           
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-6.jpg"} /><br/><br/>
             <span>Is There a Travel Consultant on Your Team?</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
             
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          
       
        </div>
        <div className="gridrow">
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-7.jpg"} /><br/><br/>
             {/* <div className="metadate"><span>22</span><span>Dec</span></div>*/}
             <span>A Short Note About the Variety of Travellers</span> <br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
             
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-8.jpg"} /><br/><br/>
             <span>Travelings Commandments of Wise Travel</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
            
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <Image className="blogimg"src={process.env.PUBLIC_URL + "/mpost-9.jpg"} /><br/><br/>
             <span>The Health Benefits of Humor When Traveling</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p><br/><br/>
 
             <footer className="blogfooter">Read More</footer>
          </Card>
          </div>
          
       
        </div>
        
       
      </Grid>
       </Paper>
    
    </>
        
    )
}

export default Blogcode;

