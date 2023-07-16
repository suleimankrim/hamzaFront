import React from 'react'
import ph from "./1-PhotoRoom.png-PhotoRoom.svg"
import ph2 from "./Store and Analyze Grades.svg"
import Style from "./MiddleSection.module.css"
export const MiddleSection = () => {
  return (
    <div className={Style.MainContainer}>
        <div className={Style.img1Container}>
<img src={ph} className={Style.img1}/>
        </div >
        <div className={Style.img2Container}>
        <img src={ph2} className={Style.img2}/>
        </div>
    </div>
  )
}
export default MiddleSection;
