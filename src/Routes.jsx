import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Timeline from "./pages/Timeline/Timeline";
import KeenDetails from "./pages/KeenDetails/KeenDetails";
import Analytics from "./pages/Analytics/Analytics";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: () => fetch("/friendsData.json"),
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
            },
            {
                path: '/timeline',
                element: <Timeline />
            },
            {
                path: '/analytics',
                element: <Analytics />
            },
            {
                path: 'keen-details/:id',
                element: <KeenDetails />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
])

export default router;
