/* eslint-disable no-unused-vars */
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from './utils/Constants'
import { Padding } from '@mui/icons-material';
import SearchBar from './SearchBar';
const Navbar = () => (
  <div>
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'left'}}>
         <img src={logo} alt="logo" height="45px" width='100px'/>
      </Link>
      <SearchBar/>
    </Stack>

  </div>
);

export default Navbar