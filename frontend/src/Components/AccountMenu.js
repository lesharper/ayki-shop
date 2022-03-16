import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { ShoppingBagOutlined, StarOutlineRounded } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Avatar/>
                    </ListItemIcon>
                    <Typography
                        variant="span"
                        fontSize="large"
                        sx = {{m:1}}
                    >
                        Профиль
                    </Typography>

                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <StarOutlineRounded/>
                    </ListItemIcon>
                    <Typography
                        variant="span"
                        fontSize="large"
                        sx = {{m:1}}
                    >
                        Избранные
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ShoppingBagOutlined/>
                    </ListItemIcon>
                    <Typography
                        variant="span"
                        fontSize="large"
                        sx = {{m:1}}
                    >
                        Корзина
                    </Typography>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    <Typography
                        variant="span"
                        fontSize="large"
                        sx = {{m:1}}
                    >
                        Выйти
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
}
export default AccountMenu;