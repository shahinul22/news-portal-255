import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import NewsCard from '../NewsCard/NewsCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();
    const navigate = useNavigate(); // Initialize navigate

    // If there's no news data, show a message and a "Reload" button
    if (news.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <Header />
                <BreakingNews />
                {/* <Navbar /> */}

                <div className="text-center mt-6">
                    {/* No news message */}
                    {/* <p className="text-red-500 text-lg font-semibold">No news available at the moment. Please try again later.</p> */}

                    {/* Reload button */}
                    <div className="mt-6">
                        <button
                            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition duration-300"
                            onClick={() => navigate(0)} // This will reload the page and refetch the data
                        >
                            Click here to get the news
                        </button>
                    </div>
                </div>
                <div className="border  p-4 hidden md:block">
                    <RightSideNav />
                </div>
            </div>

        );
    }

    return (
        <div className="container mx-auto p-4">
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div className="border p-4 hidden md:block">
                    <LeftSideNav />
                </div>
                {/* News container */}
                <div className="md:col-span-2 border p-2 space-y-2">
                    {news.map((aNews) => (
                        <NewsCard key={aNews._id} news={aNews} />
                    ))}
                </div>
                <div className="border p-4 hidden md:block">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;
