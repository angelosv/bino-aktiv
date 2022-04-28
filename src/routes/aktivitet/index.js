import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import moment from 'moment';

import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import nb from 'date-fns/locale/nb';

import { addActivity, getUserData, getUserActivities } from '../../redux/actions';

import Layout from '../../layout';
import Button from '../../components/Button';
import 'react-toastify/dist/ReactToastify.css';

registerLocale('nb', nb);

const Aktivitet = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [race, setRace] = useState(false);
    const user = useSelector(state => state.auth.user);
    const userActivities = useSelector(state => state.auth.useractivities);
    const loading = useSelector(state => state.activities.loading);
    let { team } = user;
    team = parseInt(team);

    const currentMonth = (new Date()).getMonth();
    const selectedMonth = startDate.getMonth();


    useEffect(() => {
        dispatch(getUserData());
        //if (!userActivities) {
            dispatch(getUserActivities());
        //}
    }, [dispatch/*, userActivities*/]);

    if (user?.isDeleted) {
        return <h1>Your user has been deleted</h1>
    }

    const hasRace = userActivities && [...userActivities].some((item) => item.duration === 10 && (new Date(item.date)).getYear() === 2022);

    return (

        <Layout>

            {loading || !userActivities ? (

                <Loader className="loader"
                    type="Rings"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />

            ) : (

                <Styled>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Registrer aktivitet</h1>

                                <Formik
                                    initialValues={{
                                        type: 'Løpetur',
                                        date: startDate,
                                        duration: 3,
                                    }}
                                    onSubmit={(form) => {
                                        const isRace = form.type === 'Hjerteløpet5K (27 Okt)';
                                        const durationNumber = parseInt(form.duration);
                                        form.team = team;
                                        form.date =  isRace ? new Date(2022, 9, 27, 10, 0, 0, 0).toString() : startDate.toString();
                                        form.team = parseInt(team);
                                        form.duration = isRace ? 10 : durationNumber;
                                        if (isRace) {
                                            setRace(true);
                                        }
                                        if (currentMonth === selectedMonth) {
                                            dispatch(addActivity(form));
                                        } else {
                                            alert('Du kan ikke legge til en aktivitet for en avsluttet måned.');
                                        }

                                    }}
                                >
                                    {({ values }) => (
                                        <Form>
                                            <label>Aktivitet</label>
                                            {(hasRace || race) ? (
                                                <Field
                                                    as="select"
                                                    name="type"
                                                >
                                                    {DataArtivitet.map((data, index) =>
                                                        <option key={index} value={data}>{data}</option>
                                                    )}
                                                </Field>
                                            ) : (
                                                <>
                                                    <Field
                                                        as="select"
                                                        name="type"
                                                    >
                                                        {DataArtivitetRace.map((data, index) =>
                                                            <option key={index} value={data}>{data}</option>
                                                        )}
                                                    </Field>
                                                    {/*<h3 className="c-red husk-5k">
                                                        Husk Hjerteløpet5K 27.okt!
                                                    </h3>*/}
                                                </>
                                            )}
                                            <label>Dato</label>
                                            {values.type === "Hjerteløpet5K (28 Okt)" ? (
                                                <DatePicker
                                                    selected={new Date('2021-10-28')}
                                                    disabled
                                                    dateFormat="d, MMMM"
                                                    locale="nb"
                                                />
                                            ) : (
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={date => {
                                                        setStartDate(date);
                                                    }}
                                                    dateFormat="d, MMMM"
                                                    locale="nb"
                                                    filterDate = {(date) => {
                                                        return moment() < (moment(date).add(3, 'day'));
                                                    }}
                                                />
                                            )}
                                            <label>Varighet</label>
                                            {values.type === "Hjerteløpet5K (28 Okt)" ? (
                                                <Field
                                                    as="select"
                                                    name="duration"
                                                    disabled
                                                >
                                                    <option key="1" value={10}>5K</option>
                                                </Field>
                                            ) : (
                                                <Field
                                                    as="select"
                                                    name="duration"
                                                >
                                                    {DataVerighet.map((data, index) =>
                                                        <option key={index} value={data.poeng}>{data.label}</option>
                                                    )}
                                                </Field>
                                            )}
                                            <div style={{ marginTop: 35 }}>
                                                <Button type="submit">Registrer</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </Container>
                </Styled>
            )}
        </Layout>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

export default connect()(Aktivitet);

const Styled = styled.div`
    .react-datepicker-wrapper {
        width: 300px;
        input:disabled {
            opacity: 0.7;
        }
    }
    .husk-5k {
        margin-top: 15px;
    }
    @media only screen and (max-width: 575px) {
        .react-datepicker-wrapper {
            width: 100%;
        }
    }
`;

const DataArtivitetRace = [
    // 'Hjerteløpet5K (27 Okt)',
    'Løpetur',
    'Gåtur',
    'Styrkeøkt',
    'Dans',
    'Yoga',
    'Pilates',
    'Kettlebels',
    'Svømming',
    'Riding',
    'Høypuls',
    'Hagearbeid',
    'Ski',
    'Sykkel',
    'Tennis',
    'Annet',
];

const DataArtivitet = [
    'Løpetur',
    'Gåtur',
    'Styrkeøkt',
    'Dans',
    'Yoga',
    'Pilates',
    'Kettlebels',
    'Svømming',
    'Riding',
    'Høypuls',
    'Hagearbeid',
    'Ski',
    'Sykkel',
    'Tennis',
    'Annet',
];

const DataVerighet = [
    {
        label: '15 min',
        poeng: 1
    },
    {
        label: '30 min',
        poeng: 2
    },
    {
        label: '45 min',
        poeng: 3
    },
    {
        label: '60 min',
        poeng: 4
    },
    {
        label: '1t 15 min',
        poeng: 5
    },
    {
        label: '1t 30 min',
        poeng: 6
    },
    {
        label: '1t 45 min',
        poeng: 7
    },
    {
        label: '2t',
        poeng: 8
    }
];