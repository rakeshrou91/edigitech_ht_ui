import React from "react";
import FormControl from "@mui/material/FormControl";
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
