import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from "../../../../redux/actions";

const Users = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.users.loading);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const AllUsersRaw = useSelector(state => state.users.users);
    const AllUsers = AllUsersRaw && AllUsersRaw.filter(f => !f.isDeleted);

    if (loading) {
        return (
            <Loader
                className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
            />
        )
    }

    return (
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
    )
}

export default Users;