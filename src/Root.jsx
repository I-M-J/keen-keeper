import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useLoaderData } from 'react-router'
import Footer from './components/Footer/Footer'
import FriendsContext from './contexts/FriendsContext'

const friendsPromise = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

const Root = () => {
    const friendsData = useLoaderData();

    return (
        <>
            <Navbar />

            <FriendsContext.Provider value={{ friendsData, friendsPromise }}>
                <Outlet />
            </FriendsContext.Provider>

            <Footer />
        </>
    )
}

export default Root