import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { loginUser, changePassword } from '../../../redux/actions';
import Button from '../../../components/Button';

const Login = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => dispatch(changePassword(data));

    return (
        <Styled>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    ref={register({ required: true })}
                    className={errors.email && 'input-error-field'}
                />
                {errors.email && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                <span>Oppgi en gyldig e-mail-adresse</span>

                <Button type="submit">Tilbakestill</Button>
            </form>

            <Link to={'/'} className="forgot-password">Tilbake til logg in</Link>
        </Styled>
    );
}

export default Login;

const Styled = styled.div`
    input {
        color: #666666;
        background: #EFEFEF;
        border: none;
        padding-top: 15px;
        padding-bottom: 15px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 5px;
        &:focus {
            border: none;
        }
    }
    .forgot-password {
        border: none;
        background: transparent;
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.primaryColor};
        display: block;
        border: none;
        background: transparent;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.secondaryColor};
        }
    }
`




