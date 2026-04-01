import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-200 border-b">
            <div className="flex justify-between items-center h-14">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <Link to="/">
                        <button> <img src="/cat.webp" className="w-6 h-6 ml-4 cursor-pointer"/> </button>
                    </Link>
                    <Link to="/">
                        <buttton> <span className="text-lg font-bold text-red-500">huddle but uglier and with dogs 🐶🐶</span> </buttton>
                    </Link>
                </div>
            </div>
        </nav>
    )
}