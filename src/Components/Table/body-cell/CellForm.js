import React from "react";
import Style from "./Cell.module.css";
import { useFormik } from "formik";
import secondStyle from "./IdCell.module.css";
import {data, set} from "../MockData";
import axios from "axios";
import TeamObserver from "../../TeamsObserver";
import  { useState } from 'react';
import ObserverCreator from "../../ObserverCreator";
import  { useRef } from 'react';
import  { useEffect } from 'react';
import { Grade } from "@mui/icons-material";

export const CellForm = ({ row, index , settingsStates,observerCreator,LastClicked,fn ,observer,gradeObserver}) => {
  // observer=new TeamObserver();
  const filds = Object.keys(data[row.id-1]);
  const titles = Object.keys(data[0]);
  const [grade,setGradeF]=useState(false);
  
  let customEvent = {
    target: {
      value:1 ,
      name: "cellValue",
    }
  };
  
  function ool(par) { 
    formik.handleChange(par);
    
  }
  function getGrade(){
    console.log(formik.values.cellValue);
    return Number(formik.values.cellValue);
   
  
  }
  function setGrade(valu) {
    customEvent.target.value=Number(valu);
    formik.handleChange(customEvent);
    onBlurHandler(customEvent);
     console.log(valu+"set is complete");
   
  }
  
  
   function saveList(e){
    onBlurHandler(e);
   };
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (!isMountedRef.current) {
      if(gradeObserver!==null){
      if(data[0][index]==="Final Grade"){
        console.log("set");
        gradeObserver.joinTeamSave(setGrade);
      }
      else{
        console.log(data[0][index]);
        
        gradeObserver.joinTeam(getGrade);
      }
    }
      // Function to run when component mounts for the first time
      // console.log('Component mounted');
      if(observer!==null){
        // console.log(row.id+" "+index);
      observer.joinTeam(ool);
        observer.joinTeamSave(saveList);
    }
      isMountedRef.current = true;
    }

    // Clean-up function (optional)
    return () => {
     
    };
  }, []);
  
  const [isFocused, setIsFocused] = useState(false);
  
 
  const formik = useFormik({
    initialValues: {
      cellValue: filds.length <=index ? (
       ""
      ) : ( 
        index ===0 ? (
       row.id):(row[filds[index]])),
    }
   
   
  });
  const [gradeNumber,setGradeNumberF]=useState(Number(formik.values.cellValue));
  const change = (e) => {
    
    if (observer === null||settingsStates.getCreateTeam()===true||data[0][index]==="Final Grade") {
      console.log("doesnot");
      formik.handleChange(e);
    }
    else{
      console.log("exist");
       formik.handleChange(e);
         observer.notify(e);
    }
    
  };
  const forceChange=(e)=>{
    formik.values.cellValue=e;
  }
   
    const SaveBlur=async(e)=>{
      
      if(observer===null||settingsStates.getCreateTeam()===true||data[0][index]==="Final Grade"){
        console.log("its bluring"+" "+Number(e.target.value));
       onBlurHandler(e); 
       
       
      }
      else{
        
        onBlurHandler(e); 
        observer.notifySave(e);
      }
   
    }
   const blurTextHandler=async(e)=>{
    console.log("fat");
    formik.values.cellValue=e;
     row[filds[index]] = formik.values.cellValue;
     console.log(row.id);
     try {
      console.log( formik.values.cellValue+"this");
      const rowId=Number(row.id);
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
  
  const onBlurHandler=async(e)=>{
   
     
      console.log("fat");
     formik.values.cellValue=e.target.value;
      row[filds[index]] = formik.values.cellValue;
      console.log(row.id);
     
     try {
      console.log( formik.values.cellValue+"this");
      const rowId=Number(row.id);
        await axios.post(`https://sags-react-project3.onrender.com/cells/${rowId}/${index}`, {
          // JSON body data
          "value":formik.values.cellValue,
          // Add more key-value pairs as needed
        });
        if(gradeObserver!==null){
          if(data[0][index]==="Final Grade"){
            // console.log("set");
            // gradeObserver.joinTeamSave(setGrade);
          }
          else{
            console.log(data[0][index]);
            gradeObserver.notify();
            // gradeObserver.joinTeam(getGrade);
          }
        }
      } catch (error) {
        console.error(error);
        // Handle the error or throw it for further handling
      }
    // }
  };

    const[cstyle,setcstyle] =useState(Style.cell)
 
  return (
    
    <input
      index={index}
      // className={'highlighted'}
      // onClick={onClickHandler}
      type="text"
      name="cellValue"
      id="cellValue"
      value={formik.values.cellValue}
      onChange={change }
      // onFocus={onFocusHandler}
      onBlur={SaveBlur}
      data-testid="cellInput"
      className={cstyle}
      autoComplete="off"
      style={{ textAlign: 'center' }}
    

    ></input>
  );
};
