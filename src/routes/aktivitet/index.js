import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import nb from 'date-fns/locale/nb';

import { addActivity, getUserData } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

registerLocale('nb', nb);

const Aktivitet = () => {
    useEffect(() => {
        dispatch(getUserData())
    }, [])
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.activities.loading);
    let { team } = user;
    team = parseInt(team)


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
                            <h1>Registrer aktivitet</h1>

                            <Formik
                                initialValues={{
                                    type: 'Løpetur',
                                    date: startDate,
                                    duration: 3,
                                }}
                                onSubmit={(form) => {
                                    console.log(team, 'esto es team')
                                    const durationNumber = parseInt(form.duration);
                                    form.team = team;
                                    form.date = startDate.toString();
                                    form.team = parseInt(team);
                                    form.duration = durationNumber;
                                    dispatch(addActivity(form));
                                }}
                            >
                                <Form>
                                    <label>Aktivitet</label>
                                    <Field
                                        as="select"
                                        name="type"
                                    >
                                        {DataArtivitet.map((data, index) =>
                                            <option key={index} value={data}>{data}</option>
                                        )}
                                    </Field>
                                    <label>Dato</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => {
                                            setStartDate(date);
                                        }}
                                        dateFormat="d, MMMM"
                                        locale="nb"
                                    />
                                    <label>Varighet</label>
                                    <Field
                                        as="select"
                                        name="duration"
                                    >
                                        {DataVerighet.map((data, index) =>
                                            <option key={index} value={data.poeng}>{data.label}</option>
                                        )}
                                    </Field>
                                    <Button type="submit">Registrer</Button>
                                </Form>
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </Styled>
        </Layout>
    )
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

export default connect()(Aktivitet);

const Styled = styled.div`
    button {
        margin-top: 35px;
    }
    .react-datepicker-wrapper {
        width: 300px;
    }
    @media only screen and (max-width: 575px) {
        .react-datepicker-wrapper {
            width: 100%;
        }
    }
`;

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
    'Husarbeid',
    'Hagearbeid',
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
];