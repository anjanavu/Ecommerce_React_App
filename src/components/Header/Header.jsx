import React from 'react';
import { AppBar, Container, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ecommerce
          </Typography>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleCloseNavMenu}>
             <Link to='/logout' style={{ textDecoration: 'none',color:"black"}}><ExitToAppIcon sx={{ mr: 1 }} />
              Logout</Link> 
            </MenuItem>
          </Menu>

          {/* Logout icon always visible in the right end of the navbar */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => {
              // Handle logout logic here
            }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/logout' style={{ textDecoration: 'none',color:'white'}}> <ExitToAppIcon /></Link>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
