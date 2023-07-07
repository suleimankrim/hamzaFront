import React from "react";
import Style from "./Cell.module.css";
import { useFormik } from "formik";
import secondStyle from "./IdCell.module.css";
import {data} from "../MockData";
import axios from "axios";

export const CellForm = ({ row, index }) => {
  console.log(data[row.id-data[1].id]);
  console.log(row.id-data[1].id);
  const filds = Object.keys(data[row.id-data[1].id+1]);
  // console.log("lol");
  // console.log(row[filds[index]]);
  const formik = useFormik({
    initialValues: {
      cellValue: filds.length <=index ? (
       ""
      ) : ( 
       row[filds[index]]),
    }
    // initialValues:{
    // cellValue: row[filds[index]]}
   
  });

  return (
    
    <input
      type="text"
      name="cellValue"
      id="cellValue"
      value={formik.values.cellValue}
      onChange={formik.handleChange }
      onBlur={async () => {
        row[filds[index]] = formik.values.cellValue;
        console.log(row.id);
        try {
          await axios.put(`http://localhost:8080/table/id?id=${row.id}`, {
            // JSON body data
            title: row.title,
            year: row.year,
            // Add more key-value pairs as needed
          });
        } catch (error) {
          console.error(error);
          // Handle the error or throw it for further handling
        }
      }}
      // In the code above, you can include the necessary key-value pairs inside the object passed as the second argument to axios.put. Replace key1, value1, key2, value2, etc. with the actual data you want to send in the JSON body.
      
      // Ensure that the server-side API endpoint expects and can handle the JSON data being sent in the request body.
      
      
      
      
      
      
      
      className={index === 0 ? secondStyle.IdCell : Style.cell}
    ></input>
  );
};
