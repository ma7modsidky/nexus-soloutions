export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    "outline-white": 'border border-white text-white hover:bg-white/10',
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}