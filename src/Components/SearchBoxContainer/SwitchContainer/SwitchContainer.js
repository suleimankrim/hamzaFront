import * as React from 'react';
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import ph from './facebook-svgrepo-com.svg'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { LockOutlined } from '@mui/icons-material';
import  { switchClasses } from '@mui/joy/Switch';
import Style from './SwitchContainer.module.css'
//comment
export const SwitchContainer = () => {
    const [dark, setDark] = React.useState(false);
    const [icon, setIcon] = React.useState(<LockOpenOutlinedIcon sx={{color:'white' ,fontSize:'20px'}}></LockOpenOutlinedIcon>);
   const ChangeIcon=function () {
    if (dark ===true) {
        setIcon(<LockOpenOutlinedIcon sx={{color:'white' ,fontSize:'20px'}}></LockOpenOutlinedIcon>);
    }
    else{
        setIcon(<LockOutlinedIcon sx={{color:'white' ,fontSize:'20px'}}/>);
    }
   }
    return (<div className={Style.SwitchContainer}>
      <Switch
      variant="outlined"
      endDecorator={
        dark ? "View":"Edit"
      }
      sx={{
        '--Switch-thumbSize': '26px', '--Switch-trackWidth': '45px',
        '--Switch-trackHeight': '10px',[`& .${switchClasses.thumb}`]: {
            transition: 'width 0.2s, left 0.2s',
          }
      }}
        color={dark ? 'success' : 'neutral'}  
        slotProps={{ input: { 'aria-label': 'dark mode' },  thumb: {
            children: icon,
          }, }}
       
        checked={dark}
        onChange={(event) => {setDark(event.target.checked) 
        ChangeIcon()}}
        
      />
      </div>
    );
}
export default SwitchContainer;
