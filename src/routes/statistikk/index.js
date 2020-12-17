import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAllUsersActivities, getUserActivities } from '../../redux/actions';
import Layout from '../../layout';

const Statistikk = () => {
    const dispatch = useDispatch();

    return (
        <Layout>
            <h1>Statistikk</h1>
            <button onClick={() => dispatch(getUserActivities())} > Get User Activities</button>
            <button onClick={() => dispatch(getAllUsersActivities())} > Get All Activities</button>

        </Layout>
    )
}

export default Statistikk;