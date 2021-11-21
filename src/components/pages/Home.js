import React from 'react';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
import './Home.css';
import '../../App.css';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactVideo } from "reactjs-media";
import Image from 'react-bootstrap/Image';
import {Currency,Department} from '../select/Select';
// export default function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//     </Stack>
//   );
// }


export default function Home() {
  const cardstyle={boxShadow:'none',justifyContent: 'center',textAlign: 'center',display:'flex',flexDirection:'column'} 
  const paperStyle={padding:20,height:800,width :'100%',margin:"24% 0%",boxShadow:"none",justifyContent:'center',textAlign: 'center'}
  return (
    <>
  
      <Image className="img" src={process.env.PUBLIC_URL + "/banner1.png"} />
      <div className="mtimg">
       <Image src={process.env.PUBLIC_URL + "/mt.png"} rounded  />
      <h4 style={{color:'#413E3E'}}>Looking for a stress-free medical journey? </h4>
      </div>
      <Paper style={paperStyle}>
               <Grid >
                     <Card className="reactoutsection" style={cardstyle} >
                        
                       <span style={{color:'#5BD1D7', fontSize: '2vh',fontWeight:'bold'}}>REACH BEFORE YOY FLY OUT</span>
                       <div className="rt1-section-title">
                       Connect With The <br/>Leading Doctors &<br/> Hospitals
                       </div>
                     
                     
                       <p>
                       You can rely on us for choosing the top specialists and clinics. The list of doctors and hospitals present on <br/>the portal is curated after thorough research and you can expect to find the best-fit as per your<br/> requirement. You can rely on us for finding the best doctors in India and around the globe. This is not a <br/>google promoted list that we provide.
  
  
                       </p>
                     </Card>

                </Grid>
      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center',marginTop:"-50%"}}>
         <Grid >
         <Card className="card" style={cardstyle}>
                   <div className="rt1-section-title">
                     Simple Steps to Get Started
                     </div><br/>
                     <p style={{color:'#413E3E'}}>
                      Prepare For Your Medical Trip. Find out all you need to know before you start. Healthcare issues are critical & unique at the same <br/> time. And there is no one package that fits all. That's why we offer customized treatment packages
                     </p>
        </Card> 
       </Grid>
      </Paper><br/><br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center'}}>
       <Grid>
       <Card className="iconsection" style={cardstyle}>
         <div className="rowicon">
             <div className="columnicon">
               <Avatar className="avatar" src={process.env.PUBLIC_URL + "01.png"}  style={{height:120,width:120}}/> <br/>
                <span>Sneak Peek</span><br/>
                <p>Choose from list of selected Hospitals,<br/> Clinics and Healthcare Providers</p>
               
             </div>
             <div className="columnicon">
              <Avatar  src={process.env.PUBLIC_URL + "02.png"}  style={{height:120,width:120}}/><br/> 
              <span>Travel</span><br/>
              <p>Search by price, destination, and ratings</p>
              
             </div>
             <div className="columnicon">
               <Avatar  src={process.env.PUBLIC_URL + "03.png"}  style={{height:120,width:120}}/> <br/>
               <span>Accommodation</span><br/>
               <p>Get best in class and wholesome <br/>experience with us</p>
              
             </div>
             <div className="columnicon">
              <Avatar  src={process.env.PUBLIC_URL + "04.png"}  style={{height:120,width:120}}/><br/> 
              <span> Treatment</span><br/>
              <p>Get the most suitable treatment options<br/> in India & across the globe</p>
             </div>

         </div>
           
                 
      </Card>
       </Grid>
      </Paper>

      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center',height:"100%",width:"100%"}}>
        <Grid>
          <Card className="section" style={cardstyle}>
             <div className="divclass">

                 <h2>TAKE A LOOK AT</h2>
                 <h1>Our Favourite Deals</h1>
                 <br/><br/><br/>  
                 <p >Experience the best-in-class medical treatment and support for medical tourists along with activities & trips in India<br/> and around the globe</p>

                 <br/><br/><br/>
                 <button  class="link-button1" href="#"><b>Read More</b></button>
            </div>
          </Card>
        </Grid>
      </Paper>

      <Paper  style={{boxShadow:"none",justifyContent:'center',textAlign: 'center'}} >
        <Grid>
          <Card className="card" style={cardstyle}>
              <span style={{color:'#5BD1D7', fontSize: '2vh',fontWeight:'bold'}}>YOUR MONEY IS SECURE WITH US</span>
                  <div class="rt1-section-title">
                       Conversion Check
                  </div>
                  <p>Enquire the best for your medical travel</p>
                  {/* <tr><td><Currency></Currency></td><td><Currency></Currency></td></tr>
                  <div className="textrow" > 
                    <td><Currency></Currency></td>
                    <div className="textcolumn"> <Currency></Currency></div>
                    <div className="textcolumn"> <Currency></Currency></div>
                  </div> */}
                  <TextField className="textfieldamount" id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField disabled className="textfieldamountdisabled" id="outlined-basic" label="Outlined" variant="outlined" />
               </Card>
               <Card style={cardstyle}>
                <div className="textrow">
                   <div className="textcolumn">
                   <Currency></Currency> 
                   </div>
                   <div className="textcolumn">
                   <Currency></Currency> 
                   </div>
                </div>
              
              
               </Card>
        </Grid>
      </Paper>

      <br/>
      <br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="imagessection" style={cardstyle}>
            <div className="imagesectiondiv">
                  <h2><b> GLIMPSE OF</b></h2><br/>
                 
                <h1> Top Medical Tourism <br/>Destinations </h1><br/>
                <p >We offer the best services and a list of treatment centres as per your requirement. Find the best hospitals<br/> and treatment centres in India and around the globe.</p><br/> <br/>
                <button  class="button-71">Mumbai</button> <space/><space/>
                  <button  class="button-hover">Delhi</button> <space/><space/>
                  <button  class="button-hover">Kolkata</button> <space/><space/>
                  <button  class="button-hover">Pune</button> <space/><space/>
                  <button  class="button-hover">Bangalore</button> <space/><space/>
                  <button  class="button-hover">Hyderabad</button> <space/><space/>
                  <button  class="button-hover">Ahmedabad</button> <space/><space/><br/>

                  <div class="row">
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/11.jpg"}  style={{height:'100%',width:"100%"}} />
                   </div>
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/12.jpg"}  style={{height:'100%',width:"100%" }}/>
                   </div>
                   <div class="column1">
                       <img  src={process.env.PUBLIC_URL + "/13.jpg"} style={{height:'100%',width:"100%"}}/>
                   </div>
                  
                 </div>
                 <div class="row">

                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/14.jpg"} style={{height:'100%',width:"100%"}} />
                   </div>
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/15.jpg"} style={{height:'100%',width:"100%" }}/>
                   </div>
                   <div class="column1">
                       <img  src={process.env.PUBLIC_URL + "/16.jpg"}  style={{height:'100%',width:"100%"}}/>
                   </div>
                  
                 </div>
                 <a  class="link-button1" href="#"><b>SIGN IN FOR MORE OPTIONS</b></a>
              </div>
          
  
                  <div >
                 
                  <div>

                  </div>
                      
                  
                </div>
                <div style={{justifyContent:'center',textAlign:'center'}}>
                {/* <br/><br/> */}
                 
                  </div>


          </Card>
        </Grid>
      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="reactoutsection" style={cardstyle}>
          <div class="rt1-section-title">
                         Treatment Packages<br/> On Offer
                          </div>
                       <p style={{color:'#413E3E'}}>
                       Get urged to travel and seek medical advice, track down the best treatment choices at the most<br/> circumspect costs. Track down our top deals that are updated every day to book the most appropriate<br/> medical treatment according to your requirements. We offer the best support for medical tourists.
  
                       </p>

          </Card>
        </Grid>
      </Paper>
      <br/><br/>
      <Paper  style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}} >
        <Grid>
        <Card className="card" style={{boxShadow:'none'}}>   
                     <label style={{color:'#413E3E'}} >From Currency&nbsp; </label>
                            <select name="from currency" id="currency" placeholder ="Select Currency"  className="select" style={{width:'200px',height:"50px",color:'#413E3E',justifyContent: 'center',textAlign: 'center'}} >
                            <option value="ALL">Albanian Lek</option>
                             <option value="XCD">East Caribbean Dollar</option>
                             <option value="EUR">Euro</option>
                             <option value="BBD">Barbadian Dollar</option>
                             <option value="BTN">Bhutanese Ngultrum</option>
                             <option value="BND">Brunei Dollar</option>
                             <option value="XAF">Central African CFA Franc</option>
                             <option value="CUP">Cuban Peso</option>
                             <option value="USD" >United States Dollar</option>
                             <option value="FKP">Falkland Islands Pound</option>
                             <option value="GIP">Gibraltar Pound</option>
                             <option value="HUF">Hungarian Forint</option>
                             <option value="IRR">Iranian Rial</option>
                             <option value="JMD">Jamaican Dollar</option>
                             <option value="AUD">Australian Dollar</option>
                             <option value="LAK">Lao Kip</option>
                             <option value="LYD">Libyan Dinar</option>
                             <option value="MKD">Macedonian Denar</option>
                             <option value="XOF">West African CFA Franc</option>
                             <option value="NZD">New Zealand Dollar</option>
                             <option value="OMR">Omani Rial</option>
                             <option value="PGK">Papua New Guinean Kina</option>
                             <option value="RWF">Rwandan Franc</option>
                             <option value="WST">Samoan Tala</option>
                             <option value="RSD">Serbian Dinar</option>
                             <option value="SEK">Swedish Krona</option>
                             <option value="TZS">Tanzanian Shilling</option>
                             <option value="AMD">Armenian Dram</option>
                             <option value="BSD">Bahamian Dollar</option>
                             <option value="BAM">Bosnia And Herzegovina Konvertibilna Marka</option>
                             <option value="CVE">Cape Verdean Escudo</option>
                             <option value="CNY">Chinese Yuan</option>
                             <option value="CRC">Costa Rican Colon</option>
                             <option value="CZK">Czech Koruna</option>
                             <option value="ERN">Eritrean Nakfa</option>
                             <option value="GEL">Georgian Lari</option>
                             <option value="HTG">Haitian Gourde</option>
                             <option value="INR">Indian Rupee</option>
                             <option value="JOD">Jordanian Dinar</option>
                             <option value="KRW">South Korean Won</option>
                             <option value="LBP">Lebanese Lira</option>
                             <option value="MWK">Malawian Kwacha</option>
                             <option value="MRO">Mauritanian Ouguiya</option>
                             <option value="MZN">Mozambican Metical</option>
                             <option value="ANG">Netherlands Antillean Gulden</option>
                             <option value="PEN">Peruvian Nuevo Sol</option>
                             <option value="QAR">Qatari Riyal</option>
                             <option value="STD">Sao Tome And Principe Dobra</option>
                             <option value="SLL">Sierra Leonean Leone</option>
                             <option value="SOS">Somali Shilling</option>
                             <option value="SDG">Sudanese Pound</option>
                             <option value="SYP">Syrian Pound</option>
                             <option value="AOA">Angolan Kwanza</option>
                             <option value="AWG">Aruban Florin</option>
                             <option value="BHD">Bahraini Dinar</option>
                             <option value="BZD">Belize Dollar</option>
                             <option value="BWP">Botswana Pula</option>
                             <option value="BIF">Burundi Franc</option>
                             <option value="KYD">Cayman Islands Dollar</option>
                             <option value="COP">Colombian Peso</option>
                             <option value="DKK">Danish Krone</option>
                             <option value="GTQ">Guatemalan Quetzal</option>
                             <option value="HNL">Honduran Lempira</option>
                             <option value="IDR">Indonesian Rupiah</option>
                             <option value="ILS">Israeli New Sheqel</option>
                             <option value="KZT">Kazakhstani Tenge</option>
                             <option value="KWD">Kuwaiti Dinar</option>
                             <option value="LSL">Lesotho Loti</option>
                             <option value="MYR">Malaysian Ringgit</option>
                             <option value="MUR">Mauritian Rupee</option>
                             <option value="MNT">Mongolian Tugrik</option>
                             <option value="MMK">Myanma Kyat</option>
                             <option value="NGN">Nigerian Naira</option>
                             <option value="PAB">Panamanian Balboa</option>
                             <option value="PHP">Philippine Peso</option>
                             <option value="RON">Romanian Leu</option>
                             <option value="SAR">Saudi Riyal</option>
                             <option value="SGD">Singapore Dollar</option>
                             <option value="ZAR">South African Rand</option>
                             <option value="SRD">Surinamese Dollar</option>
                             <option value="TWD">New Taiwan Dollar</option>
                             <option value="TOP">Paanga</option>
                             <option value="VEF">Venezuelan Bolivar</option>
                             <option value="DZD">Algerian Dinar</option>
                             <option value="ARS">Argentine Peso</option>
                             <option value="AZN">Azerbaijani Manat</option>
                             <option value="BYR">Belarusian Ruble</option>
                             <option value="BOB">Bolivian Boliviano</option>
                             <option value="BGN">Bulgarian Lev</option>
                             <option value="CAD">Canadian Dollar</option>
                             <option value="CLP">Chilean Peso</option>
                             <option value="CDF">Congolese Franc</option>
                             <option value="DOP">Dominican Peso</option>
                             <option value="FJD">Fijian Dollar</option>
                             <option value="GMD">Gambian Dalasi</option>
                             <option value="GYD">Guyanese Dollar</option>
                             <option value="ISK">Icelandic Króna</option>
                             <option value="IQD">Iraqi Dinar</option>
                             <option value="JPY">Japanese Yen</option>
                             <option value="KPW">North Korean Won</option>
                             <option value="LVL">Latvian Lats</option>
                             <option value="CHF">Swiss Franc</option>
                             <option value="MGA">Malagasy Ariary</option>
                             <option value="MDL">Moldovan Leu</option>
                             <option value="MAD">Moroccan Dirham</option>
                             <option value="NPR">Nepalese Rupee</option>
                             <option value="NIO">Nicaraguan Cordoba</option>
                             <option value="PKR">Pakistani Rupee</option>
                             <option value="PYG">Paraguayan Guarani</option>
                             <option value="SHP">Saint Helena Pound</option>
                             <option value="SCR">Seychellois Rupee</option>
                             <option value="SBD">Solomon Islands Dollar</option>
                             <option value="LKR">Sri Lankan Rupee</option>
                             <option value="THB">Thai Baht</option>
                             <option value="TRY">Turkish New Lira</option>
                             <option value="AED">UAE Dirham</option>
                             <option value="VUV">Vanuatu Vatu</option>
                             <option value="YER">Yemeni Rial</option>
                             <option value="AFN">Afghan Afghani</option>
                             <option value="BDT">Bangladeshi Taka</option>
                             <option value="BRL">Brazilian Real</option>
                             <option value="KHR">Cambodian Riel</option>
                             <option value="KMF">Comorian Franc</option>
                             <option value="HRK">Croatian Kuna</option>
                             <option value="DJF">Djiboutian Franc</option>
                             <option value="EGP">Egyptian Pound</option>
                             <option value="ETB">Ethiopian Birr</option>
                             <option value="XPF">CFP Franc</option>
                             <option value="GHS">Ghanaian Cedi</option>
                             <option value="GNF">Guinean Franc</option>
                             <option value="HKD">Hong Kong Dollar</option>
                             <option value="XDR">Special Drawing Rights</option>
                             <option value="KES">Kenyan Shilling</option>
                             <option value="KGS">Kyrgyzstani Som</option>
                             <option value="LRD">Liberian Dollar</option>
                             <option value="MOP">Macanese Pataca</option>
                             <option value="MVR">Maldivian Rufiyaa</option>
                             <option value="MXN">Mexican Peso</option>
                             <option value="NAD">Namibian Dollar</option>
                             <option value="NOK">Norwegian Krone</option>
                             <option value="PLN">Polish Zloty</option>
                             <option value="RUB">Russian Ruble</option>
                             <option value="SZL">Swazi Lilangeni</option>
                             <option value="TJS">Tajikistani Somoni</option>
                             <option value="TTD">Trinidad and Tobago Dollar</option>
                             <option value="UGX">Ugandan Shilling</option>
                             <option value="UYU">Uruguayan Peso</option>
                             <option value="VND">Vietnamese Dong</option>
                             <option value="TND">Tunisian Dinar</option>
                             <option value="UAH">Ukrainian Hryvnia</option>
                             <option value="UZS">Uzbekistani Som</option>
                             <option value="TMT">Turkmenistan Manat</option>
                             <option value="GBP">British Pound</option>
                             <option value="ZMW">Zambian Kwacha</option>
                             <option value="BTC">Bitcoin</option>
                             <option value="BYN">New Belarusian Ruble</option>
                             </select>
                      &nbsp;  &nbsp;
                     <label style={{margin:'auto 0%',color:'#413E3E'}} >Amount &nbsp;</label>
                     <input style={{width:"90px",height:"50px"}} type="text" class="form-control" name="amount" id="amount_id" required=""></input>  &nbsp;  &nbsp;   
                     <label  style={{margin:'auto 0%',color:'#413E3E'}}>To Currency &nbsp;</label>
                     <select class="form-control" id="to_currency_id" name="to_currency" required="" style={{width:"200px",height:"50px"}}>
                            <option value="ALL">Albanian Lek</option>
                             <option value="XCD">East Caribbean Dollar</option>
                             <option value="EUR">Euro</option>
                             <option value="BBD">Barbadian Dollar</option>
                             <option value="BTN">Bhutanese Ngultrum</option>
                             <option value="BND">Brunei Dollar</option>
                             <option value="XAF">Central African CFA Franc</option>
                             <option value="CUP">Cuban Peso</option>
                             <option value="USD">United States Dollar</option>
                             <option value="FKP">Falkland Islands Pound</option>
                             <option value="GIP">Gibraltar Pound</option>
                             <option value="HUF">Hungarian Forint</option>
                             <option value="IRR">Iranian Rial</option>
                             <option value="JMD">Jamaican Dollar</option>
                             <option value="AUD">Australian Dollar</option>
                             <option value="LAK">Lao Kip</option>
                             <option value="LYD">Libyan Dinar</option>
                             <option value="MKD">Macedonian Denar</option>
                             <option value="XOF">West African CFA Franc</option>
                             <option value="NZD">New Zealand Dollar</option>
                             <option value="OMR">Omani Rial</option>
                             <option value="PGK">Papua New Guinean Kina</option>
                             <option value="RWF">Rwandan Franc</option>
                             <option value="WST">Samoan Tala</option>
                             <option value="RSD">Serbian Dinar</option>
                             <option value="SEK">Swedish Krona</option>
                             <option value="TZS">Tanzanian Shilling</option>
                             <option value="AMD">Armenian Dram</option>
                             <option value="BSD">Bahamian Dollar</option>
                             <option value="BAM">Bosnia And Herzegovina Konvertibilna Marka</option>
                             <option value="CVE">Cape Verdean Escudo</option>
                             <option value="CNY">Chinese Yuan</option>
                             <option value="CRC">Costa Rican Colon</option>
                             <option value="CZK">Czech Koruna</option>
                             <option value="ERN">Eritrean Nakfa</option>
                             <option value="GEL">Georgian Lari</option>
                             <option value="HTG">Haitian Gourde</option>
                             <option value="INR" selected="">Indian Rupee</option>
                             <option value="JOD">Jordanian Dinar</option>
                             <option value="KRW">South Korean Won</option>
                             <option value="LBP">Lebanese Lira</option>
                             <option value="MWK">Malawian Kwacha</option>
                             <option value="MRO">Mauritanian Ouguiya</option>
                             <option value="MZN">Mozambican Metical</option>
                             <option value="ANG">Netherlands Antillean Gulden</option>
                             <option value="PEN">Peruvian Nuevo Sol</option>
                             <option value="QAR">Qatari Riyal</option>
                             <option value="STD">Sao Tome And Principe Dobra</option>
                             <option value="SLL">Sierra Leonean Leone</option>
                             <option value="SOS">Somali Shilling</option>
                             <option value="SDG">Sudanese Pound</option>
                             <option value="SYP">Syrian Pound</option>
                             <option value="AOA">Angolan Kwanza</option>
                             <option value="AWG">Aruban Florin</option>
                             <option value="BHD">Bahraini Dinar</option>
                             <option value="BZD">Belize Dollar</option>
                             <option value="BWP">Botswana Pula</option>
                             <option value="BIF">Burundi Franc</option>
                             <option value="KYD">Cayman Islands Dollar</option>
                             <option value="COP">Colombian Peso</option>
                             <option value="DKK">Danish Krone</option>
                             <option value="GTQ">Guatemalan Quetzal</option>
                             <option value="HNL">Honduran Lempira</option>
                             <option value="IDR">Indonesian Rupiah</option>
                             <option value="ILS">Israeli New Sheqel</option>
                             <option value="KZT">Kazakhstani Tenge</option>
                             <option value="KWD">Kuwaiti Dinar</option>
                             <option value="LSL">Lesotho Loti</option>
                             <option value="MYR">Malaysian Ringgit</option>
                             <option value="MUR">Mauritian Rupee</option>
                             <option value="MNT">Mongolian Tugrik</option>
                             <option value="MMK">Myanma Kyat</option>
                             <option value="NGN">Nigerian Naira</option>
                             <option value="PAB">Panamanian Balboa</option>
                             <option value="PHP">Philippine Peso</option>
                             <option value="RON">Romanian Leu</option>
                             <option value="SAR">Saudi Riyal</option>
                             <option value="SGD">Singapore Dollar</option>
                             <option value="ZAR">South African Rand</option>
                             <option value="SRD">Surinamese Dollar</option>
                             <option value="TWD">New Taiwan Dollar</option>
                             <option value="TOP">Paanga</option>
                             <option value="VEF">Venezuelan Bolivar</option>
                             <option value="DZD">Algerian Dinar</option>
                             <option value="ARS">Argentine Peso</option>
                             <option value="AZN">Azerbaijani Manat</option>
                             <option value="BYR">Belarusian Ruble</option>
                             <option value="BOB">Bolivian Boliviano</option>
                             <option value="BGN">Bulgarian Lev</option>
                             <option value="CAD">Canadian Dollar</option>
                             <option value="CLP">Chilean Peso</option>
                             <option value="CDF">Congolese Franc</option>
                             <option value="DOP">Dominican Peso</option>
                             <option value="FJD">Fijian Dollar</option>
                             <option value="GMD">Gambian Dalasi</option>
                             <option value="GYD">Guyanese Dollar</option>
                             <option value="ISK">Icelandic Króna</option>
                             <option value="IQD">Iraqi Dinar</option>
                             <option value="JPY">Japanese Yen</option>
                             <option value="KPW">North Korean Won</option>
                             <option value="LVL">Latvian Lats</option>
                             <option value="CHF">Swiss Franc</option>
                             <option value="MGA">Malagasy Ariary</option>
                             <option value="MDL">Moldovan Leu</option>
                             <option value="MAD">Moroccan Dirham</option>
                             <option value="NPR">Nepalese Rupee</option>
                             <option value="NIO">Nicaraguan Cordoba</option>
                             <option value="PKR">Pakistani Rupee</option>
                             <option value="PYG">Paraguayan Guarani</option>
                             <option value="SHP">Saint Helena Pound</option>
                             <option value="SCR">Seychellois Rupee</option>
                             <option value="SBD">Solomon Islands Dollar</option>
                             <option value="LKR">Sri Lankan Rupee</option>
                             <option value="THB">Thai Baht</option>
                             <option value="TRY">Turkish New Lira</option>
                             <option value="AED">UAE Dirham</option>
                             <option value="VUV">Vanuatu Vatu</option>
                             <option value="YER">Yemeni Rial</option>
                             <option value="AFN">Afghan Afghani</option>
                             <option value="BDT">Bangladeshi Taka</option>
                             <option value="BRL">Brazilian Real</option>
                             <option value="KHR">Cambodian Riel</option>
                             <option value="KMF">Comorian Franc</option>
                             <option value="HRK">Croatian Kuna</option>
                             <option value="DJF">Djiboutian Franc</option>
                             <option value="EGP">Egyptian Pound</option>
                             <option value="ETB">Ethiopian Birr</option>
                             <option value="XPF">CFP Franc</option>
                             <option value="GHS">Ghanaian Cedi</option>
                             <option value="GNF">Guinean Franc</option>
                             <option value="HKD">Hong Kong Dollar</option>
                             <option value="XDR">Special Drawing Rights</option>
                             <option value="KES">Kenyan Shilling</option>
                             <option value="KGS">Kyrgyzstani Som</option>
                             <option value="LRD">Liberian Dollar</option>
                             <option value="MOP">Macanese Pataca</option>
                             <option value="MVR">Maldivian Rufiyaa</option>
                             <option value="MXN">Mexican Peso</option>
                             <option value="NAD">Namibian Dollar</option>
                             <option value="NOK">Norwegian Krone</option>
                             <option value="PLN">Polish Zloty</option>
                             <option value="RUB">Russian Ruble</option>
                             <option value="SZL">Swazi Lilangeni</option>
                             <option value="TJS">Tajikistani Somoni</option>
                             <option value="TTD">Trinidad and Tobago Dollar</option>
                             <option value="UGX">Ugandan Shilling</option>
                             <option value="UYU">Uruguayan Peso</option>
                             <option value="VND">Vietnamese Dong</option>
                             <option value="TND">Tunisian Dinar</option>
                             <option value="UAH">Ukrainian Hryvnia</option>
                             <option value="UZS">Uzbekistani Som</option>
                             <option value="TMT">Turkmenistan Manat</option>
                             <option value="GBP">British Pound</option>
                             <option value="ZMW">Zambian Kwacha</option>
                             <option value="BTC">Bitcoin</option>
                             <option value="BYN">New Belarusian Ruble</option>
                     </select> &nbsp;  &nbsp;<br/><br/>
                     <div className="row">
                        <label style={{margin:'auto 0%',color:'#413E3E'}}>Converted Amount&nbsp;</label>
                        <input style={{width:"400px",height:'50px'}} type="text" class="form-control" id="converted_amount_id" readonly="" />
                        &nbsp;&nbsp;
                       <button  class="link-button1" style={{width:"8%",height:'18%'}}><b >Convert</b></button>
                     
                    </div>
                     </Card>
        </Grid>
      </Paper>
     <div><br/></div>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="card" style={cardstyle}>
           
            <Card className="reactvideo" style={{borderRadius:"24px"}}>
                      <ReactVideo
                            src={process.env.PUBLIC_URL + "/Flex-MT_Videov6.mp4"}
                            poster={process.env.PUBLIC_URL + "/play-video-bg.png"}
                            primaryColor="red"
                     
                       />
            </Card>
            
     
          </Card>
        </Grid>

      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="reactoutsection" style={{cardstyle}}>
              <div class="rt1-section-title">
                       Help Us To Find You<br/> The Best
                       </div><br/><br/>
                       <button  class="button111">Already Diagnosed </button> <space/><space/>
                       <button style={{backgroundColor:'#5BD1D7',borderColor:'#5BD1D7'}} class="button111">Get Diagnosed </button> <space/><space/><br/>

          </Card>

        </Grid>
      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="card" style={cardstyle}>
          <Card className="Card1" style={{width:'80%',height:'80%',textAlign: 'center',justifyContent: 'center',boxShadow:'5px 10px 8px #888888 ',margin:'auto 10%'}}>
                <Currency></Currency> <Department></Department>
{/*                  
                 <select name="from currency" id="currency" placeholder ="Select Department" style={{margin:'2% 2%',width:'400px',height:"50px",textAlign: 'center',justifyContent: 'center'}} >
                 <option value="Anaesthesia">Anaesthesia</option>
                 <option value="Cardiology">Cardiology</option>
                 <option value="Cosmetic Surgery">Cosmetic Surgery</option>
                 <option value="Dentist">Dentist</option>
                 <option value="ENT Specialist">ENT Specialist</option>
                 <option value="Gastroenterology">Gastroenterology</option>
                 <option value="General Physician">General Physician</option>
                 <option value="General Surgeon">General Surgeon</option>
                 <option value="Gynecology">Gynecology</option>
                 <option value="Hematology">Hematology</option>
                 <option value="Hepatology">Hepatology</option>
                 <option value="Nephrology">Nephrology</option>
                 <option value="Neurology">Neurology</option>
                 <option value="Neurosurgery">Neurosurgery</option>
                 <option value="Oncology">Oncology</option>
                 <option value="Orthopaedics">Orthopaedics</option>
                 <option value="Pediatrics">Pediatrics</option>
                 <option value="Pulmonology">Pulmonology</option>
                 <option value="Radiology">Radiology</option>
                 <option value="Spinal">Spinal</option>
                 <option value="Surgery">Surgery</option>
                 <option value="Transplantation">Transplantation</option>
                 <option value="Urology">Urology</option>
                 <option value="Vascular">Vascular</option>
                  </select> */}
           &nbsp;  &nbsp;

          <select class="form-control" id="to_currency_id" name="to_currency" required="" style={{width:"400px",height:"50px",textAlign: 'center',justifyContent: 'center'}}>
          <option value="India">India</option>
          <option value="UAE">UAE</option>
          <option value="Dubai">Dubai</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>

          </select> &nbsp;  &nbsp;
         <br/>
        <div className="row">
         <button  class="link-button1" style={{width:"10%",height:'18%',textAlign: 'center',justifyContent: 'center'}}><b>Search Facility </b></button>&nbsp;&nbsp;
         <button  class="link-button1" style={{width:"10%",height:'18%',textAlign: 'center',justifyContent: 'center'}}><b>Search Doctor</b></button> 
        </div>
         <br/><br/><br/>
          </Card>
          </Card>
        </Grid>

      </Paper>

      <br/>
      <br/>
      <br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center',height:'100%'}} >
        <Grid>
           <Card className="card" style={{boxShadow:'none',height:'700px' }}>
           <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company Info</h2>
            
            <Link to='/sign-up'className="link"> <i class="fas fa-angle-double-right"></i> Compliance for international users</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Customer Reviews</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Privacy Policy</Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Work With Us</h2>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Become Partner</Link>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Careers</Link>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Advertise with us</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Account</h2>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Manage Your Account</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Build your own trip</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Order Status</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Booking Guide</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Travel Insurance &amp; Safety Guide</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Plan Your Trip</h2>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Special Offers</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Flights</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Tour Packages</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Accommodations</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Transportation</Link>
            
          </div>
        </div>
      </div>
    
     
    </div>
    
           </Card>
        </Grid>

      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card classsName="card" style={cardstyle}>
             <div className="footer">
              
                <div className="row">
                  <div className="column">
                    <p style={{textAlign:'center',fontSize:'small'}}> Copyright © 2021. All Rights Reserved By <a style={{color:'#496cfe'}}>eHealthFlex Technologies Private Limited</a>
                    </p>
                  </div>
                <div className="column">
                  <div className="footerimg">
                <img style={{height:'26px',marginBottom:'20%'}} src={process.env.PUBLIC_URL + "/card-1.png"}/>&nbsp;&nbsp;
                <img style={{height:'26px',marginBottom:'20%'}} src={process.env.PUBLIC_URL + "/card-2.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-3.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-4.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-5.png"}/>
               </div>
                </div>
               </div>
            </div>
          </Card>
        </Grid>
      </Paper>


             
    </>
  );
}
