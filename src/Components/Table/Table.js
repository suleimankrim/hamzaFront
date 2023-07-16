import DataTable from "react-data-table-component";
import columnss from "./columns/Columns";
import {data} from "./MockData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TableFooter from "../Table/TableFooter/TableFooter";
import { useState, useEffect,useRef } from "react";
import zIndex from "@mui/material/styles/zIndex";
import axios from "axios"
import {set} from "./MockData"
const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "0px", // override the cell padding for head cells
      paddingRight: "0px",
    },
  },
  cells: {
    style: {
      paddingLeft: "0px", // override the cell padding for data cells
      paddingRight: "0",
    },
  },
};

export const Table = () => {
  
  const   [ll,setll]=useState([]);
  const [colom, setColom] = useState([]);
  const [pending, setPending] = useState(true);
    const [isLoading, setLoading] = useState(true);

    const [fol, setfol] = useState([]);
  async function lol(){
 columnss.then(function(value){setColom(value)});
  
  }
  function useDidUpdateEffect(fn, inputs) {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current) { 
        return fn();
      }
      didMountRef.current = true;
    }, inputs);
  }
  
  function gadeed(){
    axios.get("https://sags-react-project3.onrender.com/cells" ).then((response) => {
        let mm=[];
      
       mm= response.data;

// Move the "id" key-value pair to the first position in each object
// mm=mm.forEach(obj => {
//   const idValue = obj.id;
//   delete obj.id;
//   obj = { id: idValue, ...obj };
// });
      //    mm = response.data.map((al,index) => 
      //  {return({
      //    id:al.id,
      //    title:al.title,
      //    year:al.year,
        
      //  })})
      // if(mm.length<10){
      //    let newdat=[];
      //    const initialLen=mm.length;
      //    const initial =mm[mm.length-1].id;
      //    console.log(initial+"fuck");
      //    for(let i=mm.length; i<50;i++){
      //      mm[i]={
      //        id:i+initial-initialLen+1,
      //        title:"",
      //     year:"",

      //      };
      //    }
       
        

      //  }
       setll(mm);
      console.log(mm);
      columnss.then(function(value){setColom(value)});
      // setPokemon(response.data);
      if(isLoading===true){
        console.log("faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak");
       columnss.then(function(value){setColom(value);
       set(mm);
      // setColom(fol);
       
      setLoading(false)
      //   // setColom();
         ;})
      }
      
    })
  }
  useDidUpdateEffect(gadeed,[isLoading]);
   
  
    if (isLoading===true) {
      return (<Box
      sx={{
        display: "flex",
        justifyContent: "center",
        zIndex: "10001",
        alignItems: "center",
        height: "500px",
      }}
    >
      <CircularProgress size={60} thickness={4} sx={{
        color :'gray'
      }} />
    </Box>)
  
    }
    console.log(colom[1]);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //   
  //   setPending(false);
  // }, 500);
  // 	return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
     
        <DataTable
          columns={colom}
          dense
          data={ll}
          customStyles={customStyles}
        />
      
    </>
  )
};
