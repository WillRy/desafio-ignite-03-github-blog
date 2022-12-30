import styled from "styled-components";
import backgroundImage from '../../assets/capa.svg'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 66px 0px 134px 0;

    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
