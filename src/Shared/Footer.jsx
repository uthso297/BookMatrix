import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#18150e] text-white py-6 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Left side: Quick Links */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                        </ul>
                    </div>

                    {/* Center: Social Media Links */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-center">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.facebook.com/profile.php?id=61554984268601" className="hover:text-yellow-500"><FaFacebook size={24} /></a>
                            <a href="https://www.linkedin.com/in/md-sihab-mahmud-uthso-147651317/" className="hover:text-yellow-500"><FaLinkedin size={24} /></a>
                        </div>
                    </div>

                    {/* Right side: Contact Info */}
                    <div className="w-full sm:w-1/3 text-right">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="mb-2">Email: support@bookstore.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-[#18150e] py-4 mt-6 text-center">
                <p className="text-sm">© 2025 BookStore, All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
