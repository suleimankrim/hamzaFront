import alphabet from "../../Assets/Alphabet";
import data from "../MockData";
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
import coldata from "./column";
export const colre = ({index,title}) => {
  return (
    data.map((idx)=> { return (
        <>
          {idx === 0 ? (
            <TitleForm
              name={index === 0 ?  1 : title[index - 1]}
              key={index + 10000}
              index = {index}
            />
          ) : (
            <CellForm row={idx} index={index} key={idx} />
           
          )}
           {/* {console.log(row)}
           {console.log(c.name.style)} */}

        </>)
    })
  )
}
export default colre;
