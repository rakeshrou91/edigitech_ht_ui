import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from '@material-ui/core/Container';
export default function Questionhelp() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
     <Container maxWidth="md">
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
         
        >
          <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
           What are the available procedures?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          We provide you with the list of hospitals and medical facilitators for cosmetic, dental, oncology, pulmonology, cancer treatment and many other related surgeries and diagnosis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
             Can I get the details of the doctor?
         </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we provide you with complete detail about the doctor profile and their specialities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
          Can I get the language translator facility?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we do provide you with the translator on demand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
           <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
             How can I get started?
             </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Send us your enquiry by filling in the details, we filter out the names of hospitals and treatments for you as per your needs. Moreover, we also offer cost-effective packages that will make your medical journey fruitful.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
           <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
               What is included in the package you will be offering?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A complete quotation with details will be provided while you sign up with us according to your budget
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0,color:"#004D61",fontWeight:"bold",fontSize:"18px"}}>
              What are the travel documents I will have to carry?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A valid passport, documents related to your identity and complete documents of your medical history.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
     
    </div>
  );
}