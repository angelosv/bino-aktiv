import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { changePassword, updateUser } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

const Profile = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        dispatch(updateUser(data));
        reset();
    };
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading);

    const { name, surname, team, email, gender } = user
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
                            <h1>Add User</h1>
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
                                <label>Gender</label>
                                <select name="gender" ref={register({ required: true })}>

                                    {genderOptions.map(option => {
                                        return <option value={option} selected={gender === option ? 'selected' : ''}>{option}</option>

                                    })}
                                </select>
                                <label>Team</label>
                                <select name="team" ref={register({ required: true })}>
                                    {teamOptions.map(option => {
                                        return <option value={option} selected={team === option ? 'selected' : ''}>{option}</option>

                                    })}

                                </select>

                                <Button type="submit">Update User</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Button action={() => dispatch(changePassword())}>Reset Password</Button>
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
`