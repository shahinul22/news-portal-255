import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './../Shared/Navbar/Navbar';
import Header from './../Shared/Header/Header';
import BreakingNews from './../Home/BreakingNews';
import RightSideNav from './../Shared/RightSideNav/RightSideNav';

const NewsDetails = () => {
    const news = useLoaderData();
    const navigate = useNavigate(); // Hook to navigate programmatically

    if (!news) {
        return <p className="text-center text-red-500">News not found!</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <Header />
            <BreakingNews />
            <Navbar />

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                {/* News Content - Takes 3 columns on large screens */}
                <div className="lg:col-span-3">
                    <img src={news.image_url} alt={news.title} className="w-full rounded-lg mb-4" />

                    {/* Title */}
                    <h2 className="text-2xl font-bold mt-4">{news.title}</h2>

                    {/* Author Info */}
                    {/* Author Info */}
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                        {news?.author?.img ? (
                            <img
                                src={news.author.img}
                                alt={news?.author?.name || "Unknown Author"}
                                className="w-10 h-10 rounded-full mr-2"
                            />
                        ) : (
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                                <span className="text-gray-500 text-xs">No Image</span>
                            </div>
                        )}
                        <span>{news?.author?.name || "Unknown Author"} • {news?.author?.published_date ? new Date(news.author.published_date).toLocaleDateString() : "No Date"}</span>
                    </div>


                    {/* News Details */}
                    <p className="mt-4 text-gray-700">{news.details}</p>

                    {/* Trending & Pick Status */}
                    <div className="mt-4">
                        {news.others_info.is_trending && <span className="bg-red-500 text-white px-2 py-1 text-xs rounded mr-2">🔥 Trending</span>}
                        {news.others_info.is_todays_pick && <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">🌟 Today's Pick</span>}
                    </div>

                    {/* Rating & Views */}
                    <div className="mt-4 text-sm text-gray-600">
                        <span>⭐ {news.rating.number} ({news.rating.badge})</span> •
                        <span> 👁️ {news.total_view} views</span>
                    </div>

                    {/* Back to Home Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>

                {/* RightSideNav - Shows on large screens at the right */}
                <div className="hidden lg:block">
                    <RightSideNav />
                </div>
            </div>

            {/* RightSideNav - Moves below the content on smaller screens */}
            <div className="lg:hidden mt-6">
                <RightSideNav />
            </div>
        </div>
    );
};

export default NewsDetails;
