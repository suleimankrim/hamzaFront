import alphabet from "../../Assets/Alphabet";
import data from "../MockData";
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
import Coo from "./Coo";
import coldata from "./column";
import SettingsState from "../../SettingsStates";
const title =  Object.keys(data[0]);
function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}
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
    let settingsStates=new SettingsState(false,false,false);
    console.log("what the fuck");
    const elee={
      name: <HeadForm name={al} settingState={settingsStates} colId={index} key={index} />,

      
      cell: (row, idx, c) => (
        <>
          {idx === 0 ? (
            <TitleForm
              name={index === 0 ? 1 : title[index - 1]}
              key={index + 10000}
              index = {index}
            />
          ) : (
            <CellForm row={row} settingsStates={settingsStates} index={index} key={row.id} />
           
          )}
           {/* {console.log(row)}
           {console.log(c.name.style)} */}

        </>
      ),
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
