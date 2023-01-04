import React from 'react'
import { Box, Grid, FormControl, Select, MenuItem, OutlinedInput, Autocomplete, TextField } from '@mui/material'


function Dropdown_all() {

    const [data, setData] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setData(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [data1, setData1] = React.useState([]);

    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setData1(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const data2 = [
        { label: 'aksdg' },
        { label: 'lwtorq'},
        { label: 'zvb,vx'},
        { label: 'lwtorq'},
        { label: 'idpvh'},
        { label: 'xqdwc'},
        { label: 'bvyfg'},
      ];

    return (
        <>
            <Box className='m-3'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                        <FormControl className='text-left sel-dd font-12-16' fullWidth>
                            <Select
                                // multiple
                                displayEmpty
                                value={data}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <>Single select dropdown</>;
                                    }

                                    return selected.join(', ');
                                }}
                                // MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="font-12-16"
                            >
                                <MenuItem className='sel-menu font-12-16' value={'Data 1'} >Data 1</MenuItem>
                                <MenuItem className='sel-menu font-12-16' value={'Data 2'} >Data 2</MenuItem>
                                <MenuItem className='sel-menu font-12-16' value={'Data 3'} >Data 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                        <FormControl className='text-left sel-dd font-12-16' fullWidth>
                            <Select
                                multiple
                                displayEmpty
                                value={data1}
                                onChange={handleChange1}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <>Multiple select dropdown</>;
                                    }

                                    return selected.join(', ');
                                }}
                                // MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="font-12-16"
                            >
                                <MenuItem className='sel-menu font-12-16' value={'Data 1'} >Data 1</MenuItem>
                                <MenuItem className='sel-menu font-12-16' value={'Data 2'} >Data 2</MenuItem>
                                <MenuItem className='sel-menu font-12-16' value={'Data 3'} >Data 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                        <FormControl className='text-left sel-dd font-12-16' fullWidth>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                className="font-12-16"
                                options={data2}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Search select" />}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dropdown_all