import React, {useState} from 'react';
import {Drawer, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(true)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    return (
            <Stack spacing={2} direction="row" sx={{flexGrow: 10}}>
                <Button variant="outlined" size="large" color="inherit" disableRipple={true} onMouseEnter={openMenu}>Новинки</Button>
                <Button variant="outlined" size="large" color="inherit" disableRipple={true} onMouseEnter={openMenu}>Для него</Button>
                <Button variant="outlined" size="large" color="inherit" disableRipple={true} onMouseEnter={openMenu}>Для неё</Button>
                <Drawer
                    anchor={"bottom"}
                    open={open}
                    onClose={closeMenu}
                >
                    <Box sx={{height: "350px"}} onMouseLeave={closeMenu}>
                    </Box>
                </Drawer>
            </Stack>
    );
}

export default Navbar;