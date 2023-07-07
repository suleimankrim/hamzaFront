import * as React from "react";
import {IconButton} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Style from "./LeftSection.module.css";
import  {Menu as Menueicon}   from "@mui/icons-material"; 
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuItemContainer from "./MenuItemContainer";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
// export const LeftSection = () => {
//   return (
// <div><Menu fontSize='20' /></div>

//   )
// }
// 1945
export const LeftSection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={Style.ButtonContainer}>
        
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={Style.Button}
      >
         {/* <Menueicon sx={{color:"black",fontSize:30,fontWeight:100}} ></Menueicon> */}
         <MenuRoundedIcon sx={{color:"black",fontSize:30}}></MenuRoundedIcon>

        
      </IconButton>
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}><MenuItemContainer text={"Upload file"} Icon={<UploadFileOutlinedIcon sx={{fontSize:20}}></UploadFileOutlinedIcon>} /> </MenuItem>
        <MenuItem onClick={handleClose}><MenuItemContainer text={"Save file"} Icon={<SaveOutlinedIcon sx={{fontSize:20}}></SaveOutlinedIcon>} /> </MenuItem>
        <MenuItem onClick={handleClose}><MenuItemContainer text={"Settings"} Icon={<SettingsRoundedIcon sx={{fontSize:20}} ></SettingsRoundedIcon>} /> </MenuItem>
        <MenuItem onClick={handleClose}><MenuItemContainer text={"Logout"} Icon={<LogoutRoundedIcon sx={{fontSize:20}} ></LogoutRoundedIcon>} /> </MenuItem>
      </Menu>
    </div>
  );
};
export default LeftSection;
