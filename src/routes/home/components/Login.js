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
    const onSubmit = data => dispatch(loginUser(data, null, 2));

    return (
        <Styled>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="E-post"
                    ref={register({ required: true })}
                    className={errors.email && 'input-error-field'}
                />
                {errors.email && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                <span>Oppgi en gyldig e-postadresse</span>
                <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Passord"
                    ref={register({ required: true, minLength: 8 })}
                    className={errors.password && 'input-error-field'}
                />
                {errors.password && <span className="input-error-text">Vennligst sjekk dette feltet</span>}
                <span>Passordet må inneholde minst 8 tegn</span>
                <Button type="submit">Logg inn</Button>
            </form>
            <button
                className="forgot-password"
            >
                <Link to={'/recovery'}>Glemt passordet ditt?</Link>
            </button>
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
        a {
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
    }
`




