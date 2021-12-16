import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "./Select.css";

export function Department() {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <FormControl className="formcontrol1">
      <select
        name="disease"
        class="selectdept"
        required=""
        id="disease"
        placeholder="Select Department"
      >
        <option value="" selected="" hidden="">
          Select Department
        </option>

        <option value="Anaesthesia" className="MenuItem">
          Anaesthesia
        </option>
        <option value="Cardiology" className="MenuItem">
          Cardiology
        </option>
        <option value="Cosmetic Surgery" className="MenuItem">
          Cosmetic Surgery
        </option>
        <option value="Dentist" className="MenuItem">
          Dentist
        </option>
        <option value="ENT Specialist" className="MenuItem">
          ENT Specialist
        </option>
        <option value="Gastroenterology" className="MenuItem">
          Gastroenterology
        </option>
        <option value="General Physician" className="MenuItem">
          General Physician
        </option>
        <option value="General Surgeon" className="MenuItem">
          General Surgeon
        </option>
        <option value="Gynecology" className="MenuItem">
          Gynecology
        </option>
        <option value="Hematology" className="MenuItem">
          Hematology
        </option>
        <option value="Hepatology" className="MenuItem">
          Hepatology
        </option>
        <option value="Nephrology" className="MenuItem">
          Nephrology
        </option>
        <option value="Neurology" className="MenuItem">
          Neurology
        </option>
        <option value="Neurosurgery" className="MenuItem">
          Neurosurgery
        </option>
        <option value="Oncology" className="MenuItem">
          Oncology
        </option>
        <option value="Orthopaedics" className="MenuItem">
          Orthopaedics
        </option>
        <option value="Pediatrics" className="MenuItem">
          Pediatrics
        </option>
        <option value="Pulmonology" className="MenuItem">
          Pulmonology
        </option>
        <option value="Radiology" className="MenuItem">
          Radiology
        </option>
        <option value="Spinal" className="MenuItem">
          Spinal
        </option>
        <option value="Surgery" className="MenuItem">
          Surgery
        </option>
        <option value="Transplantation" className="MenuItem">
          Transplantation
        </option>
        <option value="Urology" className="MenuItem">
          Urology
        </option>
        <option value="Vascular" className="MenuItem">
          Vascular
        </option>
      </select>
    </FormControl>
  );
}
export function Convertamount() {
  return (
    <TextField
      disabled
      className="textfieldamountdisabled"
      id="outlined-basic"
      label="Amount"
      variant="outlined"
    />
  );
}
export function ConvertButton() {
  return (
    <Button variant="contained" class="convertbutton">
      Convert
    </Button>
  );
}
export function Destination() {
  const [destination, setDestination] = React.useState("");

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <FormControl className="formcontrol1">
      <select name="country" id="country" class="form-controldesti" required="">
        <option value="" selected="" hidden="">
          Select Destination
        </option>

        <option value="India" className="MenuItem">India</option>

        <option value="UAE" className="MenuItem">UAE</option>

        <option value="Dubai" className="MenuItem">Dubai</option>

        <option value="Nigeria" className="MenuItem">Nigeria</option>

        <option value="Kenya" className="MenuItem">Kenya</option>
      </select>
    </FormControl>
  );
}
export function Amount() {
  return (
    <TextField
      className="textfieldamount"
      id="outlined-basic"
      label="Amount"
      variant="outlined"
    />
  );
}
export function Currency1() {
  const [currency1, setCurrency1] = React.useState("");

  const handleChange = (event) => {
    setCurrency1(event.target.value);
  };

  return (
    <FormControl className="formcontrol">
      <InputLabel id="demo-simple-select-label">Currency </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency1}
        label="Destination"
        onChange={handleChange}
      >
        <MenuItem className="MenuItem" value={1}>
          Albanian Lek
        </MenuItem>
        <MenuItem className="MenuItem" value={2}>
          East Caribbean Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={3}>
          Euro
        </MenuItem>
        <MenuItem className="MenuItem" value={4}>
          Barbadian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={5}>
          Bhutanese Ngultrum
        </MenuItem>
        <MenuItem className="MenuItem" value={6}>
          Brunei Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={7}>
          Central African CFA Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={8}>
          Cuban Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={9}>
          United States Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={10}>
          Falkland Islands Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={11}>
          Gibraltar Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={12}>
          Hungarian Forint
        </MenuItem>
        <MenuItem className="MenuItem" value={13}>
          Iranian Rial
        </MenuItem>
        <MenuItem className="MenuItem" value={14}>
          Jamaican Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={15}>
          Australian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={16}>
          Lao Kip
        </MenuItem>
        <MenuItem className="MenuItem" value={17}>
          Libyan Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={18}>
          Macedonian Denar
        </MenuItem>
        <MenuItem className="MenuItem" value={19}>
          West African CFA Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={20}>
          New Zealand Dollar
        </MenuItem>

        <MenuItem className="MenuItem" value={21}>
          Omani Rial
        </MenuItem>
        <MenuItem className="MenuItem" value={22}>
          Papua New Guinean Kina
        </MenuItem>
        <MenuItem className="MenuItem" value={23}>
          Rwandan Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={24}>
          Samoan Tala
        </MenuItem>

        <MenuItem className="MenuItem" value={25}>
          Serbian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={26}>
          Swedish Krona
        </MenuItem>
        <MenuItem className="MenuItem" value={27}>
          Tanzanian Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={28}>
          Armenian Dram
        </MenuItem>
        <MenuItem className="MenuItem" value={29}>
          Bahamian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={30}>
          Bosnia And Herzegovina Konvertibilna Marka
        </MenuItem>

        <MenuItem className="MenuItem" value={31}>
          Cape Verdean Escudo
        </MenuItem>
        <MenuItem className="MenuItem" value={32}>
          Chinese Yuan
        </MenuItem>
        <MenuItem className="MenuItem" value={33}>
          Costa Rican Colon
        </MenuItem>
        <MenuItem className="MenuItem" value={34}>
          Czech Koruna
        </MenuItem>
        <MenuItem className="MenuItem" value={35}>
          Eritrean Nakfa
        </MenuItem>
        <MenuItem className="MenuItem" value={36}>
          Georgian Lari
        </MenuItem>

        <MenuItem className="MenuItem" value={37}>
          Haitian Gourde
        </MenuItem>
        <MenuItem className="MenuItem" value={38}>
          Indian Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={39}>
          Jordanian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={40}>
          South Korean Won
        </MenuItem>
        <MenuItem className="MenuItem" value={41}>
          Lebanese Lira
        </MenuItem>
        <MenuItem className="MenuItem" value={42}>
          Malawian Kwacha
        </MenuItem>
        <MenuItem className="MenuItem" value={43}>
          Mauritanian Ouguiya
        </MenuItem>
        <MenuItem className="MenuItem" value={44}>
          Mozambican Metical
        </MenuItem>
        <MenuItem className="MenuItem" value={45}>
          Netherlands Antillean Gulden
        </MenuItem>
        <MenuItem className="MenuItem" value={46}>
          Peruvian Nuevo Sol
        </MenuItem>
        <MenuItem className="MenuItem" value={47}>
          Qatari Riyal
        </MenuItem>
        <MenuItem className="MenuItem" value={48}>
          Sao Tome And Principe Dobra
        </MenuItem>
        <MenuItem className="MenuItem" value={49}>
          Sierra Leonean Leone
        </MenuItem>
        <MenuItem className="MenuItem" value={50}>
          Somali Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={51}>
          Sudanese Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={52}>
          Syrian Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={53}>
          Angolan Kwanza
        </MenuItem>
        <MenuItem className="MenuItem" value={54}>
          Aruban Florin
        </MenuItem>
        <MenuItem className="MenuItem" value={55}>
          Bahraini Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={56}>
          Belize Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={57}>
          Botswana Pula
        </MenuItem>
        <MenuItem className="MenuItem" value={58}>
          Burundi Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={59}>
          Cayman Islands Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={60}>
          Colombian Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={61}>
          Danish Krone
        </MenuItem>
        <MenuItem className="MenuItem" value={62}>
          Guatemalan Quetzal
        </MenuItem>

        <MenuItem className="MenuItem" value={63}>
          Honduran Lempira
        </MenuItem>
        <MenuItem className="MenuItem" value={64}>
          Indonesian Rupiah
        </MenuItem>
        <MenuItem className="MenuItem" value={65}>
          Israeli New Sheqel
        </MenuItem>
        <MenuItem className="MenuItem" value={66}>
          Kazakhstani Tenge
        </MenuItem>
        <MenuItem className="MenuItem" value={67}>
          Kuwaiti Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={68}>
          Lesotho Loti
        </MenuItem>
        <MenuItem className="MenuItem" value={69}>
          Malaysian Ringgit
        </MenuItem>
        <MenuItem className="MenuItem" value={70}>
          Mauritian Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={71}>
          Mongolian Tugrik
        </MenuItem>
        <MenuItem className="MenuItem" value={72}>
          Myanma Kyat
        </MenuItem>
        <MenuItem className="MenuItem" value={73}>
          Nigerian Naira
        </MenuItem>
        <MenuItem className="MenuItem" value={74}>
          Panamanian Balboa
        </MenuItem>
        <MenuItem className="MenuItem" value={75}>
          Philippine Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={76}>
          Romanian Leu
        </MenuItem>
        <MenuItem className="MenuItem" value={77}>
          Saudi Riyal
        </MenuItem>
        <MenuItem className="MenuItem" value={76}>
          Singapore Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={77}>
          South African Rand
        </MenuItem>
        <MenuItem className="MenuItem" value={78}>
          Surinamese Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={79}>
          New Taiwan Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={80}>
          Paanga
        </MenuItem>
        <MenuItem className="MenuItem" value={81}>
          Venezuelan Bolivar
        </MenuItem>
        <MenuItem className="MenuItem" value={82}>
          Algerian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={83}>
          Argentine Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={84}>
          Azerbaijani Manat
        </MenuItem>
        <MenuItem className="MenuItem" value={85}>
          Belarusian Ruble
        </MenuItem>
        <MenuItem className="MenuItem" value={86}>
          Bolivian Boliviano
        </MenuItem>
        <MenuItem className="MenuItem" value={87}>
          Bulgarian Lev
        </MenuItem>
        <MenuItem className="MenuItem" value={88}>
          Canadian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={89}>
          Chilean Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={90}>
          Congolese Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={91}>
          Dominican Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={92}>
          Fijian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={93}>
          Gambian Dalasi
        </MenuItem>
        <MenuItem className="MenuItem" value={94}>
          Guyanese Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={95}>
          Icelandic Króna
        </MenuItem>
        <MenuItem className="MenuItem" value={96}>
          Iraqi Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={97}>
          Japanese Yen
        </MenuItem>
        <MenuItem className="MenuItem" value={98}>
          North Korean Won
        </MenuItem>
        <MenuItem className="MenuItem" value={99}>
          Latvian Lats
        </MenuItem>
        <MenuItem className="MenuItem" value={100}>
          Swiss Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={101}>
          Malagasy Ariary
        </MenuItem>
        <MenuItem className="MenuItem" value={102}>
          Moldovan Leu
        </MenuItem>
        <MenuItem className="MenuItem" value={103}>
          Moroccan Dirham
        </MenuItem>
        <MenuItem className="MenuItem" value={104}>
          Nepalese Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={105}>
          Nicaraguan Cordoba
        </MenuItem>

        <MenuItem className="MenuItem" value={106}>
          Pakistani Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={107}>
          Paraguayan Guarani
        </MenuItem>
        <MenuItem className="MenuItem" value={108}>
          Saint Helena Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={109}>
          Seychellois Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={110}>
          Solomon Islands Dollar
        </MenuItem>

        <MenuItem className="MenuItem" value={111}>
          Sri Lankan Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={112}>
          Thai Baht
        </MenuItem>
        <MenuItem className="MenuItem" value={113}>
          Turkish New Lira
        </MenuItem>
        <MenuItem className="MenuItem" value={114}>
          UAE Dirham
        </MenuItem>
        <MenuItem className="MenuItem" value={115}>
          Vanuatu Vatu
        </MenuItem>
        <MenuItem className="MenuItem" value={116}>
          Yemeni Rial
        </MenuItem>

        <MenuItem className="MenuItem" value={117}>
          Afghan Afghani
        </MenuItem>
        <MenuItem className="MenuItem" value={118}>
          Bangladeshi Taka
        </MenuItem>
        <MenuItem className="MenuItem" value={119}>
          Brazilian Real
        </MenuItem>
        <MenuItem className="MenuItem" value={120}>
          Cambodian Riel
        </MenuItem>
        <MenuItem className="MenuItem" value={121}>
          Comorian Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={122}>
          Croatian Kuna
        </MenuItem>

        <MenuItem className="MenuItem" value={123}>
          Djiboutian Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={124}>
          Egyptian Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={125}>
          Ethiopian Birr
        </MenuItem>
        <MenuItem className="MenuItem" value={126}>
          CFP Franc
        </MenuItem>

        <MenuItem className="MenuItem" value={127}>
          Ghanaian Cedi
        </MenuItem>
        <MenuItem className="MenuItem" value={128}>
          Guinean Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={129}>
          Hong Kong Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={130}>
          Special Drawing Rights
        </MenuItem>
        <MenuItem className="MenuItem" value={131}>
          Kenyan Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={132}>
          Kyrgyzstani Som
        </MenuItem>

        <MenuItem className="MenuItem" value={133}>
          Liberian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={134}>
          Macanese Pataca
        </MenuItem>
        <MenuItem className="MenuItem" value={135}>
          Maldivian Rufiyaa
        </MenuItem>
        <MenuItem className="MenuItem" value={136}>
          Mexican Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={137}>
          Namibian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={138}>
          Norwegian Krone
        </MenuItem>
        <MenuItem className="MenuItem" value={139}>
          Polish Zloty
        </MenuItem>
        <MenuItem className="MenuItem" value={140}>
          Russian Ruble
        </MenuItem>
        <MenuItem className="MenuItem" value={141}>
          Swazi Lilangeni
        </MenuItem>
        <MenuItem className="MenuItem" value={142}>
          Tajikistani Somoni
        </MenuItem>
        <MenuItem className="MenuItem" value={143}>
          Trinidad and Tobago Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={144}>
          Ugandan Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={145}>
          Uruguayan Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={146}>
          Vietnamese Dong
        </MenuItem>
        <MenuItem className="MenuItem" value={147}>
          Tunisian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={148}>
          Ukrainian Hryvnia
        </MenuItem>
        <MenuItem className="MenuItem" value={149}>
          Uzbekistani Som
        </MenuItem>
        <MenuItem className="MenuItem" value={150}>
          Turkmenistan Manat
        </MenuItem>
        <MenuItem className="MenuItem" value={151}>
          British Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={152}>
          Zambian Kwacha
        </MenuItem>
        <MenuItem className="MenuItem" value={153}>
          Bitcoin
        </MenuItem>
        <MenuItem className="MenuItem" value={154}>
          New Belarusian Ruble
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export function Currency2() {
  const [currency2, setCurrency2] = React.useState("");

  const handleChange = (event) => {
    setCurrency2(event.target.value);
  };

  return (
    <FormControl className="formcontrol">
      <InputLabel id="demo-simple-select-label">Currency</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency2}
        label="Destination"
        onChange={handleChange}
      >
        <MenuItem className="MenuItem" value={1}>
          Albanian Lek
        </MenuItem>
        <MenuItem className="MenuItem" value={2}>
          East Caribbean Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={3}>
          Euro
        </MenuItem>
        <MenuItem className="MenuItem" value={4}>
          Barbadian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={5}>
          Bhutanese Ngultrum
        </MenuItem>
        <MenuItem className="MenuItem" value={6}>
          Brunei Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={7}>
          Central African CFA Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={8}>
          Cuban Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={9}>
          United States Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={10}>
          Falkland Islands Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={11}>
          Gibraltar Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={12}>
          Hungarian Forint
        </MenuItem>
        <MenuItem className="MenuItem" value={13}>
          Iranian Rial
        </MenuItem>
        <MenuItem className="MenuItem" value={14}>
          Jamaican Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={15}>
          Australian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={16}>
          Lao Kip
        </MenuItem>
        <MenuItem className="MenuItem" value={17}>
          Libyan Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={18}>
          Macedonian Denar
        </MenuItem>
        <MenuItem className="MenuItem" value={19}>
          West African CFA Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={20}>
          New Zealand Dollar
        </MenuItem>

        <MenuItem className="MenuItem" value={21}>
          Omani Rial
        </MenuItem>
        <MenuItem className="MenuItem" value={22}>
          Papua New Guinean Kina
        </MenuItem>
        <MenuItem className="MenuItem" value={23}>
          Rwandan Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={24}>
          Samoan Tala
        </MenuItem>

        <MenuItem className="MenuItem" value={25}>
          Serbian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={26}>
          Swedish Krona
        </MenuItem>
        <MenuItem className="MenuItem" value={27}>
          Tanzanian Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={28}>
          Armenian Dram
        </MenuItem>
        <MenuItem className="MenuItem" value={29}>
          Bahamian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={30}>
          Bosnia And Herzegovina Konvertibilna Marka
        </MenuItem>

        <MenuItem className="MenuItem" value={31}>
          Cape Verdean Escudo
        </MenuItem>
        <MenuItem className="MenuItem" value={32}>
          Chinese Yuan
        </MenuItem>
        <MenuItem className="MenuItem" value={33}>
          Costa Rican Colon
        </MenuItem>
        <MenuItem className="MenuItem" value={34}>
          Czech Koruna
        </MenuItem>
        <MenuItem className="MenuItem" value={35}>
          Eritrean Nakfa
        </MenuItem>
        <MenuItem className="MenuItem" value={36}>
          Georgian Lari
        </MenuItem>

        <MenuItem className="MenuItem" value={37}>
          Haitian Gourde
        </MenuItem>
        <MenuItem className="MenuItem" value={38}>
          Indian Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={39}>
          Jordanian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={40}>
          South Korean Won
        </MenuItem>
        <MenuItem className="MenuItem" value={41}>
          Lebanese Lira
        </MenuItem>
        <MenuItem className="MenuItem" value={42}>
          Malawian Kwacha
        </MenuItem>
        <MenuItem className="MenuItem" value={43}>
          Mauritanian Ouguiya
        </MenuItem>
        <MenuItem className="MenuItem" value={44}>
          Mozambican Metical
        </MenuItem>
        <MenuItem className="MenuItem" value={45}>
          Netherlands Antillean Gulden
        </MenuItem>
        <MenuItem className="MenuItem" value={46}>
          Peruvian Nuevo Sol
        </MenuItem>
        <MenuItem className="MenuItem" value={47}>
          Qatari Riyal
        </MenuItem>
        <MenuItem className="MenuItem" value={48}>
          Sao Tome And Principe Dobra
        </MenuItem>
        <MenuItem className="MenuItem" value={49}>
          Sierra Leonean Leone
        </MenuItem>
        <MenuItem className="MenuItem" value={50}>
          Somali Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={51}>
          Sudanese Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={52}>
          Syrian Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={53}>
          Angolan Kwanza
        </MenuItem>
        <MenuItem className="MenuItem" value={54}>
          Aruban Florin
        </MenuItem>
        <MenuItem className="MenuItem" value={55}>
          Bahraini Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={56}>
          Belize Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={57}>
          Botswana Pula
        </MenuItem>
        <MenuItem className="MenuItem" value={58}>
          Burundi Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={59}>
          Cayman Islands Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={60}>
          Colombian Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={61}>
          Danish Krone
        </MenuItem>
        <MenuItem className="MenuItem" value={62}>
          Guatemalan Quetzal
        </MenuItem>

        <MenuItem className="MenuItem" value={63}>
          Honduran Lempira
        </MenuItem>
        <MenuItem className="MenuItem" value={64}>
          Indonesian Rupiah
        </MenuItem>
        <MenuItem className="MenuItem" value={65}>
          Israeli New Sheqel
        </MenuItem>
        <MenuItem className="MenuItem" value={66}>
          Kazakhstani Tenge
        </MenuItem>
        <MenuItem className="MenuItem" value={67}>
          Kuwaiti Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={68}>
          Lesotho Loti
        </MenuItem>
        <MenuItem className="MenuItem" value={69}>
          Malaysian Ringgit
        </MenuItem>
        <MenuItem className="MenuItem" value={70}>
          Mauritian Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={71}>
          Mongolian Tugrik
        </MenuItem>
        <MenuItem className="MenuItem" value={72}>
          Myanma Kyat
        </MenuItem>
        <MenuItem className="MenuItem" value={73}>
          Nigerian Naira
        </MenuItem>
        <MenuItem className="MenuItem" value={74}>
          Panamanian Balboa
        </MenuItem>
        <MenuItem className="MenuItem" value={75}>
          Philippine Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={76}>
          Romanian Leu
        </MenuItem>
        <MenuItem className="MenuItem" value={77}>
          Saudi Riyal
        </MenuItem>
        <MenuItem className="MenuItem" value={76}>
          Singapore Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={77}>
          South African Rand
        </MenuItem>
        <MenuItem className="MenuItem" value={78}>
          Surinamese Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={79}>
          New Taiwan Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={80}>
          Paanga
        </MenuItem>
        <MenuItem className="MenuItem" value={81}>
          Venezuelan Bolivar
        </MenuItem>
        <MenuItem className="MenuItem" value={82}>
          Algerian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={83}>
          Argentine Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={84}>
          Azerbaijani Manat
        </MenuItem>
        <MenuItem className="MenuItem" value={85}>
          Belarusian Ruble
        </MenuItem>
        <MenuItem className="MenuItem" value={86}>
          Bolivian Boliviano
        </MenuItem>
        <MenuItem className="MenuItem" value={87}>
          Bulgarian Lev
        </MenuItem>
        <MenuItem className="MenuItem" value={88}>
          Canadian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={89}>
          Chilean Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={90}>
          Congolese Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={91}>
          Dominican Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={92}>
          Fijian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={93}>
          Gambian Dalasi
        </MenuItem>
        <MenuItem className="MenuItem" value={94}>
          Guyanese Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={95}>
          Icelandic Króna
        </MenuItem>
        <MenuItem className="MenuItem" value={96}>
          Iraqi Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={97}>
          Japanese Yen
        </MenuItem>
        <MenuItem className="MenuItem" value={98}>
          North Korean Won
        </MenuItem>
        <MenuItem className="MenuItem" value={99}>
          Latvian Lats
        </MenuItem>
        <MenuItem className="MenuItem" value={100}>
          Swiss Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={101}>
          Malagasy Ariary
        </MenuItem>
        <MenuItem className="MenuItem" value={102}>
          Moldovan Leu
        </MenuItem>
        <MenuItem className="MenuItem" value={103}>
          Moroccan Dirham
        </MenuItem>
        <MenuItem className="MenuItem" value={104}>
          Nepalese Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={105}>
          Nicaraguan Cordoba
        </MenuItem>

        <MenuItem className="MenuItem" value={106}>
          Pakistani Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={107}>
          Paraguayan Guarani
        </MenuItem>
        <MenuItem className="MenuItem" value={108}>
          Saint Helena Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={109}>
          Seychellois Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={110}>
          Solomon Islands Dollar
        </MenuItem>

        <MenuItem className="MenuItem" value={111}>
          Sri Lankan Rupee
        </MenuItem>
        <MenuItem className="MenuItem" value={112}>
          Thai Baht
        </MenuItem>
        <MenuItem className="MenuItem" value={113}>
          Turkish New Lira
        </MenuItem>
        <MenuItem className="MenuItem" value={114}>
          UAE Dirham
        </MenuItem>
        <MenuItem className="MenuItem" value={115}>
          Vanuatu Vatu
        </MenuItem>
        <MenuItem className="MenuItem" value={116}>
          Yemeni Rial
        </MenuItem>

        <MenuItem className="MenuItem" value={117}>
          Afghan Afghani
        </MenuItem>
        <MenuItem className="MenuItem" value={118}>
          Bangladeshi Taka
        </MenuItem>
        <MenuItem className="MenuItem" value={119}>
          Brazilian Real
        </MenuItem>
        <MenuItem className="MenuItem" value={120}>
          Cambodian Riel
        </MenuItem>
        <MenuItem className="MenuItem" value={121}>
          Comorian Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={122}>
          Croatian Kuna
        </MenuItem>

        <MenuItem className="MenuItem" value={123}>
          Djiboutian Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={124}>
          Egyptian Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={125}>
          Ethiopian Birr
        </MenuItem>
        <MenuItem className="MenuItem" value={126}>
          CFP Franc
        </MenuItem>

        <MenuItem className="MenuItem" value={127}>
          Ghanaian Cedi
        </MenuItem>
        <MenuItem className="MenuItem" value={128}>
          Guinean Franc
        </MenuItem>
        <MenuItem className="MenuItem" value={129}>
          Hong Kong Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={130}>
          Special Drawing Rights
        </MenuItem>
        <MenuItem className="MenuItem" value={131}>
          Kenyan Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={132}>
          Kyrgyzstani Som
        </MenuItem>

        <MenuItem className="MenuItem" value={133}>
          Liberian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={134}>
          Macanese Pataca
        </MenuItem>
        <MenuItem className="MenuItem" value={135}>
          Maldivian Rufiyaa
        </MenuItem>
        <MenuItem className="MenuItem" value={136}>
          Mexican Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={137}>
          Namibian Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={138}>
          Norwegian Krone
        </MenuItem>
        <MenuItem className="MenuItem" value={139}>
          Polish Zloty
        </MenuItem>
        <MenuItem className="MenuItem" value={140}>
          Russian Ruble
        </MenuItem>
        <MenuItem className="MenuItem" value={141}>
          Swazi Lilangeni
        </MenuItem>
        <MenuItem className="MenuItem" value={142}>
          Tajikistani Somoni
        </MenuItem>
        <MenuItem className="MenuItem" value={143}>
          Trinidad and Tobago Dollar
        </MenuItem>
        <MenuItem className="MenuItem" value={144}>
          Ugandan Shilling
        </MenuItem>
        <MenuItem className="MenuItem" value={145}>
          Uruguayan Peso
        </MenuItem>
        <MenuItem className="MenuItem" value={146}>
          Vietnamese Dong
        </MenuItem>
        <MenuItem className="MenuItem" value={147}>
          Tunisian Dinar
        </MenuItem>
        <MenuItem className="MenuItem" value={148}>
          Ukrainian Hryvnia
        </MenuItem>
        <MenuItem className="MenuItem" value={149}>
          Uzbekistani Som
        </MenuItem>
        <MenuItem className="MenuItem" value={150}>
          Turkmenistan Manat
        </MenuItem>
        <MenuItem className="MenuItem" value={151}>
          British Pound
        </MenuItem>
        <MenuItem className="MenuItem" value={152}>
          Zambian Kwacha
        </MenuItem>
        <MenuItem className="MenuItem" value={153}>
          Bitcoin
        </MenuItem>
        <MenuItem className="MenuItem" value={154}>
          New Belarusian Ruble
        </MenuItem>
      </Select>
    </FormControl>
  );
}
