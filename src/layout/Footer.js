import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Sko from '../assets/img/Ikon_sko.svg';
import BIlogo from '../assets/img/Logo_BI.svg';
import BicepsLogo from '../assets/img/Logo_Biceps.png';
import HeartLogo from '../assets/img/Logo_ActiveHeart.svg';

const Footer = () => (
    <Styled>
        <Container>
            <Row alignItems="center" className="footer-top">
                <Col xs="3" sm="3" md="1" className="sko-image">
                    <img src={Sko} alt="Aktiv" />
                </Col>
                <Col xs="9" sm="9" md="11">
                    <h3>Vær fysisk aktiv</h3>
                    <p>Enhver form for fysisk aktivitet, selv husarbeid, hagearbeid og annen arbeidsrelatert fysisk aktivitet, kan gi helsegevinster og bedre livskvalitet! <br className="no-display-under-767"/>Begynn i det små og velg noe som du liker!</p>
                </Col>
            </Row>
            <Row alignItems="center">
                <Col xs="5" sm="5" md="7" xl="8" className="col-bi-logo">
                    <img src={BIlogo} alt="BI Logo" />
                </Col>
                <Col xs="3" sm="3" md="2" xl="2" className="col-biceps-logo">
                    <img src={BicepsLogo} alt="Biceps Logo" />
                </Col>
                <Col xs="4" sm="4" md="3" xl="2" className="col-heart-logo">
                    <img src={HeartLogo} alt="Active your heart Logo" />
                </Col>
            </Row>
        </Container>
    </Styled>
)

export default Footer;


const Styled = styled.div`
    max-width: 950px;
    margin: 0 auto;
    padding: 50px 0px;
    @media only screen and (min-width: 1600px) {
        max-width: 1200px;
    }
    .footer-top {
        padding-top: 75px;
        padding-bottom: 75px;
        .sko-image {
            @media only screen and (min-width: 768px) {
                padding-right: 0px;
                padding-left: 0px;
            }
        }
        img {
            width: 100%;
        }
        h3 {
            color: ${({theme}) => theme.primaryColor};
            margin-bottom: 10px;
        }
        p {
            max-width: 600px;
            margin-top: 0px;
        }
        @media only screen and (max-width: 767px) {
            align-items: flex-start !important
        }
    }
    .col-bi-logo {
        img {
            max-width: 200px;
        }
    }
    .col-biceps-logo {
        text-align: center;
        img {
            max-width: 75px;
            margin: 0 auto;
        }
    }
    .col-heart-logo {
        text-align: center;
        img {
            width: 150px;
        }
    }
    @media only screen and (max-width: 767px) {
        img {
            max-width: 100% !important;
        }
        align-items: flex-start !important
    }
`
