import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "./Select.css";

export function Department() {
  // const [department, setDepartment] = React.useState("");

  // const handleChange = (event) => {
  //   setDepartment(event.target.value);
  // };

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
  // const [destination, setDestination] = React.useState("");

  // const handleChange = (event) => {
  //   setDestination(event.target.value);
  // };

  return (
    <FormControl className="formcontrol1">
      <select name="country" id="country" class="form-controldesti" required="">
        <option value="" selected="" hidden="">
          Select Destination
        </option>

        <option value="India" className="MenuItem">
          India
        </option>

        <option value="UAE" className="MenuItem">
          UAE
        </option>

        <option value="Dubai" className="MenuItem">
          Dubai
        </option>

        <option value="Nigeria" className="MenuItem">
          Nigeria
        </option>

        <option value="Kenya" className="MenuItem">
          Kenya
        </option>
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
  // const [currency1, setCurrency1] = React.useState("");

  // const handleChange = (event) => {
  //   setCurrency1(event.target.value);
  // };

  return (
    <FormControl className="formcontrol">
      <select
        class="form-controlcurrency"
        id="from_currency_id"
        required=""
        name="from_currency"
        
      ><option value="" selected="" hidden="">Select Currency</option>
        <option value="ALL">Albanian Lek</option>
        <option value="XCD">East Caribbean Dollar</option>
        <option value="EUR">Euro</option>
        <option value="BBD">Barbadian Dollar</option>
        <option value="BTN">Bhutanese Ngultrum</option>
        <option value="BND">Brunei Dollar</option>
        <option value="XAF">Central African CFA Franc</option>
        <option value="CUP">Cuban Peso</option>
        <option value="USD" selected="">
          United States Dollar
        </option>
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
    </FormControl>
  );
}
export function Currency2() {
  // const [currency2, setCurrency2] = React.useState("");

  // const handleChange = (event) => {
  //   setCurrency2(event.target.value);
  // };

  return (
    <FormControl className="formcontrol">
      <select
        class="form-controlcurrency"
        id="from_currency_id"
        required=""
        name="from_currency"
        
      ><option value="" selected="" hidden="">Select Currency</option>
        <option value="ALL">Albanian Lek</option>
        <option value="XCD">East Caribbean Dollar</option>
        <option value="EUR">Euro</option>
        <option value="BBD">Barbadian Dollar</option>
        <option value="BTN">Bhutanese Ngultrum</option>
        <option value="BND">Brunei Dollar</option>
        <option value="XAF">Central African CFA Franc</option>
        <option value="CUP">Cuban Peso</option>
        <option value="USD" selected="">
          United States Dollar
        </option>
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
    </FormControl>
  );
}
