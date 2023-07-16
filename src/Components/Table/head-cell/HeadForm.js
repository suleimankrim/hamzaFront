
import React from "react";
import Style from "../body-cell/IdCell.module.css";
import { useFormik } from "formik";
import SettingDrop from "./SettingDrop";
export const HeadForm = ({ name , colId,settingState}) => {
  // console.log("lol");
  const formik = useFormik({
    initialValues: {
        cellValue :name,
    },
  });
  return (<div style={{
    height: '100%',
    width: '100%',
  }}>
    <SettingDrop settingStates={settingState}/><div style={{
      height: '20px',
    }}>
    <input type="text" name="cellValue" id ="cellValue"
    value={formik.values.cellValue}
     onChange={formik.handleChange} className={Style.IdCell}
     on onBlur={console.log(name)}></input></div></div>
  );
};
export default HeadForm;