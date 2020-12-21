import React, { useEffect } from 'react';
import styled from 'styled-components';

import LogoBA from '../assets/img/Logo_BinoAktiv.svg';
import Menu from '../components/Menu';

const Header = () => {
    return (
        <Styled>
            <div className="bg-red" />
            <div className="bg-green" />
            <img src={LogoBA} className="img-logo-ba" alt="header-background" />
            <Menu />
        </Styled>
    );
};

export default Header;

const Styled = styled.div`
    position: relative;
    height: 400px;
    margin-bottom: 50px;
    .bg-green {
        width: 100%;
        height: 100%;
        border-radius: 0 0 0 100%;
        background-color: ${ ({ theme }) => theme.primaryColor };
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .bg-red {
        width: 40%;
        height: 75%;
        border-radius: 0 0 100% 0;
        background-color: ${ ({ theme }) => theme.secondaryColor };
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .img-logo-ba {
        position: absolute;
        max-width: 300px;
        right: 100px;
        top: 70px;
        @media only screen and (max-width: 767px) {
            right: 50px;
        }
    }
    @media only screen and (max-width: 575px) {
        height: 250px;
        .img-logo-ba {
            max-width: 50%;
            right: 25px;
            top: 25px;
        }
    }


`
