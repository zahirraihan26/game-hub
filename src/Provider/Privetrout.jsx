import React, { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const Privetrout = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log (user)

    const loacation=useLocation()
    // console.log(loacation)

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {

        return children;
    }
    return <Navigate state={loacation.pathname} to="/auth/login"></Navigate>


}

export default Privetrout; 