import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function Blog() {
  return (
    <>
    <div className='blog'>
     <div className="blogheading">
             <h2 > Blog 02</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Blog 02</a> &nbsp;&nbsp;
            
      </div>
      
    </div>
    <Paper>
      <Grid >
        <div className="gridrow">
          <div className="gridColumn">
          <Card className="blogcard">
             <span>Elements of a Strong Corporate Travel Program</span>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <span>Closer To Truth:Is Time Travel Possible?</span>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p>
          </Card>
          </div>
          <div className="gridColumn">
          <Card className="blogcard">
             <span>Travel Risk Management and Foreseeable Risk</span>
             <p>This article will give you the basic points to consider when putting together or revamping your corporate travel.</p>
          </Card>
          </div>
        
       
        </div>
        
       
      </Grid>
    </Paper>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
