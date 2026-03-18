export default function Tag({ children, variant = 'blue', className = "" }) {
  const variants = {
    blue: "bg-blue-500 text-white",
    yellow: "bg-yellow-500 text-white",
  };

  const selectedVariant = variants[variant] || variants.blue;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
}