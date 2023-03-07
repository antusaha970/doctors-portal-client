import { Container, Typography, Box, TextField, FormControl, Button } from '@mui/material';
import React from 'react';

const ContactUs = () => {
    return (
        <Container maxWidth="lg">
            <Box my={3}>
                <Typography variant='h6' textAlign="center" color="#5FC7C7" fontWeight="bold">
                    CONTACT US
                </Typography>
                <Typography variant='h2' textAlign="center">
                    Always connect with us
                </Typography>
            </Box>
            <Box>
                <form>
                    <FormControl fullWidth>
                        <TextField label='Enter your email' required  type="email"  />
                        <br />
                        <TextField label='Write Subject' required />
                        <br />
                        <TextField label='Your Message Here' multiline
                            rows={4} required />
                            <br />
                    </FormControl>
                        <Button type='submit' variant="contained" size='large'>Submit</Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactUs;