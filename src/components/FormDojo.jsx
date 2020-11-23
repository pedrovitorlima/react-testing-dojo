import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import './FormDojo.css';
import { TextField, Select, MenuItem, InputLabel, ButtonGroup, Box } from '@material-ui/core';

const FormDojo = () => {

    const [ name, setName ] = useState('');
    const [ role, setRole ] = useState('Dev');
    const [ grad, setGrad ] = useState('Graduate');   
    
    let [ overview, setOverview ] = useState();

    const showOverview = () => {
        if (name != '') {
            setOverview(`Name is ${name}, role is ${role} and grad is ${grad}`);
        } else {
            setOverview(`Name is mandatory.`);
        }

        console.log(overview);
    }

    return(
        <Box m='auto'>
            <TextField 
                id='txt_name' 
                label='Name' 
                onChange={(e) => {setName(e.target.value)}} 
                inputProps={{ "data-testid": "form-name" }}></TextField>
        
            <InputLabel id='role'>Role</InputLabel>
            <Select labelId='role' onChange={(e) => {setRole(e.target.value)}} value='Dev' inputProps={{ "data-testid": "form-role" }}>
                <MenuItem value='Dev'>Dev</MenuItem>
                <MenuItem value='QA'>QA</MenuItem>
                <MenuItem value='BA'>BA</MenuItem>
                <MenuItem value='PM'>PM</MenuItem>
                <MenuItem value='TL'>TL</MenuItem>
            </Select>
        
            <FormLabel component="legend">Grad</FormLabel>
            <RadioGroup
                aria-label="grad" 
                name="grad" 
                onChange={(e) => {setGrad(e.target.value)}}>
                    <FormControlLabel value="Graduate" control={<Radio />} label="Graduate" />
                    <FormControlLabel value="Consultant" control={<Radio />} label="Consultant" />
                    <FormControlLabel value="Senior" control={<Radio />} label="Senior" />
                    <FormControlLabel value="Lead" control={<Radio />} label="Lead" />
                    <FormControlLabel value="Principal" control={<Radio inputProps={{ "data-testid": "form-rad-principal" }} id='radio'/>} label="Principal"/>
            </RadioGroup>
            
            <ButtonGroup color='primary'>
                <Button onClick={showOverview}>Submit</Button>
                <Button>Clear</Button>
            </ButtonGroup>

            <div data-testid='form-message'>
                {overview ? <p>{overview}</p> : null}
            </div>
        </Box>
    );

};

export default FormDojo;