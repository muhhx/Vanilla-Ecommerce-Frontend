import { createGlobalStyle } from "styled-components";
import DiotRegular from "../assets/DidotRegular.ttf";

interface Props {
  isOpen?: boolean;
  bgColor?: string;
}

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Diot;
        src: url(${DiotRegular});
    }

    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    :link {
        text-decoration: none;
        color: initial;
    }

    body {
        font-weight: 400;
        font-family: 'Jost', sans-serif;
        overflow: ${(props: Props) =>
          props.isOpen === true ? "hidden" : "initial"}
    }

    /* ::-webkit-scrollbar {
        height: 8px;
        width: 0px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: orange;
    } */
    input[type=range] {
        -webkit-appearance: none;
        background-color: ${(props: Props) => props.bgColor};
        height: 1px;
        padding: 0px 10px;
        width: 100px;
        margin-top: 5px;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: ${(props: Props) => props.bgColor};
    }
`;
