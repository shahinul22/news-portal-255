import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-600 mt-2">{error.statusText || error.message}</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Home</a>
        </div>
    );
};

export default ErrorPage;
