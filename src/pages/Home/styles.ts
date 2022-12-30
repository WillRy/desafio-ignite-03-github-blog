import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    max-width: calc(824px + 2rem);
    padding: 0px 1rem;
    margin: -80px auto 0 auto;
`;

export const BlogContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
    gap: 32px;
    margin-bottom: 234px;
`
