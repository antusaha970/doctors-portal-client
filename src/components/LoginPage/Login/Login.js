import { Box, Button, Container, FormControl, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Image, LoginToggle } from '../../../Styles/AllStyles';
import loginImg from '../../../images/login.png';

const Login = () => {
    const [isNewUser, setIsNewUser] = useState(true);
    return (

        <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} whiteSpace={1} my={3} justifyContent="center" alignItems="center">
                <Box flex={1}>
                    <Image src={loginImg} alt="login" height="400px" />
                </Box>
                <Box flex={1}>
                    <Typography variant="h4" textAlign="center">
                        Login
                    </Typography>
                    <form>
                        <FormControl fullWidth>
                            {isNewUser && <TextField label="Your Name" margin="normal" name="name" type="text" required />}
                            <TextField label="Your email address" id="margin-normal" name="email" type="email" margin="normal" required />
                            <TextField label="Password" id="margin-normal" margin="normal" name="password" type="password" required />
                            <Button type="submit" variant="contained">Sign Up</Button>
                        </FormControl>
                    </form>
                    <hr />
                    {
                        isNewUser ? <LoginToggle color="#FDA006" textAlign="center" py={2} cursor="pointer" onClick={() => setIsNewUser(false)}>
                            Already have an account? Sing in
                        </LoginToggle> : <LoginToggle color="#FDA006" textAlign="center" py={2} cursor="pointer" onClick={() => setIsNewUser(true)}>
                            Create an account
                        </LoginToggle>
                    }
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;