import React from 'react';
import Button from '@material-ui/core/Button';
import './FormDojo.css';

const FormDojo = () => {

    return(
        <div class='center'> 
            <div className='form-item'>
                <label for='txt_name'>Name</label>
                <input type='text' name='txt_name'></input>
            </div>

            <div>
                <label for='slt_role'>Role</label>
                <select name='slt_role'>
                    <option>Dev</option>
                    <option>QA</option>
                    <option>BA</option>
                    <option>PM</option>
                    <option>TL</option>
                </select>
            </div>
            
            <div>
                <label for='slt_grade'>Graduate</label>
                <input type='radio' name='slt_grade' value='slt_grade' />
                <label for='slt_grade'>Consultant</label>
                <input type='radio' name='slt_grade' name='slt_grade' />
                <label for='slt_grade'>Senior</label>
                <input type='radio' name='slt_grade' name='slt_grade' />
                <label for='slt_grade'>Lead</label>
                <input type='radio' name='slt_grade' name='slt_grade' />
                <label for='slt_grade'>Principal</label>
                <input type='radio' name='slt_grade' name='slt_grade' />
            </div>

            <Button variant="contained" color="primary">Submit</Button>
        </div>
    );

};

export default FormDojo;