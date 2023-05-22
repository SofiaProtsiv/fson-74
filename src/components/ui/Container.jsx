export default function Container({ children }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-3 sm:py-4 lg:max-w-7xl lg:px-4">
        {children}
      </div>
    </div>
  );
}
