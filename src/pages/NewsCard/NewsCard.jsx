import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, author, rating, total_view, image_url, details } = news;

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <img src={image_url} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <div className="flex items-center mt-2 text-sm text-gray-600">
                <img src={author.img} alt={author.name} className="w-8 h-8 rounded-full mr-2" />
                <span>{author.name} • {new Date(author.published_date).toLocaleDateString()}</span>
            </div>
            <p className="mt-2 text-gray-700">
                {details.slice(0, 100)}...
            </p>
            <div className="mt-2">
                <Link to={`/news/${_id}`} className="text-blue-600 hover:underline">
                    See Details
                </Link>
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>⭐ {rating.number} ({rating.badge})</span>
                <span>👁️ {total_view} views</span>
            </div>
        </div>
    );
};

export default NewsCard;
