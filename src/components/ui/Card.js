export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </div>
  );
}