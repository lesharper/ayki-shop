import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import man_img from "../images/manbtn.jpg";
import Typography from "@mui/material/Typography";
import woman_img from "../images/womanbtn.jpg";
import {Container} from "@mui/material";

const RedirectBanner = () => {
    return (
        <Container sx={{display:"flex", justifyContent:"center"}} maxWidth="xl">
            <Button variant="contained" sx={{height: "500px", width: "500px", m:5, borderRadius: 2}}>
                <Box component={"img"} src={man_img} sx={{objectFit:"cover", width: "500px", borderRadius: 2, opacity: "0.4"}}/>
                <Typography
                    variant="h5"
                    color="#fff"
                    noWrap
                    position="absolute"
                >
                    ДЛЯ НЕГО
                </Typography>
            </Button>
            <Button variant="contained"  sx={{height: "500px", width: "500px", m:5, borderRadius: 2 }}>
                <Box component={"img"} src={woman_img} sx={{objectFit:"cover", width: "500px", borderRadius: 2, opacity: "0.4"}}/>
                <Typography
                    variant="h5"
                    color="#fff"
                    noWrap
                    position="absolute"
                >
                    ДЛЯ НЕЕ
                </Typography>
            </Button>
        </Container>
    );
}

export default RedirectBanner;