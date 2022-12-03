import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
     
    html {
        /* font-size: 100%; */ // 100% - 16px // 1.8988rem -> 30px
        font-size: 62.5%;  // 62.5% - 10px // 1.6rem -> 30px
    }

    body {
        height: 300vh;
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 10px;
        background-color: #ffffff6d;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #3a3a3a;
        border-radius: 8px;
        
    }

`


export { GlobalStyles }