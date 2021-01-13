import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getAllUsersActivities, getUserActivities } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

import GraphAllActivities from './components/GraphAllActivities';
import GraphOwnTrening from './components/GraphOwnTrening';
import ListOwnActivities from './components/ListOwnActivities';

const Statistikk = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersActivities());
        dispatch(getUserActivities());
    }, [])
    const userActivities = useSelector(state => state.auth.useractivities);
    const AllUsersActivities = useSelector(state => state.activities);
    const loading = useSelector(state => state.activities.loading);
    let countPoints = 0;
    userActivities && userActivities.map((activity) => countPoints = countPoints + activity.duration);
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
                        <Col>
                            <h1>Statistikk</h1>
                        </Col>
                    </Row>
                    <GraphAllActivities activities={AllUsersActivities && AllUsersActivities.all} />
                    <Row className="dine-poeng">
                        <Col>
                            <span className="c-green">Dine poeng: </span>
                            <span className="c-red">{countPoints} poeng</span>
                        </Col>
                    </Row>
                    <Row className="dine-trening">
                        <Col>
                            <h3 className="c-green">Dine treningsøkter</h3>
                            <GraphOwnTrening activities={userActivities && userActivities} />
                        </Col>
                    </Row>
                    <ListOwnActivities activities={userActivities && userActivities} />
                    <Row>
                        <Col>
                            <Link to={"/aktivitet"}>
                                <Button>
                                    Registrer ny treningsøkt
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Styled>
        </Layout>
    )
}

export default Statistikk;

const Styled = styled.div`
    span {
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
    }
    .dine-poeng {
        margin-top: 115px;
        margin-bottom: 25px;
    }
    .dine-trening {
        h3 {
            margin-bottom: 50px;
        }
    }
    .training-per-month {
        margin-top: 50px;
        span {
            font-weight: 400;
        }
    }
    .month-title {
        background: ${({ theme }) => theme.greyBackground};
        width: 100%;
        padding: 15px;
        margin-bottom: 25px;
        font-weight: 700!important;
    }
    .trening-data {
        margin-bottom: 15px;
    }
    @media only screen and (max-width: 767px) {
        h3 {
            font-size: 18px;
        }
    }
`