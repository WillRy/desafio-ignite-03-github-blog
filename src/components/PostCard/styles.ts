import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
    text-decoration: none;
    background: ${(props) => props.theme.post};
    border-radius: 10px;
    padding: 32px;
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border: 2px solid ${(props) => props.theme.label};
    }
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 16px;
`;

export const CardTitle = styled.h2`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6;

    color: ${(props) => props.theme.title};
`;

export const CardPublishedAt = styled.span`
    font-size: 0.875rem;
    line-height: 1.6;
    white-space: nowrap;

    color: ${(props) => props.theme.span};
`;

export const CardPreview = styled.div`
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.text};
`;
