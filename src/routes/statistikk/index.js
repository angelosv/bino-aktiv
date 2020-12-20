import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { getAllUsersActivities, getUserActivities } from '../../redux/actions';
import Layout from '../../layout';

const Statistikk = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersActivities());
        dispatch(getUserActivities());
    }, [])
    const userActivities = useSelector(state => state.auth.activities);
    console.log(userActivities)
    const AllUsersActivities = useSelector(state => state.activities);
    console.log(AllUsersActivities)
    const loading = useSelector(state => state.activities.loading);
    //aqui te dejo la info de tanto del usuario logeado, como de todos los usuarios.
    return (
        <Layout>
            {loading ? <Loader className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}

            /> : ''}
            <h1>Statistikk</h1>

        </Layout>
    )
}

export default Statistikk;