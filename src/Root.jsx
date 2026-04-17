import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useLoaderData } from 'react-router'
import Footer from './components/Footer/Footer'
import FriendsContext from './contexts/FriendsContext'
import { ToastContainer } from 'react-toastify'

const friendsDataFetch = async () => {
    const res = await fetch("/friendsData.json");
    const data = await res.json();
    return data;
}

const Root = () => {
    const friendsData = useLoaderData();

    const friendsPromise = friendsDataFetch();

    const [timeline, setTimeline] = useState([]);

    return (
        <>
            <Navbar />

            <FriendsContext.Provider value={{ friendsData, friendsPromise, timeline, setTimeline }}>
                <Outlet />
            </FriendsContext.Provider>

            <Footer />

            <ToastContainer />
        </>
    )
}

export default Root