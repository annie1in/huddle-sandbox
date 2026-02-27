export default function Button( {children, onClick, className = ""} ) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer"
        >
            {children}
        </button>
    )
} 