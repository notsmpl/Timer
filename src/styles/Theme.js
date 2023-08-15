import {  ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
    colors:{
        background: 'black',
        timerNumbers: 'black'
    }
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }
    body{
        height: 100%;
        background-color: #2F4F4F;
    }
   
`
const Theme = ({children}) => {

    return(
        <ThemeProvider theme={theme} >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;

// 