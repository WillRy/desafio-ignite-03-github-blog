import styled from "styled-components";

interface LoadingContainerProps {
    padding: string;
}
export const LoadingContainer = styled.div<LoadingContainerProps>`
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: ${(props) => props.padding};

    /* svg {
        height: ${(props) => props.padding};
        width: ${(props) => props.padding};
    } */

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: rotating 2s linear infinite;
    }


`;
