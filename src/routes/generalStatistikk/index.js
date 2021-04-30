import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers } from "../../redux/actions";

import Layout from '../../layout';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const GeneralStatistikk = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const AllUsers = useSelector(state => state.users.users);

    return (
        <Layout>
            {loading ? <Loader className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}

            /> : ''}

            <Styled>
                <Container>
                    <Row>
                        <Col xs="6" sm="6">
                            <h2>Kompani Lorentzen</h2>
                            {AllUsers && AllUsers.filter(f => f.team === "4").map((user) => (
                                user.name ? (
                                    <p>{user.name} {user.surname}</p>
                                ) : (
                                    <p>{user.email}</p>
                                )
                            ))}
                        </Col>
                        <Col xs="6" sm="6">
                            <h2>Acitivitas & Festivitas</h2>
                            {AllUsers && AllUsers.filter(f => f.team === "2").map((user) => (
                                user.name ? (
                                    <p>{user.name} {user.surname}</p>
                                ) : (
                                    <p>{user.email}</p>
                                )
                            ))}
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 25 }}>
                        <Col xs="6" sm="6">
                            <h2>71 grader BINOs</h2>
                            {AllUsers && AllUsers.filter(f => f.team === "1").map((user) => (
                                user.name ? (
                                    <p>{user.name} {user.surname}</p>
                                ) : (
                                    <p>{user.email}</p>
                                )
                            ))}
                        </Col>
                        <Col xs="6" sm="6">
                            <h2>BINO Marines</h2>
                            {AllUsers && AllUsers.filter(f => f.team === "3").map((user) => (
                                user.name ? (
                                    <p>{user.name} {user.surname}</p>
                                ) : (
                                    <p>{user.email}</p>
                                )
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Styled>
        </Layout>
    )
}

export default GeneralStatistikk;

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