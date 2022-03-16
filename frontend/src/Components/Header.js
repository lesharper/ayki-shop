import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AnimationModal from "./AnimationModal";
import AccountMenu from "./AccountMenu";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{height: "75px"}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, m: 5, display: {xs: 'none', sm: 'block'}}}
                    >
                        AYKI
                    </Typography>
                    <Navbar/>
                    <Search/>
                    <AnimationModal/>
                    <AccountMenu/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;