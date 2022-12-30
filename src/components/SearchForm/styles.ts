import styled from "styled-components";

export const FormContainer = styled.form`
    margin-bottom: 48px;


    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    label {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.6;
        color: ${(props) => props.theme.subtitle};
        margin-bottom: 12px;
    }

    span {
        font-size: 0.875rem;
        line-height: 1.6;

        color: ${(props) => props.theme.span};
    }

    input {
        width: 100%;
        height: 50px;
        padding: 12px 16px;

        background: ${(props) => props.theme.input};
        color: ${(props) => props.theme.text};
        /* Base/Border */

        border: 1px solid ${(props) => props.theme.border};
        border-radius: 6px;

        &:placeholder {
            color: ${(props) => props.theme.label};
        }
    }
`;
