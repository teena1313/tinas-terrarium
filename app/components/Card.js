export default function Card({ children, className }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-xl md:h-120 lg:h-80 px-6 py-12 md:py-6 mx-6 md:mx-0 ${className} text-center md:text-left`}
    >
      {children}
    </div>
  );
}