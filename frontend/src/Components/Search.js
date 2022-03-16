import {alpha} from "@mui/material/styles";
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import theme from "../theme/theme";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";

const styleContainer = {
    position: 'relative',
    borderRadius: 1,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.20),
    },
    marginRight: 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}

const styleIcon = {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const styleInput = {
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        color: "white",
        width: '100%',
        borderRadius: 2,
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}

const Search = () => {
    return (
        <Box sx={{...styleContainer}}>
            <Box sx={{...styleIcon}}>
                <SearchIcon/>
            </Box>
            <TextField
                placeholder="Поиск..."
                inputProps={{'aria-label': 'search'}}
                sx={{...styleInput}}
            />
        </Box>
    );
}

export default Search;






