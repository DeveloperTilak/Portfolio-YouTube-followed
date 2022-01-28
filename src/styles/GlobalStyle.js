import { createGlobalStyle } from 'styled-components';

const GlobalStyles= createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
:root{
    --dark-bg:#204051;
    --deep-dark:#3B6978;
    --gray-1: #BCB4B4;
    --gray-2: #3c636f;
    --white : white;

}

html{
    background-color: var(--dark-bg);
    font-family: 'Roboto Mono';

}

ul, li{
    list-style:none;
}
a{
    text-decoration:none;
    
}
img, svg{
    width:100%;
    height:100%;
    object-fit:cover;
}
.container{
    max-width:1200px;
    width:90%;
    margin:0 auto;
}

`;

export default GlobalStyles;
