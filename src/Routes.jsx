import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Timeline from "./pages/Timeline/Timeline";

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
            // {
            //     path: '/analytics',
            //     element: <Analytics />
            // },
            // {
            //     path: 'keen-details/:id',
            //     element: <KeenDetails />
            // }
        ]
    }
])

export default router;
