import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type HeaderProps = {
    searchHandler: () => void;
};

const Header: React.FC<HeaderProps> = ({ searchHandler }): JSX.Element => (
    <Box
        component="form"
        className="search-panel"
        noValidate
        autoComplete="off"
    >
        <TextField label="Enter the text" variant="outlined" className="search-field"/>
        <Button variant="contained" onClick={searchHandler}>Search</Button>
    </Box>
);

export default Header;
