import alphabet from "../../Assets/Alphabet";
import data from "../MockData";
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
import Coo from "./Coo";
import coldata from "./column";
import SettingsState from "../../SettingsStates";
import ObserverCreator from "../../ObserverCreator";
import LastClicked from "../../LastClicked";
import  { useRef } from 'react';
import  { useState, createContext, useContext } from 'react';
import TeamObserver from "../../TeamsObserver";
import GradeObserver from "../../GradeObserver";
const title =  Object.keys(data[0]);
function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}
const myMap = new Map();
const myGradeMap = new Map();
//  function columnss  (){  
//   //  await timeout(2500);
//   console.log("fat");
//   const ele= alphabet.map ((al, index) => {
   
//     console.log("what the fuck");
//     const elee={
//       name: <HeadForm name={al} key={index} />,

      
//       cell: (row, idx, c) => (
//         <>
//           {idx === 0 ? (
//             <TitleForm
//               name={index === 0 ? 1 : title[index + 1]}
//               key={index + 10000}
//               index = {index}
//             />
//           ) : (
//             <CellForm row={row} index={index} key={row.id} />
           
//           )}
//            {/* {console.log(row)}
//            {console.log(c.name.style)} */}

//         </>
//       ),
//       width: index===0? "40px":{},  
      
//     };
//       return  elee;
    
        
//   })
  
// return   ele;
  
// }
// const columnss =  
//     // await timeout(2500);
//   // console.log("fat");
// alphabet.map ((al, index) => {
   
//     console.log("what the fuck");
//     const elee={
//       name: <HeadForm name={al} key={index} />,

      
//       cell: (row, idx, c) => (
//         <>
//           {idx === 0 ? (
//             <TitleForm
//               name={index === 0 ? 1 : title[index - 1]}
//               key={index + 10000}
//               index = {index}
//             />
//           ) : (
//             <CellForm row={row} index={index} key={row.id} />
           
//           )}
//            {/* {console.log(row)}
//            {console.log(c.name.style)} */}

//         </>
//       ),
//       width: index===0? "40px":{},  
      
//     };
//       return  elee;
    
        
//   })
const columnss =new Promise( async function( myResolve, myReject){  
     
   
  // await timeout(10000);
  console.log("fat");
  myResolve(
   
alphabet.map ((al, index) => {
  let lastClicked=new LastClicked();
  let observerCreator=new ObserverCreator();
    let settingsStates=new SettingsState(false,false,false);
    const elee={
      name: <HeadForm name={al} settingState={settingsStates} colId={index} key={index} />,
      
      
      cell: (row, idx, c) => {
        if (typeof row["2"] === 'undefined') {
          row["2"]="";
          // Value is undefined
        }
        let gObser=null;
        let obser=null;
        if(index>2&&row["2"]!==""&&!myMap.has(row["2"]+","+index)){
          console.log("create");
           obser=new TeamObserver();
          myMap.set(row["2"]+","+index,obser);
          console.log(index);
        }
        else if(row["2"]!==""&&myMap.has(row["2"]+","+index)){
          console.log(row["2"]+","+index);
         obser=myMap.get(row["2"]+","+index);
          
        }
        if(!myGradeMap.has(row.id)&&index>2){
          gObser=new GradeObserver();
          myGradeMap.set(row.id,gObser);
        }
        else if(index>2){
          gObser=myGradeMap.get(row.id);
        }
        
        // console.log(row["2"]);
       
        function ref (ev){ev()};
        return(
        
        <>
        
          {idx === 0 ? (
            <TitleForm
              name={index === 0 ? 1 : title[index - 1]}
              key={index + 10000}
              index = {index}
              row={row}
              
            />
          ) : (
            <CellForm row={row} fn={ref} settingsStates={settingsStates} index={index} key={row.id} observer={obser} gradeObserver={gObser} observerCreator={observerCreator} LastClicked={lastClicked}/>
           
          )}
           {/* {console.log(row)}
           {console.log(c.name.style)} */}

        </>)
    },
      width: index===0? "40px":{},  
      
    };
      return  elee;
    
        
}))}
  
)
//  async function columnss   (){
     
//   console.log("fat");
//  const mmm=new Promise((myResolve, myReject)=>{ return( alphabet.map ((al, index) => {
//   const zz=<TitleForm index={index} name={index} key={"lol"}></TitleForm>;
//    const lll=data.map(function(idx,al){return(
    
//    <TitleForm index={index} name={idx} key={idx}></TitleForm>)})
//     console.log("what the fuck");
//     const elee={
//       name: <HeadForm name={al} key={index} />,

      
//       cell: lll,
//       width: index===0? "40px":{},  
      
//     };
//       return  myResolve(elee);
    
        
//   }))})
//   console.log("hsa");
//   mmm.then(function(value){
//     console.log(value);
//     return value
//   });
 
 
  
//   }  


export default columnss;
