import React from 'react';
import Box from "@mui/material/Box";
import Poster from "../images/clothes.png"
import Typography from "@mui/material/Typography";

const Billboard = () => {
    return (
       <Box display={"flex"} alignItems={"center"} sx={{bgcolor:"#ffd700",height: "75vh"}}>
           <Box component={"div"} sx={{flexGrow:2}}>
               <Typography
                   component={"h2"}
                   variant={"h3"}
                   textAlign={"center"}
               >
                   Совершенство в мелочах
               </Typography>
               <Typography
                   component={"h2"}
                   variant={"h4"}
                   textAlign={"center"}
               >
                   С нами вы сможете взглянуть на себя по-новому.
               </Typography>
           </Box>
           <Box component={"img"} src={Poster} sx={{objectFit:"cover", flexGrow:1, width: "150px"}}/>
       </Box>
    );
}

export default Billboard;