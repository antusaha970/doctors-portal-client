import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MenuStack = styled(Stack)(({ theme }) => ({
    margin:'auto',
    justifyContent:'space-between',
    padding: '20px 0'
}));

const MenuLink = styled(Typography)(({ theme }) => ({
    textDecoration: 'none',
    fontWeight : '600',
}))

const NavLinks = () => {
    return (
        <Box>
            <MenuStack direction={{xs:'column',sm:'column',md:'row'}} >
                <MenuLink variant="p" component='a' href="#Home">Home</MenuLink>
                <MenuLink variant="p" component='a' href="#About">About</MenuLink>
                <MenuLink variant="p" component='a' href="#Dental">Dental Services</MenuLink>
                <MenuLink variant="p" component='a' href="#Review">Reviews</MenuLink>
                <MenuLink variant="p" component='a' href="#Blog">Blog</MenuLink>
                <MenuLink variant="p" component='a' href="#Contact">Contact us</MenuLink>
            </MenuStack>
        </Box>
    );
};

export default NavLinks;