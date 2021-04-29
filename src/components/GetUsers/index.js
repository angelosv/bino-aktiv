import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import Loader from 'react-loader-spinner';

const GetUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    const AllUsers = useSelector(state => state.users);
    const loading = useSelector(state => state.users.loading);

    return (
        <Styled>
            {loading ? <Loader className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}

            /> : ''}
            <Container>
                <Row>
                    <Col>
                        <pre>{JSON.stringify(AllUsers, null, 2)}</pre>
                    </Col>
                </Row>
            </Container>

        </Styled>
    )
};

export default GetUsers;

const Styled = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`