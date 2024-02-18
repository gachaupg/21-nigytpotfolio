import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Search } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Blog', 'Projects', 'Contact'];

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
                <img className='h-14  object-contain ' src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className='bg-slate-100 navbar' component="nav">
                <div className='flex items-center justify-between p-1'>
                    <div>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <div > */}
                        <Link to='/'>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                <img className='h-14  object-contain ' src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
                            </Typography>
                        </Link>
                    </div>
                    <div>
                        <div className='lg:flex md:flex gap-4 text-xl nav-none'>
                            <NavLink exact to="/" activeClassName="active" className="text-black">
                                Home
                            </NavLink>
                            <NavLink to='/about' activeClassName="active" className='text-black'>
                                About
                            </NavLink>
                            <NavLink to='/blog' activeClassName="active" className='text-black'>
                                Blog
                            </NavLink>
                            <NavLink to='/projects' activeClassName="active" className='text-black'>
                                Projects
                            </NavLink>
                            <NavLink to='/contact' activeClassName="active" className='text-black'>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    {/* </div> */}
                    <div className='flex ml-3 pl-3 items-center '>
                        <input className='flex border items-center search border-slate-400 rounded-lg bg-slate-300 h-10  w-80 relative' type="text" />
                        <Search className='absolute' />
                    </div>


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