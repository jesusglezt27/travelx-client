import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context/auth.context';

const Navbar = () => {
  const {user} = useContext(AuthContext)
  return (
    <AppBar position="static" style={{ backgroundColor: '#1f1f1f' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Tripi</Button>
        </Link>
        <nav style={{ marginLeft: 'auto' }}>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
        {!user? <>
          <li style={{ marginRight: '1rem' }}>
              <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
                Sign up
              </Link>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
          </> :
            <li>
              <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>
                Profile
              </Link>
            </li>}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

