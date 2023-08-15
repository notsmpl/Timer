import { styled } from "styled-components";

 const InputGroup = styled.div`
    padding:25px;
    display:flex;
    box-sizing: border-box;
    background-color: #FFFACD;
    border: 6px solid #F0E68C;
    border-radius: 25px;
`

 const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #FFFACD;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`


export {
    InputGroup,
    Input
}