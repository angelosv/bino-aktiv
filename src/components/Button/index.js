import React from 'react';
import styled from 'styled-components';

const Button = ({ children, type, action }) => {
    return (
        <Styled>
            <button type={type} onClick={action}>
                {children}
            </button>
        </Styled>
    );
}

export default Button;

const Styled = styled.div`
    button {
        background: ${({ theme }) => theme.secondaryColor};
        color: white;
        display: block;
        font-size: 16px;
        font-weight: 700;
        padding: 12px 35px;
        border-radius: 10px;
        border: none;
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
        @media only screen and (max-width: 575px) {
            font-size: 18px;
            padding: 12 24px;
        }
    }
`
