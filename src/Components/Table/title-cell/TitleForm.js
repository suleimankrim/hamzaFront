import React from "react";
import Style from "../body-cell/Cell.module.css";
import secondStyle from "../body-cell/IdCell.module.css";
import { useFormik } from "formik";
import { set, data } from "../MockData";
import axios from "axios";
export const TitleForm = ({ name, index,dat,row }) => {
  const filds = Object.keys(data[0]);
  // console.log("lol");
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
  const change = (e) => {
    
      formik.handleChange(e);
    
  };
  const forceChange=(e)=>{
    formik.values.cellValue=e;
  }
  const onBlurHandler=async(e)=>{
    try {
      console.log( formik.values.cellValue);
      const rowId=Number(row.id);
      console.log(index);
        await axios.post(`https://sags-react-project3.onrender.com/cells/${rowId}/${index}`, {
          // JSON body data
          "value":formik.values.cellValue,
          // Add more key-value pairs as needed
        });
      } catch (error) {
        console.error(error);
        // Handle the error or throw it for further handling
      }
  }
  return (
      <input
        type="text"
        name="cellValue"
        id="cellValue"
        value={formik.values.cellValue}
        onChange={change}
        onBlur={onBlurHandler}
        className={index===0?secondStyle.IdCell :Style.cell}
        autoComplete="off"
        style={{ textAlign: 'center' }}
      ></input>

  );

};
export default TitleForm;
