import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const CustomSpan = styled(Typography, {})`
    font-size: ${(props) => props.customSize};
    color:red;
    & a{
        text-decoration: none;
        color: goldenrod;
    }
`;

export const BoxTopContainer = styled(Box,{})`
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