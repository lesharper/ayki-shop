import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../theme/theme";

const Footer = () => {
    return (
        <Box sx={{height: "75px"}} bgcolor={theme.palette.primary.main} display="flex" justifyContent="center" alignItems="center">
            <Typography
                variant="h5"
                color="#fff"
                noWrap
            >
                AYKI
            </Typography>
        </Box>
    );
}

export default Footer;