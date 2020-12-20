import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const styledTheme = {
    primaryColor: '#58C0B5',
    secondaryColor: '#EF374D',
    textColor: '#444444',
}

const Layout = ({ children }) => (
    <ThemeProvider theme={styledTheme} >
        <BaseCSS />
        <Styled>
            <Header />
            <div className="content-container">
                {children}
            </div>
            <Footer />
        </Styled>
    </ThemeProvider>
);

export default Layout;

const Styled = styled.div`
.toast-dialog-container {
  z-index: 9999;
  position: absolute;
  left: 1%;
  top: 1%;
}
.loader{
   // background-color:rgb(0 0 0 / 10%);
    left: 0;
    top: 0;
    width: 101%;
    height: 100%;
    position: absolute;
    z-index:10;
    svg{
        position:absolute;
        left:50%;
        top:50%;
    }
}
    white-space: pre-wrap;
   // max-width: 1440px;
    margin: 0 auto;
    .content-container {
        max-width: 900px;
        margin: 0 auto;
    }
    h1,h2,h3,h4,h5,h6 {
        margin-top: 0px;
    }
    h1 {
        font-size: 28px;
        color: ${({ theme }) => theme.primaryColor};
    }
    h2 {
        font-size: 18px;
        color: ${({ theme }) => theme.primaryColor};
    }
    p {
        font-size: 16px;
        line-height: 1.5;
        margin-top: 0px;
        color: ${({ theme }) => theme.textColor};
    }
    input, select {
        display: block;
        color: ${({ theme }) => theme.textColor};
        border: 2px solid ${({ theme }) => theme.secondaryColor};
        width: 100%;
        border-radius: 10px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
        margin-top: 15px;
        margin-bottom: 5px;
        max-width: 300px;
        text-align-last:center;
        &:focus {
            border: 2px solid ${({ theme }) => theme.secondaryColor};
            outline: none;
        }
        @media only screen and (max-width: 575px) {
            max-width: 100%
        }
    }
    label {
        font-size: 20px;
        display: block;
        color: ${({ theme }) => theme.primaryColor};
        font-weight: 700;
        padding-top: 15px;
    }
    .input-error-field {
        border: 1px solid red;
        &:focus {
            border: 1px solid red;
        }
    }
    .input-error-text {
        color: red;
        display: block;
        padding-bottom: 10px;
    }
    .img-wrapper {
        img {
            max-width: 100%;
            margin: 0 auto;
        }
    }
    .c-green {
        color: ${({ theme }) => theme.primaryColor};
    }
    .c-red {
        color: ${({ theme }) => theme.secondaryColor};
    }
    @media only screen and (max-width: 767px) {
        .no-display-under-767 {
            display: none !important;
        },
        p, a {
            font-size: 14px;
        }
    }
    @media only screen and (max-width: 575px) {
        h1 {
            font-size: 24px;
        }
        input {
            font-size: 18px;
        }
    }
`