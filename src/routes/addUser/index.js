import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerUser } from '../../redux/actions';
import Layout from '../../layout';
import Button from '../../components/Button';

const AddUser = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();
    const notify = () => toast.success("Ok!", {
        autoClose: 1000,
        position: "top-center",
    });
    const onSubmit = data => {
        dispatch(registerUser(data));
        notify();
        reset();
    };

    return (
        <Layout>
            <Styled>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add User</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                    className={errors.email && 'input-error-field'}
                                />
                                {errors.email && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <label>Passord</label>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    ref={register({ required: true, minLength: 8 })}
                                    className={errors.password && 'input-error-field'}
                                />
                                {errors.password && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <span style={{ paddingBottom: 25 }}>Passordet må inneholde minst 8 tegn</span>
                                <label>Fornavn</label>
                                <input
                                    name="name"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                    className={errors.name && 'input-error-field'}
                                />
                                {errors.name && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <label>Etternavn</label>
                                <input
                                    name="surname"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                    className={errors.surname && 'input-error-field'}
                                />
                                {errors.surname && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                                <label>Kjønn</label>
                                <select name="gender" ref={register({ required: true })}>
                                    <option value="Kvinne">Kvinne</option>
                                    <option value="Mann">Mann</option>
                                </select>
                                <label>Team</label>
                                <select name="team" ref={register({ required: true })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Button type="submit">Add User</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Styled>
        </Layout>
    )
}

export default compose(withRouter)(AddUser);

const Styled = styled.div`
    input, select {
        color: #666666;
        background: #EFEFEF;
        border: none;
        font-weight: 700;
        margin-top: 5x;
        margin-bottom: 5px;
        &:focus {
            border: none;
        }
    }
    button {
        margin-top: 50px;
    }
`