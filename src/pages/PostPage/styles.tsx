import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    max-width: calc(824px + 2rem);
    padding: 0px 1rem;
    margin: -80px auto 0 auto;
`;

export const PostInfo = styled.div`
    background: ${(props) => props.theme.profile};
    padding: 32px;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const PostInfoNavigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const PostInfoTitle = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;

    color: ${(props) => props.theme.title};
    margin-bottom: 8px;
`;

export const CardContainer = styled.div`
    display: flex;
    align-items: stretch;
    gap: 32px;
`;

export const PostInfoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 700;
    font-size: 0.875rem;

    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    cursor: pointer;

    /* Brand/Blue */

    color: ${(props) => props.theme.blue};

    svg {
        color: ${(props) => props.theme.blue};
    }

    &:hover {
        border-bottom: 1px solid #3294f8;
    }
`;

export const PostInfoExternalLink = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 700;
    font-size: 0.875rem;

    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    cursor: pointer;

    /* Brand/Blue */

    color: ${(props) => props.theme.blue};

    svg {
        color: ${(props) => props.theme.blue};
    }

    &:hover {
        border-bottom: 1px solid #3294f8;
    }
`;

export const PostTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`;

export const PostTagItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 160%;

    font-size: 1rem;

    color: ${(props) => props.theme.span};
`;

export const PostBody = styled.div`
    padding: 40px 32px;

    p {
        margin-bottom: 24px;
        font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {

        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
        /* or 26px */

        text-decoration-line: underline;

        /* Brand/Blue */

        color: ${props => props.theme.blue};
    }
`;
