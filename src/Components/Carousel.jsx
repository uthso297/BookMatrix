import { useState, useEffect } from "react";

const slides = [
    {
        title: "Welcome to Our Library",
        description:
            "Explore a world of knowledge with our extensive collection of books, journals, and online resources.",
        img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Browse and Borrow Books",
        description:
            "Easily search for books across different genres, reserve them, and borrow them all from our digital platform.",
        img: "https://media.istockphoto.com/id/1448121931/photo/young-woman-borrowing-a-book-from-the-library.jpg?s=2048x2048&w=is&k=20&c=poGceENqL3MP8iobJa_9maxc0ZOlbFYMIy4FmGxlMqo=",
    },
    {
        title: "Access Online Resources",
        description:
            "Get access to e-books, journals, and research papers from renowned libraries and educational institutions.",
        img: "https://media.istockphoto.com/id/940972538/photo/online-library-or-e-learning-concept-open-laptop-and-book-compilation.jpg?s=2048x2048&w=is&k=20&c=INb0ofVjk7sRNIuVsVBxN9Y0DL2FOIzuUa6pjp29Jqk=",
    },
    {
        title: "Join Our Community",
        description:
            "Become a member today to access a wealth of learning and growth opportunities with our library services.",
        img: "https://img.freepik.com/free-photo/diverse-education-shoot_53876-47031.jpg?t=st=1739220704~exp=1739224304~hmac=d7f5ebafe14803749ecac19d46e9b180631db9660679828a8e37d962de3fb883&w=1380",
    },
];


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <div className="bg-gray-100 p-6">
                                <img src={slide.img} alt={slide.title} className="w-full h-[60vh] rounded-lg" />
                                <h2 className="text-2xl font-semibold mt-4 text-black">{slide.title}</h2>
                                <p className="text-black my-2">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                &#60;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                &#62;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;