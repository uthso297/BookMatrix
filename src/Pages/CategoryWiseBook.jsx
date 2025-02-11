import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import Spinner from "../Components/Spinner";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../Components/PageTitle";

const CategoryWiseBook = () => {
    const { cat } = useContext(AuthContext)
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    // console.log(location)
    const queryParam = new URLSearchParams(location.search)
    // console.log(queryParam)
    const urlCategory = queryParam.get('category');
    const category = urlCategory || cat
    useEffect(() => {
        setTimeout(() => {
            fetch('https://library-management-system-server-delta.vercel.app/allBooks')
                // fetch('https://library-management-system-server-delta.vercel.app/allBooks')
                .then(res => res.json())
                .then(datas => {
                    const res = datas.filter((data) => data.category === category)
                    setBooks(res)
                    setLoading(false)
                })
        }, 2000)

    }, [category])

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-4 pt-28">
            <PageTitle title="Book Matrix || Category"></PageTitle>

            {books.map((book, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <img className="w-full h-48" src={book.image} alt={book.title} />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <p className="text-sm text-gray-500 italic">{book.category}</p>
                        <p className="text-sm text-gray-600">Quantity: {book.quantity}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-400">{'★'.repeat(book.rating)}</span>
                            <span className="ml-1 text-gray-500">({book.rating}/5)</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{book.short_description}</p>
                        <Link to={`/allBooks/${book._id}`}>
                            <button
                                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryWiseBook;