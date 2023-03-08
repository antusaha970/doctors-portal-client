import { Container, Typography, Box, TextField, FormControl, Button } from '@mui/material';
import React from 'react';
import { useRef } from 'react';

const ContactUs = () => {

    const emailRef = useRef();
    const subRef = useRef();
    const messageRef = useRef();


    const handleSendMail = (e) => {
        e.preventDefault();
        const massageForSend = {
            email: emailRef.current.value,
            subject: subRef.current.value,
            messageRef: messageRef.current.value
        }
        fetch('http://localhost:5000/sendMail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(massageForSend)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                emailRef.current.value = '';
                subRef.current.value = '';
                messageRef.current.value = '';
                alert('Thank you for connecting us! \nWe will get back to you as soon as possible.');
            }
            else{
                alert('Something went wrong. Please try again.');
            }
        })
    }

    return (
        <Container maxWidth="lg" id="Contact">
            <Box my={3}>
                <Typography variant='h6' textAlign="center" color="#5FC7C7" fontWeight="bold">
                    CONTACT US
                </Typography>
                <Typography variant='h2' textAlign="center">
                    Always connect with us
                </Typography>
            </Box>
            <Box>
                <form onSubmit={handleSendMail}>
                    <FormControl fullWidth>
                        <TextField label='Enter your email' name="email" inputRef={emailRef} required type="email" />
                        <br />
                        <TextField label='Write Subject' inputRef={subRef} name="subject" required />
                        <br />
                        <TextField label='Your Message Here' multiline name="message"
                            rows={4} required inputRef={messageRef} />
                        <br />
                    </FormControl>
                    <Button type='submit' variant="contained" size='large'>Submit</Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactUs;