import styled from "styled-components";

export const SectionTime = styled.section`

    text-align:center;
    padding: 32px;
    background-color: ${props => props.corSecundaria};
    

`
export const DivColaboradores = styled.div`

    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    margin: 38px auto;

`

export const H3 = styled.h2`

    font-weight: 400;
    font-size: 32px;
    line-height: 43px;
    color: #212121;
    border-bottom:4px solid;
    border-color: ${props => props.corPrimaria};
    display:inline-block;
    padding-bottom: 10px;

`

