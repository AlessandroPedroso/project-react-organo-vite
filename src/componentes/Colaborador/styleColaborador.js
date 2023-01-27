import styled from "styled-components";

export const ColaboradorStyle = styled.div`
        
        width: 280px;

`

export const ColaboradorCabecalho = styled.div`

    background-color:  ${props => props.corDeFundo};
    border-radius: 10px 10px 0px 0px;

`

export const IMG = styled.img`

    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;

`

export const Rodape = styled.div`

    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;

`
export const H4 = styled.h4 `
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const H5 = styled.h5`

    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;

`