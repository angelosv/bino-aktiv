import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../../layout';
import Login from './components/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
const Recovery = ({ history, state }) => {
    const loading = useSelector(state => state.auth.loading);
    const authed = useSelector(state => state.auth.authId);
    const uid = localStorage.getItem('user_id')
    return (
        <Layout>
            {authed !== null ? <Redirect to={'/aktivitet'}></Redirect> : ''}
            <Styled>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="6" xl="5">
                            <h1>Passordgjenoppretting</h1>
                            <Login />
                        </Col>

                    </Row>
                </Container>

            </Styled>
        </Layout>
    )
}

export default compose(withRouter)(Recovery);

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
`