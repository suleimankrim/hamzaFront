import React, { useState } from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Style from './RightSection.module.css';
export const RightSection = () => {
    const [name,setname]=useState("User name");
    const [image,setimage]=useState( <AccountCircleRoundedIcon sx={{fontSize:30}} ></AccountCircleRoundedIcon>);
  return (
    <div className={Style.Container}>
        <div className={Style.Userphotocontainer}>
        {image}
        </div>
        <div className={Style.Username}>
        {name}
        </div>
    </div>
  )
}
