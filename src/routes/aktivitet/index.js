import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addActivity } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

const Aktivitet = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const user = useSelector(state => state.auth.user);
    const { team } = user

    return (
        <Layout>
            <Styled>
                <Container>
                    <Row>
                        <Col>
                            <h1>Register aktivitet</h1>

                            <Formik
                                initialValues={{
                                    type: 'Løpetur',
                                    date: startDate,
                                    duration: 3,
                                }}
                                onSubmit={(form) => {
                                    form.date = startDate.toString();
                                    form.team = parseInt(team);
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