import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { getAllUsersActivities, getUserActivities } from '../../redux/actions';
import Layout from '../../layout';

const Statistikk = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.activities.loading);

    return (
        <Layout>
            {loading ? <Loader className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}

            /> : ''}
            <h1>Statistikk</h1>
            <button onClick={() => dispatch(getUserActivities())} > Get User Activities</button>
            <button onClick={() => dispatch(getAllUsersActivities())} > Get All Activities</button>

        </Layout>
    )
}

export default Statistikk;