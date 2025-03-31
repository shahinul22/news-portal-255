import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registation from "../pages/Registation/Registation";

// Updated loader to handle errors properly
// const loader = async () => {
//     try {
//         const response = await fetch('/news.json');
//         if (!response.ok) {
//             throw new Error("Failed to fetch news data");
//         }

//         const data = await response.json();

//         if (!data || data.length === 0) {
//             throw new Error("No news data available");
//         }

//         return data;
//     } catch (error) {
//         console.error("Error loading news:", error);
//         return []; // Return an empty array to avoid breaking the UI
//     }
// };



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json') , // Using the updated loader with error handling
                key: 'home', // Ensure the loader is triggered when navigating to this page
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ()=> fetch('/news.json') ,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/registation',
                element: <Registation></Registation>
            }
        ]
    }
]);

export default router;
