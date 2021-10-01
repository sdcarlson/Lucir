import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';


const AddressForm = ({ checkoutToken, next }) => {

    const methods = useForm();
    const shippingCountry = "US";

    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));

    const fetchSubdivisions = async (shippingCountry) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(shippingCountry);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[5]);
    }

    useEffect(() => {
        fetchSubdivisions(shippingCountry)

    }, [])

    return (
        <>
            <Typography variant="h6" gutterBottom >Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => {
                    next({ ...data, shippingCountry, shippingSubdivision });

                })}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInput name='email' label='E-mail' />
                        <FormInput name='address1' label='Address' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP / Postal code' />


                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping State</InputLabel>
                        <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id} >
                                    {subdivision.label}
                                </MenuItem>
                            ))}

                        </Select>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">Back to cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>

                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm;
