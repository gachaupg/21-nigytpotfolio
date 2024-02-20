import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <img className='h-16 object-contain ' src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
            </Typography>
            <Divider />
            <List>
                <div className=' gap-4 text-xl flex flex-col pt-7'>
                    <NavLink exact to="/" activeClassName="active" className="text-black">
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName="active" className='text-black'>
                        About
                    </NavLink>
                    <NavLink to='/sustainability' activeClassName="active" className='text-black'>
                                Sustainability
                            </NavLink>
                            <NavLink to='/services' activeClassName="active" className='text-black'>
                                Services
                            </NavLink>
                    <NavLink to='/projects' activeClassName="active" className='text-black'>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activeClassName="active" className='text-black'>
                        Contact
                    </NavLink>
                </div>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className='bg-slate-100 navbar' component="nav">
                <div className='flex items-center justify-between p-1'>
                    <div className='flex items-center justify-between w-full mr'>
                        <div className='logo'>
                            <Link to='/'>
                                <img className='h-12  object-contain ' src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
                            </Link>
                        </div>
                        <div>
                            
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <MenuIcon className='menu text-4xl text-red-600' />
                            </IconButton>
                            {/* <div > */}
                        </div>


                    </div>
                    <div>
                        <div className='lg:flex md:flex items-center gap-9 text-xl nav-none mr-12'>
                            <NavLink exact to="/" activeClassName="active" className="text-black">
                                Home
                            </NavLink>
                            <NavLink to='/about' activeClassName="active" className='text-black'>
                                About
                            </NavLink>
                            <NavLink to='/sustainability' activeClassName="active" className='text-black'>
                                Sustainability
                            </NavLink>
                            <NavLink to='/services' activeClassName="active" className='text-black'>
                                Services
                            </NavLink>
                            {/* <NavLink to='/blog' activeClassName="active" className='text-black'>
                                Blog
                            </NavLink> */}
                            <NavLink to='/projects' activeClassName="active" className='text-black'>
                                Projects
                            </NavLink>
                            <NavLink to='/contact' activeClassName="active" className='text-white h-10 w-20 p-1 pl-1 rounded-lg bg-orange-900 w'>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    {/* </div> */}
                    {/* <div className='flex ml-3 pl-3 items-center '>
                        <input className='flex border items-center search border-slate-500 rounded-lg bg-slate-400 h-10  w-80 relative' placeholder='search ...' type="text" />
                        <Search className='absolute' />
                    </div> */}
                </div>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;