import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {

    const { control } = useFormContext();
    const isError = false;
    /*
        return (
            <Grid item xs={12} sm={6}>
                <Controller
                    render={({ field }) => (
                        <TextField
                            fullWidth
                            name={name}
                            label={label}
                            required
                        />
                    )}
                    as={TextField}
                    control={control}
                    fullWidth
                    name={name}
                    label={label}
                />
            </Grid>
        );
        */

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth
                required
                error={isError}
            />
        </Grid>
    )
}

export default FormInput;
