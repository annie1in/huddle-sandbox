const Card = ({ title, subtitle, details, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
    >
      <h3 className="font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      {details && <p className="text-sm text-gray-600 mt-2">{details}</p>}
    </div>
  );
};

export default Card;