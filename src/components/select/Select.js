import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select.css";

export  function Currency() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={1}>Albanian Lek</MenuItem>
          <MenuItem className="MenuItem" value={2}>East Caribbean Doll</MenuItem>
          <MenuItem className="MenuItem" value={3}>Euro</MenuItem>
          <MenuItem className="MenuItem" value={4}>Barbadian Dollar</MenuItem>
          <MenuItem className="MenuItem" value={5}>Bhutanese Ngultrum</MenuItem>
          <MenuItem className="MenuItem" value={6}>Brunei Dollar</MenuItem>
          <MenuItem className="MenuItem" value={7}>Central African CFA Franc</MenuItem>
          <MenuItem className="MenuItem" value={8}>Cuban Peso</MenuItem>
          <MenuItem className="MenuItem" value={9}>United States Dollar</MenuItem>
          <MenuItem className="MenuItem" value={10}>Falkland Islands Pound</MenuItem>
          <MenuItem className="MenuItem" value={11}>Gibraltar Pound</MenuItem>
          <MenuItem className="MenuItem" value={12}>Hungarian Forint</MenuItem>
          <MenuItem className="MenuItem" value={13}>Iranian Rial</MenuItem>
          <MenuItem className="MenuItem" value={14}>Jamaican Dollar</MenuItem>
          <MenuItem className="MenuItem" value={15}>Australian Dollar</MenuItem>
          <MenuItem className="MenuItem" value={16}>Lao Kip</MenuItem>
          <MenuItem className="MenuItem" value={17}>Libyan Dinar</MenuItem>
          <MenuItem className="MenuItem" value={18}>Macedonian Denar</MenuItem>
          <MenuItem className="MenuItem" value={19}>West African CFA Franc</MenuItem>
          <MenuItem className="MenuItem" value={20}>New Zealand Dollar</MenuItem>
          <MenuItem className="MenuItem" value={21}>Omani Rial</MenuItem>
          <MenuItem className="MenuItem" value={22}>Papua New Guinean Kina</MenuItem>
          <MenuItem className="MenuItem" value={23}>Rwandan Franc</MenuItem>
          <MenuItem className="MenuItem" value={24}>Samoan Tala</MenuItem>
          <MenuItem className="MenuItem" value={25}>Serbian Dinar</MenuItem>
          <MenuItem className="MenuItem" value={26}>Swedish Krona</MenuItem>
          <MenuItem className="MenuItem" value={27}>Tanzanian Shilling</MenuItem>
          <MenuItem className="MenuItem" value={28}>Armenian Dram</MenuItem>
          <MenuItem className="MenuItem" value={29}>Bahamian Dollar</MenuItem>
          <MenuItem className="MenuItem" value={30}>Bosnia And Herzegovina Konvertibilna Marka</MenuItem>
          <MenuItem className="MenuItem" value={31}>Cape Verdean Escudo</MenuItem>
          <MenuItem className="MenuItem" value={32}>Chinese Yuan</MenuItem>
          <MenuItem className="MenuItem" value={33}>Costa Rican Colon</MenuItem>
          <MenuItem className="MenuItem" value={34}>Czech Koruna</MenuItem>
          <MenuItem className="MenuItem" value={35}>Eritrean Nakfa</MenuItem>
          <MenuItem className="MenuItem" value={36}>Georgian Lari</MenuItem>
          <MenuItem className="MenuItem" value={37}>Haitian Gourde</MenuItem>
          <MenuItem className="MenuItem" value={38}>Indian Rupee</MenuItem>
          <MenuItem className="MenuItem" value={38}>Jordanian Dinar</MenuItem>
          <MenuItem className="MenuItem" value={39}>South Korean Won</MenuItem>
          <MenuItem className="MenuItem" value={40}>Lebanese Lira</MenuItem>
          <MenuItem className="MenuItem" value={42}>Malawian Kwacha</MenuItem>
          <MenuItem className="MenuItem" value={43}>Mauritanian Ouguiya</MenuItem>
          <MenuItem className="MenuItem" value={44}>Mozambican Metical</MenuItem>
          <MenuItem className="MenuItem" value={45}>Netherlands Antillean Gulden</MenuItem>
          <MenuItem className="MenuItem" value={46}>Peruvian Nuevo Sol</MenuItem>
          <MenuItem className="MenuItem" value={47}>Qatari Riyal</MenuItem>
          <MenuItem className="MenuItem" value={48}>Sao Tome And Principe Dobra</MenuItem>
          <MenuItem className="MenuItem" value={49}>Sierra Leonean Leone</MenuItem>
          <MenuItem className="MenuItem" value={50}>Somali Shilling</MenuItem>
          <MenuItem className="MenuItem" value={51}>Sudanese Pound</MenuItem>
          <MenuItem className="MenuItem" value={52}>Syrian Pound</MenuItem>
          <MenuItem className="MenuItem" value={53}>Angolan Kwanza</MenuItem>
          <MenuItem className="MenuItem" value={54}>Aruban Florin</MenuItem>
          <MenuItem className="MenuItem" value={55}>Bahraini Dinar</MenuItem>
          <MenuItem className="MenuItem" value={56}>Belize Dollar</MenuItem>
          <MenuItem className="MenuItem" value={57}>Botswana Pula</MenuItem>
          <MenuItem className="MenuItem" value={58}>Burundi Franc</MenuItem>
          <MenuItem className="MenuItem" value={59}>Cayman Islands Dollar</MenuItem>
          <MenuItem className="MenuItem" value={60}>Colombian Peso</MenuItem>
          <MenuItem className="MenuItem" value={61}>Danish Krone</MenuItem>
          <MenuItem className="MenuItem" value={62}>Guatemalan Quetzal</MenuItem>
          <MenuItem className="MenuItem" value={63}>Honduran Lempira</MenuItem>
          <MenuItem className="MenuItem" value={64}>Indonesian Rupiah</MenuItem> 
          <MenuItem className="MenuItem" value={65}>Israeli New Sheqel</MenuItem>
          <MenuItem className="MenuItem" value={66}>Kazakhstani Tenge</MenuItem>
          <MenuItem className="MenuItem" value={67}>Kuwaiti Dinar</MenuItem>
          <MenuItem className="MenuItem" value={68}>Lesotho Loti</MenuItem>
          <MenuItem className="MenuItem" value={69}>Malaysian Ringgit</MenuItem>
          <MenuItem className="MenuItem" value={70}>Mauritian Rupee</MenuItem>
          <MenuItem className="MenuItem" value={71}>Mongolian Tugrik</MenuItem>
          <MenuItem className="MenuItem" value={72}>Myanma Kyat</MenuItem> 
          <MenuItem className="MenuItem" value={73}>Nigerian Naira</MenuItem>
          <MenuItem className="MenuItem" value={74}>Panamanian Balboa</MenuItem> 
          <MenuItem className="MenuItem" value={75}>Philippine Peso</MenuItem> 
          <MenuItem className="MenuItem" value={76}>Romanian Leu</MenuItem> 
          <MenuItem className="MenuItem" value={77}>Saudi Riyal</MenuItem> 
          <MenuItem className="MenuItem" value={78}>Singapore Dollar</MenuItem>
          <MenuItem className="MenuItem" value={79}>South African Rand</MenuItem> 
          <MenuItem className="MenuItem" value={80}>Surinamese Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={81}>New Taiwan Dollar</MenuItem>
          <MenuItem className="MenuItem" value={82}>Paanga</MenuItem> 
          <MenuItem className="MenuItem" value={83}>Venezuelan Bolivar</MenuItem> 
          <MenuItem className="MenuItem" value={84}>Algerian Dinar</MenuItem> 
          <MenuItem className="MenuItem" value={85}>Argentine Peso</MenuItem> 
          <MenuItem className="MenuItem" value={86}>Azerbaijani Manat</MenuItem> 
          <MenuItem className="MenuItem" value={87}>Belarusian Ruble</MenuItem> 
          <MenuItem className="MenuItem" value={88}>Bolivian Boliviano</MenuItem> 
          <MenuItem className="MenuItem" value={89}>Bulgarian Lev</MenuItem> 
          <MenuItem className="MenuItem" value={90}>Canadian Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={91}>Chilean Peso</MenuItem> 
          <MenuItem className="MenuItem" value={92}>Congolese Franc</MenuItem> 
          <MenuItem className="MenuItem" value={93}>Dominican Peso</MenuItem> 
          <MenuItem className="MenuItem" value={94}>Fijian Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={95}>Gambian Dalasi</MenuItem> 
          <MenuItem className="MenuItem" value={96}>Guyanese Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={97}>Icelandic Króna</MenuItem> 
          <MenuItem className="MenuItem" value={98}>Iraqi Dinar</MenuItem> 
          <MenuItem className="MenuItem" value={99}>Japanese Yen</MenuItem> 
          <MenuItem className="MenuItem" value={100}>North Korean Won</MenuItem> 
          <MenuItem className="MenuItem" value={101}>Latvian Lats</MenuItem> 
          <MenuItem className="MenuItem" value={102}>Swiss Franc</MenuItem> 
          <MenuItem className="MenuItem" value={103}>Malagasy Ariary</MenuItem> 
          <MenuItem className="MenuItem" value={104}>Moldovan Leu</MenuItem> 
          <MenuItem className="MenuItem" value={105}>Moroccan Dirham</MenuItem> 
          <MenuItem className="MenuItem" value={106}>Nepalese Rupee</MenuItem> 
          <MenuItem className="MenuItem" value={107}>Nicaraguan Cordoba</MenuItem> 
          <MenuItem className="MenuItem" value={108}>Pakistani Rupee</MenuItem> 
          <MenuItem className="MenuItem" value={109}>Paraguayan Guarani</MenuItem> 
          <MenuItem className="MenuItem" value={110}>Saint Helena Pound</MenuItem> 
          <MenuItem className="MenuItem" value={111}>Seychellois Rupee</MenuItem> 
          <MenuItem className="MenuItem" value={112}>Solomon Islands Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={113}>Sri Lankan Rupee</MenuItem> 
          <MenuItem className="MenuItem" value={114}>Thai Baht</MenuItem> 
          <MenuItem className="MenuItem" value={115}>Turkish New Lira</MenuItem> 
          <MenuItem className="MenuItem" value={116}>UAE Dirham</MenuItem> 
          <MenuItem className="MenuItem" value={117}>Vanuatu Vatu</MenuItem>
          <MenuItem className="MenuItem" value={118}>Yemeni Rial</MenuItem> 
          <MenuItem className="MenuItem" value={119}>Afghan Afghani</MenuItem> 
          <MenuItem className="MenuItem" value={120}>Bangladeshi Taka</MenuItem> 
          <MenuItem className="MenuItem" value={121}>Brazilian Real</MenuItem> 
          <MenuItem className="MenuItem" value={122}>Cambodian Riel</MenuItem> 
          <MenuItem className="MenuItem" value={123}>Comorian Franc</MenuItem> 
          <MenuItem className="MenuItem" value={124}>Croatian Kuna</MenuItem> 
          <MenuItem className="MenuItem" value={125}>Djiboutian Franc</MenuItem> 
          <MenuItem className="MenuItem" value={126}>Egyptian Pound</MenuItem> 
          <MenuItem className="MenuItem" value={127}>Ethiopian Birr</MenuItem> 
          <MenuItem className="MenuItem" value={128}>CFP Franc</MenuItem> 
          <MenuItem className="MenuItem" value={129}>Ghanaian Cedi</MenuItem> 
          <MenuItem className="MenuItem" value={130}>Guinean Franc</MenuItem> 
          <MenuItem className="MenuItem" value={131}>Hong Kong Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={132}>Special Drawing Rights</MenuItem>
          <MenuItem className="MenuItem" value={133}>Kenyan Shilling</MenuItem> 
          <MenuItem className="MenuItem" value={134}>Kyrgyzstani Som</MenuItem> 
          <MenuItem className="MenuItem" value={135}>Liberian Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={136}>Macanese Pataca</MenuItem> 
          <MenuItem className="MenuItem" value={137}>Maldivian Rufiyaa</MenuItem> 
          <MenuItem className="MenuItem" value={138}>Mexican Peso</MenuItem> 
          <MenuItem className="MenuItem" value={139}>Namibian Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={140}>Norwegian Krone</MenuItem> 
          <MenuItem className="MenuItem" value={141}>Polish Zloty</MenuItem> 
          <MenuItem className="MenuItem" value={142}>Russian Ruble</MenuItem> 
          <MenuItem className="MenuItem" value={143}>Swazi Lilangeni</MenuItem> 
          <MenuItem className="MenuItem" value={144}>Tajikistani Somoni</MenuItem> 
          <MenuItem className="MenuItem" value={145}>Trinidad and Tobago Dollar</MenuItem> 
          <MenuItem className="MenuItem" value={146}>Ugandan Shilling</MenuItem> 
          <MenuItem className="MenuItem" value={147}>Uruguayan Peso</MenuItem>
          <MenuItem className="MenuItem" value={148}>Vietnamese Dong</MenuItem> 
          <MenuItem className="MenuItem" value={149}>Tunisian Dinar</MenuItem> 
          <MenuItem className="MenuItem" value={150}>Ukrainian Hryvnia</MenuItem> 
          <MenuItem className="MenuItem" value={151}>Uzbekistani Som</MenuItem> 
          <MenuItem className="MenuItem" value={152}>Turkmenistan Manat</MenuItem> 
          <MenuItem className="MenuItem" value={153}>British Pound</MenuItem> 
          <MenuItem className="MenuItem" value={154}>Zambian Kwacha</MenuItem> 
          <MenuItem className="MenuItem" value={155}>Bitcoin</MenuItem> 
          <MenuItem className="MenuItem" value={156}>New Belarusian Ruble</MenuItem> 
        
        </Select>
    </>
  );
}
export  function Department() {
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={1}>Anaesthesia</MenuItem>
          <MenuItem className="MenuItem" value={2}>Cardiology</MenuItem>
          <MenuItem className="MenuItem" value={3}>Cosmetic Surgery</MenuItem>
          <MenuItem className="MenuItem" value={4}>Dentist</MenuItem>
          <MenuItem className="MenuItem" value={5}>ENT Specialist</MenuItem>
          <MenuItem className="MenuItem" value={6}>Gastroenterology</MenuItem>
          <MenuItem className="MenuItem" value={7}>General Physician</MenuItem>
          <MenuItem className="MenuItem" value={8}>General Surgeon</MenuItem>
          <MenuItem className="MenuItem" value={9}>Gynecology</MenuItem>
          <MenuItem className="MenuItem" value={10}>Hematology</MenuItem>
          <MenuItem className="MenuItem" value={11}>Hepatology</MenuItem>
          <MenuItem className="MenuItem" value={12}>Nephrology</MenuItem>
          <MenuItem className="MenuItem" value={13}>Neurology</MenuItem>
          <MenuItem className="MenuItem" value={14}>Neurosurgery</MenuItem>
          <MenuItem className="MenuItem" value={15}>Oncology</MenuItem>
          <MenuItem className="MenuItem" value={16}>Orthopaedics</MenuItem>
          <MenuItem className="MenuItem" value={17}>Pediatrics</MenuItem>
          <MenuItem className="MenuItem" value={18}>Pulmonology</MenuItem>
          <MenuItem className="MenuItem" value={19}>Radiology</MenuItem>
          <MenuItem className="MenuItem" value={20}>Spinal</MenuItem>
          <MenuItem className="MenuItem" value={21}>Surgery</MenuItem>
          <MenuItem className="MenuItem" value={22}>Transplantation</MenuItem>
          <MenuItem className="MenuItem" value={23}>Urology</MenuItem>
          <MenuItem className="MenuItem" value={24}>Vascular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export  function Destination() {
  const [destination, setDestination] = React.useState('');

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destination}
          label="Destination"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={1}>India</MenuItem>
          <MenuItem className="MenuItem" value={2}>UAE</MenuItem>
          <MenuItem className="MenuItem" value={3}>Dubai</MenuItem>
          <MenuItem className="MenuItem" value={4}>Nigeria</MenuItem>
          <MenuItem className="MenuItem" value={5}>Kenya</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
