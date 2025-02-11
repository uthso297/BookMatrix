import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="md:flex md:flex-row-reverse">
                <div>
                    <img className="h-full" src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
                </div>
                <div className="text-center p-8 bg-white shadow-lg max-w-lg w-full flex flex-col items-center justify-center">
                    <div className="text-6xl text-red-500 mb-4">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                        Somethings wrong here....
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Sorry, we can not find the page you are looking for.
                    </p>
                    <Link to={'/'}>
                        <button
                            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPages;