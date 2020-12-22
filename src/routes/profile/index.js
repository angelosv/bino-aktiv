import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { changePassword, updateUser, getUserData } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

const Profile = (loggedUser) => {
    const loading = useSelector(state => state.auth.user.loading);

    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        dispatch(updateUser(data));
        dispatch(getUserData())
    };
    useEffect(() => {
        dispatch(getUserData())
    }, [])

    const user = useSelector(state => state.auth.user);
    const email = localStorage.getItem('email');
    console.log('EMAIL->___>', email)
    const { name, surname, team, gender } = user
    const teamOptions = [
        1, 2, 3, 4
    ]
    const genderOptions = [
        'Kvinne', 'Mann'
    ]
    return (
        <Layout>
            {loading ? <Loader className="loader"
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}

            /> : ''}
            <Styled>
                <Container>
                    <Row>
                        <Col>
                            <h1>Profil</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                                <label>Fornavn</label>
                                <input
                                    name="name"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                    className={errors.name && 'input-error-field'}
                                    defaultValue={name}

                                />
                                {errors.name && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <label>Etternavn</label>
                                <input
                                    name="surname"
                                    defaultValue={surname}

                                    autoComplete="off"
                                    ref={register({ required: true })}
                                    className={errors.surname && 'input-error-field'}
                                />
                                {errors.surname && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <div className="no-display">
                                    <label>Kjønn</label>
                                    <select name="gender" ref={register({ required: true })}>

                                        {genderOptions.map(option => {
                                            return <option value={option} selected={gender === option ? 'selected' : ''}>{option}</option>

                                        })}
                                    </select>
                                </div>
                                <div className="no-display">
                                    <label>Team</label>
                                    <select name="team" ref={register({ required: true })}>
                                        {teamOptions.map(option => {
                                            return <option value={option} selected={parseInt(team) === option ? 'selected' : ''}>{option}</option>

                                        })}

                                    </select>
                                </div>
                                <Button type="submit">Lagre</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Button action={() => dispatch(changePassword({ email }))}>Tilbakestill passord</Button>
                            <span className="reset-message">Hvis du tilbakestiller passordet, kreves pålogging på nytt</span>
                        </Col>
                    </Row>
                </Container>
            </Styled>
        </Layout>
    )
}

export default compose(withRouter)(Profile);


const Styled = styled.div`
    h1 {
        padding-bottom: 20px;
    }
    span {
        display: block;
        color: ${({ theme }) => theme.textColor};
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 30px;
    }
    .span-pass {
        color: #CDCDCD;
    }
    button {
        margin-top: 35px;
    }
    .reset-message {
        font-weight: 400;
        padding-top: 15px;
    }
`