import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Star from "../../assets/img/Ikon_stjerne.svg";

import { getAllUsersActivities, getUserActivities } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

import GraphAllActivities from './components/GraphAllActivities';
import GraphOwnTrening from './components/GraphOwnTrening';
import ListOwnActivities from './components/ListOwnActivities';

const Statistikk = () => {
    const dispatch = useDispatch();

    const currentMonth = (new Date()).getMonth();
    // const currentMonth = (new Date("02-15-2021")).getMonth();
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    useEffect(() => {
        dispatch(getAllUsersActivities());
        dispatch(getUserActivities());
    }, [dispatch])
    const userActivities = useSelector(state => state.auth.useractivities);
    const AllUsersActivities = useSelector(state => state.activities);
    const loading = useSelector(state => state.activities.loading);
    let countPoints = 0;
    userActivities && userActivities.map((activity) => countPoints = countPoints + activity.duration);
    const handlePrevious = () => {
        setSelectedMonth(selectedMonth-1);
    }
    const handleNext = () => {
        setSelectedMonth(selectedMonth+1);
    }
    const isCurrentSelected = currentMonth === selectedMonth;
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
                    <GraphAllActivities
                        activities={AllUsersActivities && AllUsersActivities.all}
                        currentMonth={currentMonth}
                        selectedMonth={selectedMonth}
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                    />
                    <Row className="dine-poeng">
                        <Col>
                            <span className="c-green">Dine poeng: </span>
                            <span className="c-red">{countPoints} poeng</span>
                            {!isCurrentSelected && (
                                <img src={Star} alt="star" className="poeng-stars" />
                            )}
                        </Col>
                    </Row>
                    <Row className="dine-trening">
                        <Col>
                            <h3 className="c-green">Dine aktiviteter</h3>
                            <GraphOwnTrening activities={userActivities && userActivities} />
                        </Col>
                    </Row>
                    <ListOwnActivities
                        activities={userActivities && userActivities}
                        selectedMonth={selectedMonth}
                        currentMonth={currentMonth}
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                    />
                    <Row>
                        <Col>
                            <Link to={"/aktivitet"}>
                                <Button>
                                    Registrer ny aktivitet
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
    .poeng-stars {
        width: 40px;
    }
    @media only screen and (max-width: 767px) {
        h3 {
            font-size: 18px;
        }
    }
`