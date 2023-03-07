import styled from "@emotion/styled";
import { Box, ListItemText, Stack, Typography } from "@mui/material";

export const CustomSpan = styled(Typography, {})`
    font-size: ${(props) => props.customSize};
    color:red;
    & a{
        text-decoration: none;
        color: goldenrod;
    }
`;

export const BoxTopContainer = styled(Box, {})`
    width: 100%;
    height: 189px;
    color: white;
    background: ${(props) => props.bgcolor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & p{
        font-size: 30px;
        color:#fff;
    }
`;

export const BoxTopStack = styled(Stack, {})`
    margin: 20px 0;
`;

export const Image = styled('img', {})`
    height: ${(props) => props.height};
`;

export const ServiceContainer = styled(Box, {})`
    text-align: center;
    margin-bottom: 20px;
    padding:10px;
    &:hover{
        -webkit-box-shadow: 4px 3px 10px 5px #dddddd;
        -moz-box-shadow: 4px 3px 10px 5px #dddddd;
        box-shadow: 4px 3px 10px 5px #dddddd;
        border-radius: 10px;
    }
`;

export const ServiceStack = styled(Stack)`
    margin: 40px 0;
`;


export const TestimonialBox = styled(Box)`
    -webkit-box-shadow: 3px 3px 1.5px -0.5px #ddd;
    -moz-box-shadow: 3px 3px 1.5px -0.5px #ddd;
    box-shadow: 3px 3px 1.5px -0.5px #ddd;
    padding: 15px;
    text-align: center;
`;