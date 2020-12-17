import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../../layout';
import Login from './components/Login';

const Home = ({ history, state }) => {

    return (
        <Layout>
            {useSelector(state => state.auth.authId) !== null ? <Redirect to={'/aktivitet'}></Redirect> : ''}
            <Styled>
                <Container>
                    <Row>
                        <Col>
                            <h2>Kom i form med BINO AKTIV!</h2>
                            <p>BINO AKTIV er en konkurranse med den målsetting å motivere BINO ansatte til å bli mer aktive, gjennom å stimulere konkurranseinstinktet, øke teamfølelsen, samt inspirere hverandre i hverdagen.</p>
                            <p>4 lag konkurrerer om den gjeve tittelen, det laget som har vært mest aktiv etter endt måned vinner. Hver måned starter en ny konkurranse og nye muligheter for hvert lag. Let’s get started!</p>
                            <div className="aktiv-list">
                                <p><span>A</span>ktivitet</p>
                                <p><span>K</span>onkurranse</p>
                                <p><span>T</span>eam</p>
                                <p><span>I</span>nspirasjon</p>
                                <p><span>V</span>i kan!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="12" md="6" xl="5">
                            <h1>Logg inn</h1>
                            <Login />
                        </Col>
                    </Row>
                </Container>

            </Styled>
        </Layout>
    )
}

export default compose(withRouter)(Home);

const Styled = styled.div`
    .aktiv-list {
        padding-top: 10px;
        padding-bottom: 10px;
        p {
            margin-top: 0px;
            margin-bottom: 5px;
            font-weight: 700;
            font-size: 18px;
            color: ${({ theme }) => theme.primaryColor};
        }
        span {
            color: ${({ theme }) => theme.secondaryColor};
        }
    }
    h1 {
        margin-top: 25px;
    }
    h2 {
        font-size: 28px;
    }
    button {
        margin-top: 35px;
        margin-bottom: 25px;
    }
    .forgot-password {
        font-size: 14px;
        font-weight: 700;
        color: ${({ theme }) => theme.primaryColor};
        display: block;
    }
`