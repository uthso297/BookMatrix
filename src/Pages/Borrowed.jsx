import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import PageTitle from "../Components/PageTitle";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "../Components/Spinner";

const Borrowed = () => {
    const [books, setBooks] = useState([])
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)

    const userEmail = user?.email

    // console.log(userEmail)

    useEffect(() => {
        // fetch(`https://library-management-system-server-delta.vercel.app/borrow?email=${userEmail}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBooks(data)
        //     })
        axios.get(`https://library-management-system-server-delta.vercel.app/borrow?email=${userEmail}`, {
            withCredentials: true
        })
            .then(res => {
                setBooks(res.data)
                setLoading(false)
            })
    }, [userEmail])

    // console.log(books)

    const handleReturnClick = (book) => {
        // console.log('clicked');
        fetch(`https://library-management-system-server-delta.vercel.app/borrowed/${book.title}/return`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch(`https://library-management-system-server-delta.vercel.app/borrow/${book._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount >= 1) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Returned book successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        const remainingBooks = books.filter(boi => boi._id !== book._id);
                        setBooks(remainingBooks);
                    })
            })

    }

    if (loading) {
        return <Spinner></Spinner>
    }

    if (books.length === 0) {
        return <div className="h-[80vh] pt-28 px-4">

            <p className="text-center text-5xl font-bold">Oops!You haven't borrowed any book yet</p>

        </div>
    }

    return (
        <div className="pt-20">
            <h1 className="text-center text-4xl">Your Borrowed Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-4 ">
                <PageTitle title="Book Matrix || Borrowed Book"></PageTitle>

                {books.map((book, index) => (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300">
                        <img className="w-full h-48" src={book.image} alt={book.title} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                            <p className="text-sm text-gray-500 italic">{book.category}</p>
                            <p className="text-sm text-gray-600">Borrowed Date: {book.currentDate}</p>
                            <p className="text-sm text-gray-600">Return Date: {book.bookReturnDate}</p>
                            <button
                                onClick={() => handleReturnClick(book)}
                                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Return
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Borrowed;