import React from 'react'
import '../comman.css';
import Image from 'react-bootstrap/Image';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const blog02card = () => {
    return (
      <>
      <Paper style={{boxShadow:"none"}}>
      <Grid>
        <Card className="blog02card" style={{boxShadow:"none"}}>
             <Image src={process.env.PUBLIC_URL + "/mpost-7.jpg"} /><br/><br/>
             <span>At Your Own Risk - 10 Countries Where Travel Insurance Won't Be Able To Help You</span><br/><br/>
             <a><i class="fas fa-comments"></i> 20 Comments</a>
             <a><i class="fas fa-eye-slash"></i> 466 View</a>
             <p>The foreign and commonwealth office draws up an extensive list of countries that should not be travelled to quite regularly and it is from that our, and other global travel insurance providers', underwriters decide which countries travel insurance should be provided for. We look at the government travel advice and decide from that whether or not we can provide insurance to travellers.</p>
             <div className="blog02quote">Lorem ipsum dolor sit amet, tota aliquip vel eu, cum cu velaccumsa molestiae ius etiam erant appellantur vel ei. Ad volutpat vis oite.</div>
             <p>Although global travel insurance does, by its nature, cover the majority of the world, the current climate ensures that there are some places where the likelihood of incident means that UK travel insurance providers are unable to offer protection.</p>
             <p>Thankfully, the list is clear of the majority of popular holiday destinations, and you're unlikely to have your big holiday plans affected. The most likely group to have their travel plans altered by the foreign office's travel advice are business travellers.</p>
             <p>The foreign office's travel advice is not to travel to the following countries, even if it means losing business - the risk from the warzones listed below is just too great to make the reward worth the danger:</p>
             <p>Here's our top 10 countries to avoid travelling to, and the reasons for the high risk factor! The risk is far from conclusive (the foreign office's travel advice lists many more countries), but to me, these are the ones that all travellers should avoid like the plague:</p>
             <div className="blog02quote1">
               <Grid container spacing={2}>
                   <Grid item xs={7}>
                      <p> Lsom unice nas nibh dolor, malesuada et bibendum elit teger ameti consectet ur adipiscing elit. consectetur nibah is nec eros eget nsl ametysom unice nas nibh dolo males uada et bibendum elit teger ameti nec eros eg et nsl ame is nec eros eget nsl ametysom unice nas nibh.</p>
                      <ul>
                        <li >Aliquam erat volutpat.</li>
                        <li >Exercitation photo booth stumptown tote bag Banksy</li>
                        <li >Tempor duis single-origin coffee</li>
                        <li >Magnis dis parturient montes</li>
                        <li >Tumblr kale chips single-origin coffee</li>
                        <li >Butcher sapiente banh mi brunch nisi</li>
                        
                      </ul>
                    </Grid>
                    <Grid item xs={5}>
                      <Image src={process.env.PUBLIC_URL + "/post-inner.jpg"} />
                    </Grid>

               </Grid>
              
             </div>
             <p>is nec eros eget nsl ametysom unice nas nibh dolo males uada elit teger ameti nec eros eg et nsl amet consectur ms friis nec ametysom unice nas nibh is nec eros eget nsl,,,,</p>
             <p>nsom unice nas nibh dolor, malesuada et bibendum elit teger ameti consectet ur adipiscing elit. consectetur nibah is nec eros eget nsl ametysom unice nas nibh dolo males uada et bibendum elit teger ameti nec eros eg et nsl ame is nec eros eget nsl ametysom unice nas nibh dolo males uada et bibendum elit teger ameti nec eros eg et nsl ame ngilla nec eros eg et nsl amet consectursectur.</p>
           
             <footer>
                 <td>Share:</td>
                 <td><i class="fab fa-facebook "  ></i> </td>
                 <td><i class="fab fa-twitter"></i></td>
                 <td><i class="fab fa-google-plus"></i></td>
               
             </footer>
        </Card>
      </Grid>
    </Paper>
      </>
    )
}

export default blog02card
