import { Link } from "react-router-dom";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 w-full z-50 bg-gray-200 border-t">
            <div className="flex justify-between items-center h-14 px-10">
                <Link to="/study-spots">
                    <button> <img src="/cat.webp" className="w-6 h-6 cursor-pointer"/> </button>
                </Link>
                <Link to="/study-groups">
                    <button> <img src="/cat.webp" className="w-6 h-6 cursor-pointer"/> </button>
                </Link>
                <Link to="/insights">
                    <button> <img src="/cat.webp" className="w-6 h-6 cursor-pointer"/> </button>
                </Link>
            </div>
        </nav>
    )
}