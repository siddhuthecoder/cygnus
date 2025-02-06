import React from 'react';
import { Link } from 'react-router-dom';
import routesconfig from '../../configs/routesconfig';
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
            <Link to={routesconfig.home} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Go back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;