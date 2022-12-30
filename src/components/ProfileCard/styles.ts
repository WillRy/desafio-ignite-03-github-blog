import styled from "styled-components";

export const Card = styled.div`
    background: ${(props) => props.theme.profile};
    padding: 32px 40px;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 72px;
`;

export const CardContainer = styled.div`
    display: flex;
    align-items: stretch;
    gap: 32px;
`;

export const Avatar = styled.div`
    width: 148px;
    height: 148px;
    border-radius: 8px;

    flex: 0 0 140px;

    overflow: hidden;

    img {
        display: block;
        max-width: 100%;
        height: 100%;
    }
`;

export const ProfileData = styled.div`
    padding: 10px 0px;
`;

export const ProfileName = styled.h1`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    color: ${(props) => props.theme.title};
    margin-bottom: 8px;
`;

export const ProfileDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 24px;

    color: ${(props) => props.theme.text};
`;

export const ProfileLink = styled.a`
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

export const ProfileTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`;

export const ProfileTagItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;


    font-size: 1rem;

    color: ${props => props.theme.subtitle};


`;
